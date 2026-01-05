# CardTypes
```jsx
const path = require('path')
const ROOT_DIR = '1. DM Stuff/Tools/Story Engine'
return [
  { type: 'agent', label: 'Agent', path: path.posix.join(ROOT_DIR, 'Story Engine/Agents.md'), deck: 'Story Engine' },
  { type: 'anchor', label: 'Anchor', path: path.posix.join(ROOT_DIR, 'Story Engine/Anchors.md'), deck: 'Story Engine' },
  { type: 'aspect', label: 'Aspect', path: path.posix.join(ROOT_DIR, 'Story Engine/Aspects.md'), deck: 'Story Engine' },
  { type: 'conflict', label: 'Conflict', path: path.posix.join(ROOT_DIR, 'Story Engine/Conflicts.md'), deck: 'Story Engine' },
  { type: 'engine', label: 'Engine', path: path.posix.join(ROOT_DIR, 'Story Engine/Engines.md'), deck: 'Story Engine' }
]
```

# PromptTypes
```jsx
return [
  {
    label: 'Simple Story Seed',
    description: 'The classic 5-part Story Engine seed.',
    generator: slots => {
      const withModifiers = item =>
        item?.modifiers?.length
          ? `${item.value} (${item.modifiers.join(', ')})`
          : item?.value
      const slot = id => slots[id]?.values?.[0]
      
      const character = slot('character')
      const motivation = slot('motivation')
      const desire = slot('desire')
      const conflict = slot('conflict')

      return `
        A story about ${withModifiers(character)}
        ${motivation?.value}
        ${withModifiers(desire)},
        ${conflict?.value}.
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
        max: 1
      }
    ]
  },
  {
    label: 'Simple Character Concept',
    description: 'Create an idea for a complex character and a starting point for their character arc',
    generator: slots => {
      const withModifiers = item =>
        item?.modifiers?.length
          ? `${item.value} (${item.modifiers.join(', ')})`
          : item?.value

      const slot = id => slots[id]?.values?.[0]

      const character = slot('character')
      const motivation = slot('motivation')
      const desire = slot('desire')
      const obstacle = slot('obstacle')
      const possessionLocation = slot('possessionLocation')
      const aspect = slots.aspect?.values || []

      const characterAspects = aspect
        .filter(a => a.attachesTo === 'character')
        .map(a => a.value)

      const desireAspects = aspect
        .filter(a => a.attachesTo === 'desire')
        .map(a => a.value)

      return `
        ${withModifiers(character)}
        ${characterAspects.length ? `— ${characterAspects.join(', ')}` : ''}

        ${motivation.value} ${withModifiers(desire)}${desireAspects.length ? ` — ${desireAspects.join(', ')}` : ''} ${possessionLocation ? `which is tied to ${possessionLocation.value}.` : ''},
        
        ${obstacle.value}.
      `.trim()
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
        id: 'possessionLocation',
        label: 'Possession/Location',
        allowedTypes: ['anchor'],
        attachesTo: ['character', 'desire'],
        min: 0,
        max: 1
      },
      {
        id: 'aspect',
        label: 'Aspects',
        allowedTypes: ['aspect'],
        attachesTo: ['character', 'desire'],
        min: 0,
        max: Infinity
      }
    ]
  },
  {
    label: 'Simple Item/Setting-Driven Story',
    description: 'Create an idea for an interesting prop and setting that will be the heart of a story',
    generator: (slots) => {
      const {object, setting, effect, affected, owner, obstacle, aspect} = slots
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
```

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
const { CardCategory } = await dc.require(dc.headerLink("1. DM Stuff/Tools/Story Engine/Story Engine Components.md", "CardCategory"))
const CARD_TYPES = await dc.require(dc.headerLink("1. DM Stuff/Tools/Story Engine/Story Engine Components.md", "CardTypes"))
const PROMPT_TYPES = await dc.require(dc.headerLink("1. DM Stuff/Tools/Story Engine/Story Engine Components.md", "PromptTypes"))

function PromptBuilder() {
  const [cards, setCards] = dc.useState([])
  const [promptType, setPromptType] = dc.useState(PROMPT_TYPES[0])
  const [pendingCard, setPendingCard] = dc.useState(null)

  const promptState = dc.useMemo(() => {
    const state = {
      types: {},
      slots: {},
      meetsRequirements: true
    }

    const getSlotCapacity = slot =>
      slot.max * (slot.attachesTo?.length || 1)

    const ensureSlot = slot => {
      if (state.slots[slot.id]) return state.slots[slot.id]

      state.slots[slot.id] = {
        id: slot.id,
        label: slot.label,
        min: slot.min,
        max: slot.max,
        attachesTo: slot.attachesTo,
        cards: [],
        isFull: false
      }

      return state.slots[slot.id]
    }

    const ensureType = (type, slot) => {
      if (state.types[type]) return state.types[type]

      const def = CARD_TYPES.find(t => t.type === type)

      state.types[type] = {
        type,
        label: def.label,
        path: def.path,
        deck: def.deck,
        min: 0,
        max: 0,
        cards: [],
        allowedSlots: [],
        availableSlots: [],
        allowedModifierSlots: [],
        availableModifierSlots: [],
        isFull: false,
        message: null
      }

      return state.types[type]
    }

    const addUnique = (arr, item, key = 'value') => {
      if (!arr.some(i => i[key] === item[key])) arr.push(item)
    }

    const updateSlotState = (slot, slotState) => {
      slotState.isFull =
        slotState.cards.length >= getSlotCapacity(slot)
    }

    const updateTypeState = typeState => {
      typeState.isFull = typeState.cards.length >= typeState.max
    }

    const isModifierSlotAvailable = (modifieeSlotId, modifierSlotDef) => {
      // Cards that expose this modifier slot
      const targetCards = cards.filter(card =>
        modifieeSlotId === card.slot
      )

      // If no targets exist, modifier slot is unavailable
      if (!targetCards.length) return false

      // Slot is available if ANY target card has remaining capacity
      return targetCards.some(card => {
        const used = (card.modifiers || []).filter(
          m => m.slot === modifierSlotDef.id
        ).length

        return used < modifierSlotDef.max
      })
    }

    // ---------- BUILD STATE ----------
    for (const slot of promptType.slots) {
      const slotState = ensureSlot(slot)

      for (const type of slot.allowedTypes) {
        const typeState = ensureType(type, slot)

        // Slot ↔ Type relationships
        typeState.allowedSlots.push(slot.id)

        if (slot.attachesTo) {
          typeState.allowedModifierSlots.push(...slot.attachesTo)
        } else {
          typeState.availableSlots.push(slot.id)
        }

        typeState.allowedModifierSlots = [...new Set(typeState.allowedModifierSlots)]
        typeState.availableModifierSlots = [...new Set(typeState.allowedModifierSlots)]

        // Aggregate constraints
        typeState.min += slot.min
        typeState.max += getSlotCapacity(slot)

        // ---------- CARD COLLECTION ----------
        for (const card of cards) {
          // Base card in slot
          if (card.slot === slot.id) {
            addUnique(slotState.cards, card)
          }

          // Base card of type
          if (card.type === type) {
            addUnique(typeState.cards, card)
          }

          // Modifiers
          if (card.modifiers) {
            for (const modifier of card.modifiers) {
              if (modifier.slot === slot.id) {
                addUnique(slotState.cards, modifier)
              }

              if (modifier.type === type) {
                addUnique(typeState.cards, modifier)
              }
            }
          }
        }

        updateSlotState(slot, slotState)
        updateTypeState(typeState)

        // ---------- AVAILABLE SLOT FILTERING ----------
        typeState.availableSlots = typeState.availableSlots.filter(slotId => {
          const slotDef = promptType.slots.find(s => s.id === slotId)
          const slotData = state.slots[slotId]
          return slotData.cards.length < getSlotCapacity(slotDef)
        })

        typeState.availableModifierSlots = typeState.allowedModifierSlots.filter(slotId => {
          return isModifierSlotAvailable(slotId, slotState)
        })

        // ---------- MESSAGES ----------
        const missing = typeState.allowedSlots
          .map(slotId => {
            const slotDef = promptType.slots.find(s => s.id === slotId)
            const slotData = state.slots[slotId]

            if (slotDef.min === 0 || slotData.isFull) return null
            return `${slotData.label} needs ${slotDef.min}`
          })
          .filter(Boolean)

        if (missing.length) {
          typeState.message = {
            severity: typeState.cards.length >= typeState.max ? 'error' : 'warning',
            text: `${type} still required in: ${missing.join(', ')}`
          }
        } else if (typeState.isFull) {
          typeState.message = {
            severity: 'error',
            text: `All slots for ${type} are full.`
          }
        } else {
          typeState.message = null
        }
      }

      // ---------- GLOBAL REQUIREMENTS ----------
      state.meetsRequirements &&=
        slotState.cards.length >= slotState.min
    }
    console.log(state)

    return state
  }, [cards, promptType])

  dc.useEffect(() => {
    console.log("Cards updated:", cards)
  }, [cards, promptType])

  function resolveSlots(promptState) {
    const resolved = {}

    for (const [slotId, slotState] of Object.entries(promptState.slots)) {
      if (!slotState.cards.length) continue

      resolved[slotId] = {
        label: slotState.label,
        values: slotState.cards.map(card => ({
          value: card.value,
          modifiers: card.modifiers?.map(m => m.value) || []
        }))
      }
    }

    return resolved
  }

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

      {promptState.meetsRequirements && (
        <div style={{
          background: "var(--background-secondary)",
          padding: "12px",
          borderRadius: "6px",
          marginTop: "12px"
        }}>
          <h3>Generated Prompt</h3>
          <p>
            {promptType.generator(resolveSlots(promptState))}
          </p>
        </div>
      )}

      {pendingCard && (() => {
        const typeInfo = promptState.types[pendingCard.card.type]

        const placeableSlots = typeInfo.availableSlots
        const modifierSlots = typeInfo.allowedModifierSlots || []
        const completeSlotList = typeInfo.allowedSlots
        console.log('placeableSlots', placeableSlots)
        console.log('modifierSlots', modifierSlots)
        console.log('completeSlotList', completeSlotList)

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
                  {promptState.types[pendingCard.card.type].label}
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
                    {placeableSlots.length > 0 && placeableSlots.map(a => {
                      const placeableSlotInfo = promptState.slots[a]
                      return (
                        <button
                          key={a}
                          disabled={placeableSlotInfo.isFull}
                          onClick={() => placeCardInSlot(pendingCard.card, a)}
                          style={{
                            padding: "6px 8px",
                            border: "1px solid var(--background-modifier-border)",
                            borderRadius: "6px",
                            textAlign: "left",
                            opacity: placeableSlotInfo.isFull ? 0.5 : 1
                          }}
                        >
                          <strong>{placeableSlotInfo.label}</strong>  
                          <div style={{ fontSize: "0.75em", opacity: 0.7 }}>
                            ({placeableSlotInfo.cards.length}/{placeableSlotInfo.max === Infinity ? "∞" : placeableSlotInfo.max})
                          </div>
                        </button>
                      )
                    })}

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
                    {modifierSlots.length > 0 && completeSlotList.filter(s=> promptState.slots[s].attachesTo).flatMap(a => {
                      const modifierSlotInfo = promptState.slots[a]

                      return modifierSlotInfo.attachesTo.map(b => {
                        const modifieeSlotInfo = promptState.slots[b]
                        const disabled = !typeInfo.availableModifierSlots.includes(b)

                        return modifieeSlotInfo.cards.map(parentCard => {
                          const globalIndex = cards.indexOf(parentCard)
                          return (
                            <button
                              key={`${a}-${globalIndex}`}
                              disabled={disabled}
                              onClick={() => addModifier(pendingCard.card, globalIndex, a)}
                              style={{
                                padding: "6px 8px",
                                border: "1px solid var(--background-modifier-border)",
                                borderRadius: "6px",
                                textAlign: "left",
                                opacity: disabled ? 0.5 : 1
                              }}
                            >
                              <strong>{modifierSlotInfo.label}</strong> → {parentCard.value}
                            </button>
                          )
                        })
                      })

                    })}

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
        {Object.values(promptState.types).map(t => {
          return (
            <CardCategory
              key={t.type}
              file={t.path}
              category={t.deck}
              type={t.type}
              label={t.label}
              onSelect={addCard}
              disabled={t.isFull}
              message={t.message}
            />
          )
        })}
      </div>
    </div>
  )
}

return { PromptBuilder }
```