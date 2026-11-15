# Phase 4 — Migration plan

For a Sonnet-class model working without the design conversation. Execute batches in order. Each batch is self-contained.

## 0. Read this first

**Required reading before any batch:** `CLAUDE.md`, then `.claude/skills/vault-note/SKILL.md` and all six files in `.claude/skills/vault-note/references/`. They define the target schemas. This plan only says how to get there.

**Vault root:** `/Users/rcox/Projects/Personal/5e-vault`. **Never touch** `5. Mechanics/` or `6. Resources/`.

**Batch markers**

- **[M] mechanical** — do it, verify, report.
- **[J] judgment** — prepare a numbered proposal, stop, and write only what the DM accepts. Never decide what the party knows, which entities merge, or what a relationship is.
- **[DM] DM action** — something the DM does in Obsidian; ask and wait.

**Working rules**

1. **Before each batch:** the working tree must be clean (`git status --short` shows nothing but `.obsidian/workspace.json`). Obsidian Git commits every 5 minutes; wait for it or ask the DM to commit. Record `git rev-parse HEAD` in your report. This SHA is the rollback point.
2. **Rollback for any batch:** `git checkout <SHA> -- <the paths the batch touched>`. Each batch lists its paths.
3. **Ask the DM to close the affected notes in Obsidian** before a batch that rewrites many files. Meta Bind can write a stale value back into a note that is open.
4. **Frontmatter edits use a Node script, never hand edits across many files.** Parse with `gray-matter` (in `node_modules`), change `data`, and write back as `'---\n' + yaml.dump(data, {lineWidth: -1, quotingType: '"', forceQuotes: false}) + '---\n' + body`, with the body **byte-identical**. Keep key order; `obsidianUIMode` stays first. Do **not** use `z_Scripts/JS/editFrontmatter.js` (it duplicates frontmatter). Put one-off scripts in `z_Extra/migration/` and delete that folder in batch H6.
5. **Every script has a `--dry-run`** that prints the files it would change and a count. Run dry, compare the count to the batch's expected count, then run for real. A count that differs from the expected count by more than a few is a stop-and-ask.
6. **Body edits are exact string replacements.** If the string is not found in a file where it is expected, list the file and skip it; do not improvise a near match.
7. **Node** is managed by mise: use `node`, or `mise exec -- node` if `node` is not on PATH.
8. **Verification tools:**
   ```bash
   node .claude/skills/vault-lint/scripts/lint.js --summary
   node .claude/skills/vault-lint/scripts/lint.js --rule "<rule id>" --max 999
   node .claude/skills/vault-lint/scripts/buildIndex.js
   ```
   The lint exits 1 while errors remain; that is expected until late batches.
9. **After each batch:** run the lint summary, paste the changed counts into your report, and ask the DM to open two of the touched notes in Obsidian to confirm they render. Then stop for the next go-ahead.
10. If a batch reveals a contradiction between notes, report both sources. Do not resolve it.

**Baseline lint (2026-11-14):** errors — `journal-no-party` 42, `unresolved-link` 28, `yaml-parse` 1. Warnings — `missing-gist` 129, `legacy: groups` 64, `image-path` 50, `legacy: journal uses campaign` 42, `uimode-first` 31, `legacy: religions` 20, `legacy: relationships string` 11, `legacy: player_impression` 8, `journal-no-prep-link` 6, `journal-untitled` 3, `legacy: travel` 2, `journal-no-fc-end` 2, `no-type-tag` 1, `legacy: travelDistances` 1, `mirrored-edge` 1.

---

## T. Tests before relying on unverified behavior

| # | Marker | Test | If it fails |
|---|---|---|---|
| T1 | [DM] | In Obsidian, create two scratch notes `ZZ A` and `ZZ B`. In `ZZ A` frontmatter put `relationships: [{target: "[[ZZ B]]", type: ally}]`. Rename `ZZ B` to `ZZ C`. Does `target` update? Delete both notes after. | Report to the DM. The typed-edge design still works, but renames then need a lint pass (`unresolved-link`) afterwards; add that sentence to `vault-note/references/relationships.md`. |
| T2 | [DM] | Start a new Claude Code session in the vault. Confirm the session-start text no longer contains "You have superpowers", and that `/status` lists project settings. | Tell the DM the project override did not apply; the DM disables the plugin in `~/.claude/settings.json`. |
| T3 | [M] | In a scratch note, try `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]`. Ask the DM whether both sources appear. | In C6 use two inputs side by side: one per source. |
| T4 | [M] | In a copy of `z_Bases/NPCs.base`, add a formula `relationships.filter(value.type == "member").map(value.target)`. Ask the DM whether the column renders. | In E2 drop the faction column from the Base instead of replacing it. |

---

## A. Repairs (no schema change)

### A1 [M] Fix invalid YAML in Marrow

