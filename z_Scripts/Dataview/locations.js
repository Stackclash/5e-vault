let currentPath = input.current.file.path

const pages = dv.pages('"4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Places of Interest" or "4. World Almanac/Shops"').where(p => {
    return p.location && p.location.path ? p.location.path == currentPath : false
}).sort(p => p.file.name).groupBy(p => p.file.folder.split('/').slice(-1))

for (let group of pages) {
    dv.header(3, group.key)
    dv.table(["Name", "Pronounced"],
        group.rows.map(p => [p.file.link, p.pronounced])
    )
}