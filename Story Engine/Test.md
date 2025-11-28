```datacorejsx
const dv = app.plugins.getPlugin("dataview").api;

// ---------- TABLE PARSER ----------
function parseObsidianTables(md) {
  const result = {};
  const tableRegex = /((?:\|.*\n)+?)\s*\^([a-zA-Z0-9\-_]+)/g;

  let match;
  while ((match = tableRegex.exec(md)) !== null) {
    const table = match[1].trim();
    const blockID = match[2].trim();

    const lines = table.split("\n").map(l => l.trim());
    const headers = lines[0]
      .split("|").map(c => c.trim()).filter(Boolean);

    const rows = lines.slice(2).map(line => {
      const cells = line.split("|").map(c => c.trim()).filter(Boolean);
      const o = {};
      headers.forEach((h, i) => (o[h] = cells[i] ?? ""));
      return o;
    });

    result[blockID] = rows;
  }

  return result;
}

// ---------- COMPONENT ----------
return function CardCategory({ file, label }) {
  const [text, setText] = useState(null);
  const [tables, setTables] = useState({});
  const [active, setActive] = useState({});
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [turnIndex, setTurnIndex] = useState(0);

  // Load and parse file
  useEffect(() => {
    dv.io.load(file).then(md => {
      const parsed = parseObsidianTables(md);
      setTables(parsed);

      // auto-build expansion toggles
      const expansions = Object.keys(parsed).map(blockID => {
        // convention: group_deck-category
        // deck = middle segment
        const parts = blockID.split("_");
        return parts.length >= 3 ? parts[1] : blockID;
      });

      setActive(
        Object.fromEntries(expansions.map(e => [e, true]))
      );

      setText(md);
    });
  }, [file]);

  if (!text) return <div>Loading {label}…</div>;

  // ---------- FILTER TABLES BY ACTIVE ----------
  const rows = Object.entries(tables)
    .filter(([blockID]) => {
      const parts = blockID.split("_");
      const expansion = parts.length >= 3 ? parts[1] : blockID;
      return active[expansion];
    })
    .flatMap(([_, rows]) => rows);

  const columns = rows.length ? Object.keys(rows[0]) : [];

  const visible = search
    ? rows.filter(r =>
        Object.values(r).some(v =>
          v.toLowerCase().includes(search.toLowerCase())
        )
      )
    : rows;

  function pickRandom() {
    if (!visible.length) return;
    const choice = visible[Math.floor(Math.random() * visible.length)];
    setSelected(choice);
    setTurnIndex(0);
  }

  function turn() {
    if (!selected) return;
    setTurnIndex((turnIndex + 1) % columns.length);
  }

  // compute unique expansions for the UI
  const expansions = [...new Set(
    Object.keys(tables).map(blockID => {
      const parts = blockID.split("_");
      return parts.length >= 3 ? parts[1] : blockID;
    })
  )];

  return (
    <div style={{
      padding: "12px",
      border: "1px solid var(--background-modifier-border)",
      borderRadius: "8px"
    }}>
      <h2>{label}</h2>

      {/* EXPANSION TOGGLES */}
      <h3>Active Sets</h3>
      {expansions.map(e => (
        <label style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={active[e]}
            onInput={() =>
              setActive({ ...active, [e]: !active[e] })
            }
          />
          {e}
        </label>
      ))}

      {/* SEARCH */}
      <h3>Search</h3>
      <input
        type="text"
        value={search}
        style={{ width: "100%" }}
        placeholder="Search…"
        onInput={e => setSearch(e.target.value)}
      />

      {/* RANDOM */}
      <button
        onClick={pickRandom}
        disabled={!visible.length}
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

          <button
            onClick={turn}
            style={{ marginTop: "8px" }}
          >
            ↻ Turn (Next Column)
          </button>
        </div>
      )}
    </div>
  );
};
```
