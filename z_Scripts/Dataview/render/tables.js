// Reusable table rendering helpers.
// Accept a container DOM element and pre-prepared data. Do not query the vault.

function renderCell(td, cell) {
    if (cell == null) {
        td.textContent = ""
    } else if (typeof cell === "object" && typeof cell.render === "function") {
        // Custom cell — hand the caller the <td> to populate (e.g. a Meta Bind button)
        cell.render(td)
    } else if (typeof cell === "object" && cell.path) {
        // Dataview Link object — render as an Obsidian internal link
        const a = td.createEl("a", {
            cls: "internal-link",
            text: cell.display || cell.path.split("/").pop().replace(/\.md$/, ""),
        })
        a.setAttribute("href", cell.path)
        a.setAttribute("data-href", cell.path)
    } else {
        td.textContent = String(cell)
    }
}

/**
 * Render a table into container with the given column headers and rows.
 * @param {HTMLElement} container - DOM element to append the table into
 * @param {string[]} columns - Column header labels
 * @param {Array[]} rows - Array of row arrays; each cell may be a string, number, or Dataview Link
 */
export function renderTable(container, columns, rows) {
    const table = container.createEl("table", { cls: "dataview table-view-table" })
    const thead = table.createEl("thead")
    const headerRow = thead.createEl("tr")
    columns.forEach(col =>
        headerRow.createEl("th", { cls: "table-view-th", text: String(col) })
    )
    const tbody = table.createEl("tbody")
    rows.forEach(rowData => {
        const tr = tbody.createEl("tr")
        const cells = Array.isArray(rowData) ? rowData : [rowData]
        cells.forEach(cell => {
            const td = tr.createEl("td", { cls: "table-view-td" })
            renderCell(td, cell)
        })
    })
    return table
}

/**
 * Render a heading element (h1–h6) into container.
 * @param {HTMLElement} container
 * @param {string} text
 * @param {number} [level=2]
 */
export function renderHeader(container, text, level = 2) {
    return container.createEl(`h${level}`, { text: String(text) })
}

/**
 * Render a heading followed by a table.
 * @param {HTMLElement} container
 * @param {string} title
 * @param {number} level - Heading level (1–6)
 * @param {string[]} columns
 * @param {Array[]} rows
 */
export function renderTableWithHeader(container, title, level = 2, columns, rows) {
    renderHeader(container, title, level)
    return renderTable(container, columns, rows)
}
