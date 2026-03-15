// Reusable list rendering helpers.
// Accept a container DOM element and pre-prepared data. Do not query the vault.

function renderItem(ul, item) {
    const li = ul.createEl("li")
    if (item && typeof item === "object" && item.path) {
        // Dataview Link object — render as an Obsidian internal link
        const a = li.createEl("a", {
            cls: "internal-link",
            text: item.display || item.path.split("/").pop().replace(/\.md$/, ""),
        })
        a.setAttribute("href", item.path)
        a.setAttribute("data-href", item.path)
    } else {
        li.textContent = item != null ? String(item) : ""
    }
    return li
}

/**
 * Render a <ul> list into container from an array of items.
 * Items may be strings, numbers, or Dataview Link objects.
 * @param {HTMLElement} container
 * @param {Array} items
 */
export function renderList(container, items) {
    const ul = container.createEl("ul", { cls: "dataview list-view-ul" })
    items.forEach(item => renderItem(ul, item))
    return ul
}

/**
 * Render a heading followed by a list.
 * @param {HTMLElement} container
 * @param {string} title
 * @param {number} [level=2]
 * @param {Array} items
 */
export function renderListWithHeader(container, title, level = 2, items) {
    container.createEl(`h${level}`, { text: String(title) })
    return renderList(container, items)
}
