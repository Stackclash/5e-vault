```datacorejsx
const { CardCategory } = await dc.require(dc.headerLink("Story Engine/Story Engine Components.md", "CardCategory"))

function StoryPromptBuilder() {
  const [agent, setAgent] = dc.useState(null)
  const [engine, setEngine] = dc.useState(null)
  const [anchor, setAnchor] = dc.useState(null)
  const [conflict, setConflict] = dc.useState(null)

  const [agentAspects, setAgentAspects] = dc.useState([])
  const [anchorAspects, setAnchorAspects] = dc.useState([])

  const [pendingAspect, setPendingAspect] = dc.useState(null)

  function resetPrompt() {
    setAgent(null)
    setEngine(null)
    setAnchor(null)
    setConflict(null)
    setAgentAspects([])
    setAnchorAspects([])
    setPendingAspect(null)
  }

  // Selection handlers
  function handleAspectSelected(card) {
    setPendingAspect(card)
  }

  function tuckAspectIntoAgent() {
    setAgentAspects([...agentAspects, pendingAspect])
    setPendingAspect(null)
  }

  function tuckAspectIntoAnchor() {
    setAnchorAspects([...anchorAspects, pendingAspect])
    setPendingAspect(null)
  }

  // Removal handlers
  function removeAgent() {
    setAgent(null)
    setAgentAspects([])
  }

  function removeEngine() { setEngine(null) }

  function removeAnchor() {
    setAnchor(null)
    setAnchorAspects([])
  }

  function removeConflict() { setConflict(null) }

  function removeAgentAspect(index) {
    setAgentAspects(agentAspects.filter((_, i) => i !== index))
  }

  function removeAnchorAspect(index) {
    setAnchorAspects(anchorAspects.filter((_, i) => i !== index))
  }

  function renderAspects(aspects, removeFn) {
    return aspects.map((a, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", marginLeft: "12px" }}>
        • <em>{a.value}</em>
        <button 
          style={{ marginLeft: "6px", fontSize: "0.8em" }}
          onClick={() => removeFn(i)}
        >
          ✕
        </button>
      </div>
    ))
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Story Seed Prompt Builder</h1>

      <button onClick={resetPrompt} style={{ marginBottom: "12px" }}>
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

        {agent && (
          <div style={{ marginBottom: "10px" }}>
            <strong>Agent:</strong> {agent.value}
            <button style={{ marginLeft: "6px" }} onClick={removeAgent}>✕</button>

            {agentAspects.length > 0 && (
              <>
                <div style={{ marginTop: "4px" }}>
                  <strong style={{ fontSize: "0.9em" }}>Aspects:</strong>
                </div>
                {renderAspects(agentAspects, removeAgentAspect)}
              </>
            )}
          </div>
        )}

        {engine && (
          <div style={{ marginBottom: "10px" }}>
            <strong>Engine:</strong> {engine.value}
            <button style={{ marginLeft: "6px" }} onClick={removeEngine}>✕</button>
          </div>
        )}

        {anchor && (
          <div style={{ marginBottom: "10px" }}>
            <strong>Anchor:</strong> {anchor.value}
            <button style={{ marginLeft: "6px" }} onClick={removeAnchor}>✕</button>

            {anchorAspects.length > 0 && (
              <>
                <div style={{ marginTop: "4px" }}>
                  <strong style={{ fontSize: "0.9em" }}>Aspects:</strong>
                </div>
                {renderAspects(anchorAspects, removeAnchorAspect)}
              </>
            )}
          </div>
        )}

        {conflict && (
          <div style={{ marginBottom: "10px" }}>
            <strong>Conflict:</strong> {conflict.value}
            <button style={{ marginLeft: "6px" }} onClick={removeConflict}>✕</button>
          </div>
        )}

      </div>

      {agent && engine && anchor && conflict && (
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

      {/* ASPECT DECISION */}
      {pendingAspect && (
        <div style={{
          padding: "10px",
          marginBottom: "16px",
          border: "1px dashed var(--background-modifier-border)"
        }}>
          <h3>Where does this aspect apply?</h3>
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
      )}

      {/* CHILD SELECTORS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px"
      }}>
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

return StoryPromptBuilder
```