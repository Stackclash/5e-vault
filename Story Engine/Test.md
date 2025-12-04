```datacorejsx
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
      label: 'Story Seed',
      description: 'The classic 5-part Story Engine seed.',
      generator: (slots) => {
        console.log(slots)
        const {character, motivation, desire, conflict, aspect} = slots
        return `
          A story about ${character.value}
          ${character.modifiers?.length > 0 ? ` (${character.modifiers.map(a => a.value).join(", ")})` : ''} 
          ${motivation.value} 
          ${desire.value}${desire.modifiers?.length > 0 ? ` (${desire.modifiers.map(a => a.value).join(", ")})` : ''}, 
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

    return {
      slotStates,
      meetsRequirements,
      errors,
      warnings
    }
  }

  dc.useEffect(() => {
    console.log("Cards updated:", cards)
    console.log("Meets Requirements:", evaluation.meetsRequirements)
  }, [cards])

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
      >
        {PROMPT_TYPES.map(pt => {
          return (
            <option onClick={() => setPromptType(pt)}>{pt.label}</option>
          )
        })}
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
            {promptType.generator(evaluation.slotStates)}
          </p>
        </div>
      )}

      {pendingCard && (
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

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px"
            }}
          >
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

            {/* RIGHT: Choices */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>

              {/* Standard slot placement */}
              <div>
                <div style={{ fontSize: "0.9em", marginBottom: "4px" }}>
                  Available Slots:
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "6px"
                  }}
                >
                  {pendingCard.validSlots.filter(vs => !vs.attachesTo).map(vs => (
                    <button
                      key={vs.id}
                      onClick={() => placeCardInSlot(pendingCard.card, vs.id)}
                      style={{
                        padding: "6px 8px",
                        border: "1px solid var(--background-modifier-border)",
                        borderRadius: "6px",
                        textAlign: "left",
                        fontSize: "0.85em"
                      }}
                    >
                      <strong>{vs.label}</strong>
                    </button>
                  ))}

                  {pendingCard.validSlots.filter(vs => !vs.attachesTo).length === 0 && (
                    <div style={{ fontSize: "0.85em", opacity: 0.6 }}>
                      (No standard slots)
                    </div>
                  )}
                </div>
              </div>

              {/* Modifier attachments */}
              <div>
                <div style={{ fontSize: "0.9em", marginBottom: "4px" }}>
                  Attach As Modifier:
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "6px"
                  }}
                >
                  {pendingCard.validSlots
                    .filter(vs => vs.attachesTo)
                    .flatMap(vs =>
                      promptType.slots
                        .filter(s => vs.attachesTo.includes(s.id))
                        .flatMap(targetSlot => {
                          const targetCards = cards.filter(c => c.slot === targetSlot.id)
                          if (targetCards.length === 0) return []
                          return targetCards.map(targetCard => {
                            const globalIndex = cards.indexOf(targetCard)
                            return (
                              <button
                                key={`${vs.id}-${globalIndex}`}
                                onClick={() => addModifier(pendingCard.card, globalIndex, vs.id)}
                                style={{
                                  padding: "6px 8px",
                                  border: "1px solid var(--background-modifier-border)",
                                  borderRadius: "6px",
                                  textAlign: "left",
                                  fontSize: "0.85em"
                                }}
                              >
                                <strong>{targetSlot.label}</strong>: {targetCard.value}
                              </button>
                            )
                          })
                        })
                    )}

                  {pendingCard.validSlots.filter(vs => vs.attachesTo).length === 0 && (
                    <div style={{ fontSize: "0.85em", opacity: 0.6 }}>
                      (Cannot be used as modifier)
                    </div>
                  )}
                </div>
              </div>

              <div>
                <button onClick={() => setPendingCard(null)} style={{ fontSize: "0.85em" }}>
                  Cancel
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <div style={{
        marginTop: "16px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px"
      }}>
        {allowedTypes.map(t => {
          // Find all slots this card type can be placed into
          const slotsForType = promptType.slots.filter(slot =>
            slot.allowedTypes.includes(t.type)
          )

          // Count total cards across all compatible slots
          const totalCardsInSlots = slotsForType.reduce((acc, slot) => {
            return acc + evaluation.slotStates[slot.id].length
          }, 0)

          const totalMax = Math.max(...slotsForType.map(s => s.max))
          const totalMin = Math.min(...slotsForType.map(s => s.min))

          const isDisabled = totalCardsInSlots >= totalMax

          let message = null
          if (isDisabled) {
            message = {
              severity: "error",
              text: `Maximum of ${totalMax} ${t.label} cards already placed.`
            }
          } else if (totalCardsInSlots < totalMin) {
            message = {
              severity: "info",
              text: `Minimum of ${totalMin} ${t.label} required.`
            }
          }

          return (
            <CardCategory
              file={t.path}
              category={t.deck}
              type={t.type}
              label={t.label}
              onSelect={addCard}
              disabled={isDisabled}
              message={message}
            />
          )
        })}
      </div>
    </div>
  )
}

return PromptBuilder
```
