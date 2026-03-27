# Configuration Reference

The vault is centrally configured through `1. DM Toolkit/Configuration.md`. This file acts as both a configuration store (via YAML frontmatter) and an interactive dashboard.

## Active Settings

The top-level frontmatter defines what is currently active:

```yaml
active_world: "[[World Name]]"
active_party: "[[Party Name]]"
active_campaign: "[[Campaign Name]]"
```

These active references are used throughout the vault by templates and scripts to scope queries and operations.

## File Locations

Maps logical categories to vault folder paths. Used by templates to determine where new notes should be created:

```yaml
# DM locations
session_prep: "1. DM Toolkit/Session Preps"
session_journal: "1. DM Toolkit/Session Journals"

# Campaign locations
parties: "3. The Party"
players: "3. The Party/Players"
quests: "..."
campaigns: "..."

# World locations
worlds: "4. World Almanac/Worlds"
regions: "4. World Almanac/Regions"
settlements: "4. World Almanac/Settlements"
pois: "4. World Almanac/Points of Interest"
shops: "4. World Almanac/Shops"
npcs: "4. World Almanac/NPCs"
groups: "4. World Almanac/Groups"
monsters: "5. Mechanics/Bestiary"
```

## Relationship Mapping

Defines bidirectional NPC relationship types with gender-specific inverses:

```yaml
relationships:
  Father:
    male: Son
    female: Daughter
  Mother:
    male: Son
    female: Daughter
  Spouse:
    male: Spouse
    female: Spouse
  Sibling:
    male: Sibling
    female: Sibling
  # ... plus Cousin, Aunt, Uncle, Nephew, Niece, etc.
```

When a relationship is added to one NPC (e.g., "Father"), the system automatically adds the inverse (e.g., "Son" or "Daughter" based on the target NPC's gender) to the other NPC.

## Shop Configuration

### Shop Types

Maps shop types to the item categories they sell:

```yaml
shop_types:
  Blacksmith:
    types: [weapon, armor, shield]
  Apothecary:
    types: [potion, herb, component]
  Fletcher:
    types: [ranged weapon, ammunition]
  General Store:
    types: [adventuring gear, tool, miscellaneous]
```

### Shop Sizes

Defines how many items of each rarity a shop stocks, using dice notation:

```yaml
shop_sizes:
  Small:
    common: "1d4"
    uncommon: "1d2"
  Medium:
    common: "2d4"
    uncommon: "1d4"
    rare: "1d2"
  Large:
    common: "3d4"
    uncommon: "2d4"
    rare: "1d4"
    very_rare: "1d2"
```

## Item Pricing

Configures the magic item pricing system used by `calculateItemPrice()` in `helpers.js`:

```yaml
item_pricing:
  base_prices:
    common: 10000      # in copper pieces
    uncommon: 40000
    rare: 400000
    very_rare: 4000000
    legendary: 20000000
  modifiers:
    tier:
      minor: 0.75
      major: 1.5
    consumable: 0.5
    attunement: 0.9
    recharge:
      dawn: 0.9
      short_rest: 0.95
      long_rest: 0.85
```

Prices are stored in copper pieces internally and displayed using `formatCurrency()` which converts to `"X gp, Y sp, Z cp"` format.

## Dashboard Features

Beyond configuration, `Configuration.md` also serves as an interactive dashboard with:

- **Quick-create buttons** — six Meta Bind buttons for creating NPCs, locations, shops, PCs, session journals, and session preps
- **Active world/party selectors** — interactive dropdowns for switching the active context
- **World stats** — Dataview queries showing counts of locations, NPCs, shops, etc.
- **Fix notes** — Dataview queries identifying incomplete NPCs (missing gender/alignment), locations (missing type), and sessions (missing data)
- **Tabbed configuration editor** — Meta Bind tabs for editing all frontmatter configuration fields
