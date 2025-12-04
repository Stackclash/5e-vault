# CardCategory

```jsx
const dv = app.plugins.getPlugin("dataview").api

// ---------- TABLE PARSER ----------
function parseObsidianTables(file, md) {
  const result = {}
  const tableRegex = /(\|.*\r?\n\|[-:\s|]+\r?\n(?:\|.*\r?\n)*)\^([A-Za-z0-9-]+)/g

  let match
  while ((match = tableRegex.exec(md)) !== null) {
    const table = match[1].trim()
    const blockID = match[2].trim()
    if (md.includes('# Anchors')) console.log(table, blockID)

    const lines = table.split("\n").map(l => l.trim())
    const headers = lines[0].split("|").map(c => c.trim()).filter(Boolean)

    const rows = lines.slice(2).map(line => {
      const cells = line.split("|").map(c => c.trim()).filter(Boolean)
      const o = {}
      headers.forEach((h, i) => (o[h] = cells[i] ?? ""))
      return o
    })

    result[blockID] = rows
  }

  return result
}

// ---------- COMPONENT ----------
function CardCategory({ file, type, category, label, message, disabled, onSelect }) {
  const [text, setText] = dc.useState(null)
  const [tables, setTables] = dc.useState({})
  const [fullValues, setFullValues] = dc.useState([])
  const [activeDecks, setActiveDecks] = dc.useState([])
  const [searchTerm, setSearchTerm] = dc.useState("")
  const [dropdown, setDropdown] = dc.useState([])
  const [selected, setSelected] = dc.useState(null)

  // Load and parse file
  dc.useEffect(() => {
    dv.io.load(file).then(md => {
      const parsed = parseObsidianTables(file, md)
      setTables(parsed)
      setActiveDecks(Object.keys(parsed))
      setText(md)
    }).catch(e => console.log(e.message))
  }, [file])

  dc.useEffect(() => {
    buildFullValues()
  }, [activeDecks])

  dc.useEffect(() => {
    if (!searchTerm) return setDropdown([])
    const matches = fullValues.filter(r =>
      r.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDropdown(matches)
  }, [searchTerm, fullValues])

  function buildFullValues() {
    const result = activeDecks.flatMap(deck => {
      return tables[deck].map((row, cardIndex) => {
        return Object.values(row).map((card, sideIndex) => ({
          category,
          deck,
          sideIndex,
          cardIndex,
          type, 
          numOfSides: Object.keys(row).length,
          value: card
        }))
      })
    }).flat()

    setFullValues(result)
  }

  function handleDeckToggle(deck) {
    if (activeDecks.includes(deck)) {
      setActiveDecks(activeDecks.filter(d => d !== deck))
    } else {
      setActiveDecks([...activeDecks, deck])
    }
  }

  function selectCard(card) {
    setSelected(card)
    setDropdown([])
    setSearchTerm("")
  }

  function pickRandom() {
    if (!fullValues.length) return
    const choice = fullValues[Math.floor(Math.random() * fullValues.length)]
    selectCard(choice)
  }

  function turn() {
    if (!selected) return
    const newIndex = (selected.sideIndex + 1) % selected.numOfSides
    const newCardSide = fullValues.find(c => {
      return c.deck === selected.deck && c.cardIndex === selected.cardIndex && c.sideIndex === newIndex
    })
    setSelected(newCardSide)
  }

  if (!text) {
    return <div>Loading {label}…</div>
  } else {
    return (
      <div 
        style={{
          padding: "8px",
          border: "1px solid var(--background-modifier-border)",
          borderRadius: "6px",
          fontSize: "1em"
        }}
      >
        <div 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "8px"
          }}
        >

          {/* LEFT COLUMN */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ 
              fontWeight: 600,
              fontSize: "1em",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              {label}

              <button 
                onClick={pickRandom}
                disabled={!fullValues.length}
                style={{ 
                  fontSize: "0.75em", 
                  padding: "2px 4px"
                }}
              >
                🎲
              </button>
            </div>

            {/* Collapsible Options */}
            <details style={{ marginBottom: "4px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 500 }}>
                Options
              </summary>

              {/* Active decks */}
              <div style={{ marginTop: "4px" }}>
                {Object.keys(tables).map(deck => (
                  <label 
                    key={deck}
                    style={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <input
                      type="checkbox"
                      checked={activeDecks.includes(deck)}
                      onInput={() => handleDeckToggle(deck)}
                    />
                    <span>{deck}</span>
                  </label>
                ))}
              </div>

              {/* Search */}
              <div style={{ marginTop: "6px" }}>
                <input
                  type="text"
                  value={searchTerm}
                  placeholder="Search…"
                  style={{ 
                    width: "100%", 
                    fontSize: "0.85em", 
                    padding: "2px"
                  }}
                  onInput={e => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Dropdown */}
              {dropdown.length > 0 && (
                <div style={{
                  border: "1px solid var(--background-modifier-border)",
                  borderRadius: "4px",
                  marginTop: "4px",
                  maxHeight: "120px",
                  overflowY: "auto",
                  background: "var(--background-modifier-hover)"
                }}>
                  {dropdown.map((card, idx) => (
                    <div
                      key={idx}
                      style={{ padding: "4px", cursor: "pointer" }}
                      onClick={() => selectCard(card)}
                      onMouseDown={e => e.preventDefault()}
                    >
                      {card.value}
                      <em style={{ color: "var(--text-muted)", marginLeft: "4px" }}>
                        ({card.deck})
                      </em>
                    </div>
                  ))}
                </div>
              )}
            </details>
          </div>

          {/* RIGHT COLUMN — SELECTED CARD */}
          <div 
            style={{ 
              flex: "1 1 120px",        // default 120px, but can expand
              maxWidth: "50%",          // never exceed half the component
              minHeight: "80px",
              border: "1px solid var(--background-modifier-border)",
              borderRadius: "4px",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "var(--background-primary)",
              overflow: "hidden"
            }}
          >
            {!selected ? (
              <div 
                style={{
                  fontStyle: "italic",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  margin: "auto 0"
                }}
              >
                No card
              </div>
            ) : (
              <>
                <div 
                  style={{ 
                    flex: 1, 
                    overflow: "hidden",
                    whiteSpace: "normal",    // allow wrapping
                    wordBreak: "break-word"  // force break long words
                  }}
                >
                  <strong style={{ fontSize: "0.9em" }}>
                    {selected.value}
                  </strong>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.75em" }}>
                    {selected.deck}
                  </div>
                </div>

                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  marginTop: "6px" 
                }}>
                  {onSelect && (
                    <button 
                      onClick={() => onSelect(selected)}
                      disabled={disabled}
                      style={{ 
                        fontSize: "0.7em", 
                        padding: "2px 4px"
                      }}
                    >
                      Select
                    </button>
                  )}

                  <button 
                    onClick={turn}
                    style={{ 
                      fontSize: "0.7em",
                      padding: "2px 4px" 
                    }}
                  >
                    ↻
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {message && (
          <div style={{ color: message.severity === 'error' ? 'red' : 'yellow', marginTop: "6px", fontSize: "0.8em" }}>
            {message.text}
          </div>
        )}
      </div>
    )
  }
}

return { CardCategory }
```

