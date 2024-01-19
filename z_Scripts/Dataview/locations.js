const pages = dv.pages('"4. World Almanac"').where(p => {
    if (p.location) console.log(input.current.file.link.path, p.location.path, p.location.path == input.current.file.link.path)
    return p.location && p.location.path ? p.location.path == input.current.file.link.path : false
}).groupBy(p => p.file.folder.split('/').slice(-1))
for (let group of pages) {
    dv.header(3, group.key)
    // dv.table(["Name", "Pronounced"],
    //     group.rows.map(p => p.name, p.pronounced)
    // )
}