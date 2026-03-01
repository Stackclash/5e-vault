/**
 * Unified Meta Bind array action dispatcher.
 * Handles add, remove, moveUp, and moveDown operations on frontmatter arrays.
 *
 * Usage in meta-bind-button actions:
 *   - type: js
 *     file: z_Scripts/Meta Bind/arrayActions.js
 *     args:
 *       action: add|remove|moveUp|moveDown
 *       field: fieldName
 *       index: 0  # required for remove, moveUp, moveDown
 */
const actions = {
    add(fm, field) {
        fm[field].push({})
    },
    remove(fm, field, index) {
        fm[field].splice(index, 1)
    },
    moveUp(fm, field, index) {
        if (index > 0) {
            const item = fm[field][index]
            fm[field].splice(index, 1)
            fm[field].splice(index - 1, 0, item)
        }
    },
    moveDown(fm, field, index) {
        if (index < fm[field].length - 1) {
            const item = fm[field][index]
            fm[field].splice(index, 1)
            fm[field].splice(index + 1, 0, item)
        }
    }
}

const action = context.args.action || 'add'
const field = context.args.field
const index = context.args.index

if (!actions[action]) {
    console.error(`Unknown array action: ${action}`)
} else {
    app.fileManager.processFrontMatter(context.file, (fm) => {
        actions[action](fm, field, index)
    })
}
