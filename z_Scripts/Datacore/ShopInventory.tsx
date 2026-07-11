// Reusable Datacore view: renders a shop note's `items` inventory as a table
// with per-item detail columns and a Meta Bind remove button per row.
//
// Load from a shop note's `datacorejsx` block:
//   const { ShopInventory } = await dc.require("z_Scripts/Datacore/shopInventory.tsx")
//   return function View() { return <ShopInventory /> }
//
// Pricing/formatting come from the shared ESM helpers. dc.require() can't load
// those (its modules must `return` their exports — `export` doesn't work), but
// the Modules plugin's global `self.require.import()` handles ESM, and Datacore
// wraps any script containing `await` in an async IIFE, so a top-level await
// works here even inside a required module.
const { calculateItemPrice, formatCurrency, capitalize } =
  await self.require.import("z_Scripts/Dataview/utils/helpers.js")

/** Meta Bind remove button (Obsidian markdown) that drops item `index`. */
function removeButtonMarkdown(index) {
  return [
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
  ].join("\n")
}

/** Pull the fields calculateItemPrice needs off a Datacore page. */
function priceFields(page) {
  return {
    rarity: page.value("rarity"),
    cost: page.value("cost"),
    tier: page.value("tier"),
    item_consumable: page.value("item_consumable"),
    attunement: page.value("attunement"),
    item_recharge: page.value("item_recharge"),
  }
}

function ShopInventory() {
  const shop = dc.useCurrentFile()
  const sourcePath = shop.$path

  // Ordered list of item links from the shop's frontmatter.
  let itemLinks = shop.value("items") ?? []
  if (!Array.isArray(itemLinks)) itemLinks = [itemLinks]
  itemLinks = itemLinks.filter((l) => l && l.path)

  // Resolve pricing config and the active world's economic scale.
  const config = dc.useQuery(`@page and $name = "Configuration"`)[0]
  const pricing = config?.value("item_pricing")

  const campaignPath = config?.value("active_campaign")?.path ?? ""
  const campaign = dc.useQuery(`@page and $path = "${campaignPath}"`)[0]

  const worldPath = campaign?.value("world")?.path ?? ""
  const world = dc.useQuery(`@page and $path = "${worldPath}"`)[0]
  const economicScale = world?.value("economic_scale") ?? 1

  const costModifier = shop.value("cost_modifier") ?? 1

  // Resolve every item page in one query, then index by path.
  const pathClause = itemLinks.map((l) => `$path = "${l.path}"`).join(" or ")
  const itemPages = dc.useQuery(
    pathClause ? `@page and (${pathClause})` : `@page and $path = ""`
  )
  const pageByPath = new Map(itemPages.map((p) => [p.$path, p]))

  const rows = itemLinks.map((link, index) => {
    const page = pageByPath.get(link.path)
    const basePrice = page ? calculateItemPrice(priceFields(page), pricing) : 0
    return {
      index,
      link,
      page,
      cost: Math.round(basePrice * economicScale * costModifier),
    }
  })

  const columns = [
    { id: "Item", value: (row) => (row.page ? row.page.$link : row.link) },
    { id: "Type", value: (row) => capitalize(row.page?.value("type") ?? "") },
    { id: "Rarity", value: (row) => capitalize(row.page?.value("rarity") ?? "") },
    {
      id: "Attunement",
      value: (row) => (row.page?.value("attunement") ? "Yes" : "No"),
    },
    {
      id: "Weight",
      value: (row) => {
        const w = row.page?.value("weight")
        return w != null && w !== "" ? `${w} lb.` : ""
      },
    },
    { id: "Cost", value: (row) => formatCurrency(row.cost) },
    {
      id: "",
      value: (row) => (
        <dc.Markdown
          content={removeButtonMarkdown(row.index)}
          sourcePath={sourcePath}
          inline={false}
        />
      ),
    },
  ]

  if (rows.length === 0) {
    return <p>No items in inventory.</p>
  }

  return <dc.Table rows={rows} columns={columns} />
}

return { ShopInventory }
