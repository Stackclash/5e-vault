// Shared utility functions for Dataview modules.

/** Extract the vault-relative path from a Dataview Link object, string, or return null. */
export function getLinkPath(value) {
    if (!value) return null
    if (typeof value === "object" && value.path) return value.path
    if (typeof value === "string") return value
    return null
}

/** Extract the display text from a Dataview Link object or string. */
export function getLinkText(value) {
    if (!value) return null
    if (typeof value === "object" && value.path) {
        return value.display || value.path.split("/").pop().replace(/\.md$/, "")
    }
    if (typeof value === "string") return value
    return null
}

/** Safely access a nested property chain, returning undefined if any step is null/undefined. */
export function safeGet(obj, ...keys) {
    return keys.reduce((current, key) => (current != null ? current[key] : undefined), obj)
}

/** Normalize a single value or undefined into an array. */
export function normalizeArray(value) {
    if (value == null) return []
    return Array.isArray(value) ? value : [value]
}

/** Sort an array by a key function (ascending, nulls last). Returns a new array. */
export function sortBy(arr, keyFn) {
    return [...arr].sort((a, b) => {
        const ka = keyFn(a), kb = keyFn(b)
        if (ka == null && kb == null) return 0
        if (ka == null) return 1
        if (kb == null) return -1
        return ka < kb ? -1 : ka > kb ? 1 : 0
    })
}

/** Remove null and undefined values from an array. */
export function filterDefined(arr) {
    return arr.filter(v => v != null)
}

/** Group an array into a plain object by a key function. */
export function groupBy(arr, keyFn) {
    return arr.reduce((groups, item) => {
        const key = keyFn(item)
        if (!groups[key]) groups[key] = []
        groups[key].push(item)
        return groups
    }, {})
}

/** Capitalize the first letter of a string. */
export function capitalize(str) {
    if (!str) return ""
    const s = String(str)
    return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Format a copper-piece amount into a human-readable gp/sp/cp string.
 * Returns "1 cp" for zero or negative values.
 */
export function formatCurrency(cp) {
    if (cp <= 0) return "1 cp"
    const parts = []
    let remaining = cp
    const gp = Math.floor(remaining / 100)
    remaining = gp > 0 ? remaining % 100 : remaining
    const sp = Math.floor(remaining / 10)
    remaining = sp > 0 ? remaining % 10 : remaining
    if (gp > 0) parts.push(`${gp} gp`)
    if (sp > 0) parts.push(`${sp} sp`)
    if (remaining > 0) parts.push(`${remaining} cp`)
    return parts.join(", ")
}
