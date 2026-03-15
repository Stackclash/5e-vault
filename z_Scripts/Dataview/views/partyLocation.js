const { getPlayers } = await self.require.import("z_Scripts/Dataview/data/players.js")
const { getAllLocations } = await self.require.import("z_Scripts/Dataview/data/locations.js")

const currentPath = input.current.file.path
const players = getPlayers({ partyPath: currentPath, activeOnly: true })
const locations = getAllLocations()

const getCurrentLocation = () => {
    const locationPaths = players.map(p => p.location?.path).filter(Boolean)
    if (locationPaths.length === 0) return null
    const first = locationPaths[0]
    return locationPaths.every(p => p === first) ? players[0].location?.toString() : null
}

const currentLocation = getCurrentLocation()

const select = document.createElement("select")

const defaultOption = document.createElement("option")
defaultOption.value = ""
defaultOption.text = "Various Locations"
defaultOption.selected = currentLocation === null || currentLocation === ""
select.appendChild(defaultOption)

locations.forEach(l => {
    const option = document.createElement("option")
    option.value = l.link.toString()
    option.text = l.name
    option.selected = currentLocation && option.value === currentLocation.toString()
    select.appendChild(option)
})

select.addEventListener("change", e => {
    const newLocation = e.target.value
    players.forEach(p => {
        const file = app.vault.getAbstractFileByPath(p.path)
        app.fileManager.processFrontMatter(file, fm => {
            fm.location = newLocation
        })
    })
})

dv.container.appendChild(select)