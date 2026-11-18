/**
 * Pop-out editor for long text fields (04 Expansion Q4; T10 fallback: Meta Bind text areas can't
 * auto-grow in Obsidian's Chromium). Opens the field in a Modal Forms text area, pre-filled,
 * and writes it back in one processFrontMatter call.
 *
 * Usage in a meta-bind-button:
 *   actions:
 *     - type: js
 *       file: z_Scripts/Meta Bind/popOutEditor.js
 *       args:
 *         field: description        # simple or nested path, e.g. facts[0].text
 *         label: Description        # optional
 */
const tokens = String(context.args.field).match(/[^.\[\]]+/g) || []
const label = context.args.label || tokens[tokens.length - 1]
const fm = app.metadataCache.getFileCache(context.file)?.frontmatter ?? {}
const currentValue = tokens.reduce((v, t) => (v == null ? v : v[t]), fm) ?? ''

const modalForms = app.plugins.getPlugin('modalforms')?.api
if (!modalForms) {
    new Notice('Modal Forms plugin is not available')
} else {
    const result = await modalForms.openForm({
        title: label,
        fields: [{ name: 'value', label, input: { type: 'textarea' } }],
    }, { values: { value: String(currentValue) } })

    if (result.status === 'ok') {
        const value = result.getData().value ?? ''
        await app.fileManager.processFrontMatter(context.file, (f) => {
            let parent = f
            for (const t of tokens.slice(0, -1)) {
                if (parent[t] == null) parent[t] = /^\d+$/.test(t) ? [] : {}
                parent = parent[t]
            }
            parent[tokens[tokens.length - 1]] = value
        })
    }
}
