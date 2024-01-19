const pages = dv.pages('"4. World Almanac"').where(p => p.location.includes(input.name)).groupBy(p => p.folder.split('/').slice(-1))
console.log(pages.length)
for (let group of pages) {
    console.log(group)
    dv.header(3, group.key)
    dv.table(["Name", "Pronounced"],
        group.rows.map(p => p.name, p.pronounced)
    )
}