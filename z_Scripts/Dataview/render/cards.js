// Reusable card/grid rendering helpers.
// Accept a container DOM element and pre-prepared data. Do not query the vault.

/**
 * Render a grid of cards into container.
 * @param {HTMLElement} container - DOM element to render into
 * @param {Object[]} items - Array of plain objects to display as cards
 * @param {Object} [options]
 * @param {string} [options.titleKey="name"] - Property key to use as the card title
 * @param {Array<{key: string, label?: string}>} [options.fields=[]] - Fields to display on each card
 * @param {string} [options.cls=""] - Additional CSS class for the grid wrapper
 */
export function renderCards(container, items, { titleKey = "name", fields = [], cls = "" } = {}) {
    const grid = container.createEl("div", {
        cls: ["dataview", "cards", cls].filter(Boolean).join(" "),
    })

    items.forEach(item => {
        const card = grid.createEl("div", { cls: "card" })
        const titleValue = item[titleKey]

        // Render title — support plain strings and Dataview Link objects
        if (titleValue && typeof titleValue === "object" && titleValue.path) {
            const titleEl = card.createEl("div", { cls: "card-title" })
            const a = titleEl.createEl("a", {
                cls: "internal-link",
                text: titleValue.display || titleValue.path.split("/").pop().replace(/\.md$/, ""),
            })
            a.setAttribute("href", titleValue.path)
            a.setAttribute("data-href", titleValue.path)
        } else {
            card.createEl("div", { cls: "card-title", text: String(titleValue ?? "") })
        }

        // Render each additional field row
        fields.forEach(({ key, label }) => {
            const val = item[key]
            if (val == null) return
            const row = card.createEl("div", { cls: "card-field" })
            if (label) row.createEl("span", { cls: "card-label", text: `${label}: ` })
            row.createEl("span", { cls: "card-value", text: String(val) })
        })
    })

    return grid
}
