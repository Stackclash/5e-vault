# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

An Obsidian vault for running D&D 5e campaigns. The vault acts as a DM management system combining note-taking with live interactive components: Dataview queries, Datacore React components, Meta Bind inputs, and Templater automation all run inside Obsidian. This repository is not a typical Node.js project — most "code" runs inside Obsidian, not from the command line.

## CLI Scripts (run outside Obsidian)

The `z_Scripts/JS/` directory contains standalone Node.js scripts:

```bash
# Generate weather for a date range (reads config from frontmatter of the Weather Generation note)
node z_Scripts/JS/weatherGenerator.js

# Bulk-edit frontmatter fields across vault files
node z_Scripts/JS/editFrontmatter.js

# Process ttrpg-convert-cli output — rename, move, and relink compendium files
node z_Scripts/JS/process_5etools_files.js
```

Dependencies are in `package.json` (gray-matter, js-yaml, markov-chains, node-cache, readline-sync, sync-fetch). Run `npm install` if needed.

The Docker Compose file (`compose.yml`) runs Ollama + Open WebUI + LightRAG for the Neural Composer plugin's local AI chat. Paths in compose.yml are Windows-specific (`D:\Containers\...`).

## Vault Architecture

### Directory Layout

| Directory | Purpose |
|-----------|---------|
| `1. DM Toolkit/` | Session journals, prep notes, DM tools, calculators |
| `3. The Party/` | Player characters, parties, quests |
| `4. World Almanac/` | NPCs, locations (regions/settlements/POIs), shops, groups |
| `5. Mechanics/` | D&D rules content: bestiary, spells, items, races, classes |
| `6. Resources/` | Published 5e modules and books |
| `z_Scripts/` | All custom code (see below) |
| `z_Templates/` | Templater templates |
| `z_Bases/` | Obsidian Bases database views |
| `z_Assets/` | Images and media |
| `z_Extra/` | Name tables, tactics notes, ttrpg-convert config |

### Central Configuration

`1. DM Toolkit/Configuration.md` is the vault's config hub. Its YAML frontmatter stores:
- `active_party`, `active_world`, `active_campaign` — currently active game state
- `locations.*` — canonical folder paths for each content type (npcs, settlements, etc.)
- `relationship_mapping` — bidirectional relationship type definitions
- `shop_types`, `shop_sizes`, `item_pricing` — shop inventory generation rules

Templates and scripts read this via `dataview.api.page('Configuration')`.

### Script Organization (`z_Scripts/`)

**`Dataview/`** — Scripts executed inside Obsidian by the Dataview plugin via `dv.view("views/...")` or `self.require.import(...)`:
- `views/` — Display components (shopInventory, npcRelationships, encounterBenchmark, imageCarousel, etc.)
- `utils/` — Shared utilities (helpers.js, leafletConfig.js, metaBindInput.js, generateMetaBindInput.js)
- `data/` — Data access layer (players.js, etc.)
- `render/` — Rendering helpers (tables.js, etc.)
- Top-level: pcSessionMentions.js, sessionDetails.js, soundBoard.js

**`Datacore/`** — React (TSX) components for the Datacore plugin, rendered in `datacorejsx` code blocks:
- `FilterTable.tsx` — Reusable filterable table component

**`Templater/`** — Modules loaded by Templater templates via `tp.user.*`:
- `templateInit.js` — Shared boilerplate: `getPlugins()`, `openForm()`, `moveFile()`
- `formFields.js` — Factory functions for Modal Forms fields (name, alignment, gender, age, tagSelect, etc.)
- `dndBeyondCharacter.js` — D&D Beyond character import
- `startup.js` — Runs on vault open; downloads CSS snippets and JSON data

**`Meta Bind/`** — JavaScript for Meta Bind button actions:
- `arrayActions.js` — Unified dispatcher for frontmatter array ops (`add`/`remove`/`moveUp`/`moveDown`)
- Legacy files: addItem.js, removeItem.js, moveUp.js, moveDown.js

## Creating New Templates

Templates use a shared initialization pattern:

```javascript
<%*
const init = tp.user.templateInit()
const fields = tp.user.formFields()
const { dataview, modalForm, config } = init.getPlugins(tp, ['npcs'])  // config key(s) to validate

const data = await init.openForm(modalForm, {
  title: "My Template",
  fields: [
    fields.name("Name"),
    fields.tagSelect(dataview, "location", "Location", '#location'),
    fields.alignment(),
  ]
})

await init.moveFile(tp, config.locations.npcs, data.name)
-%>
```

`getPlugins()` validates that Dataview and Modal Forms plugins are loaded, reads `Configuration.md`, and throws with a user-visible notice on failure. It also enforces that templates only run in "create new file" mode.

## Adding New Dataview Views

Place the script in `z_Scripts/Dataview/views/`. Call it from a note with:

```javascript
await dv.view("views/myScript", { current: dv.current(), ...otherArgs })
```

Import shared utilities with:
```javascript
const { someUtil } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
```

## Using `arrayActions.js` in Meta Bind Buttons

```yaml
actions:
  - type: js
    file: z_Scripts/Meta Bind/arrayActions.js
    args:
      action: add        # or: remove, moveUp, moveDown
      field: items       # frontmatter array field name
      index: 0           # required for remove/moveUp/moveDown
```

## Frontmatter Conventions

Content notes use tags for type identification: `#npc`, `#location`, `#shop`, `#settlement`, `#region`, `#place-of-interest`, `#world`, `#party`, `#player`, `#quest`, `#session-journal`, `#campaign`, `#race`. Dataview/Datacore queries filter by these tags.

NPC notes include structured fields: `race`, `gender`, `age`, `alignment`, `location`, `condition`, `relationships`, `partyRelationships`.

Location notes use a hierarchy: world → region → settlement → place-of-interest, linked via `location` frontmatter field.

Session journals use `fc-end` (Calendarium end date), `locations` (array), and `summary` fields.
