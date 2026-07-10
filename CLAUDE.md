# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Vault Is

An Obsidian vault for planning and running D&D 5e campaigns. It is not a software project — there is no build step, no test suite, and no linting. The "code" lives in Obsidian plugin scripts, Templater templates, and standalone Node.js utilities.

Git commits are automated by the Obsidian Git plugin every 5 minutes using the message format `vault backup: {{date}}`.

## Note Authoring Rules

**Always use the `vault-note` skill when creating or editing any `.md` file in this vault.** It enforces two non-negotiable conventions:

1. Internal links must use wikilink syntax `[[Note Name]]`, never markdown links.
2. Every note must be placed in the correct folder for its content type (see the folder map below).

### Frontmatter Tags

Each note type has a canonical tag used by Dataview/Datacore queries throughout the vault:

| Content Type | Tag |
|---|---|
| Session journal | `#session-journal` |
| Session prep | `#session-prep` |
| Player character | `#player` |
| Party | `#party` |
| Quest | `#quest` |
| NPC | `#npc` |
| Region | `#region` |
| Settlement | `#settlement` |
| Place of interest | `#place-of-interest` |
| Shop | `#shop` |
| World | `#world` |
| Campaign | `#campaign` |

Missing or wrong tags break Dataview/Datacore queries silently — always include the correct tag.

**Location co-tag:** location-type notes (region, settlement, place-of-interest, shop, world) carry a **second `location` tag** in addition to their specific tag — e.g. a settlement is tagged both `#settlement` and `#location`. The `#location` tag is what populates location-picker dropdowns throughout the vault.

### Frontmatter Schemas

Every note starts with `obsidianUIMode: preview` as its first frontmatter key. Canonical field sets per note type live in `z_Templates/Templater/`; the summary below covers the fields queries and scripts depend on:

| Note type | Key frontmatter fields |
|---|---|
| **NPC** | `statblock: inline`, `location` (wikilink to container), `condition: healthy`, `relationships`, `race`, `gender`, `age`, `alignment`, `occupation`, `groups`, `religions`, `personality`, `ideal`, `bond`, `flaw`, `goals`, `likes`, `dislikes`, `partyRelationships` (map keyed by party name), `pronounced`, `aliases`, `images` |
| **Location** (region / settlement / place-of-interest) | `location` (wikilink to parent), `images`, `pronounced`, `resources`, `population`, `terrain`, `rulers`, `government`, `army`, `religions`, `imports`, `exports`, `aliases`; tags = specific type + `location` |
| **Shop** | `location`, `owners`, `staff`, `cost_modifier: 1`, `shop_type`, `shop_size`, `items`, `resources`; tags = `shop` + `location` |
| **World** | `economic_scale`, `calendar`; tags = `world` + `location` |
| **Quest** | `active` (map keyed by party → bool), `completed` (map keyed by party → bool), `world` (wikilink), `description`, `steps`, `npcs` |
| **Player character** | Full D&D Beyond schema (`statblock: true`, `active`, `level`, `ac`, `hp`, `abilityScores`, `savingThrows`, `skills`, `classes`, `classFeatures`, etc.), plus `party` and `location` wikilinks. Generated from a D&D Beyond import — do not hand-author. |
| **Party** | Travel/time-tracking fields (`hours_per_day`, `travel_speed`, `travel_multiplier`, `exhaustion_level`, `movement`, `speed`, `travel_hours_per_day`, etc.) |
| **Session prep** | `date`, tag `session-prep` (minimal) |
| **Session journal** | `date`, `summary`, `party` (wikilink), `prep-notes` (wikilink to the prep note), plus fantasy-calendar fields `fc-date`, `fc-end`, `fc-category: Session`, `timelines`, `calendar`, `aat-render-enabled: true`; optional `locations` |
| **Campaign** | `party` (wikilink), `world` (wikilink), tag `campaign` |

Two cross-cutting conventions:
- **`location` encodes the world hierarchy** (World → Region → Settlement → Place of Interest). Set it to the immediate parent as a wikilink, not a folder path.
- **Per-party state is stored as maps keyed by the party's note name**, not bare booleans — quest `active`/`completed`, NPC `partyRelationships`.

> Note: the Quest Templater template (`z_Templates/Templater/Campaign/Quest.md`) currently writes `campaign:` instead of `world:` and is out of date; existing quest notes use `world:`, which is authoritative.

## Folder Map

