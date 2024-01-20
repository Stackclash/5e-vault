let currentPath = input.current.file.path

const pages = dv.pages('"4. World Almanac/NPCs"').where(p => {
    return p.location && p.location.path ? p.location.path == currentPath : false
}).sort(p => p.file.name)

if (pages.length > 0) {
    dv.table(["Name"],
        pages.map(p => [p.file.link])
    )
}