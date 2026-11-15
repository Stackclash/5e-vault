# CLAUDE.md

Guidance for Claude Code in this repository.

## What this vault is

An Obsidian vault for planning and running D&D 5e campaigns. There is no build, test suite, or linter in the software sense. The "code" is Obsidian plugin scripts, Templater templates, and Node utilities. The Obsidian Git plugin commits every 5 minutes (`vault backup: {{date}}`), so the vault must stay usable after every edit.

`.claude/` is ignored by a global gitignore; files there are tracked only if force-added.

## Rules that bind all work

1. **Read before writing.** Look up what the vault already says about a subject before creating or changing anything.
2. **Canon is fixed.** Canon is: a session journal with `wrapped: true`; any fact or relationship the party has `learned`; any fact with `locked: true`; and state set by an approved session wrap. Agents never change canon. Only the DM reopens it, explicitly, per item; corrections to a wrapped journal go under `## Errata`.
3. **The plan bends to play.** Unplayed steps, unlearned unlocked facts, `secrets`, and prep are plan. Change them by proposal, and log the reason in the note's `## Plan Changelog`. Never alter what happened to fit the plan.
4. **Flag contradictions; never resolve them.** Report both sources and stop.
5. **The DM approves every reveal.** `revealed`, `reveal`, `public_name`, `summary`, every `learned` value, `locked`, and any `## Public` section are written only from a proposal line the DM accepted.
6. **Player-facing text is separate from DM text.** `summary`, learned `facts`, and `## Public` sections are the only player-facing content in the vault. Never infer what the party knows from DM-voice fields (`description`, `history`, `personality`, `goals`, `secrets`, quest `description`).
7. **Follow the campaign bible** (the active campaign note) for tone, power level, and lines and veils. If it is silent on something that matters, ask.
8. **Outline, approval, then detail**, unless asked for a finished draft. Ask targeted questions when underspecified. Push back with alternatives when something is off.
9. **Every note write goes through the `vault-note` skill.** No new folders, tags, fields, or note types without the DM's approval. If no convention covers a case, deliver content in the reply and ask.
10. **Never edit** `5. Mechanics/` (generated) or `6. Resources/` (source material).

## Active campaign, world, party

`1. DM Toolkit/Configuration.md` frontmatter key `active_campaign` is the single source of truth. The active world and party are the `world` and `party` fields on that campaign note. Never hardcode them. Per-party state is always a map keyed by the party note's name.

The campaign note is the campaign bible and is DM-only in whole.

## Finding things

Read `z_Extra/index/` first. It is generated from frontmatter by the `vault-lint` skill's scripts:

| File | Holds |
|---|---|
| `state.md` | Campaign, party, latest session, in-world date, active quests, unfiled live-session logs, build time |
| `entities.tsv` | Every NPC, place, faction, item, deity, quest, PC: type, name, aliases, path, parent, status, revealed-to, gist |
| `edges.tsv` | Every relationship and link: source, type, target, learned-by |
| `sessions.tsv` | Every journal: number, title, dates, ledger counts, summary |
| `facts.tsv` | Every learnable fact and who has learned it |

If the index is missing or older than the newest journal, say so and read frontmatter directly. Dataview, Datacore, and Meta Bind blocks do not render outside Obsidian: resolve rosters and lists from frontmatter, never from query blocks. For NPCs, quests, and factions the content is in frontmatter; the body is view scaffolding.

## Conventions in brief

Full schemas live in `.claude/skills/vault-note/references/`. The essentials:

- Internal links are wikilinks. In frontmatter: full path, `.md`, alias, quoted.
- Each note type has one folder and one canonical tag; location-type notes also carry `location`. A wrong tag hides the note from every query.
- `location` is the immediate parent (World → Region → Settlement → Place of Interest → Shop), or an NPC's or item's current whereabouts.
- Every entity has a one-line `gist` (DM-facing) and may have a `summary` (player-safe).
- `facts` is the list of learnable truths about an entity; `learned` on a fact or relationship links the journal where the party learned it.
- `relationships` is a list of typed, directed links stored on one side only. Factions, deities, story items, and custom creatures are notes, not strings. Campaign-made notes use the tags `story-item`, `story-deity`, `story-creature`; the bare `item`, `deity`, and `monster` tags belong to generated content in `5. Mechanics/`.
- Session journals are the record of play. Their link arrays (`party_present`, `locations`, `npcs`, `quests`, `items`, `factions`) are the ledger of what was actually encountered.

