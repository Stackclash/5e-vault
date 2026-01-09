const currentPage = input.current
const players = dv.pages('#player').filter(p => p.party.path === currentPage.file.path && p.active)
const locations = dv.pages('#location')

const getCurrentLocation = () => {
    const locationLinks = players.map(p => p.location).filter(l => l != null)
    const firstLocation = locationLinks.length > 0 ? locationLinks[0] : null
    console.log('Location links:', locationLinks)
    const same = players.every(p => p.location && p.location.path === firstLocation.path)
    return same ? firstLocation : null
}

const currentLocation = getCurrentLocation()