```datacorejsx
const { CardCategory } = await dc.require(dc.headerLink("Story Engine/Story Engine Components.md", "CardCategory"))

function StoryPromptBuilder() {
  const [agent, setAgent] = dc.useState(null)
  const [engine, setEngine] = dc.useState(null)
  const [anchor, setAnchor] = dc.useState(null)
  const [conflict, setConflict] = dc.useState(null)
  const [aspect, setAspect] = dc.useState(null)

  function resetPrompt() {
    setAgent(null)
    setEngine(null)
    setAnchor(null)
    setConflict(null)
    setAspect(null)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Story Seed Prompt Builder</h1>

      <button
        onClick={resetPrompt}
        style={{ marginBottom: "12px" }}
      >
        Reset Prompt
      </button>

      <div style={{ 
        padding: "10px", 
        border: "1px solid var(--background-modifier-border)", 
        borderRadius: "8px",
        marginBottom: "16px"
      }}>
        <h2>Your Story Prompt</h2>

        {!agent && <p>Pick an <strong>Agent</strong> to begin.</p>}

        {agent && (
          <div style={{ marginBottom: "8px" }}>
            <strong>Agent:</strong> {agent.value}
          </div>
        )}

        {engine && (
          <div style={{ marginBottom: "8px" }}>
            <strong>Engine:</strong> {engine.value}
          </div>
        )}

        {anchor && (
          <div style={{ marginBottom: "8px" }}>
            <strong>Anchor:</strong> {anchor.value}
          </div>
        )}

        {conflict && (
          <div style={{ marginBottom: "8px" }}>
            <strong>Conflict:</strong> {conflict.value}
          </div>
        )}

        {aspect && (
          <div style={{ marginBottom: "8px" }}>
            <strong>Aspect (tucked):</strong> {aspect.value}
          </div>
        )}

        {agent && engine && anchor && conflict && aspect && (
          <div style={{
            background: "var(--background-secondary)",
            padding: "12px",
            borderRadius: "6px",
            marginTop: "12px"
          }}>
            <h3>Generated Prompt</h3>
            
            <p>
              <strong>{agent.value}</strong>{" "}
              {engine.value}{" "}
              <strong>{anchor.value}</strong>{" "}
              but {conflict.value}.{" "}
              (With {aspect.value})
            </p>
          </div>
        )}
      </div>

      {/* CHILD SELECTORS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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
          onSelect={setAspect}
        />
      </div>
    </div>
  )
}

return StoryPromptBuilder
```
