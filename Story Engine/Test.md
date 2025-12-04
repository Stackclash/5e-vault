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
        return ''
        const {character, motivation, desire, conflict, aspect} = slots
        return `
          A story about ${character.value}
          ${character.modifiers.length > 0 ? ` (${character.modifiers.map(a => a.value).join(", ")})` : ''} 
          ${motivation.value} 
          ${desire.value}${desire.modifiers.length > 0 ? ` (${desire.modifiers.map(a => a.value).join(", ")})` : ''}, 
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

  const meetsRequirements = dc.useMemo(() => {
    return true
  }, [cards, promptType])

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
      slotStates[slot.id] = {
        cards: [],
        modifiers: {}
      }
    }

    // Assign cards to slots
    for (const card of cards) {
      if (!card.slot) continue
      slotStates[card.slot].cards.push(card)

      if (card.modifiers && card.modifiers.length) {
        slotStates[card.slot].modifiers = card.modifiers
      }
    }

    // Validate each slot (min/max enforcement)
    for (const slot of promptType.slots) {
      const assigned = slotStates[slot.id].cards.length

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
    const meetsRequirements = errors.length === 0 && warnings.every(w => w.type === "min")

    return {
      slotStates,
      meetsRequirements,
      errors,
      warnings
    }
  }

  dc.useEffect(() => {
    console.log("Cards updated:", cards)
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

  function addModifier(modifier, cardIndex) {
    setCards(cards.map((c, i) => {
      if (i === cardIndex) {
        return {
          ...c,
          modifiers: [...(c.modifiers || []), modifier]
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
        borderRadius: "8px"
      }}>
        <h2>Your Story Prompt</h2>

        {
          promptType.slots.map(slot => {
            if (slot.attachesTo) return null; // Skip modifier slots here
            const cardsInSlot = cards.filter(c => c.slot === slot.id)
            return (
              <div key={slot.id} style={{ marginBottom: "10px" }}>
                <strong>{slot.label}:</strong>
                {cardsInSlot.length === 0 ? ( <span> (none)</span> ) : (
                  cardsInSlot.map((c, cardIndex) => {
                    const cardType = getCardType(c)
                    return (<div key={cardIndex} style={{ marginTop: "4px" }}>
                      {cardType.label}: {c.value}
                      <button style={{ marginLeft: "6px" }} onClick={() => removeCard(cardIndex)}>✕</button>
                      {c.modifiers && c.modifiers.length > 0 && (
                        <>
                          <div style={{ marginTop: "4px" }}>
                            <strong style={{ fontSize: "0.9em" }}>Modifiers:</strong>
                          </div>
                          {c.modifiers.map((m, modifierIndex) => (
                            <div key={modifierIndex} style={{ display: "flex", alignItems: "center", marginLeft: "12px" }}>
                              • <em>{m.value}</em>
                              <button 
                                style={{ marginLeft: "6px", fontSize: "0.8em" }}
                                onClick={() => removeModifier(cardIndex, modifierIndex)}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </>
                      )}
                    </div>)
                  })
                )}
              </div>
            )
          })
        }
      </div>

      {/* TODO: Update logic to test if minimum requirements are fulfilled */}
      {meetsRequirements && (
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
        <div style={{
          padding: "10px",
          marginTop: "16px",
          border: "1px dashed var(--background-modifier-border)"
        }}>
          <h3>What slot should this card go in?</h3>
          <p><strong>{pendingCard.card.value}</strong></p>

          <div style={{
            marginTop: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px"
          }}> 
            {pendingCard.validSlots.sort((a, b) => {
              if (a.attachesTo && !b.attachesTo) return 1
              if (!a.attachesTo && b.attachesTo) return -1
              return 0
            }).map((vs, i) => {
              if (!vs.attachesTo) {
                return (
                  <button 
                    onClick={() => placeCardInSlot(pendingCard, vs.id)} 
                    style={{ marginRight: "6px" }}
                  >
                    Place in {vs.label} slot
                  </button>
                )
              } else {
                return (
                  <>
                    <h4>{vs.label} Modifier Slot</h4>
                    {cards.map((c, cardIndex) => {
                      if (vs.attachesTo.includes(c.slot)) {
                        const slot = promptType.slots.find(s => s.id === c.slot)
                        return (
                          <button
                            key={cardIndex}
                            onClick={() => addModifier(pendingCard.card, cardIndex)} 
                            style={{ marginRight: "6px" }}
                          >
                            Attach as modifier to {slot.label}: {c.value}
                          </button>
                        )
                      } else {
                        return null
                      }
                    }).filter(Boolean)}
                  </>
                )
              }
            })}
          </div>

          <button 
            onClick={() => setPendingCard(null)} 
            style={{ marginLeft: "8px" }}
          >
            Cancel
          </button>
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
            return acc + evaluation.slotStates[slot.id].cards.length
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
