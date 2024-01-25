let currentPath = input.current.file.path

const pages = dv.pages('"4. World Almanac/NPCs"').where(p => {
    return p.location && p.location.path ? p.location.path == currentPath : false
}).sort(p => p.file.name)

pages.flatMap(p => {
    let currentPage = p,
    childLocations = [currentPage]

    while (currentPage.location && currentPage.location.path) {
        currentPage = dv.page(currentPage.location.path)
        childLocations.concat(currentPage)
    }

    return childLocations
})

if (pages.length > 0) {
    dv.table(["Name", "Location"],
        pages.map(p => [p.file.link, p.location])
    )
}