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
    cards.splice(index, 1)
    setCards(cards)
  }

  function addModifier(card, modifier) {
    const restCards = cards.filter(c => c.value !== card.value)
    const modifiedCard = {
      ...card,
      modifiers: [...card.modifiers || [], modifier]
    }

    setCards([...restCards, modifiedCard])
  }

  function removeModifier(card, modifier) {
    const updated = cards.map(c =>
      c.value === card.value
        ? {
          ...c,
          modifiers: c.modifiers.filter(m => m.value !== modifier.value)
        }
      : c
    )

    setCards(updated)
  }

  function getCardType(card) {
    const cardType = CARD_TYPES.find(t => t.type === card.type)
    return cardType || null
  }

  function getCardPromptDefinition(card) {
    const promptCardDefinition = promptType.cards.find(c => c.type === card.type)
    return promptCardDefinition || null
  }

  function getAvailableParentCardsForModifier(modifier) {
    const promptCardDefinition = getCardPromptDefinition(modifier)
    if (!promptCardDefinition || !promptCardDefinition.attachesTo) return []
    return cards.filter(c => promptCardDefinition.attachesTo.includes(c.type))
  }

  function renderModifiers(card) {
    return card.modifiers.map((m, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", marginLeft: "12px" }}>
        • <em>{m.value}</em>
        <button 
          style={{ marginLeft: "6px", fontSize: "0.8em" }}
          onClick={() => removeModifier(card, m)}
        >
          ✕
        </button>
      </div>
    ))
  }

  function meetsRequirements() {
    // Count how many cards of each type the user has added
    const typeCount = {};
    cards.forEach(card => {
      typeCount[card.type] = (typeCount[card.type] || 0) + 1;
    });

    // Count modifier cards that are actually attached to valid parents
    function countAttachedModifiers(modType, allowedParents) {
      let count = 0;

      for (const card of cards) {
        if (!allowedParents.includes(card.type)) continue;

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
        
        {cards.map((c, i) => {
          const cardType = getCardType(c)
          const cardPromptDefinition = getCardPromptDefinition(c)

          return (cardPromptDefinition.role === 'primary' &&
            <div style={{ marginBottom: "10px" }}>
              <strong>{cardType.label}:</strong> {c.value}
              <button style={{ marginLeft: "6px" }} onClick={() => removeCard(i)}>✕</button>

              {c.modifiers && c.modifiers.length > 0 && (
                <>
                  <div style={{ marginTop: "4px" }}>
                    <strong style={{ fontSize: "0.9em" }}>Modifiers:</strong>
                  </div>
                  {renderModifiers(c)}
                </>
              )}
            </div>
          )
        }).filter(Boolean)}
      </div>

      {/* TODO: Update logic to test if minimum requirements are fulfilled */}
      {meetsRequirements() && (
        <div style={{
          background: "var(--background-secondary)",
          padding: "12px",
          borderRadius: "6px",
          marginTop: "12px"
        }}>
          <h3>Generated Prompt</h3>
          <p>
            <strong>{agent.value}</strong>
            {agentAspects.length > 0 &&
              <> ({agentAspects.map(a => a.value).join(", ")})</>}
            {" "}
            {engine.value}{" "}
            <strong>{anchor.value}</strong>
            {anchorAspects.length > 0 &&
              <> ({anchorAspects.map(a => a.value).join(", ")})</>}
            {" "}
            but {conflict.value}.
          </p>
        </div>
      )}

      {/* TODO: Update to allow selecting what card type to attach to */}
      {pendingModifier && (
        <div style={{
          padding: "10px",
          marginBottom: "16px",
          border: "1px dashed var(--background-modifier-border)"
        }}>
          <h3>Where does this modifier apply?</h3>
          <p><strong>{pendingModifier.value}</strong></p>

          {getAvailableParentCardsForModifier(pendingModifier).map(c => {
            const cardType = getCardType(c)

            return (
              <button onClick={() => addModifier(c, pendingModifier)} style={{ marginRight: "6px" }}>
                Attach to {cardType.label}: {c.value}
              </button>
            )
          })}

          <button 
            onClick={() => setPendingModifier(null)} 
            style={{ marginLeft: "8px" }}
          >
            Cancel
          </button>
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px"
      }}>
        {promptType.cards.map(c => {
          const cardType = getCardType(c)

          return (
            <CardCategory
              file={cardType.path}
              type={cardType.type}
              label={cardType.label}
              onSelect={addCard}
            />
          )
        })}
      </div>
    </div>
  )
}

return PromptBuilder
```
