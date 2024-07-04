<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    console.log(tp.config.active_file)
    const locations = dv.pages('#location')
    const selectedLocation = await tp.system.suggester(locations.map(p => p.file.name), locations.map(p => `[[${p.file.path}|${p.file.name}]]`), false, 'What location would you like to add?')
    console.log(selectedLocation)
    const inputtedDistance = await tp.system.prompt('How far is the location in miles?',null,true)
    app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
        const currentTravel = fm.travel
        fm.travel = [
            ...currentTravel,
            [selectedLocation, inputtedDistance]
        ]
    })
}

-%>