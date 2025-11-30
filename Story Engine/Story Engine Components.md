# CardCategory

```jsx
const dv = app.plugins.getPlugin("dataview").api

// ---------- TABLE PARSER ----------
function parseObsidianTables(md) {
  const lines = md.split(/\r?\n/);
  const tables = {};
  let currentTable = [];
  let collecting = false;

  function finalizeTable(blockId) {
    if (!blockId || currentTable.length === 0) return;

    // Parse header
    const headerCells = currentTable[0]
      .split("|")
      .map(c => c.trim())
      .filter(Boolean);

    // Data rows start after divider row
    const dataLines = currentTable.slice(2);

    const rows = dataLines.map(line => {
      const cells = line.split("|").map(c => c.trim()).filter(Boolean);
      const rowObj = {};
      headerCells.forEach((h, i) => {
        rowObj[h] = cells[i] ?? "";
      });
      return rowObj;
    });

    tables[blockId] = rows;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Detect table start: a line that begins with '|'
    if (line.startsWith("|")) {
      collecting = true;
      currentTable.push(line);
      continue;
    }

    // If we're collecting and encounter a non-table line:
    if (collecting && !line.startsWith("|")) {
      // Check if this is a block ID
      const blockMatch = line.match(/^\^([a-zA-Z0-9\-_]+)$/);

      if (blockMatch) {
        const blockId = blockMatch[1];
        finalizeTable(blockId);
      }

      // Reset for next table
      currentTable = [];
      collecting = false;
    }
  }

  return tables;
}

function testRegex(file,)

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
      <div style={{ padding: "12px", border: "1px solid var(--background-modifier-border)", borderRadius: "8px" }}>
        <h2>{label}</h2>
  
        {/* Active sets */}
        <h3>Active Sets</h3>
        {Object.keys(tables).map(e => (
          <label style={{ display: "block" }}>
            <input
              type="checkbox"
              checked={activeDecks.includes(e)}
              onInput={() => handleDeckToggle(e)}
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
              return (
                <div
                  key={idx}
                  style={{ padding: "6px", cursor: "pointer" }}
                  onClick={() => selectCard(card)}
                  onMouseDown={e => e.preventDefault()} // prevent blur
                >
                  {card.value} <em style={{ color: "var(--text-muted)" }}>({card.deck})</em>
                </div>
              )
            })}
          </div>
        )}
  
        {/* RANDOM PICK */}
        <button
          onClick={pickRandom}
          disabled={!fullValues.length}
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
  
            <strong>{selected.value}</strong> <em style={{ color: "var(--text-muted)" }}>({selected.deck})</em>
            <br/>
            {onSelect && 
            <>
              <button onClick={() => onSelect(selected)} style={{ marginTop: "8px" }}>
                Select
              </button>
              <br/>
            </>}
            <button onClick={turn} style={{ marginTop: "8px" }}>
              ↻ Turn (Next Column)
            </button>
          </div>
        )}
      </div>
    )
  }
}

return { CardCategory }
```
