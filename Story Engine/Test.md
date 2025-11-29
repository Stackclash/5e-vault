```datacorejsx
const path = require('path')
const { CardCategory } = await dc.require(dc.headerLink("Story Engine/Story Engine Components.md", "CardCategory"))

function PromptBuilder() {
  const ROOT_DIR = 'Story Engine'
	const CARD_TYPES = [
    { type: 'agent', label: 'Agent', path: path.join(ROOT_DIR, 'Story Engine/Agents.md'), deck: 'Story Engine' },
    { type: 'anchor', label: 'Anchor', path: path.join(ROOT_DIR, 'Story Engine/Anchors.md'), deck: 'Story Engine' },
    { type: 'aspect', label: 'Aspect', path: path.join(ROOT_DIR, 'Story Engine/Aspects.md'), deck: 'Story Engine' },
    { type: 'conflict', label: 'Conflict', path: path.join(ROOT_DIR, 'Story Engine/Conflicts.md'), deck: 'Story Engine' },
    { type: 'engine', label: 'Engine', path: path.join(ROOT_DIR, 'Story Engine/Engines.md'), deck: 'Story Engine' }
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
          type: 'achor',
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
  const [pendingModifier, setPendingModifier] = dc.useState({})

  function resetPrompt() {
    setCards([])
  }
  
  function addCard(card) {
    setCards([...cards, card])
  }

  function removeCard(card) {
    setCards(cards.filter(c => c.value !== card.value))
  }

  function addModifier(card, modifier) {
    const restCards = cards.filter(c => c.value !== card.value)
    const modifiedCard = {
      ...card,
      modifiers: [...card.modifiers, modifier]
    }

    setCards([...restCards, modifiedCard])
  }

  function removeModifier(card, modifier) {
    const restCards = cards.filter(c => c.value !== card.value)
    const modifiedCard = {
      ...card,
      modifiers: card.modifiers.filter(m => m.value !== modifier.value)
    }

    setCards([...restCards, modifiedCard])
  }

  function findCardType(card) {
    return CARD_TYPES.find(t => t.type === card.type)
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Story Seed Prompt Builder</h1>

      <label>Prompt Type:</label><br/>
      <select
        value={promptType}
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
        
        {cards.map(c => {
          const cardType = findCardType(c)

          return (
            <div style={{ marginBottom: "10px" }}>
              <strong>{cardType.label}:</strong> {agent.value}
              <button style={{ marginLeft: "6px" }} onClick={removeAgent}>✕</button>

              {c.modifiers.length > 0 && (
                <>
                  <div style={{ marginTop: "4px" }}>
                    <strong style={{ fontSize: "0.9em" }}>Modifiers:</strong>
                  </div>
                  {renderModifiers(c)}
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* TODO: Update logic to test if minimum requirements are fulfilled */}
      {/*agent && engine && anchor && conflict && (
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
      )*/}

      {/* TODO: Update to allow selecting what card type to attach to */}
      {/*pendingModifier && (
        <div style={{
          padding: "10px",
          marginBottom: "16px",
          border: "1px dashed var(--background-modifier-border)"
        }}>
          <h3>Where does this modifier apply?</h3>
          <p><strong>{pendingAspect.value}</strong></p>

          <button disabled={!agent} onClick={tuckAspectIntoAgent}>
            Attach to Agent
          </button>

          {" "}
          <button disabled={!anchor} onClick={tuckAspectIntoAnchor}>
            Attach to Anchor
          </button>

          <button 
            onClick={() => setPendingAspect(null)} 
            style={{ marginLeft: "8px" }}
          >
            Cancel
          </button>
        </div>
      )*/}

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px"
      }}>
        {promptType.cards.map(c => {
          const cardType = findCardType(c)

          return (
            <CardCategory
              file={cardType.path}
              type={cardType.type}
              label={cardType.label}
              onSelect={addCard}
            />
          )
        })}

        <CardCategory
          file="Story Engine/Story Engine/Agents.md"
          label="Agents"
          onSelect={setAgent}
        />

        <CardCategory
          file="Story Engine/Story Engine/Engines.md"
          label="Engines"
          onSelect={setEngine}
        />

        <CardCategory
          file="Story Engine/Story Engine/Anchors.md"
          label="Anchors"
          onSelect={setAnchor}
        />

        <CardCategory
          file="Story Engine/Story Engine/Conflicts.md"
          label="Conflicts"
          onSelect={setConflict}
        />

        <CardCategory
          file="Story Engine/Story Engine/Aspects.md"
          label="Aspects"
          onSelect={handleAspectSelected}
        />
      </div>
    </div>
  )
}

return PromptBuilder
```