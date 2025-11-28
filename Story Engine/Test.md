```datacorejsx
const dv = app.plugins.getPlugin('dataview').api

function parseObsidianTables(md) {
  const result = {};

  // RegEx to capture: table + following block ID (^something)
  const tableRegex = /((?:\|.*\n)+?)\s*\^([a-zA-Z0-9\-_]+)/g;

  let match;
  while ((match = tableRegex.exec(md)) !== null) {
    const tableText = match[1].trim()
    const blockId = match[2].trim()

    const lines = tableText.split("\n").map(l => l.trim())

    // Row 0 → header
    const headerCells = lines[0]
      .split("|")
      .map(x => x.trim())
      .filter(Boolean)

    // Remove header & divider row
    const dataRows = lines.slice(2)

    const rows = dataRows.map(line => {
      const cells = line
        .split("|")
        .map(x => x.trim())
        .filter(Boolean)

      const rowObj = {}
      headerCells.forEach((col, i) => {
        rowObj[col] = cells[i] ?? ""
      })
      return rowObj
    })

    result[blockId] = rows
  }

  return result
}

const text = await dv.io.load("Story Engine/Story Engine/Agents.md")
const tables = parseObsidianTables(text)

return function CardCategory({ file, label }) {

  // UI state
  const [activeSets, setActiveSets] = dc.useState(Object.keys(tables));

  const [search, setSearch] = dc.useState("");
  const [selected, setSelected] = dc.useState(null);
  const [turnIndex, setTurnIndex] = dc.useState(0);

  // filter tables based on active sets
  const filteredTables = Object.entries(tables)
    .filter(([blockID]) => {
      const match = Object.keys(tables).find(e => blockID.startsWith(e));
      return match ? activeSets[match] : true;
    })
    .flatMap(([_, rows]) => rows);

  // columns come from first row (they’re identical across rows)
  const columns = filteredTables.length > 0 ? Object.keys(filteredTables[0]) : [];

  // search match
  const visibleRows = search
    ? filteredTables.filter(r =>
        Object.values(r).some(v =>
          v.toLowerCase().includes(search.toLowerCase())
        )
      )
    : filteredTables;

  // random
  function pickRandom() {
    if (visibleRows.length === 0) return;
    const row = visibleRows[Math.floor(Math.random() * visibleRows.length)];
    setSelected(row);
    setTurnIndex(0);
  }

  // next column
  function turn() {
    if (!selected) return;
    setTurnIndex((turnIndex + 1) % columns.length);
  }

  return (
    <div style={{ padding: "12px", border: "1px solid var(--background-modifier-border)", borderRadius: "8px" }}>
      <h2>{label}</h2>

      {/* ACTIVATION TOGGLES */}
      <h3>Active Sets</h3>
      {Object.keys(tables).map(e => (
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={activeSets[e]}
            onChange={() =>
              setActiveSets({ ...activeSets, [e]: !activeSets[e] })
            }
          />
          {e}
        </label>
      ))}

      {/* SEARCH */}
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search cards…"
        value={search}
        onInput={e => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* RANDOM PICK */}
      <button onClick={pickRandom} disabled={visibleRows.length === 0}>
        🎲 Pick Random
      </button>

      {/* SELECTED CARD */}
      {selected && (
        <div style={{ padding: "10px", marginTop: "15px", border: "1px solid var(--background-modifier-border)", borderRadius: "6px" }}>
          <h3>Selected Card</h3>

          <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "8px" }}>
            {columns[turnIndex]}
          </div>

          <div style={{ padding: "6px 8px", background: "var(--background-secondary)", borderRadius: "4px" }}>
            {selected[columns[turnIndex]]}
          </div>

          <button onClick={turn} style={{ marginTop: "10px" }}>
            ↻ Turn (next column)
          </button>
        </div>
      )}
    </div>
  );
};
```