- **File:** `4. World Almanac/NPCs/Marrow.md`
- **Change:** around frontmatter line 37, a line beginning `**Continuity note` sits inside a block scalar with wrong indentation, so YAML reads `*Continuity` as an alias. Re-indent that line (and any sibling lines of the same paragraph) to match the block scalar it belongs to. Change no words.
- **Verify:** `lint.js --rule yaml-parse` → 0. `node -e` parse of the file returns keys including `secrets` and `summary`/`player_impression`.
- **Rollback path:** that file.

### A2 [M] Fix links missing the "(COS)" suffix

- **Files:** `4. World Almanac/Shops/Blue Water Inn.md` (`owners`, `staff`: Urwin Martikov, Danika Dorakova, Brom Martikov, Bray Martikov); `4. World Almanac/Regions/Barovia.md` (`rulers`: Strahd Von Zarovich).
- **Change:** in each link, path and alias target the existing file `<Name> (COS).md`; keep the alias as the bare name. Example: `"[[4. World Almanac/NPCs/Urwin Martikov (COS).md|Urwin Martikov]]"`.
- **Verify:** `lint.js --rule unresolved-link --max 999` no longer lists these two files for those fields.

### A3 [M + J] Repair journal `prep-notes` links

- **Files:** `1. DM Toolkit/Session Journals/The Hunt for Vecna/S*.md`
- **[M] Change:** where `prep-notes` contains `Session Prep/Midnight Covenant/`, replace that segment with `Session Prep/The Hunt for Vecna/` **only if** the resulting file exists. Expected: about 28 journals (S16–S43).
- **[J] Propose, do not write:** journals whose `prep-notes` is empty, points at `Session Prep.md` (the template; S40, S42, S43), or points at a date that is not the journal's own `date` (S37). For each, list the prep notes within 3 days of the journal's `date` and ask the DM which is right. Known oddities to include: S28 `date: 2024-01-11` (probably 2025-01-11); S33 `date: 2025-04-19` vs prep `2025-10-25`. Dates are canon-adjacent: the DM decides.
- **Verify:** `lint.js --rule unresolved-link` shows no `prep-notes:` rows; `journal-no-prep-link` count reported.

### A4 [J] Stray file

- `4. World Almanac/NPCs/Npc.md` is an index-like note with about 70 links to notes that do not exist. Ask the DM: delete, or move to `2. Scratch Notes/`. Do nothing without an answer.
- **Verify:** `lint.js --rule no-type-tag` → 0.

### A5 [M] Normalize image paths

- **Files:** every note in `3. The Party/` and `4. World Almanac/` with an `images` array.
- **Change:** replace `\` with `/`; replace a leading `Z_Assets/` with `z_Assets/`. For each changed value, confirm the file exists at the new path; if not, leave the value and list it.
- **Verify:** `lint.js --rule image-path` → 0 (or only the listed leftovers).

### A6 [M] `obsidianUIMode` first

- **Files:** the 31 notes under `lint.js --rule uimode-first`.
- **Change:** move the key to first position; add `obsidianUIMode: preview` where missing.
- **Verify:** rule → 0.

---

## B. Configuration

### B1 [M] Add relationship types and new folders to Configuration

- **File:** `1. DM Toolkit/Configuration.md` (frontmatter only).
- **Change:** under `locations` add `factions: 4. World Almanac/Factions`, `items: 4. World Almanac/Items`, `deities: 4. World Almanac/Deities`, `creatures: 4. World Almanac/Creatures`. Leave `groups` in place for now. Add a new top-level key `relationship_types` (keep `relationship_mapping` until E4):

```yaml
relationship_types:
  - {type: father,  category: family, inverse: {male: son, female: daughter}}
  - {type: mother,  category: family, inverse: {male: son, female: daughter}}
  - {type: son,     category: family, inverse: {male: father, female: mother}}
  - {type: daughter, category: family, inverse: {male: father, female: mother}}
  - {type: husband, category: family, inverse: wife}
  - {type: wife,    category: family, inverse: husband}
  - {type: brother, category: family, inverse: {male: brother, female: sister}}
  - {type: sister,  category: family, inverse: {male: brother, female: sister}}
  - {type: uncle,   category: family, inverse: {male: nephew, female: niece}}
  - {type: aunt,    category: family, inverse: {male: nephew, female: niece}}
  - {type: nephew,  category: family, inverse: {male: uncle, female: aunt}}
  - {type: niece,   category: family, inverse: {male: uncle, female: aunt}}
  - {type: cousin,  category: family, inverse: cousin, symmetric: true}
  - {type: friend,  category: personal, inverse: friend, symmetric: true}
  - {type: ally,    category: personal, inverse: ally}
  - {type: rival,   category: personal, inverse: rival}
  - {type: enemy,   category: personal, inverse: enemy}
  - {type: lover,   category: personal, inverse: lover, symmetric: true}
  - {type: mentor,  category: personal, inverse: student}
  - {type: student, category: personal, inverse: mentor}
  - {type: employer, category: work, inverse: employee}
  - {type: employee, category: work, inverse: employer}
  - {type: serves,  category: work, inverse: master}
  - {type: master,  category: work, inverse: serves}
  - {type: handler, category: work, inverse: asset}
  - {type: asset,   category: work, inverse: handler}
  - {type: patron,  category: work, inverse: client}
  - {type: client,  category: work, inverse: patron}
  - {type: member,  category: faction}
  - {type: leader,  category: faction}
  - {type: founder, category: faction}
  - {type: agent,   category: faction}
  - {type: former-member, category: faction}
  - {type: worships, category: faith}
  - {type: cleric-of, category: faith}
  - {type: home,    category: place}
  - {type: works-at, category: place}
  - {type: origin,  category: place}
  - {type: imprisoned-at, category: place}
