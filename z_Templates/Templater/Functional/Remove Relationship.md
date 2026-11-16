<%*
// Lists edges stored on this note and edges on other notes that target it (each is stored on one side),
// labelled "type → name". Removes the chosen one from whichever note stores it.
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const here = tp.config.active_file.path

const targetPath = r => {
    if (typeof r === 'string') return dv.page(r.split('|')[0])?.file.path   // legacy "Name|type"
    const t = r?.target
    return dv.page(t?.path ?? String(t ?? '').replace(/^\[\[|\]\]$/g, '').split('|')[0])?.file.path
}
const typeOf = r => typeof r === 'string' ? (r.split('|')[1] || '').split(',')[0] : r?.type
const nameOf = path => dv.page(path)?.file.name ?? path

const options = []
;(dv.page(here)?.relationships || []).forEach((r, i) => {
    options.push({ file: here, index: i, label: `${typeOf(r)} → ${nameOf(targetPath(r))}` })
})
dv.pages('#npc or #player or #faction or #story-deity').where(p => p.file.path !== here).forEach(p => {
    (p.relationships || []).forEach((r, i) => {
        if (targetPath(r) === here) options.push({ file: p.file.path, index: i, label: `${p.file.name}: ${typeOf(r)} → ${tp.file.title} (stored on ${p.file.name})` })
    })
})
if (options.length === 0) { new Notice('No relationships to remove.'); return }

const result = await modalForm.openForm({
    title: 'Remove Relationship',
    fields: [
        {
            name: 'edge',
            label: 'Relationship',
            isRequired: true,
            input: {
                type: 'select',
                source: 'fixed',
                allowUnknownValues: false,
                options: options.map((o, n) => ({ value: String(n), label: o.label }))
            }
        }
    ]
})
if (result.status !== 'ok') return
const chosen = options[Number(result.getData().edge)]
await app.fileManager.processFrontMatter(app.vault.getAbstractFileByPath(chosen.file), (fm) => {
    if (Array.isArray(fm.relationships) && chosen.index < fm.relationships.length) fm.relationships.splice(chosen.index, 1)
})
-%>
