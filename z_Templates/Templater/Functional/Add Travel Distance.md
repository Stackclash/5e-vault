<%*
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api

const locations = dv.pages('#location').where(l => l.file.path !== tp.config.active_file.path)
const result = await modalForm.openForm({
    title: 'Add Travel Distance',
    fields: [
        {
            name: 'location',
            label: 'Location',
            description: 'Which location does this route lead to?',
            isRequired: true,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: locations.map(l => ({
                    label: l.file.name,
                    value: l.file.path
                })).array(),
                source: 'fixed'
            }
        },
        {
            name: 'distance',
            label: 'Distance',
            description: 'How far is the location in miles?',
            isRequired: true,
            input: {
                type: 'number'
            }
        },
        {
            name: 'mode',
            label: 'Mode',
            description: 'How is the route travelled?',
            isRequired: true,
            input: {
                type: 'select',
                source: 'fixed',
                options: ['road', 'river', 'trail', 'sea', 'air'].map(m => ({ label: m, value: m }))
            }
        }
    ]
})
if (result.status !== 'ok') return
const { location: selectedPath, distance, mode } = result.getData()
const page = dv.page(selectedPath)
app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
    fm.routes = [
        ...(fm.routes || []),
        { to: "[[" + page.file.path + "|" + page.file.name + "]]", miles: Number(distance), mode }
    ]
})
-%>
