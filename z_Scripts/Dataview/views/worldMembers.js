// World note, Overview tab: factions whose headquarters (`location`) or any of their `bases` sits in this world,
// and deities whose `worlds` list includes it. Reads frontmatter tags only, so template text such as
// `optionQuery(#faction)` never matches.
// Usage: await dv.view("views/worldMembers", {current: dv.current()})
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

const here = input.current.file.path
const asList = v => (v == null || v === "" ? [] : Array.isArray(v) ? v : [v])
const tagged = tag => dv.pages().where(p => asList(p.file.frontmatter?.tags).includes(tag))

// Walk a location's parent chain; true if it reaches this world.
function inWorld(link) {
    let path = getLinkPath(link)
    for (let i = 0; path && i < 20; i++) {
        if (path === here) return true
        path = getLinkPath(dv.page(path)?.location)
    }
    return false
}

const byName = (a, b) => a.file.name.localeCompare(b.file.name)
const factions = tagged("faction").where(p => [p.location, ...asList(p.bases)].some(inWorld)).array().sort(byName)
const deities = tagged("story-deity").where(p => asList(p.worlds).some(w => getLinkPath(w) === here)).array().sort(byName)

for (const [label, pages] of [["Factions", factions], ["Deities", deities]]) {
    dv.paragraph(`**${label}**`)
    if (pages.length) dv.list(pages.map(p => p.file.link))
    else dv.paragraph("*None yet.*")
}
