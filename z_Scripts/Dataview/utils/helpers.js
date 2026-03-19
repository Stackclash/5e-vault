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
 * Calculate the price of an item in copper pieces using the item_pricing configuration.
 * For items with rarity 'none', falls back to the item's hard-coded cost field.
 * Does NOT apply world economic scale — callers should multiply by that separately.
 * @param {object} item - Dataview page object for the item
 * @param {object} pricing - The item_pricing config object from Configuration frontmatter
 * @returns {number} Price in copper pieces
 */
export function calculateItemPrice(item, pricing) {
    if (!item) return 0

    const rarity = item.rarity ?? 'none'

    // Non-magic items (rarity: none) use their hard-coded cost field
    if (!rarity || rarity === 'none') {
        return item.cost ?? 0
    }

    const basePrices = pricing?.base_prices ?? {}
    const basePrice = basePrices[rarity] ?? 0

    let price = basePrice

    // Consumables are priced at a fraction of a permanent item (default: half price)
    if (item.item_consumable) {
        price *= pricing?.consumable_modifier ?? 0.5
    }

    // Attunement is a significant limitation (default: 10% discount)
    if (item.attunement) {
        price *= pricing?.attunement_modifier ?? 0.9
    }

    // Recharge limits reduce value relative to a permanent unlimited-use item
    const rechargeModifiers = pricing?.recharge_modifiers ?? {}
    const recharge = item.item_recharge ?? 'none'
    price *= rechargeModifiers[recharge] ?? 1.0

    return Math.round(price)
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
