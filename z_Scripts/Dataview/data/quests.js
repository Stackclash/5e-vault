// Quest data queries. Returns plain objects, never renders.
// Retrieves the Dataview API internally — do not pass dv as a parameter.

/**
 * Get quest pages with optional filters.
 * @param {Object} [options]
 * @param {string} [options.status] - Filter by quest status frontmatter value
 * @param {string} [options.tag="#quest"] - Tag used to identify quest notes
 */
export function getQuests({ status = null, tag = "#quest" } = {}) {
    const dv = app.plugins.getPlugin("dataview").api
    let pages = dv.pages(tag)

    if (status) {
        pages = pages.where(p => p.status === status)
    }

    return pages
        .sort(p => p.file.name)
        .map(p => ({
            link: p.file.link,
            name: p.file.name,
            path: p.file.path,
            status: p.status,
            description: p.description,
            giver: p.giver,
        }))
        .array()
}
