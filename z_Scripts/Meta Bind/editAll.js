/**
 * "Edit all" (04 Expansion Q2): opens a Modal Forms pop-up pre-filled with the note's flat fields, in the
 * order Configuration.note_fields lists them for the note's type, and writes every change back in one
 * processFrontMatter call. Per-party fields are edited for the active party.
 *
 * Lives in z_Scripts/Meta Bind/, not z_Scripts/Templater/: Templater loads every .js in its folder as a
 * user function.
 *
 * Usage in a meta-bind-button:
 *   actions:
 *     - type: js
 *       file: z_Scripts/Meta Bind/editAll.js
 */
const { noteType, fieldsFor, enumOptions, labelFor } = await self.require.import("z_Scripts/Dataview/utils/noteFields.js")
const dv = app.plugins.getPlugin('dataview')?.api
const modalForms = app.plugins.getPlugin('modalforms')?.api
const linkPath = v => (v && typeof v === 'object' && v.path) ? v.path : (typeof v === 'string' ? v.replace(/^\[\[|\]\]$/g, '').split('|')[0] : null)

if (!dv || !modalForms) {
    new Notice('Edit all needs Dataview and Modal Forms')
} else {
    const config = dv.page('Configuration')
    const party = dv.page(linkPath(dv.page(linkPath(config?.active_campaign) ?? '')?.party) ?? '')?.file.name ?? ''
    const fm = app.metadataCache.getFileCache(context.file)?.frontmatter ?? {}
    const type = noteType(fm.tags)
    const entries = fieldsFor(config, type).filter(e => !(e.per_party && !party))
    if (!entries.length) {
        new Notice(`No note_fields configured for type "${type ?? 'unknown'}"`)
    } else {
        const pageOptions = source => {
            const pages = source.startsWith('#') ? dv.pages(source) : dv.pages(source)
            return pages.sort(p => p.file.name).array().map(p => ({ value: `[[${p.file.path}|${p.file.name}]]`, label: p.file.name }))
        }
        const toModal = e => {
            const base = { name: e.field, label: labelFor(e) }
            switch (e.input) {
                case 'textArea': return { ...base, input: { type: 'textarea' } }
                case 'number': return { ...base, input: { type: 'number' } }
                case 'toggle': return { ...base, input: { type: 'toggle' } }
                case 'inlineSelect': case 'select':
                    return { ...base, input: { type: 'select', source: 'fixed', options: [{ value: '', label: '(none)' }, ...enumOptions(config, e.enum).map(o => ({ value: o, label: o }))] } }
                case 'suggester':
                    return { ...base, input: { type: 'select', source: 'fixed', options: [{ value: '', label: '(none)' }, ...pageOptions(e.source)] } }
                case 'inlineListSuggester':
                    return { ...base, input: { type: 'multiselect', source: 'fixed', allowUnknownValues: false, options: pageOptions(e.source) } }
                case 'inlineList':
                    return { ...base, label: base.label + ' (comma-separated)', input: { type: 'text' } }
                default: return { ...base, input: { type: 'text' } }
            }
        }
        const current = e => {
            const v = e.per_party ? fm[e.field]?.[party] : fm[e.field]
            if (e.input === 'inlineList') return Array.isArray(v) ? v.join(', ') : (v ?? '')
            if (e.input === 'suggester') { const p = linkPath(v); const page = p && dv.page(p); return page ? `[[${page.file.path}|${page.file.name}]]` : (v ?? '') }
            if (e.input === 'inlineListSuggester') return (Array.isArray(v) ? v : []).map(x => { const page = dv.page(linkPath(x) ?? ''); return page ? `[[${page.file.path}|${page.file.name}]]` : x })
            return v ?? (e.input === 'toggle' ? false : '')
        }
        const values = Object.fromEntries(entries.map(e => [e.field, current(e)]))
        const result = await modalForms.openForm({ title: `Edit ${context.file.basename}`, fields: entries.map(toModal) }, { values })
        if (result.status === 'ok') {
            const data = result.getData()
            await app.fileManager.processFrontMatter(context.file, f => {
                for (const e of entries) {
                    let v = data[e.field]
                    if (v === undefined) continue
                    if (e.input === 'number') v = v === '' || v == null ? null : Number(v)
                    if (e.input === 'inlineList') v = String(v ?? '').split(',').map(s => s.trim()).filter(Boolean)
                    if (JSON.stringify(v) === JSON.stringify(values[e.field])) continue
                    if (e.per_party) f[e.field] = { ...(f[e.field] && typeof f[e.field] === 'object' ? f[e.field] : {}), [party]: v }
                    else f[e.field] = v
                }
            })
        }
    }
}
