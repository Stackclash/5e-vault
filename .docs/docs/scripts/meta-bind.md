# Meta Bind Scripts

Action scripts triggered by [Meta Bind](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/) plugin buttons. Located in `z_Scripts/Meta Bind/`.

## Overview

Meta Bind buttons in notes can trigger JavaScript actions that modify frontmatter arrays. These scripts enable interactive list management directly within Obsidian notes — adding items to inventories, reordering lists, and removing entries.

## `arrayActions.js` (Unified Dispatcher)

**File:** `z_Scripts/Meta Bind/arrayActions.js`

The primary action script that handles all frontmatter array operations through a single dispatcher. It replaces the older per-action scripts.

### Supported Actions

| Action | Description | Required Args |
|--------|-------------|---------------|
| `add` | Pushes a new empty object to the array | `field` |
| `remove` | Removes the item at the given index | `field`, `index` |
| `moveUp` | Swaps the item with the one above it | `field`, `index` |
| `moveDown` | Swaps the item with the one below it | `field`, `index` |

### Usage in Notes

Meta Bind buttons call this script with action arguments:

```yaml
actions:
  - type: js
    file: z_Scripts/Meta Bind/arrayActions.js
    args:
      action: add
      field: items
```

```yaml
actions:
  - type: js
    file: z_Scripts/Meta Bind/arrayActions.js
    args:
      action: remove
      field: items
      index: 0
```

## `generateShopInventory.js`

**File:** `z_Scripts/Meta Bind/generateShopInventory.js`

Procedurally generates shop inventory based on the shop's type and size. See the [Shop Inventory Generation](../tools/shop-inventory.md) tool documentation for full details.

## Legacy Scripts

The following scripts are older single-action files that have been superseded by `arrayActions.js`:

| Script | Action | Status |
|--------|--------|--------|
| `addItem.js` | Add item to array | Superseded |
| `removeItem.js` | Remove item from array | Superseded |
| `moveUp.js` | Move item up in array | Superseded |
| `moveDown.js` | Move item down in array | Superseded |

These remain in the vault for backward compatibility but new notes should use `arrayActions.js`.