| Content Type | Folder |
|---|---|
| Session journals | `1. DM Toolkit/Session Journals/` |
| Session prep | `1. DM Toolkit/Session Prep/` |
| DM reference tools / random tables | `1. DM Toolkit/Tools/` |
| Math calculators | `1. DM Toolkit/Calculators/` |
| DM knowledge / how-to-DM notes | `1. DM Toolkit/Knowledge/` |
| Campaign-level notes | `1. DM Toolkit/Campaigns/` |
| Unprocessed / rough notes | `2. Scratch Notes/` |
| Player characters | `3. The Party/Players/` |
| Parties | `3. The Party/Parties/` |
| Quests | `3. The Party/Quests/` |
| NPCs | `4. World Almanac/NPCs/` |
| Regions | `4. World Almanac/Regions/` |
| Settlements | `4. World Almanac/Settlements/` |
| Places of interest | `4. World Almanac/Places of Interest/` |
| Shops | `4. World Almanac/Shops/` |
| Worlds | `4. World Almanac/Worlds/` |
| 5e rules / monsters / spells / items | `5. Mechanics/` — **DO NOT EDIT** (generated) |
| Published modules | `6. Resources/5e Modules/` |
| Sourcebooks | `6. Resources/Books/` |
| Images / media | `z_Assets/` |
| Obsidian Bases views | `z_Bases/` |
| Scripts | `z_Scripts/` (see subdirectory rules below) |
| Templater templates | `z_Templates/Templater/` |
| Random content | `Random Content/` |
| Diagrams | `Excalidraw/` |

Session journals are further nested by party name:
`1. DM Toolkit/Session Journals/<Party Name>/S<N> <Title>.md`

## Scripts Architecture (`z_Scripts/`)

Place scripts in the subdirectory that matches the plugin/runtime executing them:

| Runtime | Path | Notes |
|---|---|---|
| Datacore (React/TSX) | `z_Scripts/Datacore/` | JSX components, `dc.*` API |
| Dataview | `z_Scripts/Dataview/` | `dv.view()` scripts |
| Dataview display scripts | `z_Scripts/Dataview/views/` | Called via `dv.view("views/...")` |
| Dataview utilities | `z_Scripts/Dataview/utils/` | Shared helpers |
| Node.js CLI tools | `z_Scripts/JS/` | Run outside Obsidian |
| Meta Bind buttons | `z_Scripts/Meta Bind/` | Use `arrayActions.js` for all array operations — do not create new per-action files |
| Templater helper modules | `z_Scripts/Templater/` | Imported via `tp.user.*` |

## Templater Templates

Templates live in `z_Templates/Templater/`. All templates that create notes follow this shared pattern using two helper modules:

```javascript
const init = tp.user.templateInit()   // z_Scripts/Templater/templateInit.js
const fields = tp.user.formFields()   // z_Scripts/Templater/formFields.js

const { dataview, modalForm, config, path } = init.getPlugins(tp, ['requiredConfigKey'])
const data = await init.openForm(modalForm, { title: "...", fields: [...] })
await init.moveFile(tp, config.locations.myPath, data.name)
```

`config` is loaded from `1. DM Toolkit/Configuration.md` frontmatter via Dataview. `config.locations.*` keys map to the folder paths configured there (e.g., `config.locations.npcs`, `config.locations.journals`).

## Active Campaign / World / Party

The vault's active context is stored in `1. DM Toolkit/Configuration.md` frontmatter — this is the single source of truth. Resolve these links before acting; never hardcode the current campaign, world, or party name:
- `active_world` — current world (link to `4. World Almanac/Worlds/`). Currently Eldoria.
- `active_party` — current party (link to `3. The Party/Parties/`). Currently Midnight Covenant.
- `active_campaign` — current campaign (link to `1. DM Toolkit/Campaigns/`). Currently The Hunt for Vecna.

Scripts and templates read this via `dataview.api.page('Configuration')`.

### Campaign bible

