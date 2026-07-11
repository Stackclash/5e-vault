const { formatCurrency, calculateItemPrice } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const { renderTable } = await self.require.import("z_Scripts/Dataview/render/tables.js")

let items = input.current.items
if (!Array.isArray(items)) items = [items]

const configPage = dv.page("Configuration")
const pricing = configPage?.item_pricing
const worldEconomicScale = dv.page(dv.page(configPage.active_campaign)?.world)?.economic_scale ?? 1
const costModifier = input.current.cost_modifier ?? 1

const rows = items.map(item => {
    const itemPage = dv.page(item || "")
    const basePrice = calculateItemPrice(itemPage, pricing)
    const finalCost = Math.round(basePrice * worldEconomicScale * costModifier)
    return [item, formatCurrency(finalCost)]
})

renderTable(dv.container, ["Item", "Cost"], rows)