```datacorejsx
const dv = app.plugins.getPlugin("dataview").api

// ---------- TABLE PARSER ----------
function parseObsidianTables(md) {
  const result = {}
  const tableRegex = /((?:\|.*\n)+?)\s*\^([a-zA-Z0-9\-_]+)/g

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
function CardCategory({ file, label, onSelect }) {
  const [text, setText] = dc.useState(null)
  const [tables, setTables] = dc.useState({})
  const [fullValues, setFullValues] = dc.useState([])
  const [activeDecks, setActiveDecks] = dc.useState([])
  const [searchTerm, setSearchTerm] = dc.useState("")
  const [dropdown, setDropdown] = dc.useState([])
  const [selected, setSelected] = dc.useState(null)
  const [turnIndex, setTurnIndex] = dc.useState(0)

  // Load and parse file
  dc.useEffect(() => {
    dv.io.load(file).then(md => {
      const parsed = parseObsidianTables(md)
      setTables(parsed)

      setActiveDecks(Object.keys(parsed))
      setText(md)
    })
  }, [file])

  dc.useEffect(() => {
    buildFullValues()
  }, [activeDecks])

  function buildFullValues() {
    const result = activeDecks.flatMap(deck => {
      return tables[deck].map(row => {
        return Object.values(row).map((card, i) => ({
          deck,
          sideIndex: i,
          value: card
        }))
      })
    }).flat()

    console.log(result)
    setFullValues(result)
  }

  // ---------- SEARCH HANDLING ----------
  dc.useEffect(() => {
    if (!searchTerm) return setDropdown([])
    const matches = fullValues.filter(r =>
      r.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDropdown(matches)
  }, [searchTerm, fullValues])

  // ---------- SELECT CARD ----------
  function selectCard(card) {
    setSelected(card)
    setTurnIndex(0)
    setDropdown([])
    setSearchTerm("")

    if (onSelect) {
      onSelect({
        
      })
    }
  }

  function pickRandom() {
    if (!fullValues.length) return
    const choice = fullValues[Math.floor(Math.random() * fullValues.length)]
    selectCard(choice)
  }

  function turn() {
    if (!selected) return
    const newIndex = (turnIndex + 1) % columns.length
    setTurnIndex(newIndex)

    if (onSelect) {
      onSelect({
        card: selected,
        column: columns[newIndex],
        value: selected[columns[newIndex]],
        turnIndex: newIndex
      })
    }
  }

  // ---------- EXPANSIONS ----------
  const expansions = [...new Set(
    Object.keys(tables).map(blockID => {
      const parts = blockID.split("_")
      return parts.length >= 3 ? parts[1] : blockID
    })
  )]

  if (!text) {
    return <div>Loading {label}…</div>
  } else {
    return (
      <div style={{ padding: "12px", border: "1px solid var(--background-modifier-border)", borderRadius: "8px" }}>
        <h2>{label}</h2>
  
        {/* Active sets */}
        <h3>Active Sets</h3>
        {expansions.map(e => (
          <label style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={activeDecks[e]}
              onInput={() => setActiveDecks({ ...activeDecks, [e]: !activeDecks[e] })}
            />
            {e}
          </label>
        ))}
  
        {/* SEARCH */}
        <h3>Search</h3>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search cards…"
          style={{ width: "100%" }}
          onInput={e => setSearchTerm(e.target.value)}
        />
  
        {/* SEARCH DROPDOWN */}
        {dropdown.length > 0 && (
          <div style={{
            border: "1px solid var(--background-modifier-border)",
            borderRadius: "4px",
            marginTop: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            background: "var(--background-modifier-hover)"
          }}>
            {dropdown.map((card, idx) => {
              const display = columns.map(col => card[col]).join(" | ")
              return (
                <div
                  key={idx}
                  style={{ padding: "6px", cursor: "pointer" }}
                  onClick={() => selectCard(card)}
                  onMouseDown={e => e.preventDefault()} // prevent blur
                >
                  {display}
                </div>
              )
            })}
          </div>
        )}
  
        {/* RANDOM PICK */}
        <button
          onClick={pickRandom}
          disabled={!rows.length}
          style={{ marginTop: "8px" }}
        >
          🎲 Pick Random
        </button>
  
        {/* SELECTED CARD */}
        {selected && (
          <div style={{
            marginTop: "12px",
            padding: "10px",
            border: "1px solid var(--background-modifier-border)",
            borderRadius: "6px"
          }}>
            <h3>Selected Card</h3>
  
            <strong>{columns[turnIndex]}</strong>
  
            <div style={{
              marginTop: "6px",
              background: "var(--background-secondary)",
              padding: "8px",
              borderRadius: "4px"
            }}>
              {selected[columns[turnIndex]]}
            </div>
  
            <button onClick={turn} style={{ marginTop: "8px" }}>
              ↻ Turn (Next Column)
            </button>
          </div>
        )}
      </div>
    )
  }
}

return function View() {
  return <CardCategory file="Story Engine/Story Engine/Agents.md" label="Agents" onSelect={(selected) => console.log(selected)}/>
}
```
