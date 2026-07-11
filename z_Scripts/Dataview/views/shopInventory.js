const { formatCurrency, calculateItemPrice } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const { renderTable } = await self.require.import("z_Scripts/Dataview/render/tables.js")

let items = input.current.items
if (!Array.isArray(items)) items = [items]

const { MarkdownRenderer } = require("obsidian")

const configPage = dv.page("Configuration")
const pricing = configPage?.item_pricing
const worldEconomicScale = dv.page(dv.page(configPage.active_campaign)?.world)?.economic_scale ?? 1
const costModifier = input.current.cost_modifier ?? 1

const sourcePath = input.current.file.path

// A meta-bind-button rendered through Obsidian's markdown renderer so the Meta
// Bind plugin processes it; a raw string would just print as text.
const removeButton = (index) => ({
    render: (td) => MarkdownRenderer.render(
        app,
        [
            "```meta-bind-button",
            "style: destructive",
            'label: ""',
            "icon: x",
            "tooltip: Remove item",
            "actions:",
            "  - type: js",
            "    file: z_Scripts/Meta Bind/arrayActions.js",
            "    args:",
            "      action: remove",
            "      field: items",
            `      index: ${index}`,
            "```",
        ].join("\n"),
        td,
        sourcePath,
        dv.component,
    ),
})

const rows = items.map((item, i) => {
    const itemPage = dv.page(item || "")
    const basePrice = calculateItemPrice(itemPage, pricing)
    const finalCost = Math.round(basePrice * worldEconomicScale * costModifier)
    return [item, formatCurrency(finalCost), removeButton(i)]
})

renderTable(dv.container, ["Item", "Cost", ""], rows)