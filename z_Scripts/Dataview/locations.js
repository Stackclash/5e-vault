const pages = dv.pages('"4. World Almanac"').where(p => {
    if (p.location) console.log(input.current.file, p.location)
    return p.location && p.location.path ? p.location == input.current.file.link.path : false
}).groupBy(p => p.file.folder.split('/').slice(-1))
console.log(pages.length)
for (let group of pages) {
    console.log(group)
    // dv.header(3, group.key)
    // dv.table(["Name", "Pronounced"],
    //     group.rows.map(p => p.name, p.pronounced)
    // )
}