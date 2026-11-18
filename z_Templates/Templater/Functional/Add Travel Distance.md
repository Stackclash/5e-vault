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
        }
    ]
})
if (result.status !== 'ok') return
const { location: selectedPath, distance } = result.getData()
const page = dv.page(selectedPath)
const here = tp.config.active_file.path
const linksTo = (p, path) => (p?.routes || []).some(r => dv.page(r?.to?.path ?? r?.to)?.file.path === path)
if (linksTo(dv.page(here), page.file.path) || linksTo(page, here)) {
    new Notice(`A route between ${tp.file.title} and ${page.file.name} already exists.`)
    return
}
app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
    fm.routes = [
        ...(fm.routes || []),
        { to: "[[" + page.file.path + "|" + page.file.name + "]]", miles: Number(distance) }
    ]
})
-%>
