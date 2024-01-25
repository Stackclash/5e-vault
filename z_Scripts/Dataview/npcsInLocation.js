// This will only handle child locations one level down
let currentPath = input.current.file.path

const childLocations = dv.pages('"4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Places of Interest" or "4. World Almanac/Shops"').where(p => {
    return p.location && p.location.path ? p.location.path == currentPath : false
})

const childLocationPaths = childLocations.map(p => p.file.path)

const pages = dv.pages('"4. World Almanac/NPCs"').where(p => {
    return p.location && p.location.path ? childLocationPaths.includes(p.location.path) : false
}).sort(p => dv.page(p.location.path).file.name)



if (pages.length > 0) {
    dv.table(["Name", "Location"],
        pages.map(p => [p.file.link, p.location])
    )
}