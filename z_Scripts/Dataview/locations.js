const pages = dv.pages('"4. World Almanac"').where(p => {
    let currentPath = input.current.file.path

    return p.location && p.location.path ? p.location.path == currentPath : false
}).groupBy(p => p.file.folder.split('/').slice(-1))
for (let group of pages) {
    dv.header(3, group.key)
    dv.table(["Name", "Pronounced"],
        group.rows.map(p => [p.file.link, p.pronounced])
    )
}