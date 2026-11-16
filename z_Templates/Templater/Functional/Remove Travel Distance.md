<%*
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api

// A route is stored on one end only, so list this note's routes and routes on other notes that point here.
const here = tp.config.active_file.path
const targetPath = r => dv.page(r?.to?.path ?? r?.to)?.file.path
const options = []
;(dv.page(here)?.routes || []).forEach((r, i) => {
    const page = dv.page(targetPath(r))
    options.push({ file: here, index: i, label: `${page?.file.name ?? r?.to} (${r?.miles} mi.)` })
})
dv.pages('#location').where(p => p.file.path !== here).forEach(p => {
    (p.routes || []).forEach((r, i) => {
        if (targetPath(r) === here) options.push({ file: p.file.path, index: i, label: `${p.file.name} (${r?.miles} mi., stored on ${p.file.name})` })
    })
})
if (options.length === 0) { new Notice('No routes to remove.'); return }

const result = await modalForm.openForm({
    title: 'Remove Travel Distance',
    fields: [
        {
            name: 'route',
            label: 'Route',
            description: 'Which route would you like to remove?',
            isRequired: true,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: options.map((o, n) => ({ label: o.label, value: String(n) })),
                source: 'fixed'
            }
        }
    ]
})
if (result.status !== 'ok') return
const chosen = options[Number(result.getData().route)]
const file = app.vault.getAbstractFileByPath(chosen.file)
app.fileManager.processFrontMatter(file, (fm) => {
    if (Array.isArray(fm.routes) && chosen.index < fm.routes.length) fm.routes.splice(chosen.index, 1)
})
-%>
