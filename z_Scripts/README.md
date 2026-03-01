# z_Scripts

Custom scripts and automation code for the D&D 5e Obsidian Vault. Organized by the Obsidian plugin or runtime that executes them.

## Directory Structure

### `Datacore/`
React (TSX) components for the [Datacore](https://github.com/blacksmithgu/datacore) plugin.
- **FilterTable.tsx** — Reusable filterable data table component.

### `Dataview/`
Scripts executed by the [Dataview](https://github.com/blacksmithgu/obsidian-dataview) plugin using `dv.view()`.

- **pcSessionMentions.js** — Lists sessions where a player character is mentioned.
- **sessionDetails.js** — Extracts session details from journal tags.
- **soundBoard.js** — Interactive music/audio player organized by category.

#### `Dataview/utils/`
Shared utility functions used across Dataview scripts.
- **generateMetaBindInput.js** — Generates Meta Bind input fields dynamically.
- **metaBindInput.js** — Renders Meta Bind inputs for nested frontmatter fields.
- **leafletConfig.js** — Leaflet map configuration helper.

#### `Dataview/views/`
Display-focused Dataview scripts, called via `dv.view("views/...")`.
- **editingView.js** — Editing mode view helpers.
- **encounterBenchmark.js** — Encounter difficulty calculator.
- **imageCarousel.js** — Renders image carousels from frontmatter `images` field.
- **listsGroupedByTag.js** — Groups and displays items by tag.
- **locationBreadcrumbs.js** — Location hierarchy breadcrumb trail.
- **locations.js** — Child location listing for a parent location.
- **monsterHarvesterTable.js** — Monster parts/harvesting table.
- **npcRelationships.js** — NPC relationship network display.
- **npcsInLocation.js** — Lists NPCs present at a location.
- **partyLocation.js** — Shows current party location.
- **shopInventory.js** — Shop inventory with pricing.
- **travelTimes.js** — Travel distance/time calculations.

### `JS/`
Standalone Node.js scripts run outside of Obsidian (from the command line).
- **calendarDate.js** — Custom fantasy calendar date utilities.
- **editFrontmatter.js** — Bulk frontmatter editing across vault files.
- **process_5etools_files.js** — Processes 5etools compendium data from ttrpg-convert-cli output, applying rename/move/link-update rules.
- **weatherGenerator.js** — Procedural weather generation engine. Reads season/climate/state configuration from `1. DM Stuff/Tools/Weather Generation.md` frontmatter.

### `Meta Bind/`
JavaScript actions for the [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) plugin buttons.
- **addItem.js** — Adds items to frontmatter arrays.
- **removeItem.js** — Removes items from frontmatter arrays by index.
- **moveUp.js** / **moveDown.js** — Reorders items within frontmatter arrays.

### `Templater/`
Helper modules used by [Templater](https://github.com/SilentVoid13/Templater) templates.
- **build_yaml.js** — Recursive YAML frontmatter builder.
- **dndBeyondCharacter.js** — Imports character data from D&D Beyond.
- **find_file.js** — Fuzzy file search using minisearch.
- **get_all_files.js** — Recursive vault file listing.
- **startup.js** — Runs on vault startup to download external CSS snippets and JSON data.

## Adding New Scripts

1. Place the script in the folder matching the plugin/runtime that will execute it.
2. For shared utilities, use the `utils/` subfolder within the appropriate plugin folder.
3. For display-focused Dataview scripts, use `Dataview/views/`.
4. For standalone CLI tools, use `JS/`.
