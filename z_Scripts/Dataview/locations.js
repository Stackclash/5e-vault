let currentPath = input.current.file.path

const pages = dv.pages('"4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Places of Interest" or "4. World Almanac/Shops"').where(p => {
    return p.location && p.location.path ? p.location.path == currentPath : false
}).sort(p => p.file.name).groupBy(p => {
    const items = p.file.folder.split('/')
    return items[items.length - 1]
})

dv.header(2, "Notable Locations")

for (let group of pages) {
    dv.header(3, group.key)
    dv.table(["Name", "Pronounced"],
        group.rows.map(p => [p.file.link, p.pronounced])
    )
}