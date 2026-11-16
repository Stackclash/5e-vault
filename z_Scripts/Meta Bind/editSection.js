/**
 * Edit a body section that lives inside a callout (e.g. DM Notes inside the DM tab) in a modal, as plain
 * markdown. The script strips the callout prefix for editing and puts it back on save, so the text renders
 * as markdown in the tab and nobody has to type "> > " by hand.
 *
 * The section starts after the line `<prefix>## <heading>` and runs to the end of that callout: the last
 * consecutive line that starts with the prefix's first ">" level.
 *
 * Usage in a meta-bind-button:
 *   actions:
 *     - type: js
 *       file: z_Scripts/Meta Bind/editSection.js
 *       args:
 *         heading: DM Notes
 *         prefix: "> > "
 */
const heading = context.args.heading || 'DM Notes'
const prefix = context.args.prefix ?? '> > '
const bare = prefix.trimEnd()                      // "> >" : how an empty line in the callout looks
const headingLine = `${prefix}## ${heading}`
const modalForms = app.plugins.getPlugin('modalforms')?.api

const content = await app.vault.read(context.file)
const lines = content.split('\n')
const start = lines.findIndex(l => l.trimEnd() === headingLine.trimEnd())
if (start < 0) {
    new Notice(`No "${headingLine.trim()}" line in this note`)
} else if (!modalForms) {
    new Notice('Modal Forms plugin is not available')
} else {
    let end = start + 1
    while (end < lines.length && (lines[end].startsWith(prefix) || lines[end].trimEnd() === bare)) end++
    const strip = l => (l.startsWith(prefix) ? l.slice(prefix.length) : '')
    const current = lines.slice(start + 1, end).map(strip).join('\n').replace(/^\n+|\n+$/g, '')

    const result = await modalForms.openForm({
        title: heading,
        fields: [{ name: 'text', label: `${heading} (markdown)`, input: { type: 'textarea' } }],
    }, { values: { text: current } })

    if (result.status === 'ok') {
        const text = String(result.getData().text ?? '').replace(/\r\n/g, '\n').replace(/\n+$/, '')
        const body = text ? text.split('\n').map(l => (l ? prefix + l : bare)) : []
        await app.vault.process(context.file, data => {
            const now = data.split('\n')
            const s = now.findIndex(l => l.trimEnd() === headingLine.trimEnd())
            if (s < 0) return data
            let e = s + 1
            while (e < now.length && (now[e].startsWith(prefix) || now[e].trimEnd() === bare)) e++
            return [...now.slice(0, s + 1), ...body, ...now.slice(e)].join('\n')
        })
    }
}
