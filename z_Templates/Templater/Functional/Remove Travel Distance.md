<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api

const currentLocations = tp.frontmatter.travel
const result = await modalForm.openForm({
    title: 'Add Travel Distance',
    fields: [
        {
            name: 'location',
            label: 'Location',
            description: 'What location would you like to remove?',
            isRequired: true,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: currentLocations.map(l => ({
                    label: path.basename(l[0]),
                    value: l[0]
                })),
                source: 'fixed'
            }
        }
    ]
})
const { location: selectedLocation } = result.getData()
app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
    if (Array.isArray(fm.travel)) {
        const index = fm.travel.findIndex(r => r[0].includes(selectedLocation))

        fm.travel.splice(index, 1)
    }
})
-%>