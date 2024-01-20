let currentPath = input.current.file.path

const pages = dv.pages('"4. World Almanac/NPCs"').where(p => {
    return p.location && p.location.path ? p.location.path == currentPath : false
}).sort(p => p.file.name)


dv.table(["Name"],
    pages.map(p => [p.file.link])
)