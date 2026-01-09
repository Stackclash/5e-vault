const currentPage = input.current
const players = dv.pages('#player').filter(p => p.party.path === currentPage.file.path && p.active)
const locations = dv.pages('#location').sort(l => l.file.name)

const getCurrentLocation = () => {
    const locationLinks = players.map(p => p.location).filter(l => l != null)
    const firstLocation = locationLinks.length > 0 ? locationLinks[0] : null
    console.log('Location links:', locationLinks)
    const same = players.every(p => p.location && p.location.path === firstLocation.path)
    return same ? firstLocation.toString() : null
}

const currentLocation = getCurrentLocation() || ''

const select = document.createElement('select')
locations.forEach(l => {
    const option = document.createElement('option')
    option.value = l.file.link.toString()
    option.text = l.file.name
    select.appendChild(option)
})

select.addEventListener('change', (e) => {
    const newLocationPath = e.target.value
    players.forEach(p => {
        const tfile = app.vault.getAbstractFileByPath(p.file.path)
        if (tfile instanceof obsidian.TFile) {
            app.fileManager.processFrontMatter(tfile, fm => {
                fm.location = newLocationPath
            })
        }
    })
})
console.log(document)

document.appendChild(select)