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
- **arrayActions.js** — **Unified dispatcher** for frontmatter array operations. Supports `add`, `remove`, `moveUp`, and `moveDown` actions via a single `action` argument. Replaces the need for separate per-action files.
- **addItem.js** — Adds items to frontmatter arrays. *(Legacy — use arrayActions.js for new buttons)*
- **removeItem.js** — Removes items from frontmatter arrays by index. *(Legacy)*
- **moveUp.js** / **moveDown.js** — Reorders items within frontmatter arrays. *(Legacy)*

### `Templater/`
Helper modules used by [Templater](https://github.com/SilentVoid13/Templater) templates.

#### Shared Modules (used across all templates)
- **templateInit.js** — **Shared initialization module.** Provides `getPlugins()` for plugin validation and config loading, `openForm()` for modal form handling with auto-cancel detection, and `moveFile()` for file placement. Eliminates ~20 lines of boilerplate per template.
- **formFields.js** — **Reusable form field builders.** Factory functions for common Modal Forms field types: `name()`, `alignment()`, `gender()`, `age()`, `textArea()`, `date()`, `tagSelect()`, `tagMultiSelect()`, `folderSelect()`. Each returns a ready-to-use field config object.

#### Other Modules
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

## Creating New Templates

When creating a new Templater template that uses modal forms:

```javascript
// 1. Import shared modules
const init = tp.user.templateInit()
const fields = tp.user.formFields()

// 2. Initialize plugins (validates and loads config)
const { dataview, modalForm, config, path } = init.getPlugins(tp, ['requiredConfigKey'])

// 3. Open form with reusable field builders
const data = await init.openForm(modalForm, {
  title: "My Template Setup",
  fields: [
    fields.name("Item Name"),
    fields.alignment(),
    fields.tagSelect(dataview, "location", "Location", '#location'),
  ]
})

// 4. Move the file
await init.moveFile(tp, config.locations.myPath, data.name)
```

## Using arrayActions.js

```yaml
# In a meta-bind-button block:
actions:
  - type: js
    file: z_Scripts/Meta Bind/arrayActions.js
    args:
      action: add      # or: remove, moveUp, moveDown
      field: items      # frontmatter array field name
      index: 0          # required for remove/moveUp/moveDown
```
