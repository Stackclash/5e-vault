const { getLocations } = await self.require.import("z_Scripts/Dataview/data/locations.js")
const { renderHeader, renderTable } = await self.require.import("z_Scripts/Dataview/render/tables.js")

const currentPath = input.current.file.path
const locations = getLocations({ parentPath: currentPath })

if (locations.length === 0) return

renderHeader(dv.container, "Notable Locations", 2)

// Group by the immediate containing folder name
const groups = {}
for (const loc of locations) {
    const parts = loc.folder.split("/")
    const key = parts[parts.length - 1]
    if (!groups[key]) groups[key] = []
    groups[key].push(loc)
}

for (const [key, locs] of Object.entries(groups)) {
    renderHeader(dv.container, key, 3)
    renderTable(dv.container, ["Name", "Pronounced"], locs.map(l => [l.link, l.pronounced]))
}