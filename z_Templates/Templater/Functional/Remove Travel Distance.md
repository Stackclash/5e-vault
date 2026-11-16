<%*
const modalForm = app.plugins.getPlugin('modalforms').api

const routes = tp.frontmatter.routes || []
if (routes.length === 0) { new Notice('No routes to remove.'); return }
const label = r => {
    const to = String(r?.to ?? '')
    const name = /\|([^\]]+)\]\]/.exec(to)?.[1] ?? to.replace(/^\[\[|\]\]$/g, '')
    return `${name} (${r?.miles} mi.)`
}
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
                options: routes.map((r, i) => ({ label: label(r), value: String(i) })),
                source: 'fixed'
            }
        }
    ]
})
if (result.status !== 'ok') return
const index = Number(result.getData().route)
app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
    if (Array.isArray(fm.routes) && index >= 0 && index < fm.routes.length) fm.routes.splice(index, 1)
})
-%>
