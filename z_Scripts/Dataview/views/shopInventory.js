const { formatCurrency } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const { renderTable } = await self.require.import("z_Scripts/Dataview/render/tables.js")

let items = input.current.items
if (!Array.isArray(items)) items = [items]

const configPage = dv.page("Configuration")
const worldEconomicScale = dv.page(configPage.active_world)?.economic_scale ?? 1
const costModifier = input.current.cost_modifier ?? 1

const rows = items.map(item => {
    const baseCost = dv.page(item || "")?.cost ?? 0
    const finalCost = baseCost * worldEconomicScale * costModifier
    return [item, formatCurrency(finalCost)]
})

renderTable(dv.container, ["Item", "Cost"], rows)