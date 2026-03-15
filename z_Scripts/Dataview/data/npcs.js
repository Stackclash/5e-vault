// NPC data queries. Returns plain objects, never renders.
// Retrieves the Dataview API internally — do not pass dv as a parameter.

const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

/**
 * Get NPCs located at the given location path or any of the provided child paths.
 * Results are sorted by their location's name.
 * @param {string} locationPath - Vault-relative path of the primary location
 * @param {string[]} [childLocationPaths=[]] - Additional descendant location paths to include
 */
export function getNPCsInLocation(locationPath, childLocationPaths = []) {
    const dv = app.plugins.getPlugin("dataview").api
    const allPaths = new Set([locationPath, ...childLocationPaths])

    return dv.pages('"4. World Almanac/NPCs"')
        .where(p => {
            const locPath = getLinkPath(p.location)
            return locPath && allPaths.has(locPath)
        })
        .sort(p => {
            const locPage = dv.page(getLinkPath(p.location))
            return locPage ? locPage.file.name : ""
        })
        .map(p => ({
            link: p.file.link,
            name: p.file.name,
            path: p.file.path,
            occupation: p.occupation,
            location: p.location,
            relationships: p.relationships,
        }))
        .array()
}

/**
 * Get NPC pages with optional filters.
 * @param {Object} [options]
 * @param {string} [options.tag] - Dataview tag filter instead of folder (e.g. "#npc")
 * @param {string} [options.folder] - Folder source (default: NPC folder)
 * @param {string|Object} [options.location] - Filter by location link or path string
 * @param {boolean} [options.aliveOnly] - Exclude NPCs with `dead: true`
 */
export function getNPCs({ tag = null, folder = '"4. World Almanac/NPCs"', location = null, aliveOnly = false } = {}) {
    const dv = app.plugins.getPlugin("dataview").api
    let pages = tag ? dv.pages(tag) : dv.pages(folder)

    if (location) {
        const locationPath = getLinkPath(location)
        pages = pages.where(p => getLinkPath(p.location) === locationPath)
    }

    if (aliveOnly) {
        pages = pages.where(p => !p.dead)
    }

    return pages
        .map(p => ({
            link: p.file.link,
            name: p.file.name,
            path: p.file.path,
            occupation: p.occupation,
            location: p.location,
            relationships: p.relationships,
        }))
        .array()
}

/** Get a single NPC as a plain object by vault file path. Returns null if not found. */
export function getNPCByPath(filePath) {
    const dv = app.plugins.getPlugin("dataview").api
    const page = dv.page(filePath)
    if (!page) return null
    return {
        link: page.file.link,
        name: page.file.name,
        path: page.file.path,
        occupation: page.occupation,
        location: page.location,
        relationships: page.relationships,
    }
}
