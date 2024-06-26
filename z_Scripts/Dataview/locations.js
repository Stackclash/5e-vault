let currentPath = input.current.file.path

const pages = dv.pages('#location').where(p => {
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

return 'test hello'