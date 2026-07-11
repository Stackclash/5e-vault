/**
 * Unified Meta Bind array action dispatcher.
 * Handles add, remove, moveUp, and moveDown operations on frontmatter arrays.
 *
 * `field` may be a simple top-level key (e.g. `shop_sizes`) or a nested path
 * into the frontmatter (e.g. `shop_types[0].filters`). Bracket and dot notation
 * are both supported.
 *
 * Usage in meta-bind-button actions:
 *   - type: js
 *     file: z_Scripts/Meta Bind/arrayActions.js
 *     args:
 *       action: add|remove|moveUp|moveDown
 *       field: shop_types[0].filters   # simple or nested path
 *       index: 0                        # required for remove, moveUp, moveDown
 *       template: { type: "" }          # optional seed object for add (defaults to {})
 */

// Resolves a nested path to the container array and the key it lives under,
// so callers can mutate `parent[key]` in place.
function resolveContainer(fm, path) {
    const tokens = String(path).match(/[^.\[\]]+/g) || []
    const key = tokens.pop()
    let cur = fm
    for (const t of tokens) {
        if (cur == null) return { parent: null, key }
        cur = cur[t]
    }
    return { parent: cur, key }
}

const actions = {
    add(fm, field, index, template) {
        const { parent, key } = resolveContainer(fm, field)
        if (!parent) return
        if (!Array.isArray(parent[key])) parent[key] = []
        parent[key].push(template ?? {})
    },
    remove(fm, field, index) {
        const { parent, key } = resolveContainer(fm, field)
        if (parent && Array.isArray(parent[key])) parent[key].splice(index, 1)
    },
    moveUp(fm, field, index) {
        const { parent, key } = resolveContainer(fm, field)
        if (parent && Array.isArray(parent[key]) && index > 0) {
            const arr = parent[key]
            const item = arr[index]
            arr.splice(index, 1)
            arr.splice(index - 1, 0, item)
        }
    },
    moveDown(fm, field, index) {
        const { parent, key } = resolveContainer(fm, field)
        if (parent && Array.isArray(parent[key]) && index < parent[key].length - 1) {
            const arr = parent[key]
            const item = arr[index]
            arr.splice(index, 1)
            arr.splice(index + 1, 0, item)
        }
    }
}

const action = context.args.action || 'add'
const field = context.args.field
const index = context.args.index
const template = context.args.template

if (!actions[action]) {
    console.error(`Unknown array action: ${action}`)
} else {
    app.fileManager.processFrontMatter(context.file, (fm) => {
        actions[action](fm, field, index, template)
    })
}
