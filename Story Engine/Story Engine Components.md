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
function CardCategory({ file, type, label, onSelect }) {
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
          fontSize: "0.85em",
          lineHeight: "1.2em"
        }}
      >
        <div style={{ 
          fontWeight: "600", 
          fontSize: "1em", 
          marginBottom: "6px",
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
              padding: "2px 4px",
            }}
          >
            🎲
          </button>
        </div>

        {/* Collapsible advanced settings */}
        <details style={{ marginBottom: "6px" }}>
          <summary style={{ cursor: "pointer", fontWeight: 500 }}>Options</summary>

          {/* Active sets */}
          <div style={{ marginTop: "4px" }}>
            {Object.keys(tables).map(e => (
              <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <input
                  type="checkbox"
                  checked={activeDecks.includes(e)}
                  onInput={() => handleDeckToggle(e)}
                />
                <span>{e}</span>
              </label>
            ))}
          </div>

          {/* Search */}
          <div style={{ marginTop: "6px" }}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search…"
              style={{ width: "100%", fontSize: "0.85em", padding: "2px" }}
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

        {/* Selected card */}
        {selected && (
          <div style={{
            padding: "6px",
            border: "1px solid var(--background-modifier-border)",
            borderRadius: "4px",
            fontSize: "0.85em"
          }}>
            <div><strong>{selected.value}</strong></div>
            <div style={{ color: "var(--text-muted)" }}>({selected.deck})</div>

            {onSelect && (
              <button
                onClick={() => onSelect(selected)}
                style={{ width: "100%", marginTop: "6px", fontSize: "0.75em" }}
              >
                Select
              </button>
            )}

            <button
              onClick={turn}
              style={{ width: "100%", marginTop: "4px", fontSize: "0.75em" }}
            >
              ↻ Turn
            </button>
          </div>
        )}
      </div>
    )
  }
}

return { CardCategory }
```
