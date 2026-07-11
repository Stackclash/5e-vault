# Dataview Scripts

Scripts executed by the [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) plugin via `dv.view()`. Located in `z_Scripts/Dataview/`.

## Directory Structure

```
z_Scripts/Dataview/
├── data/           # Data query and aggregation
├── render/         # Display formatting
├── utils/          # Shared utilities
├── views/          # Complete view components
├── pcSessionMentions.js
├── sessionDetails.js
└── soundBoard.js
```

## Data Scripts (`data/`)

These scripts query vault data and return structured results:

| Script | Description |
|--------|-------------|
| `locations.js` | Aggregates location data with hierarchy information |
| `npcs.js` | Queries NPC notes with relationship and location data |
| `players.js` | Retrieves player character data across parties |
| `quests.js` | Lists quests with status and related entities |
| `sessions.js` | Aggregates session journals and prep notes |

## Render Scripts (`render/`)

Format data for display in Obsidian:

| Script | Description |
|--------|-------------|
| `cards.js` | Renders data as visual card layouts |
| `lists.js` | Renders data as formatted bullet lists |
| `tables.js` | Renders data as Dataview tables. Accepts a container DOM element (`dv.container`) |

## Utility Scripts (`utils/`)

Shared helper functions:

### `helpers.js`

Core utility library with 11 functions:

**Link utilities:**

- `getLinkPath(value)` — extracts vault path from a Dataview Link object or string
- `getLinkText(value)` — extracts display text from a Link or string

**Data manipulation:**

- `safeGet(obj, ...keys)` — safe nested property access (returns `undefined` if any key is missing)
- `normalizeArray(value)` — converts `null`/`undefined`/single values to arrays
- `sortBy(arr, keyFn)` — non-mutating sort with nulls last
- `filterDefined(arr)` — removes `null`/`undefined` entries
- `groupBy(arr, keyFn)` — groups array items by a key function
- `capitalize(str)` — uppercases the first letter

**Pricing utilities:**

- `calculateItemPrice(item, pricing)` — calculates item price in copper pieces using base price by rarity, tier modifiers (minor/major), consumable modifier (0.5×), attunement modifier (0.9×), and recharge modifiers
- `formatCurrency(cp)` — formats copper pieces as `"X gp, Y sp, Z cp"`

### `leafletConfig.js`

Helper for generating Leaflet map configuration blocks from note frontmatter.

### `metaBindInput.js` / `generateMetaBindInput.js`

Dynamically generates Meta Bind input field markup for use in Dataview-rendered views.

### `editingView.js`

Utility for the editing/validation dashboard that identifies incomplete or malformed notes.

## View Scripts (`views/`)

Complete UI components that combine data queries and rendering:

| Script | Description |
|--------|-------------|
| `imageCarousel.js` | Renders an image gallery from a note's frontmatter image list |
| `npcRelationships.js` | Displays a relationship network for an NPC with bidirectional links |
| `npcsInLocation.js` | Lists all NPCs that reside in a given location |
| `locationBreadcrumbs.js` | Renders hierarchical breadcrumb navigation for locations |
| `travelTimes.js` | Displays distance and travel time tables between locations |
| `shopInventory.js` | Renders a shop's inventory with item details and pricing |
| `itemPrice.js` | Calculates and displays an individual item's price |
| `monsterHarvesterTable.js` | Shows loot tables for harvesting monster parts |
| `encounterBenchmark.js` | Calculates encounter difficulty based on party level and monster CR |
| `partyLocation.js` | Shows the current location of the active party |
| `locations.js` | Renders location listings with filtering |
| `listsGroupedByTag.js` | Displays items grouped by their tags |
| `editingView.js` | Dashboard for finding notes with missing or incomplete data |

## Top-Level Scripts

| Script | Description |
|--------|-------------|
| `pcSessionMentions.js` | Lists all sessions where a specific player character is mentioned |
| `sessionDetails.js` | Extracts and displays session metadata from journal tags |
| `soundBoard.js` | Interactive music/audio player organized by category |