**Migration in progress.** The vault is moving to these schemas per `z_Extra/Vault Design/03 Migration Plan.md`. Until it finishes, older shapes exist (`groups`, `religions`, `"Name|type"` relationship strings, `player_impression`, `player_summary`, `public_premise`, journal `campaign:`, `travel`). The index normalizes them; the lint lists them. Do not write the old shapes, and do not convert notes piecemeal outside the migration.

## Agents, skills, commands

| Agent | Use |
|---|---|
| `dm-assistant` | Prep, planning, creative collaboration (`claude --agent dm-assistant`) |
| `table-assistant` | Fast read-only answers during play (`claude --agent table-assistant`) |
| `vault-keeper` | Session wrap, reveals, plan reconciliation, lint, upkeep |

| Skill | Use |
|---|---|
| `vault-note` | Schema and filing authority; load before any note write |
| `lore-researcher` | Find what is established; relationship traversal |
| `canon-check` | Check an idea against canon; reopen canon on DM instruction |
| `campaign-planner` | The campaign plan, and reconciling it with play |
| `session-prep` / `session-wrap` | Before and after a session |
| `reveal-review` | What the party knows; reveal backfill; pre-publish review |
| `world-builder` / `story-creator` | Lore; quests and hooks |
| `encounter-builder` / `statblock-creator` | Fights and loot; stat blocks |
| `dnd-qa` | Rules, monsters, spells, items from `5. Mechanics/` |
| `vault-lint` | Health check and index rebuild |
| `obsidian-bases`, `json-canvas` | `.base` and `.canvas` files |

Commands: `/prep`, `/wrap`, `/table`, `/reveal`, `/plan`, `/canon`, `/lint`.

Load the matching skill before doing that kind of work. Skills carry method; the rules above are not repeated in them.

## Scripts and templates

| Runtime | Path |
|---|---|
| Datacore (JSX) | `z_Scripts/Datacore/` |
| Dataview views, helpers | `z_Scripts/Dataview/` (`views/`, `utils/`, `data/`, `render/`) |
| Node CLI tools | `z_Scripts/JS/` |
| Meta Bind buttons | `z_Scripts/Meta Bind/` (use `arrayActions.js` for array edits) |
| Templater helpers | `z_Scripts/Templater/` |
| Templater templates | `z_Templates/Templater/` |
| Agent index and lint | `.claude/skills/vault-lint/scripts/` |

- Templates load folder paths from Configuration (`config.locations.*`). Details: `vault-note/references/templates.md`.
- **NPC template mirror.** `z_Extra/ttrpg-convert/templates/monster.txt`'s `{#if resource.isNpc}` branch mirrors `z_Templates/Templater/World Building/NPC.md`. Any change to one needs the equivalent change in the other.
- A field rename is finished only when every script, Base, template, and note body that reads the field is updated.

## Generated mechanics content

`5. Mechanics/` is generated by ttrpg-convert-cli. To regenerate: update sources in `z_Extra/ttrpg-convert/`, run the CLI with `z_Extra/ttrpg-convert/config.json`, then `node z_Scripts/JS/process_5etools_files.js`.

## Node utilities

Node is managed by mise. Dependencies are in `package.json` (`npm install`). `z_Scripts/JS/`: `process_5etools_files.js` (post-process the mechanics import), `weatherGenerator.js`, `calendarDate.js` (fantasy calendar; also imported inside Obsidian), `link-check.js` (read-only body-link check). Do not run `editFrontmatter.js`: it is a broken one-off that would duplicate frontmatter.
