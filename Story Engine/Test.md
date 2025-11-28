```datacorejsx
const dv = app.plugins.getPlugin('dataview').api

function parseObsidianTables(md) {
  const result = {};
  const tableRegex = /((?:\|[^\n]*\n)+)\s*\^([A-Za-z0-9\-_]+)/g;

  let match;
  while ((match = tableRegex.exec(md)) !== null) {
    const tableText = match[1];
    const blockId = match[2];

    const lines = tableText
      .trim()
      .split("\n")
      .filter(l => l.trim().startsWith("|"));

    const header = lines[0]
      .slice(1, -1)
      .split("|")
      .map(x => x.trim());

    const rows = lines.slice(2).map(line => {
      const cells = line
        .slice(1, -1)
        .split("|")
        .map(x => x.trim());

      const obj = {};
      header.forEach((h, i) => (obj[h] = cells[i] || ""));
      return obj;
    });

    result[blockId] = { header, rows };
  }

  return result;
}


return async function View() {
  // Load category markdown file
  const text = await dv.io.load("Story Engine/Story Engine/Agents.md");
  const allDecks = parseObsidianTables(text);

  // State
  const [activeDecks, setActiveDecks] = dc.useState({});
  const [search, setSearch] = dc.useState("");
  const [activeCard, setActiveCard] = dc.useState(null);
  const [turnIndex, setTurnIndex] = dc.useState(0);

  // Initialize activeDecks (all on by default)
  React.useEffect(() => {
    const start = {};
    for (let key in allDecks) start[key] = true;
    setActiveDecks(start);
  }, []);

  // Build card pool based on active decks
  const activeRows = Object.entries(allDecks)
    .filter(([deck, _]) => activeDecks[deck])
    .flatMap(([deck, data]) =>
      data.rows.map(r => ({ deck, ...r }))
    );

  // Handle search
  const visibleRows = search
    ? activeRows.filter(card =>
        Object.values(card)
          .some(value => value.toLowerCase().includes(search.toLowerCase()))
      )
    : activeRows;

  // Random pick
  function pickRandom() {
    if (visibleRows.length === 0) return;
    const random = visibleRows[Math.floor(Math.random() * visibleRows.length)];
    setActiveCard(random);
    setTurnIndex(0);
  }

  // Turning the card (next column)
  function turnCard() {
    if (!activeCard) return;
    const keys = Object.keys(activeCard).filter(k => k !== "deck");
    setTurnIndex((turnIndex + 1) % keys.length);
  }

  // Render
  return (
    <div style={{ padding: "12px" }}>
      <h2>Card Category: Agents</h2>

      {/* Deck Toggles */}
      <h3>Decks</h3>
      {Object.keys(allDecks).map(deckId => (
        <div key={deckId}>
          <label>
            <input
              type="checkbox"
              checked={activeDecks[deckId]}
              onChange={() =>
                setActiveDecks({
                  ...activeDecks,
                  [deckId]: !activeDecks[deckId]
                })
              }
            />
            {deckId}
          </label>
        </div>
      ))}

      {/* Search */}
      <h3>Search</h3>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search cards..."
        style={{ width: "100%", padding: "6px" }}
      />

      {/* Actions */}
      <div style={{ marginTop: "12px" }}>
        <button onClick={pickRandom}>🎲 Random Card</button>
      </div>

      {/* Selected Card */}
      {activeCard && (
        <div style={{
          marginTop: "16px",
          padding: "12px",
          border: "1px solid var(--background-modifier-border)"
        }}>
          <h3>Selected Card</h3>
          <p><strong>Deck:</strong> {activeCard.deck}</p>

          <p style={{ fontSize: "1.2em", marginTop: "8px" }}>
            {Object.values(activeCard).filter((_, i) => i !== 0)[turnIndex]}
          </p>

          <button onClick={turnCard}>🔄 Turn</button>
        </div>
      )}
    </div>
  );
};
```
