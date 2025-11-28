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


return function View() {

  return <h3>Hello</h3>
}
```
