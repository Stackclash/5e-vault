const pages = dv.pages('"4. World Almanac/Places of Interest" or "4. World Almanac/Settlements"').where(p => {
    p.parent_location?.includes(dv.current().file.name)
}).groupBy(p => p.folder)
console.log(pages.length)
for (let group of pages) {
    console.log(group)
    dv.header(3, group.key)
    dv.table(["Name", "Pronounced"],
        group.rows.map(p => p.name, p.pronounced)
    )
}