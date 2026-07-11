# World Building Templates

Templates for creating world elements. Located in `z_Templates/Templater/World Building/`.

## Location

**File:** `z_Templates/Templater/World Building/Location.md`

Creates a location note (region, settlement, point of interest). The template collects:

- **Name** — location name
- **Location type** — region, settlement, point of interest, etc.
- **Parent location** — where this location exists within the world hierarchy

Generated location notes include frontmatter for descriptions, map coordinates, and hierarchical relationships. Locations support Dataview-driven breadcrumb navigation and NPC/shop listings.

## NPC

**File:** `z_Templates/Templater/World Building/NPC.md`

Creates a non-player character note. The template collects:

- **Name** — NPC name
- **Gender** — Male/Female
- **Alignment** — D&D alignment
- **Location** — where the NPC resides

NPC notes include frontmatter for relationships, physical descriptions, personality traits, and location links. The relationship system supports bidirectional links (e.g., adding a "Father" relationship automatically adds a "Son" relationship on the other NPC).

## Shop

**File:** `z_Templates/Templater/World Building/Shop.md`

Creates a shop note. The template collects:

- **Name** — shop name
- **Shop type** — Blacksmith, Apothecary, Fletcher, General Store (configured in `Configuration.md`)
- **Shop size** — determines inventory rarity distribution and stock counts
- **Location** — where the shop is located

Shop notes support procedural inventory generation via the [Shop Inventory Generation](../tools/shop-inventory.md) tool.

## Leaflet Map

**File:** `z_Templates/Templater/World Building/Leaflet Map.md`

Creates a map note using the [Leaflet](https://plugins.javalent.com/Leaflet) plugin. The template sets up an interactive map with configurable bounds and markers for locations.

## Group

**File:** `z_Templates/Templater/World Building/Group.md`

Creates a group or organization note (guilds, factions, cults, etc.) with membership tracking and relationship links.

## Event

**File:** `z_Templates/Templater/World Building/Event.md`

Creates a world event note for tracking significant historical or ongoing events in the campaign world.