```

- **Verify:** `node -e` parse shows `relationship_types.length === 39`. The Configuration note still renders (ask the DM).
- **Rollback path:** that file.

### B2 [DM] Disable the Relations plugin

Ask the DM to turn off "Relations" in Obsidian → Settings → Community plugins. Do not edit `.obsidian/` files. Verify: `grep -c '"relations"' .obsidian/community-plugins.json` → 0.

---

## C. Field renames and templates

Each rename batch changes the notes **and** every template, script, and body input that reads the field, in the same batch.

### C1 [M] Journals: `campaign:` → `party:`

- **Files:** the 42 journals under `lint.js --rule "legacy: journal uses campaign"`.
- **First:** `grep -rn "campaign" z_Scripts "1. DM Toolkit/Configuration.md" "1. DM Toolkit/Session Logs.md"` and list any code that reads a journal's `campaign` field. If something does, stop and report.
- **Change:** set `party` to the `party` value of the campaign note the old `campaign` link points to (currently `"[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"`); delete the `campaign` key. Place `party` where `campaign` was.
- **Verify:** `journal-no-party` → 0; `legacy: journal uses campaign` → 0. Ask the DM to confirm the party note's Session Log now lists all sessions.
- **Rollback path:** `1. DM Toolkit/Session Journals/`.

### C2 [M] NPC `player_impression` → `summary`

- **Files:** `4. World Almanac/NPCs/*.md` (94), `z_Templates/Templater/World Building/NPC.md`, `z_Extra/ttrpg-convert/templates/monster.txt`.
- **Precheck:** no NPC note has a `summary` key (`grep -l "^summary:" "4. World Almanac/NPCs"/*.md` → none). If one does, stop.
- **Change:** rename the frontmatter key where present (8 notes), keeping the value. In every NPC body, both templates: replace `INPUT[textArea:player_impression]` with `INPUT[textArea:summary]`.
- **Verify:** `grep -rl "player_impression" "4. World Almanac" z_Templates z_Extra/ttrpg-convert/templates z_Scripts z_Bases` → nothing. `legacy: player_impression` → 0.

### C3 [M] Quest `player_summary` and campaign `public_premise` → `summary`

- **Files:** `3. The Party/Quests/*.md` (3), `z_Templates/Templater/Campaign/Quest.md`, `1. DM Toolkit/Campaigns/*.md` (1), `z_Templates/Templater/Campaign/Campaign.md`.
- **Change:** in templates, rename the frontmatter key and the `INPUT[textArea:…]` binding. In notes, rename the binding in the body and the key if present.
- **Verify:** `grep -rl "player_summary\|public_premise" "1. DM Toolkit/Campaigns" "3. The Party" z_Templates z_Scripts` → nothing.

### C4 [M] Shop template field names

- **File:** `z_Templates/Templater/World Building/Shop.md`.
- **Change:** frontmatter `shop_type: ""` → `type: ""`, `shop_size: ""` → `size: ""` (the infobox inputs and `generateShopInventory.js` already use `type`/`size`). Add `gist: ""`, `summary: ""`, `revealed: {}`, `facts: []` after `location`.
- **Verify:** `grep -n "shop_type\|shop_size" z_Templates -r` → nothing.

### C5 [M] Routes replace travel tuples

- **Files:** `4. World Almanac/Settlements/Vallaki.md`, `4. World Almanac/Regions/Barovia.md`, `4. World Almanac/Places of Interest/The Amber Temple.md`; `z_Scripts/Dataview/views/travelTimes.js`; `z_Templates/Templater/Functional/Add Travel Distance.md`, `Remove Travel Distance.md`; `z_Templates/Templater/World Building/Location.md`.
- **Notes:** convert each `[name, miles]` pair under `travel` or `travelDistances` to `routes: [{to: "[[<full path>|<name>]]", miles: <number>}]`; resolve the name to its note path; coerce `"60"` to `60`; delete the old key.
- **`travelTimes.js`:** read `input.current.routes || []`; for each `r` use `dv.page(r.to?.path ?? r.to)` and `r.miles`; skip rows whose page does not resolve; keep the existing three columns and the `VIEW[…]` expression with `r.miles` in place of `t[1]`.
- **Add template:** write `fm.routes = [...(fm.routes || []), {to: "[[" + page.file.path + "|" + page.file.name + "]]", miles: Number(distance)}]` (select the location by path, label by name).
- **Remove template:** read `tp.frontmatter.routes || []`; options labelled by the link alias; remove by index.
- **Location template:** add `routes: []` to the frontmatter.
- **Report, do not fix:** Barovia has a 60-mile route to the shop Blinsky Toys; ask the DM whether it is intended.
- **Verify:** `legacy: travel` and `legacy: travelDistances` → 0; ask the DM to open Vallaki and confirm the Travel Distances table renders.

### C6 [M] Templates to the target schema

- **Files:** all under `z_Templates/Templater/` named below, plus `z_Extra/ttrpg-convert/templates/monster.txt`.

| Template | Frontmatter additions (as empty values) | Body |
|---|---|---|
| `World Building/NPC.md` | `gist: ""`, `summary: ""`, `revealed: {}`, `reveal: {}`, `facts: []`, `secrets: ""`. Remove `groups: []`, `religions: []`. | Add `**Gist** \| INPUT[text:gist]` as the first Info row. Leave the Group(s)/Religion(s) rows until E2/E3. Add `### Plot Hooks` above `### Hidden Details` (matches the mirror). |
| `World Building/Location.md` | `gist`, `revealed`, `reveal`, `facts`, `secrets`, `routes: []`. Remove `religions: []`. | Add a Gist row; remove the Religions row. |
| `World Building/Shop.md` | done in C4 | — |
| `Campaign/Quest.md` | `kind: quest`, `parent: ""`, `gist`, `revealed`, `facts`, `secrets`, `giver: ""`, `locations: []`, `items: []`, `factions: []`, `pcs: []` | Replace the four legacy button scripts (`addItem.js`, `removeItem.js`, `moveUp.js`, `moveDown.js`) with `arrayActions.js` calls per `vault-note/references/templates.md`. |
| `Campaign/Campaign.md` | `site_slug: ""` | — |
| `DM Prep/Session Journal.md` | `factions: []`, `wrapped: false`, `publish: false` | Add a **Factions** row to Session Links (`inlineListSuggester(optionQuery(#faction))`). Change the Items row per T3's result. |
| `DM Prep/Session Prep.md` | `session_number:`, `journal: ""`, `obsidianUIMode: preview` | Add `## Improvisation Kit` as the last heading. |
| **New** `World Building/Faction.md`, `Item.md`, `Deity.md`, `Creature.md` | Per `vault-note/references/entity-schemas.md` | Model on `Shop.md`: the `templateInit`/`formFields` pattern, a name field, `init.moveFile(tp, config.locations.factions|items|deities|creatures, data.name)`, an infobox with inputs for the type's fields, `## DM Notes`. `Creature.md` also gets the `## Stats` section with an empty `statblock` block and `^statblock` anchor, copied from `NPC.md`. |

- **`monster.txt` `isNpc` branch:** bring its frontmatter to parity with `NPC.md`: emit every key `NPC.md` emits, with empty defaults where the import has no data (`location:` empty, `relationships: []`, `race:`, `gender:`, `age:`, `occupation: []`, `gist: ""`, `summary: ""`, `revealed: {}`, `reveal: {}`, `facts: []`, `secrets: ""`, `partyRelationships: {}`, and the text fields as `""`). Make the same body changes as `NPC.md`. Qute syntax: literal braces are written `\{` and `\}`.
- **[J] Ask:** delete the empty stub `World Building/Group.md` (replaced by `Faction.md`)? Leave `Event.md`.
- **Verify:** `grep -c "groups:\|religions:" "z_Templates/Templater/World Building/NPC.md"` → 0. Ask the DM to create one throwaway NPC, Faction, Item, Deity, and Quest from the templates, confirm each lands in the right folder with the right tags, then delete them. `diff <(grep -o "^[a-zA-Z_]*:" NPC-template-frontmatter) <(same for monster.txt isNpc)` shows the same key set.

### C7 [M] Facts editor in notes

- **New file:** `z_Scripts/Datacore/FactsTable.tsx`, modelled on the Quest Steps table in `z_Templates/Templater/Campaign/Quest.md`: one row per `facts[i]` with columns **Fact** (`INPUT[textArea:facts[i].text]`), **Learned** (a `suggester(optionQuery(#session-journal))` bound to `facts[i].learned["<active party name>"]`, built with `dv.view('utils/metaBindInput', …)` as the Quest template does for per-party fields), **Locked** (`INPUT[toggle:facts[i].locked]`), and a delete button using `arrayActions.js` (`action: remove, field: facts, index: i`). Above the table, an "Add Fact" button using `arrayActions.js` (`action: add, field: facts`).
- **Block to insert** (same text everywhere):

````
## What the Party Can Learn
```datacorejsx
const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
return function View() { return <FactsTable /> }
```
````

- **Insert in templates:** NPC (before `## Secrets`), Location, Faction, Item, Deity (before `## DM Notes`), Quest (after `## Description`), and the `monster.txt` mirror.
- **Insert in existing notes:** same anchors, in every NPC, region, settlement, place of interest, and quest note. If the anchor heading is missing, list the file and skip.
- **Verify:** `grep -L "FactsTable" "4. World Almanac/NPCs"/*.md` lists only folder notes. Ask the DM to add and delete one fact on a test NPC.
- **Rollback paths:** `z_Scripts/Datacore/FactsTable.tsx`, `z_Templates/`, `z_Extra/ttrpg-convert/templates/monster.txt`, `4. World Almanac/`, `3. The Party/Quests/`.

---

## D. Mechanical backfill

### D1 [M] Add the common keys to existing notes

- **Files and keys** (add only if absent; never overwrite):

| Notes | Keys, in this order, inserted after `condition`/`location` |
|---|---|
| NPC, region, settlement, place of interest, shop, world | `gist: ""`, `summary: ""`, `revealed: {}`, `reveal: {}`, `facts: []`, `secrets: ""` (skip `secrets` on shop and world) |
| Quest | `kind: quest`, `gist: ""`, `summary: ""`, `revealed: {}`, `facts: []`, `secrets: ""`, `giver: ""`, `locations: []`, `items: []`, `factions: []`, `pcs: []`; on each `steps[]` entry add `status: played` if any `completed` value is true, else `status: planned` |
| Player | `gist: ""`, `summary: ""`, `revealed: {<their party name>: true}`, `facts: []`, `tagline: ""` |
| Campaign | `summary: ""`, `site_slug: ""` |
| Journal | `factions: []`, `wrapped: false`, `publish: false` |
| Prep | `obsidianUIMode: preview` (first), `session_number:`, `journal:` if absent |

- **Verify:** for each type, `grep -L "^gist:" <folder>/*.md` lists only folder notes. `lint.js --summary` shows no new errors.

### D2 [M] Shape normalizations

- `goals` stored as an array (3 NPC notes) → one string, items joined with `; `.
- `age` stored as a string (2 notes) → the number if it parses; otherwise `null` and append `Age: <original text>.` to `description`.
- **Report only:** `race` as a plain string (13 COS NPCs, Redgrave, Wisp); `statblock: "true"` on Seluvis; the literal `alignment: "character.alignment"` written by `z_Templates/Templater/Party/Player Character.md` (fix the template line to `alignment: character.alignment`).
- **Verify:** a census script shows `goals` string on all NPCs and `age` number-or-null.

---

## E. New notes and relationships

### E1 [J] Faction notes

- **Input:** the distinct `groups` values (`node` one-liner over NPC frontmatter, with counts).
- **Proposal to the DM** — canonical faction, the strings it absorbs, and its `kind`. Starting proposal (the DM edits it):

| Faction note | Absorbs | kind |
|---|---|---|
| Umbral Athenaeum Council | Umbral Athenaeum Council | order |
| Keepers of the Feather | Keepers of the Feather; "(ally)" becomes an `ally` edge | order |
| Silent Ascendency | Silent Ascendency | cult |
| Ferrymen's Guild | Ferrymen's Guild | guild |
| Order of the Silver Dragon | Order of the Silver Dragon | order |
| Belview Family, Durst Family | as named | family |
| House Vallakovich | House Vallakovich; "Baron Vallakovich's household (former)" → `former-member` | house |
| House Wachter | House Wachter | house |
| House von Zarovich | House von Zarovich; Loyalists of…; Von Zarovich family (honorary) | house |
| House Petrovich | as named | house |
| Strahd's Brides, Children of Mother Night, Morgantha's Coven, Vallaki Wolf Hunters, Gloaming Court, The Unbroken Circle, Circle of Eight, Clergy of the Morninglord | as named | other |
| **Ask:** Vistani — one faction, or one per camp (Vallaki, Tser Pool)? | 5 strings incl. "(adopted)", "(allied)" | — |
| **Ask:** Dusk elves — one faction or two (Barovia, Duskferry)? | 4 strings | — |
| **Ask:** Fiona Wachter's Cult — separate, or part of House Wachter? | 1 | — |
| **Ask:** "Vecna's claimed", "Jakarion's expedition", "The Amber Temple's original order of wizards" — faction, or leave in `secrets`? | 3 | — |
| **Not factions (places):** St. Andral's Church, Abbey of Saint Markovia → a `works-at` or `home` edge to the existing location note | 2 | — |
| **Ask:** stubs for factions named only in the campaign note — Eternal Watch, Watchers over the Fallen? | — | — |

- **After approval:** create each note with the Faction template's frontmatter. `gist` and body: only what existing notes and journals already state, each sentence followed by its source link; otherwise empty. Do not invent lore.
- **Verify:** `ls "4. World Almanac/Factions"`; each has tag `faction`.

### E2 [M after E1] `groups` → `member` edges

- **Files:** the 64 NPC notes under `legacy: groups`; `NPC.md` template; `monster.txt`; `z_Bases/NPCs.base`.
- **Change:** for each `groups` string, append to `relationships` an edge `{target: "<link to the faction per the approved E1 table>", type: member}` (or `former-member` / `ally` / a place edge where the table says so; a qualifier such as "(adopted)" goes in `note`). Delete the `groups` key.
- **Body:** replace the infobox row `**Group(s)** | \`INPUT[inlineList:groups]\` |` with

  ``**Faction(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["member","leader","founder","agent","former-member"].includes(r.type)).map(r => r.target).join(", ")` |``

  in all NPC notes, the template, and the mirror (escape braces in the mirror).
- **`NPCs.base`:** remove the `groups` columns, or replace per T4.
- **Verify:** `legacy: groups` → 0; `grep -rl ":groups\]" "4. World Almanac" z_Templates z_Extra/ttrpg-convert/templates` → nothing; `unknown-relationship-type` → 0.

### E3 [J then M] Deities and `religions`

- **[J]** Propose deity notes for the values that matter (The Morninglord incl. the spelling "Morninglord"; Mother Night) and how to treat the rest: link straight to `5. Mechanics/Deities/` (Eilistraee), or leave in `secrets` ("Devil worship…", "Dark Powers of the Shadowfell (pact)", "The nameless god of secrets", "Ceithlenn of the Crooked Teeth").
- **[M]** Convert as in E2 with `type: worships`; delete `religions` from NPC and location notes; replace the NPC infobox `**Religion(s)**` row with the same inline expression filtered on `["worships","cleric-of"]`; remove the Religions row from location notes (fix the `relgions` typo row in Barovia by removing it); update `NPCs.base`.
- **Verify:** `legacy: religions` → 0; `grep -rl "religions\]\|relgions" "4. World Almanac" z_Templates` → nothing.

### E4 [M] Legacy relationship strings → typed edges, and the views that read them

One batch; the notes and the scripts must change together.

- **Notes (11):** convert `"Name|type"` to `{target: "<full-path link>", type: <type>}`. Then remove redundant mirrors: for parent/child pairs keep the child's `father`/`mother` edge and delete the parent's `son`/`daughter` edge; for `husband`/`wife` and other pairs keep the edge on the alphabetically earlier note. "ally of convenience" → `type: ally`, `note: "of convenience"` (keep both directions only if both notes had it; the lint will flag the mirror for the DM to decide).
- **`z_Scripts/Dataview/views/npcRelationships.js` — rewrite to this spec:**
  1. Outbound = `input.current.relationships` (objects). Inbound = all pages tagged `npc`, `faction`, `player`, or `story-deity` whose `relationships` contain a `target` whose path equals the current page path.
  2. Label outbound edges with `type`; label inbound edges with the inverse from `Configuration.relationship_types` (use the gendered form when `inverse` is a map and the current page has `gender`; fall back to the raw type with a reversed arrow).
  3. Recurse only through `category: family` edges, to depth 3. All other categories: depth 1.
  4. Mermaid node ids are `n0, n1, …` (not letters). Nodes are internal links. Style class per category.
  5. Ignore entries that are strings or have no resolvable `target`. Never throw on an unknown type.
- **`Functional/Add Relationship.md` — rewrite:** select a target from pages tagged `npc`, `player`, `faction`, `story-deity`, or `location`; select a type from `Configuration.relationship_types`; push `{target: "[[<path>|<name>]]", type}` onto the active note's `relationships` (create the array if absent). Write nothing to the other note.
- **`Functional/Remove Relationship.md` — rewrite:** list the active note's edges as "`type` → alias"; remove by index.
- **`z_Scripts/Dataview/data/npcs.js`:** passes `relationships` through; confirm nothing downstream splits on `|`.
- **Configuration:** after the DM confirms the new forms work, delete `relationship_mapping` and its tab in the note body.
- **Verify:** `legacy: relationships entry is a "Name|type" string` → 0; ask the DM to open Davian Martikov and confirm the family graph renders, then add and remove a test `rival` edge on any NPC.
- **Rollback paths:** `4. World Almanac/NPCs/`, `z_Scripts/Dataview/`, `z_Templates/Templater/Functional/`, `1. DM Toolkit/Configuration.md`.

### E5 [J] Relationships out of prose

- **Scope:** all 94 NPC notes, 10 per sitting, hand-made notes first.
- **Method per note:** read `history`, `description`, `secrets`, `occupation`, and `## DM Notes`. List each stated tie as a candidate edge: source, type (from `relationship_types`), target note (or "no note"), the quoted phrase it comes from. Employers embedded in `occupation` ("Guildmaster, Ferrymen's Guild") become a `leader`/`member`/`employer` candidate.
- **The DM marks each:** accept, change type, skip. Targets with no note: create, or leave in prose.
- **Write** accepted edges with no `learned` value. Do not delete the prose.
- **Verify:** `edges.tsv` row count before and after; `unknown-relationship-type` → 0; `unresolved-link` unchanged.

### E6 [J] Story items

- **Propose** a list of items that deserve notes, from the campaign note, the party note's "Fortunes of Ravenloft", journal `items`, and journal "Items Of Importance" sections. For each: name, `base_item` link if published, proposed `holder` or `location`, the source passage. Ask the DM to confirm holders; PC inventory in the vault is known to be stale.
- **Write** accepted notes from the Item template. Replace the duplicated "Fortunes of Ravenloft" lists in the campaign and party notes with links only if the DM agrees.

### E6b [J] Custom creatures

- **Candidates:** NPC notes that describe a kind of creature, not an individual. Known: `4. World Almanac/NPCs/Amber Warden.md` and `Unfinished Amber Warden.md`. Find others by listing NPC notes with no `gender`, no `age`, and empty `partyRelationships`, and ask the DM about each.
- **Proposal per candidate:** move to `4. World Almanac/Creatures/`, replace tag `npc` with `story-creature`, drop the NPC-only keys (`location`, `condition`, `gender`, `age`, `alignment`, `occupation`, `personality`, `ideal`, `bond`, `flaw`, `likes`, `dislikes`, `partyRelationships`) after moving any non-empty text into `description`, and swap the body scaffold for the Creature template's. Where the note records where the creature is found (e.g. Greyfen Hollow), keep that as a `home` edge.
- **The move must be done by the DM in Obsidian** (drag the file) so every link is rewritten. Do the frontmatter and body changes after the move.
- **Verify:** `entities.tsv` shows `story-creature` rows; `grep -rl "NPCs/Amber Warden" .` (outside `.git`) → nothing; journals and the location note that listed it still resolve (`unresolved-link` unchanged). Note: a creature in a journal's `npcs` ledger array stays there; the ledger records what was encountered regardless of type.

### E7 [J] Quest links and arc notes

- **Quest links:** for the 3 quests, propose `giver`, `locations`, `items`, `factions`, `pcs` from links already in `description`.
- **Arcs:** propose one quest note with `kind: arc` per act and arc in the campaign note's "The Hunt — Campaign Arc" section, `parent`-linked, with each numbered stage as a `steps` entry (`status: played` where the campaign note says complete, else `planned`), and existing quests given `parent`. Copy text; write nothing new. The campaign note keeps its prose until the DM says to trim it.
- **Verify:** `entities.tsv` shows `quest:arc` rows; `/plan` produces a status screen.

### E8 [J] Locked canon as facts

- For each bullet under the campaign note's `# Locked Canon`, propose: the entity it belongs on, a one-sentence fact, `locked: true`, and `learned` only where the bullet itself says the party knows (cite the session it names). Flag the internal conflict on the Marrow bullet (escaped in S43 and unknown to the party, versus killed in S44 per Active Threads) and ask; do not resolve it.

---

## F. [J] Move DM text to where DM text belongs

Propose each move as a before/after pair; change no wording.

| Target | Move |
|---|---|
| `Places of Interest/Greyfen Hollow.md`, `The Cinderworks.md`, `Settlements/Duskferry.md` | DM-only passages in Overview/History, and keyed-dungeon sections above `## DM Notes`, go under `## DM Notes` |
| 11 "(COS)" NPCs with module prose above the infobox (find with `grep -l "^## " ` between the H1 and the first `[!column]`) | Move that prose under `## DM Notes` → `### General Notes` |
| Journals S6–S12 | Leftover prep sections (`## Session Prep:`, `## Plan`, …) → a `> [!dm]` callout at the end, or delete if the DM prefers |
| Journals with `#secret` lines or inline "DM-only:" sentences (S14, S15, S44, S45) | Wrap each in a `> [!dm]` callout |
| Superseded design text (Greyfen Hollow and Izek General Notes, "revised 2026-11-13") | Ask whether to delete the superseded part |
| `Settlements/Duskferry.md` "Not yet visited by the party" | Contradicts S46: report, ask |

**Verify:** `grep -c "#secret" ` over journals → 0 outside callouts.

---

## G. [J] Knowledge backfill

Uses the `reveal-review` skill ("Backfill for past sessions"). This is the largest block of DM time; size each sitting.

### G1 Gists (LLM draft, DM spot-check)

For every entity under `missing-gist` (129): draft a `gist` of 20 words or fewer from the note's own fields. Gists are DM-facing, so write them directly, 25 notes per run, then show the DM the list to skim. **Verify:** `missing-gist` → 0.

### G2 Session-by-session reveals

- **Order:** S1 → S48, five sessions per sitting (about 10 sittings).
- **Per session:** ledger corrections; entities first encountered → `revealed` with a draft `summary` and `reveal` list; facts learned (attached to entities, `learned` = this journal); edges learned; a title for untitled journals (S46–S48); missing `fc-end`.
- **Sources:** journal text only. Never `secrets`, DM-voice fields, or `6. Resources/`.
- **After acceptance:** write; set `wrapped: true` when the DM confirms the journal is final.
- **Verify per sitting:** `ledger-entity-undecided` → 0 for the wrapped sessions; `revealed-no-summary`, `learned-*`, `public-text-links-unrevealed` → 0.

### G3 Live-session logs

Run the `session-wrap` skill on `2. Scratch Notes/S44 Live Session - Improvised Facts.md` (against the existing S44 journal: propose only what is missing) and on `S49 …` (with the DM's notes, as the S49 wrap). **Verify:** `state.md` shows no unfiled logs.

---

## H. Cleanup and close

| # | Marker | Action | Verify |
|---|---|---|---|
| H1 | [M] | `.obsidian/types.json` is Obsidian's; ask the DM to set property types in Obsidian: `statblock` → text, remove the empty-name entry. | DM confirms |
| H2 | [J] | Dead scripts with no references: `z_Scripts/Dataview/pcSessionMentions.js`, `sessionDetails.js`, `views/editingView.js`, `data/quests.js`, `render/cards.js`, `render/lists.js`, `Datacore/FilterTable.tsx`. Re-grep for references; ask before deleting. Fix `z_Scripts/README.md` to match. | grep shows no references |
| H3 | [M] | Remove `locations.groups` from Configuration (and its input row) once no template reads it. | grep `locations.groups` → nothing |
| H4 | [J] | `.claude/agent-memory/dm-assistant/project_campaign-state.md`: after G3, propose replacing it with a two-line pointer to `z_Extra/index/state.md` and the campaign note; update `MEMORY.md`. Keep the two feedback files and the inventory-staleness note. | DM approves |
| H5 | [M] | Final check: `lint.js --summary` → 0 errors, no `legacy:` rules. Build the index. | lint exit code 0 |
| H6 | [M] | Delete `z_Extra/migration/`. Remove the "Migration in progress" paragraph from `CLAUDE.md`. | — |
| H7 | [DM] | Force-add the `.claude/` files so Obsidian Git backs them up: `git add -f .claude/agents .claude/skills .claude/commands .claude/settings.json`. | `git ls-files .claude` lists them |

---

## I. Site exporter (separate build, after H5)

Not part of this migration. Specification for whoever builds it:

- A third script beside the lint, `export.js`, importing `vaultModel.js`. Arguments: `--campaign "<name>"`, `--out <dir>`, `--dry-run`.
- Refuses to run if the lint has errors.
- Output per campaign `site_slug`: `entities.json`, `sessions.json`, `meta.json`, and copied images.
- Entity record, only for `revealed[party] === true`: `name` (`public_name[party]` or the note name), `slug`, `type`, `pronounced`, `summary`, `publicBody` (the `## Public` section), `facts` (text and session, where `learned[party]` is set), `relationships` (typed edges with `learned[party]` set and a revealed target; flat links whose field is in `reveal[party]` and whose target is revealed), `sessions` (published journals whose ledger lists it), and any fields named in `reveal[party]`.
- Session record, only for `publish: true`: number, title, real date, in-world dates, `summary`, `publicBody`, links to revealed ledger entities.
- Wikilinks in exported text: to a revealed entity → a site link; otherwise the alias as plain text.
- `--dry-run` prints what is newly visible since the last export (entities, facts, edges, images) and writes nothing.
- The Gatsby site reads only the output directory, via `gatsby-source-filesystem` and `gatsby-transformer-json`.

---

## Batch order and dependencies

```
T1–T4 → A1–A6 → B1, B2 → C1 → C2 → C3 → C4 → C5 → C6 → C7 → D1 → D2
      → E1 → E2 → E3 → E4 → E5 → E6 → E6b → E7 → E8 → F → G1 → G2 → G3 → H1–H7 → I
```

The vault is usable after every batch. Mechanical batches A–D need about one working session. E1–E4 need one DM sitting for the faction and deity tables. E5–G2 are the judgment-heavy part and can be spread over weeks; the vault, the skills, and the index work throughout, and the lint shows what remains.
