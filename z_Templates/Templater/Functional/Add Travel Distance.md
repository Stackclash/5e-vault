<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const locations = dv.pages('#location')
    const result = await modalForm.openForm({
        title: 'Add Travel Distance',
        fields: [
            {
                name: 'location',
                label: 'Location',
                description: 'What location would you like to add?',
                isRequired: true,
                input: {
                    type: 'select',
                    allowUnknownValues: false,
                    hidden: false,
                    options: locations.map(l => ({
                        label: l.file.name
                        value: l.file.name
                    })),
                    source: 'fixed'
                }
            },
            {
                name: 'distance',
                label: 'Distance'
                description: 'How far is the location in miles?',
                isRequired: true,
                input: {
                    type: 'number'
                }
            }
        ]
    })
    const { location: selectedLocation, distance: inputtedDistance } = result.getData()
    app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
        const currentTravel = fm.travel
        fm.travel = [
            ...currentTravel,
            [selectedLocation, inputtedDistance]
        ]
    })
}

-%>