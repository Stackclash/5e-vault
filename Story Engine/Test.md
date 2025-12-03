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
      generator: (cards) => {
        const agent = cards.find(c => c.type === 'agent')
        const anchor = cards.find(c => c.type === 'anchor')
        const conflict = cards.find(c => c.type === 'conflict')
        const engine = cards.find(c => c.type === 'engine')
        const agentAspects = agent.modifiers || []
        const anchorAspects = anchor.modifiers || []
        return `A story about ${agent.value}${agentAspects.length > 0 ? ` (${agentAspects.map(a => a.value).join(", ")})` : ''} ${engine.value} ${anchor.value}${anchorAspects.length > 0 ? ` (${anchorAspects.map(a => a.value).join(", ")})` : ''}, ${conflict.value}.`
      },
      cards: [
        {
          type: 'agent',
          role: 'primary',
          min: 1,
          max: 1
        },
        {
          type: 'anchor',
          role: 'primary',
          min: 1,
          max: 1
        },
        {
          type: 'aspect',
          role: 'modifier',
          attachesTo: ['agent'],
          min: 1,
          max: 1
        },
        {
          type: 'conflict',
          role: 'primary',
          min: 1,
          max: 1
        },
        {
          type: 'engine',
          role: 'primary',
          min: 1,
          max: 1
        }
      ]
    }
  ]
  const [cards, setCards] = dc.useState([])
  const [promptType, setPromptType] = dc.useState(PROMPT_TYPES[0])
  const [pendingModifier, setPendingModifier] = dc.useState(null)

  const meetsRequirements = dc.useMemo(() => {
    // Count how many cards of each type the user has added
    const typeCount = {};
    cards.forEach(card => {
      typeCount[card.type] = (typeCount[card.type] || 0) + 1;
    });

    // Count modifier cards that are actually attached to valid parents
    function countAttachedModifiers(modType, allowedParents) {
      let count = 0;

      for (const card of cards) {
        if (!allowedParents.includes(card.type) || !card.modifiers) continue;

        for (const mod of card.modifiers) {
          if (mod.type === modType) count++;
        }
      }

      return count;
    }

    // Validate each rule for the currently selected prompt type
    for (const rule of promptType.cards) {
      const { type, role, min = 0, max = Infinity, attachesTo } = rule;

      if (role === "modifier") {
        // Only modifiers attached to allowed parents count
        const count = countAttachedModifiers(type, attachesTo || []);
        if (count < min || count > max) return false;
      } else {
        // Count primary or secondary cards by card.type
        const count = typeCount[type] || 0;
        if (count < min || count > max) return false;
      }
    }

    return true;
  }, [cards, promptType])

  dc.useEffect(() => {
    console.log("Cards updated:", cards)
  }, [cards])

  function resetPrompt() {
    setCards([])
  }
  
  function addCard(card) {
    if (getCardPromptDefinition(card).role === 'modifier') {
      // Set as pending modifier to be attached to a parent card
      setPendingModifier(card)
      return
    }
    setCards([...cards, card])
  }

  function removeCard(index) {
    setCards(cards.filter((c, i) => i !== index))
  }

  function addModifier(modifier, cardIndex) {
    setCards(cards.map((c, i) => {
      console.log(c, i, cardIndex)
      if (i === cardIndex) {
        return {
          ...c,
          modifiers: [...c.modifiers || [], modifier]
        }
      } else {
        return c
      }
    }))
    setPendingModifier(null)
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

  function getCardPromptDefinition(card) {
    const promptCardDefinition = promptType.cards.find(c => c.type === card.type)
    return promptCardDefinition || null
  }

  function isCardTypeAllowedForModifier(card, modifier) {
    const promptCardDefinition = getCardPromptDefinition(modifier)
    if (!promptCardDefinition || !promptCardDefinition.attachesTo) return false
    return promptCardDefinition.attachesTo.includes(card.type)
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
        
        {cards.map((c, cardIndex) => {
          const cardType = getCardType(c)
          const cardPromptDefinition = getCardPromptDefinition(c)

          return (cardPromptDefinition.role === 'primary' &&
            <div style={{ marginBottom: "10px" }}>
              <strong>{cardType.label}:</strong> {c.value}
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
            </div>
          )
        }).filter(Boolean)}
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
            {promptType.generator(cards)}
          </p>
        </div>
      )}

      {/* TODO: Update to allow selecting what card type to attach to */}
      {pendingModifier && (
        <div style={{
          padding: "10px",
          marginTop: "16px",
          border: "1px dashed var(--background-modifier-border)"
        }}>
          <h3>Where does this modifier apply?</h3>
          <p><strong>{pendingModifier.value}</strong></p>

          {cards.map((c, i) => {
            const cardType = getCardType(c)

            if (isCardTypeAllowedForModifier(c, pendingModifier)) {
              return (
                <button 
                  onClick={() => addModifier(pendingModifier, i)} 
                  style={{ marginRight: "6px" }}
                >
                  Attach to {cardType.label}: {c.value}
                </button>
              )
            } else {
              return null
            }
          }).filter(Boolean)}

          <button 
            onClick={() => setPendingModifier(null)} 
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
        {promptType.cards.map(c => {
          const cardType = getCardType(c)
          const cardPromptDefinition = getCardPromptDefinition(c)
          const cardsOfType = cards.filter(card => card.type === c.type)
          const isDisabled = cardsOfType.length >= (cardPromptDefinition.max || Infinity)

          return (
            <CardCategory
              file={cardType.path}
              category={cardType.deck}
              type={cardType.type}
              label={cardType.label}
              onSelect={addCard}
              disabled={isDisabled}
              error={isDisabled ? `Maximum of ${cardPromptDefinition.max} reached` : ''}
            />
          )
        })}
      </div>
    </div>
  )
}

return PromptBuilder
```
