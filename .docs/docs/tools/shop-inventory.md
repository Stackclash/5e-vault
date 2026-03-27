# Shop Inventory Generation

The shop inventory generator procedurally creates item inventories for shops based on their type and size configuration.

## Overview

**Script:** `z_Scripts/Meta Bind/generateShopInventory.js`
**Configuration:** `1. DM Toolkit/Configuration.md` (shop_types, shop_sizes, item_pricing)
**Item Source:** `5. Mechanics/Items/` folder

## How It Works

1. **Read shop metadata** — reads `shop_type` and `shop_size` from the current shop note's frontmatter
2. **Load configuration** — fetches shop type definitions, size definitions, and item pricing rules from `Configuration.md`
3. **Determine item categories** — looks up which item types/subtypes are valid for this shop type
4. **Query available items** — searches all files in `5. Mechanics/Items/` for matching items
5. **Filter by rarity** — groups items by rarity (common, uncommon, rare, very rare, legendary)
6. **Roll for quantity** — uses dice notation (e.g., `2d4+1`) or static numbers from the size config to determine how many items of each rarity to stock
7. **Random selection** — shuffles matching items and picks the rolled quantity
8. **Update frontmatter** — writes the selected items as wiki links to the shop note's `items` field

## Triggering Generation

Shop inventory generation is triggered via a **Meta Bind button** on shop notes:

```yaml
actions:
  - type: js
    file: z_Scripts/Meta Bind/generateShopInventory.js
```

## Shop Types

Defined in `Configuration.md` under the `shop_types` frontmatter key. Each type maps to a set of item types and subtypes:

| Shop Type | Item Types |
|-----------|-----------|
| Blacksmith | Weapons, armor, shields |
| Apothecary | Potions, herbs, components |
| Fletcher | Ranged weapons, ammunition |
| General Store | Adventuring gear, tools, miscellaneous |

## Shop Sizes

Defined in `Configuration.md` under the `shop_sizes` frontmatter key. Each size/rarity combination defines how many items of that rarity the shop stocks:

| Size | Common | Uncommon | Rare | Very Rare | Legendary |
|------|--------|----------|------|-----------|-----------|
| Small | `1d4` | `1d2` | — | — | — |
| Medium | `2d4` | `1d4` | `1d2` | — | — |
| Large | `3d4` | `2d4` | `1d4` | `1d2` | — |

*(Actual values are configured in `Configuration.md`)*

## Item Pricing

Generated items display prices calculated by `helpers.js`'s `calculateItemPrice()` function:

| Factor | Modifier |
|--------|----------|
| Base price by rarity | Common: 100 gp, Uncommon: 400 gp, Rare: 4,000 gp, Very Rare: 40,000 gp, Legendary: 200,000 gp |
| Minor tier | ×0.75 |
| Major tier | ×1.5 |
| Consumable | ×0.5 |
| Requires attunement | ×0.9 |
| Recharges at dawn | ×0.9 |
| Recharges on short rest | ×0.95 |
| Recharges on long rest | ×0.85 |

## Helper Functions

| Function | Purpose |
|----------|---------|
| `rollDice(notation)` | Parses dice notation (e.g., `2d6+3`) or static numbers and returns a random result |
| `shuffle(array)` | Fisher-Yates shuffle for random item selection |
