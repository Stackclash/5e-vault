<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentLocations = tp.frontmatter.travel
    const selectedLocation = await tp.system.suggester(currentLocations.map(p => p[0]), currentLocations.map(p => dv.page(p[0])), false, 'What location would you like to remove?')
    app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
        if (Array.isArray(fm.travel)) {
            const index = fm.travel.findIndex(r => r[0].includes(selectedLocation))

            fm.travel.splice(index, 1)
        }
    })
}

-%>