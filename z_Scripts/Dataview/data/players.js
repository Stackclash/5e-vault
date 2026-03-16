// Player character data queries. Returns plain objects, never renders.
// Retrieves the Dataview API internally — do not pass dv as a parameter.

const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

/**
 * Get player characters with optional filters.
 * @param {Object} [options]
 * @param {string} [options.partyPath] - Only return players whose `party` field points to this path
 * @param {boolean} [options.activeOnly=true] - Only include players with `active: true`
 */
export function getPlayers({ partyPath = null, activeOnly = true } = {}) {
    const dv = app.plugins.getPlugin("dataview").api
    let pages = dv.pages("#player")

    if (activeOnly) {
        pages = pages.filter(p => p.active)
    }

    if (partyPath) {
        pages = pages.filter(p => getLinkPath(p.party) === partyPath)
    }

    return pages
        .map(p => ({
            link: p.file.link,
            name: p.file.name,
            path: p.file.path,
            level: p.level,
            location: p.location,
            party: p.party,
            active: p.active,
        }))
        .array()
}
