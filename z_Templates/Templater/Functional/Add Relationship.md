<%*
// One form (04 Expansion Q6): target, type, optional DM note. Pushes a typed edge onto this note's
// `relationships`; writes nothing to the other note (relationships are stored on one side).
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const config = dv.page('Configuration')
const here = tp.config.active_file.path

const types = (config.relationship_types || []).map(t => t.type)
const targets = dv.pages('#npc or #player or #faction or #story-deity or #location')
    .where(p => p.file.path !== here)
    .sort(p => p.file.name)
    .array()

const result = await modalForm.openForm({
    title: 'Add Relationship',
    fields: [
        {
            name: 'target',
            label: 'Target',
            description: `Who or what does ${tp.file.title} have the relationship with?`,
            isRequired: true,
            input: {
                type: 'select',
                source: 'fixed',
                allowUnknownValues: false,
                options: targets.map(p => ({ value: p.file.path, label: p.file.name }))
            }
        },
        {
            name: 'type',
            label: 'Type',
            description: `Read as: the target is ${tp.file.title}'s <type> (e.g. employer, father, ally).`,
            isRequired: true,
            input: {
                type: 'select',
                source: 'fixed',
                allowUnknownValues: false,
                options: types.map(t => ({ value: t, label: t }))
            }
        },
        {
            name: 'note',
            label: 'Note (DM-only, optional)',
            input: { type: 'text' }
        }
    ]
})
if (result.status !== 'ok') return
const { target, type, note } = result.getData()
const page = dv.page(target)
const edge = { target: "[[" + page.file.path + "|" + page.file.name + "]]", type }
if (note && String(note).trim()) edge.note = String(note).trim()

await app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
    fm.relationships = [...(Array.isArray(fm.relationships) ? fm.relationships : []), edge]
})
-%>
