const { getChildLocationPaths } = await self.require.import("z_Scripts/Dataview/data/locations.js")
const { getNPCsInLocation } = await self.require.import("z_Scripts/Dataview/data/npcs.js")
const { renderTableWithHeader } = await self.require.import("z_Scripts/Dataview/render/tables.js")

const currentPath = input.current.file.path
const childPaths = getChildLocationPaths(currentPath)
const npcs = getNPCsInLocation(currentPath, childPaths)

if (npcs.length > 0) {
    renderTableWithHeader(
        dv.container,
        "Notable NPCs",
        2,
        ["Name", "Occupation", "Location"],
        npcs.map(n => [n.link, n.occupation, n.location])
    )
}