The `active_campaign` note **is** the campaign bible. It defines the campaign's premise, tone, power level, active threads, and content lines & veils. All campaign work follows it. If it's missing or silent on a point that matters (e.g. tone or lines & veils aren't written down yet), ask rather than assume.

### Party roster

The `active_party` note is the roster. Size, levels, and composition are surfaced there via its Dataview character and session-log queries — read the note rather than assuming. Encounter balancing uses the Lazy DM (Sly Flourish) encounter benchmark, per the party note's encounter infobox.

### Continuity pointers

- **Open threads / hooks:** quest notes in `3. The Party/Quests/`, plus the per-character "Character Tie-Ins" threads in the active campaign note.
- **Session notes:** `1. DM Toolkit/Session Journals/<Party Name>/` (currently `.../Midnight Covenant/`).

## Campaign Assistant & Skills

Campaign craft lives in project skills (`.claude/skills/`) loaded into the working conversation, plus one agent:

- `dm-assistant` (agent, `.claude/agents/`) — the DM's collaborator: session prep, post-session wrap-up, continuity, campaign Q&A, live-play support. Run `claude --agent dm-assistant` for a DM-focused session; it loads the skills below as needed.
- `world-builder` (skill) — NPCs, settlements, regions, dungeons, landmarks, factions.
- `story-creator` (skill) — quests, arcs, hooks, foreshadowing, pacing; writes encounter briefs, no combat math.
- `encounter-builder` (skill) — balanced combat, social, and puzzle encounters for the current party; treasure and magic-item rewards, existing or custom.
- `lore-researcher` (skill) — discovery methods for campaign history: session-journal sweeps, the world-hierarchy walk via `location` links, NPC connections, backlink greps.
- `dnd-qa` (skill) — rules, monsters, spells, and items answered from `5. Mechanics/` (read-only).

Load the matching skill before doing that kind of work, whether or not the session runs as dm-assistant. Note for all vault reading: **Dataview queries do not render outside Obsidian** — resolve rosters, quest lists, and similar data from note frontmatter (e.g. player notes' `party`/`active`/`level` fields), not from query blocks.

### Rules that bind all campaign work

1. Read existing vault lore on a subject before creating anything new. If new content would contradict established material, flag the conflict — never silently resolve it.
2. Established canon (names, deaths, treaties, outcomes the DM has finalized) is locked unless the DM explicitly reopens it.
3. Keep DM-only information (secrets, hidden motives, unrevealed twists) clearly separated and labeled — never blended into player-facing text.
4. Follow the active campaign note (the campaign bible) for tone, power level, and lines & veils.
5. Work iteratively: outline → DM approval → full detail. Don't jump to a finished draft unless asked.
6. Ask targeted questions when a request is underspecified rather than guessing.
7. Act as an expert collaborator: push back or offer alternatives when something is mechanically off or inconsistent with the established world.
8. Follow this file's Note Authoring Rules, Frontmatter Tags, and Folder Map — always via the `vault-note` skill. Never invent new conventions. If no convention covers a case, deliver content in the reply and ask before creating files.

## 5e Mechanics Content Generation

The `5. Mechanics/` folder is entirely generated by [ttrpg-convert-cli](https://github.com/nicholasgasior/ttrpg-convert-cli). Do not hand-edit files there.

To regenerate after updating sources:
1. Add/update source data files in `z_Extra/ttrpg-convert/`
2. Run the CLI binary: `z_Extra/ttrpg-convert/ttrpg-convert` with `z_Extra/ttrpg-convert/config.json`
3. Run `node z_Scripts/JS/process_5etools_files.js` to apply rename/move/link-update rules that map compendium paths into the vault folder structure

## Node.js Utilities

Dependencies are in `package.json` (gray-matter, js-yaml, markov-chains, node-cache, readline-sync, sync-fetch). Install with `npm install`.

Key standalone scripts:
- `z_Scripts/JS/process_5etools_files.js` — post-processes ttrpg-convert-cli output
- `z_Scripts/JS/weatherGenerator.js` — procedural weather engine; reads config from `1. DM Toolkit/Tools/Weather Generation.md` frontmatter
- `z_Scripts/JS/editFrontmatter.js` — bulk frontmatter editing across vault files
- `z_Scripts/JS/calendarDate.js` — fantasy calendar utilities (also imported inside Obsidian via `self.require.import`)

## Meta Bind Array Operations

For any Meta Bind button that modifies a frontmatter array, use the unified dispatcher:

```yaml
actions:
  - type: js
    file: z_Scripts/Meta Bind/arrayActions.js
    args:
      action: add        # or: remove, moveUp, moveDown
      field: items       # frontmatter array field name
      index: 0           # required for remove/moveUp/moveDown
```

The legacy files (`addItem.js`, `removeItem.js`, `moveUp.js`, `moveDown.js`) still exist but should not be used for new buttons.
