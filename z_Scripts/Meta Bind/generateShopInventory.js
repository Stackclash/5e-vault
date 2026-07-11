/**
 * Generates shop inventory based on shop_type, shop_size, and config settings.
 *
 * Reads shop_types and shop_sizes from the Configuration note frontmatter,
 * selects items from 5. Mechanics/Items that match the shop type's filter
 * rules, and writes the result to the shop note's `items` frontmatter.
 *
 * Filter model
 * ------------
 * Each shop type carries a `filters` array. An item belongs to the shop if it
 * matches ANY filter (rules are OR'd). Within a single filter, every condition
 * present must hold (conditions are AND'd). Supported conditions:
 *
 *   type         - item `type` must be one of these (weapon/armor/gear/wondrous/...)
 *   subtype_any  - item must have at least one of these subtypes
 *   subtype_all  - item must have all of these subtypes
 *   subtype_none - item must have NONE of these subtypes (exclusion)
 *   tags_any     - item must carry at least one of these tags (hierarchical,
 *                  prefix-aware: `item/shield` matches `item/shield/`)
 *   tags_all     - item must carry all of these tags
 *   tags_none    - item must carry NONE of these tags (exclusion)
 *   name_any     - item name must contain one of these substrings (case-insensitive)
 *   name_none    - item name must contain NONE of these substrings (exclusion)
 *
 * Any condition may be given as a comma-separated string or a YAML list.
 * A filter with no positive condition (only `name_none`, or empty) matches
 * nothing, so an empty rule never stocks the entire compendium.
 *
 * Legacy fallback: a shop type with no `filters` but an `item_types` string is
 * matched the old way (item.type or item.subtype equals one of the tokens).
 */

function rollDice(notation) {
    if (typeof notation === 'number') return Math.max(0, notation)
    const str = String(notation ?? '').trim()
    const staticNum = Number(str)
    if (!isNaN(staticNum) && str !== '') return Math.max(0, staticNum)

    const match = str.match(/^(\d+)d(\d+)([+-]\d+)?$/i)
    if (!match) return 0

    const numDice = parseInt(match[1])
    const sides = parseInt(match[2])
    const modifier = match[3] ? parseInt(match[3]) : 0

    let total = 0
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * sides) + 1
    }
    return Math.max(0, total + modifier)
}

function shuffle(array) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

// Normalizes a condition value (comma-string, list, or scalar) to a clean array.
function toList(val) {
    if (val == null || val === '') return []
    if (Array.isArray(val)) return val.map(v => String(v).trim()).filter(Boolean)
    return String(val).split(',').map(s => s.trim()).filter(Boolean)
}

function nameMatches(name, needle) {
    return name.toLowerCase().includes(needle.toLowerCase())
}

// Hierarchical tag match: `item/shield` matches `item/shield` and `item/shield/heavy`.
function tagMatches(itemTags, needle) {
    const n = needle.toLowerCase().replace(/\/+$/, '')
    return itemTags.some(t => {
        const tt = String(t).toLowerCase().replace(/\/+$/, '')
        return tt === n || tt.startsWith(n + '/')
    })
}

function itemMatchesRule(item, rule) {
    if (!rule || typeof rule !== 'object') return false

    const types = toList(rule.type)
    const subAny = toList(rule.subtype_any)
    const subAll = toList(rule.subtype_all)
    const subNone = toList(rule.subtype_none)
    const tagsAny = toList(rule.tags_any)
    const tagsAll = toList(rule.tags_all)
    const tagsNone = toList(rule.tags_none)
    const nameAny = toList(rule.name_any)
    const nameNone = toList(rule.name_none)

    // A rule needs at least one positive constraint, otherwise it would match
    // every item and quietly blow up the shop.
    const hasPositive = types.length || subAny.length || subAll.length ||
        tagsAny.length || tagsAll.length || nameAny.length
    if (!hasPositive) return false

    if (types.length && !types.includes(item.type)) return false
    if (subAny.length && !subAny.some(s => item.subtypes.includes(s))) return false
    if (subAll.length && !subAll.every(s => item.subtypes.includes(s))) return false
    if (subNone.length && subNone.some(s => item.subtypes.includes(s))) return false
    if (tagsAny.length && !tagsAny.some(t => tagMatches(item.tags, t))) return false
    if (tagsAll.length && !tagsAll.every(t => tagMatches(item.tags, t))) return false
    if (tagsNone.length && tagsNone.some(t => tagMatches(item.tags, t))) return false
    if (nameAny.length && !nameAny.some(n => nameMatches(item.name, n))) return false
    if (nameNone.length && nameNone.some(n => nameMatches(item.name, n))) return false

    return true
}

function itemMatchesShop(item, typeConfig) {
    const filters = typeConfig.filters
    if (Array.isArray(filters) && filters.length) {
        return filters.some(rule => itemMatchesRule(item, rule))
    }

    // Legacy fallback: flat item_types list matched against type or subtype.
    let itemTypes = typeConfig.item_types ?? []
    if (typeof itemTypes === 'string') {
        itemTypes = itemTypes.split(',').map(s => s.trim()).filter(Boolean)
    }
    if (!Array.isArray(itemTypes)) itemTypes = [String(itemTypes)]
    return itemTypes.some(it => item.type === it || item.subtypes.includes(it))
}

const configFile = app.vault.getAbstractFileByPath("1. DM Toolkit/Configuration.md")
if (!configFile) return

const configFM = app.metadataCache.getFileCache(configFile)?.frontmatter ?? {}
const shopFM = app.metadataCache.getFileCache(context.file)?.frontmatter ?? {}

const shopType = shopFM.type
const shopSize = shopFM.size

if (!shopType || !shopSize) return

const shopTypes = configFM.shop_types ?? []
const shopSizes = configFM.shop_sizes ?? []

const shopTypeConfig = shopTypes.find(st => st.name === shopType)
if (!shopTypeConfig) return

const sizeStock = shopSizes.filter(ss => ss.name === shopSize)
if (sizeStock.length === 0) return

const allItems = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith('5. Mechanics/Items/'))

const matchingItems = []
for (const file of allItems) {
    const fm = app.metadataCache.getFileCache(file)?.frontmatter
    if (!fm) continue

    const rawSubtype = fm.subtype
    const item = {
        path: file.path,
        name: file.basename,
        type: fm.type ?? '',
        subtypes: rawSubtype
            ? (Array.isArray(rawSubtype) ? rawSubtype : [rawSubtype])
            : [],
        tags: Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []),
        rarity: (fm.rarity ?? 'none').toLowerCase()
    }

    if (itemMatchesShop(item, shopTypeConfig)) {
        matchingItems.push(item)
    }
}

const selectedItems = []
for (const stockEntry of sizeStock) {
    const rarity = (stockEntry.rarity ?? 'none').toLowerCase()
    const count = rollDice(stockEntry.count)

    const rarityItems = matchingItems.filter(item => item.rarity === rarity)
    if (rarityItems.length === 0) continue

    const selected = shuffle(rarityItems).slice(0, Math.min(count, rarityItems.length))
    selectedItems.push(...selected.map(item => `[[${item.path}|${item.name}]]`))
}

app.fileManager.processFrontMatter(context.file, (fm) => {
    fm.items = selectedItems
})