# PromptBuilder
```jsx
const path = require('path')
const { CardCategory } = await dc.require(dc.headerLink("Story Engine/Story Engine Components.md", "CardCategory"))

function PromptBuilder() {
  const ROOT_DIR = 'Story Engine'
	const CARD_TYPES = [
    { type: 'agent', label: 'Agent', path: path.posix.join(ROOT_DIR, 'Story Engine/Agents.md'), deck: 'Story Engine' },
    { type: 'anchor', label: 'Anchor', path: path.posix.join(ROOT_DIR, 'Story Engine/Anchors.md'), deck: 'Story Engine' },
    { type: 'aspect', label: 'Aspect', path: path.posix.join(ROOT_DIR, 'Story Engine/Aspects.md'), deck: 'Story Engine' },
    { type: 'conflict', label: 'Conflict', path: path.posix.join(ROOT_DIR, 'Story Engine/Conflicts.md'), deck: 'Story Engine' },
    { type: 'engine', label: 'Engine', path: path.posix.join(ROOT_DIR, 'Story Engine/Engines.md'), deck: 'Story Engine' }
  ]
  const PROMPT_TYPES = [
    {
      label: 'Simple Story Seed',
      description: 'The classic 5-part Story Engine seed.',
      generator: () => {
        const {character, motivation, desire, conflict, aspect} = evaluation.slotsForGenerator
        return `
          A story about ${character.value}
          ${character.modifiers?.length ? ` (${character.modifiers.map(a => a.value).join(", ")})` : ''} 
          ${motivation.value} 
          ${desire.value}${desire.modifiers?.length ? ` (${desire.modifiers.map(a => a.value).join(", ")})` : ''}, 
          ${conflict.value}.
        `
      },
      slots: [
        {
          id: 'character',
          label: 'Character',
          allowedTypes: ['agent'],
          min: 1,
          max: 1
        },
        {
          id: 'motivation',
          label: 'Motivation',
          allowedTypes: ['engine'],
          min: 1,
          max: 1
        },
        {
          id: 'desire',
          label: 'Desire',
          allowedTypes: ['anchor'],
          min: 1,
          max: 1
        },
        {
          id: 'conflict',
          label: 'Conflict',
          allowedTypes: ['conflict'],
          min: 1,
          max: 1
        },
        {
          id: 'aspect',
          label: 'Aspect',
          allowedTypes: ['aspect'],
          attachesTo: ['character', 'desire'],
          min: 0,
          max: Infinity
        }
      ]
    },
    {
      label: 'Simple Character Concept',
      description: 'Create an idea for a complex character and a starting point for their character arc',
      generator: () => {},
      slots: [
        {
          id: 'character',
          label: 'Character',
          allowedTypes: ['anchor'],
          min: 1,
          max: 1
        },
        {
          id: 'motivation',
          label: 'Motivation',
          allowedTypes: ['engine'],
          min: 1,
          max: 1
        },
        {
          id: 'desire',
          label: 'Desire',
          allowedTypes: ['anchor', 'agent'],
          min: 1,
          max: 1
        },
        {
          id: 'obstacle',
          label: 'Obstacle',
          allowedTypes: ['conflict'],
          min: 1,
          max: 1
        },
        {
          id: 'motivation',
          label: 'Motivation',
          allowedTypes: ['engine'],
          min: 1,
          max: 1
        },
        {
          id: 'possession-location',
          label: 'Possession/Location',
          allowedTypes: ['anchor'],
          attachesTo: ['character', 'desire'],
          min: 0,
          max: Infinity
        },
        {
          id: 'aspect',
          label: 'Aspects',
          allowedTypes: ['aspect'],
          attachesTo: ['character', 'desire']
        }
      ]
    },
    {
      label: 'Simple Item/Setting-Driven Story',
      description: 'Create an idea for an interesting prop and setting that will be the heart of a story',
      generator: () => {
        const {object, setting, effect, affected, owner, obstacle, aspect} = evaluation.slotsForGenerator
        return `
          A ${object.value}
          ${object.modifiers?.length ? ` (${object.modifiers.map(m => m.value).join(', ')})` : ''} 
          in ${setting.value} owned by ${owner.value}
          ${owner.modifiers?.length ? ` (${owner.modifiers.map(m => m.value).join(', ')})` : ''} 
          ${effect.value} ${affected.value}${affected.modifiers?.length ? ` (${affected.modifiers.map(m => m.value).join(', ')})` : ''} 
          ${obstacle.value}.
        `
      },
      slots: [
        {
          id: 'object',
          label: 'Object',
          allowedTypes: ['anchor'],
          min: 1,
          max: 1
        },
        {
          id: 'setting',
          label: 'Setting',
          allowedTypes: ['anchor'],
          min: 1,
          max: 1
        },
        {
          id: 'effect',
          label: 'Effect',
          allowedTypes: ['engine'],
          min: 1,
          max: 1
        },
        {
          id: 'affected',
          label: 'Affected',
          allowedTypes: ['anchor', 'agent'],
          min: 1,
          max: 1
        },
        {
          id: 'owner',
          label: 'Owner',
          allowedTypes: ['agent'],
          attachesTo: ['object'],
          min: 1,
          max: 1
        },
        {
          id: 'obstacle',
          label: 'Obstacle/Consequence',
          allowedTypes: ['conflict'],
          min: 0,
          max: 1
        },
        {
          id: 'aspect',
          label: 'Aspect',
          allowedTypes: ['aspect'],
          attachesTo: ['object', 'owner', 'affected'],
          min: 0,
          max: Infinity
        }
      ]
    }
  ]
  const [cards, setCards] = dc.useState([])
  const [promptType, setPromptType] = dc.useState(PROMPT_TYPES[0])
  const [pendingCard, setPendingCard] = dc.useState(null)

  const allowedTypes = dc.useMemo(() => {
    const allowedTypes = [...new Set(promptType.slots.flatMap(s => s.allowedTypes))]
    return CARD_TYPES.filter(ct => allowedTypes.includes(ct.type))
  }, [promptType])

  const evaluation = dc.useMemo(() => {
    return evaluatePromptState({ cards, promptType })
  }, [cards, promptType])

  function evaluatePromptState({ cards, promptType }) {
    const slotStates = {}
    const errors = []
    const warnings = []

    // Initialize tracking for each slot
    for (const slot of promptType.slots) {
      slotStates[slot.id] = []
    }

    // Assign cards to slots
    for (const card of cards) {
      if (!card.slot) continue
      slotStates[card.slot].push(card)

      if (card.modifiers && card.modifiers.length) {
        for (const modifier of card.modifiers) {
          slotStates[modifier.slot].push(modifier)
        }
      }
    }

    // Validate each slot (min/max enforcement)
    for (const slot of promptType.slots) {
      const assigned = slotStates[slot.id].length

      if (assigned < slot.min) {
        warnings.push({
          slot: slot.id,
          type: "min",
          needed: slot.min,
          have: assigned
        })
      }

      if (assigned > slot.max) {
        errors.push({
          slot: slot.id,
          type: "max",
          limit: slot.max,
          have: assigned
        })
      }
    }

    // Whether all constraints are satisfied
    const meetsRequirements = errors.length === 0 && warnings.length === 0

    const slotsForGenerator = {}
    for (const key in slotStates) {
      if (slotStates[key].length === 1) {
        slotsForGenerator[key] = slotStates[key][0]
      } else {
        slotsForGenerator[key] = slotStates[key]
      }
    }
    console.log('slots',slotsForGenerator)

    return {
      slotStates,
      slotsForGenerator,
      meetsRequirements,
      errors,
      warnings
    }
  }

  function getSlotAvailabilityForCardType(cardType) {
    // Slots that accept the card type
    const slotsForType = promptType.slots.filter(slot =>
      slot.allowedTypes.includes(cardType)
    )

    // Evaluate per-slot availability
    const availability = slotsForType.map(slot => {
      const assigned = evaluation.slotStates[slot.id]?.length ?? 0
      const max = Number.isFinite(slot.max) ? slot.max : Infinity
      const min = slot.min ?? 0

      return {
        slot,        // slot object (id, label, min, max, allowedTypes, etc.)
        slotId: slot.id,
        label: slot.label,
        assigned,
        max,
        min,
        hasSpace: assigned < max
      }
    })

    // High-level availability:
    const anySlotHasSpace = availability.some(a => a.hasSpace)
    const allSlotsFull = !anySlotHasSpace

    // Build reusable message object
    let message = null

    if (allSlotsFull) {
      const slotList = availability
        .map(a => `${a.label} (max ${a.max === Infinity ? "∞" : a.max})`)
        .join(", ")

      message = {
        severity: "error",
        text: `All slots for ${cardType} are full: ${slotList}.`
      }
    } else {
      // Check if any slot needs more entries (min not satisfied)
      const needing = availability.filter(a => a.assigned < a.min)

      if (needing.length > 0) {
        const needsText = needing
          .map(a => `${a.label} needs ${a.min - a.assigned}`)
          .join(", ")

        message = {
          severity: "info",
          text: `${cardType} still required in: ${needsText}`
        }
      }
    }

    return {
      availability,         // per-slot info
      anySlotHasSpace,
      allSlotsFull,
      message
    }
  }

  dc.useEffect(() => {
    console.log("Cards updated:", cards)
    console.log("Meets Requirements:", evaluation.meetsRequirements)
  }, [cards, promptType])

  function resetPrompt() {
    setCards([])
  }

  function placeCardInSlot(card, slotId) {
    setCards([
      ...cards,
      {
        ...card,
        slot: slotId,
        modifiers: []
      }
    ])
    setPendingCard(null)
  } 
  
  function addCard(card) {
    const validSlots = promptType.slots.filter(slot =>
      slot.allowedTypes.includes(card.type)
    )
    const validModifiedSlots = promptType.slots.filter(slot => 
      validSlots.some(vs => vs.attachesTo && vs.attachesTo.includes(slot.id))
    )

    if (validSlots.length === 1 && validModifiedSlots.length === 0) {
      // Auto-place
      placeCardInSlot(card, validSlots[0].id)
    } else {
      // Ask user where to place it
      setPendingCard({ card, validSlots })
    }
  }

  function removeCard(index) {
    setCards(cards.filter((c, i) => i !== index))
  }

  function addModifier(modifier, cardIndex, slotId) {
    setCards(cards.map((c, i) => {
      if (i === cardIndex) {
        return {
          ...c,
          modifiers: [
            ...(c.modifiers || []), 
            {
              ...modifier,
              slot: slotId,
              modifies: c.slot
            }
          ]
        }
      } else {
        return c
      }
    }))
    setPendingCard(null)
  }

  function removeModifier(cardIndex, modifierIndex) {
    setCards(cards.map((c, i) => {
      if (i === cardIndex) {
        const newModifiers = c.modifiers.filter((m, mi) => mi !== modifierIndex)
        return {
          ...c,
          modifiers: newModifiers
        }
      } else {
        return c
      }
    }))
  }

  function getCardType(card) {
    const cardType = CARD_TYPES.find(t => t.type === card.type)
    return cardType || null
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Story Seed Prompt Builder</h1>

      <label>Prompt Type:</label><br/>
      <select
        value={promptType.label}
        onChange={(e) => {
          const newLabel = e.target.value
          const newType = PROMPT_TYPES.find(pt => pt.label === newLabel)
          if (newType) {
            setPromptType(newType)
            setCards([])         // reset placed cards when switching prompt types
            setPendingCard(null) // clear any in-progress placement
          }
        }}
      >
        {PROMPT_TYPES.map(pt => (
          <option key={pt.label} value={pt.label}>
            {pt.label}
          </option>
        ))}
      </select>

      <button onClick={resetPrompt} style={{ marginLeft: '10px', marginBottom: "12px" }}>
        Reset Prompt
      </button>

      {/* PROMPT BLOCK */}
      <div style={{
        padding: "10px",
        border: "1px solid var(--background-modifier-border)",
        borderRadius: "8px",
        marginBottom: "16px"
      }}>
        <h2>Your Story Prompt</h2>

        {promptType.slots.map(slot => {
          if (slot.attachesTo) return null // don't show modifier-only slots

          const slotCards = cards.filter(c => c.slot === slot.id)

          return (
            <div key={slot.id} style={{ marginBottom: "16px" }}>
              {/* Slot Header */}
              <div style={{ marginBottom: "6px" }}>
                <strong style={{ fontSize: "1.1em" }}>{slot.label}</strong>
                <span style={{ color: "var(--text-muted)" }}>
                  {" "}(allowed: {slot.allowedTypes.join(", ")})
                </span>
              </div>

              {/* Empty State */}
              {slotCards.length === 0 && (
                <div style={{ marginLeft: "12px", color: "var(--text-muted)" }}>
                  (No cards placed)
                </div>
              )}

              {/* Cards inside the slot */}
              {slotCards.map(card => {
                const globalIndex = cards.indexOf(card)
                const cardType = CARD_TYPES.find(ct => ct.type === card.type)

                return (
                  <div 
                    key={globalIndex}
                    style={{
                      marginLeft: "12px",
                      padding: "6px 8px",
                      border: "1px solid var(--background-modifier-border)",
                      borderRadius: "6px",
                      marginBottom: "8px"
                    }}
                  >
                    {/* Card Title */}
                    <div>
                      <strong>{cardType.label}:</strong> {card.value}

                      <button
                        style={{ marginLeft: "8px", fontSize: "0.8em" }}
                        onClick={() => removeCard(globalIndex)}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Modifiers */}
                    {card.modifiers && card.modifiers.length > 0 && (
                      <div style={{ marginTop: "4px" }}>
                        <strong style={{ fontSize: "0.9em" }}>Modifiers:</strong>

                        {card.modifiers.map((mod, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "12px"
                            }}
                          >
                            • <em>{mod.value}</em>
                            <button
                              style={{ marginLeft: "6px", fontSize: "0.8em" }}
                              onClick={() => removeModifier(globalIndex, i)}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {evaluation.meetsRequirements && (
        <div style={{
          background: "var(--background-secondary)",
          padding: "12px",
          borderRadius: "6px",
          marginTop: "12px"
        }}>
          <h3>Generated Prompt</h3>
          <p>
            {promptType.generator()}
          </p>
        </div>
      )}

      {pendingCard && (() => {
        const slotInfo = getSlotAvailabilityForCardType(
          pendingCard.card.type
        )

        const placeableSlots = slotInfo.availability.filter(a => !a.slot.attachesTo)
        const modifierSlots = slotInfo.availability.filter(a => a.slot.attachesTo)

        return (
          <div
            style={{
              padding: "12px",
              marginTop: "12px",
              border: "1px dashed var(--background-modifier-border)",
              borderRadius: "8px",
              background: "var(--background-secondary)"
            }}
          >
            <h3 style={{ marginTop: 0 }}>Place This Card</h3>

            <div style={{ display: "flex", gap: "20px" }}>
              {/* LEFT: Card being placed */}
              <div
                style={{
                  minWidth: "220px",
                  padding: "10px",
                  border: "1px solid var(--background-modifier-border)",
                  borderRadius: "6px",
                  background: "var(--background-primary)"
                }}
              >
                <div style={{ fontSize: "0.8em", opacity: 0.7 }}>
                  {getCardType(pendingCard.card).label}
                </div>
                <strong>{pendingCard.card.value}</strong>
              </div>

              {/* RIGHT: Slot choices */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* STANDARD SLOT PLACEMENT */}
                <div>
                  <div style={{ fontSize: "0.9em", marginBottom: "6px" }}>
                    Available Slots:
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "6px"
                    }}
                  >
                    {placeableSlots.map(a => (
                      <button
                        key={a.slotId}
                        disabled={!a.hasSpace}
                        onClick={() => placeCardInSlot(pendingCard.card, a.slotId)}
                        style={{
                          padding: "6px 8px",
                          border: "1px solid var(--background-modifier-border)",
                          borderRadius: "6px",
                          textAlign: "left",
                          opacity: a.hasSpace ? 1 : 0.5
                        }}
                      >
                        <strong>{a.label}</strong>  
                        <div style={{ fontSize: "0.75em", opacity: 0.7 }}>
                          ({a.assigned}/{a.max === Infinity ? "∞" : a.max})
                        </div>
                      </button>
                    ))}

                    {placeableSlots.length === 0 && (
                      <div style={{ fontSize: "0.85em", opacity: 0.6 }}>
                        (No standard slots)
                      </div>
                    )}
                  </div>
                </div>

                {/* MODIFIER OPTIONS */}
                <div>
                  <div style={{ fontSize: "0.9em", marginBottom: "6px" }}>
                    Attach As Modifier:
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "6px"
                    }}
                  >
                    {modifierSlots.flatMap(a =>
                      a.slot.attachesTo.flatMap(attSlot => {
                        const parentCards = cards.filter(c => c.slot === attSlot)
                        if (parentCards.length === 0) return []

                        return parentCards.map(parentCard => {
                          const globalIndex = cards.indexOf(parentCard)

                          return (
                            <button
                              key={`${a.slotId}-${globalIndex}`}
                              disabled={!a.hasSpace}
                              onClick={() => addModifier(pendingCard.card, globalIndex, a.slotId)}
                              style={{
                                padding: "6px 8px",
                                border: "1px solid var(--background-modifier-border)",
                                borderRadius: "6px",
                                textAlign: "left",
                                opacity: a.hasSpace ? 1 : 0.5
                              }}
                            >
                              <strong>{a.label}</strong> → {parentCard.value}
                            </button>
                          )
                        })
                      })
                    )}

                    {modifierSlots.length === 0 && (
                      <div style={{ fontSize: "0.85em", opacity: 0.6 }}>
                        (Cannot be used as modifier)
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <button onClick={() => setPendingCard(null)}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      <div style={{
        marginTop: "16px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px"
      }}>
        {allowedTypes.map(t => {
          const result = getSlotAvailabilityForCardType(t.type)

          return (
            <CardCategory
              key={t.type}
              file={t.path}
              category={t.deck}
              type={t.type}
              label={t.label}
              onSelect={addCard}
              disabled={!result.anySlotHasSpace}
              message={result.message}
            />
          )
        })}
      </div>
    </div>
  )
}

return { PromptBuilder }
```