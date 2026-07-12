const { formatCurrency, calculateItemPrice } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

const item = input.current
const rarity = item.rarity ?? 'none'

// Only show a calculated price for items that have a meaningful rarity
if (rarity === 'none') return

const configPage = dv.page("Configuration")
const pricing = configPage?.item_pricing
const worldEconomicScale = dv.page(dv.page(configPage?.active_campaign)?.world)?.economic_scale ?? 1

const price = calculateItemPrice(item, pricing) * worldEconomicScale

dv.paragraph(`**Calculated Price:** ${formatCurrency(Math.round(price))}`)
