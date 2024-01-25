// This will only handle child locations one level down
const currentPath = input.current.file.path

function getChildLocationPaths(locationPath) {
    return dv.pages('"4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Places of Interest" or "4. World Almanac/Shops"').where(p => {
        return p.location && p.location.path ? p.location.path == locationPath : false
    }).map(p => p.file.path)
}

let childLocationPathsList = getChildLocationPaths(currentPath),
currentListLength = childLocationPathsList.length

do {
    currentListLength = childLocationPathsList.length

    console.log("CALL --->>>", childLocationPathsList)
    childLocationPathsList = childLocationPathsList.concat(childLocationPathsList.flatMap(p => getChildLocationPaths(p)))
    //remove possible duplicates
    childLocationPathsList = childLocationPathsList.filter((p, index) => childLocationPathsList.indexOf(p) == index)
    

} while (childLocationPathsList.length != currentListLength)

const pages = dv.pages('"4. World Almanac/NPCs"').where(p => {
    return p.location && p.location.path ? childLocationPathsList.includes(p.location.path) : false
}).sort(p => dv.page(p.location.path).file.name)


if (pages.length > 0) {
    dv.table(["Name", "Location"],
        pages.map(p => [p.file.link, p.location])
    )
}