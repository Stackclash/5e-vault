/**
 * Generates shop inventory based on shop_type, shop_size, and config settings.
 * Reads shop_types and shop_sizes from the Configuration note frontmatter,
 * randomly selects items from 5. Mechanics/Items that match the shop type,
 * and updates the shop note's items frontmatter.
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

let itemTypes = shopTypeConfig.item_types ?? []
if (typeof itemTypes === 'string') {
    itemTypes = itemTypes.split(',').map(s => s.trim()).filter(Boolean)
}
if (!Array.isArray(itemTypes)) itemTypes = [String(itemTypes)]

const allItems = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith('5. Mechanics/Items/'))

const matchingItems = []
for (const file of allItems) {
    const fm = app.metadataCache.getFileCache(file)?.frontmatter
    if (!fm) continue

    const itemType = fm.type ?? ''
    const rawSubtype = fm.subtype
    const itemSubtypes = rawSubtype
        ? (Array.isArray(rawSubtype) ? rawSubtype : [rawSubtype])
        : []
    const itemRarity = (fm.rarity ?? 'none').toLowerCase()

    const matches = itemTypes.some(it => itemType === it || itemSubtypes.includes(it))
    if (matches) {
        matchingItems.push({ path: file.path, name: file.basename, rarity: itemRarity })
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
