const currentPage = input.current
const players = dv.pages('#player').filter(p => p.party.path === currentPage.file.path && p.active)
const locations = dv.pages('#location').sort(l => l.file.name)

const getCurrentLocation = () => {
    if (players.length === 0) return null

    const locationLinks = players
        .map(p => p.location)
        .filter(l => l && l.path)

    if (locationLinks.length === 0) return null

    const first = locationLinks[0]
    const same = locationLinks.every(l => l.path === first.path)

    return same ? first.toString() : null
}

const currentLocation = getCurrentLocation()

const select = document.createElement('select');

const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.text = 'Various Locations';
defaultOption.selected = currentLocation === null || currentLocation === '';
select.appendChild(defaultOption);

locations.forEach(l => {
    const option = document.createElement('option');
    option.value = l.file.link.toString();
    option.text = l.file.name;
    option.selected = currentLocation && option.value === currentLocation.toString();
    select.appendChild(option);
});

select.addEventListener('change', e => {
    const newLocation = e.target.value;

    players.forEach(p => {
        const file = app.vault.getAbstractFileByPath(p.file.path);
        if (file instanceof obsidian.TFile) {
            app.fileManager.processFrontMatter(file, fm => {
                fm.location = newLocation;
            });
        }
    });
});

dv.container.appendChild(select);