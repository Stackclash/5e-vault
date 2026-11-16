# Phase 4 — Migration plan

For a Sonnet-class model working without the design conversation. Execute batches in order. Each batch is self-contained.

## 0. Read this first

**Required reading before any batch:** `CLAUDE.md`, then `.claude/skills/vault-note/SKILL.md` and all six files in `.claude/skills/vault-note/references/`. They define the target schemas. This plan only says how to get there.

**Precedence.** Where `01 Audit`, `02 Design`, or `04 Expansion` disagree with the `vault-note` references, the references win (e.g. the deity tag is `story-deity`, not `deity`; the Creature type exists). Where this plan disagrees with `04 Expansion`, this plan wins. The only relationship types are the 39 in B1; `02 Design` §3.4 also mentions `parent`, `front-for`, and `owner-of`, which are not in the vocabulary: propose them to the DM before using them.

**Decisions** are recorded in `04 Expansion` §4 (Decision log). Re-check it before any batch that depends on one.

**Vault root:** `/home/rcox/Projects/Personal/5e-vault`. **Never touch** `5. Mechanics/` or `6. Resources/`.

**Setup (once, before T-tests):** from the vault root, run `mise exec -- npm install` (installs `gray-matter`, `js-yaml`, and the rest of `package.json` into `node_modules/`). Then confirm `mise exec -- node .claude/skills/vault-lint/scripts/lint.js --summary` prints counts close to the baseline below, and `mise exec -- node .claude/skills/vault-lint/scripts/buildIndex.js` creates `z_Extra/index/`. If either fails, stop and report: every batch's verify step depends on them.

**Batch markers**

- **[M] mechanical** — do it, verify, report.
- **[J] judgment** — prepare a numbered proposal, stop, and write only what the DM accepts. Never decide what the party knows, which entities merge, or what a relationship is.
- **[DM] DM action** — something the DM does in Obsidian; ask and wait.

**Working rules**

1. **Before each batch:** the working tree must be clean (`git status --short` shows nothing but `.obsidian/workspace.json`). Obsidian Git commits every 5 minutes; wait for it or ask the DM to commit. Record `git rev-parse HEAD` in your report. This SHA is the rollback point.
2. **Rollback for any batch:** `git checkout <SHA> -- <the paths the batch touched>`. Each batch lists its paths.
3. **Ask the DM to close the affected notes in Obsidian** before a batch that rewrites many files. Meta Bind can write a stale value back into a note that is open.
4. **Frontmatter edits use a Node script, never hand edits across many files.** Use the `yaml` package (v2) Document API, not `gray-matter` + `js-yaml` dump. Verified 2026-11-15: the installed `js-yaml` is 3.14.1, which ignores `quotingType`/`forceQuotes`; a no-op dump rewrote 94 of 97 sampled files (double quotes → single, empty values → `null`), and it would turn the 31 plain `date: YYYY-MM-DD` values into datetimes. Before the first write script, run `npm install --save-dev yaml@2` (once; commit `package.json` and `package-lock.json`). Pattern: split the file at the closing `---`; `doc = YAML.parseDocument(fm)`; change values with `doc.set` / `doc.setIn` / `doc.delete` (new keys: `doc.set`, then reorder `doc.contents.items` if position matters); write `'---\n' + doc.toString({lineWidth: 0}) + '---\n' + body`, with the body **byte-identical**. Keep key order; `obsidianUIMode` stays first. **Round-trip gate:** a shared helper in `z_Extra/migration/` must pass a no-op test (parse and write every note under `1. DM Toolkit/`, `3. The Party/`, `4. World Almanac/` with no changes; zero files may differ) before any batch uses it. Do **not** use `z_Scripts/JS/editFrontmatter.js` (it duplicates frontmatter). Put one-off scripts in `z_Extra/migration/` and delete that folder in batch H6.
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

**Baseline lint (2026-11-14):** errors — `journal-no-party` 42, `unresolved-link` 28, `yaml-parse` 1. Warnings — `missing-gist` 129, `legacy: groups` 64, `image-path` 50, `legacy: journal uses campaign` 42, `uimode-first` 31, `legacy: religions` 20, `legacy: relationships string` 11, `legacy: player_impression` 8, `journal-no-prep-link` 6, `journal-untitled` 3, `legacy: travel` 2, `journal-no-fc-end` 2, `no-type-tag` 1, `legacy: travelDistances` 1, `mirrored-edge` 1. Re-checked 2026-11-15: identical, plus `index-missing` 1 (`z_Extra/index/` does not exist yet). **Before T1, run `buildIndex.js` once** so the index, `state.md`, and the `edges.tsv` counts E5 compares against exist.

Rule ids in this plan are prefixes: `--rule "legacy: groups"` matches `legacy: groups: (should be a member edge…)`. A rule with zero findings is absent from the output; "→ 0" means absent.

---

## T. Tests before relying on unverified behavior

| # | Marker | Test | If it fails |
|---|---|---|---|
| T1 | [DM] | In Obsidian, create two scratch notes `ZZ A` and `ZZ B`. In `ZZ A` frontmatter put `relationships: [{target: "[[ZZ B]]", type: ally}]`. Rename `ZZ B` to `ZZ C`. Does `target` update? Delete both notes after. | Report to the DM. The typed-edge design still works, but renames then need a lint pass (`unresolved-link`) afterwards; add that sentence to `vault-note/references/relationships.md`. |
| T2 | [DM] | Start a new Claude Code session in the vault. Confirm the session-start text no longer contains "You have superpowers", and that `/status` lists project settings. | Tell the DM the project override did not apply; the DM disables the plugin in `~/.claude/settings.json`. |
| T3 | [M] | In a scratch note, try `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]`. Ask the DM whether both sources appear. | In C6 use two inputs side by side: one per source. |
| T4 | [M] | In a copy of `z_Bases/NPCs.base`, add a formula `relationships.filter(value.type == "member").map(value.target)`. Ask the DM whether the column renders. | In E2 drop the faction column from the Base instead of replacing it. |
| T5 | [M] | In a scratch note: `INPUT[select(class(tabbed), option(A), option(B)):memory^tab]` followed by a `> [!tabbed-box]` callout with two child callouts, the second holding `INPUT[text:gist]`. Ask the DM: do tabs switch, does the input inside tab B edit `gist`, and does switching tabs leave the file unmodified (`git status`)? | Bind the select to a frontmatter key `ui_tab` instead of `memory^tab` (each tab click is then a write); record it in `vault-note/references/templates.md`. |
| T5b | [M] | A scratch template that calls `tp.file.include("[[z_Templates/Partials/ZZ Test]]")` where the partial contains `<% tp.file.title %>`. Run it; does the title render? | Templates inline the shared sections instead of including partials. |
| T6 | [M] | In a scratch note, a `datacorejsx` block: `dc.useQuery('@section and path("5. Mechanics/Rules")')` listing `$title`, and one result rendered with `<dc.Markdown content={"![[Conditions#Prone]]"} />`. Ask the DM whether both appear. | RulesLookup builds its section list from the metadata cache headings and opens hits as hover previews. |
| T7 | [M] | In a scratch template: `app.plugins.plugins["obsidian-dice-roller"].api` — roll `[[Npc Mannerisms#^npc-mannerisms]]` and print the result. | Quick-create drops the "roll from tables" checkbox. |
| T9 | [M] | In a scratch note with `gist: "x"` and `condition: injured`, run Modal Forms `openForm` with a two-field inline form and `values: {gist: <current>, condition: <current>}`. Ask the DM: do both fields open pre-filled, and does Enter submit? | `04 Expansion` Q2 fallback: a full-width "All fields" tab instead of a pop-up. |
| T10 | [M] | In a scratch note, add a CSS rule to `Custom Styles.css` that makes `.mb-input-type-textArea textarea` auto-size (`field-sizing: content; min-height: 6lh`). Paste 15 lines into an `INPUT[textArea:description]`; does the box grow? | Q4 fallback: a "pop out" button that opens the field in a modal editor. |
| T11 | [M, after C9] | Ask the DM to open Lord Caldris Velmont and Duskferry cold (after an Obsidian restart) and time: note open to fully rendered, and typing lag in a text area. Target under 1 s and no visible lag. Then disable the CSS tabs on that note and repeat. | Q5: replace CSS tabs with a Datacore component that renders only the open tab; rerun T11. |
| T8 | [M] | Read Calendarium's API surface for setting the current date (`app.plugins.plugins.calendarium.api`); report whether a script can advance the date. Do not change the date. | Advance Time shows the new date for the DM to set by hand. |

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
- **[M] Change:** where `prep-notes` contains `Session Prep/Midnight Covenant/`, replace that segment with `Session Prep/The Hunt for Vecna/` **only if** the resulting file exists. Expected: 23 journals (verified 2026-11-15; every target exists). The audit's "28" counted other broken links.
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

### B3 [M] Vocabularies and weather into Configuration (`04 Expansion` §1.2)

- **File:** `1. DM Toolkit/Configuration.md`; `1. DM Toolkit/Tools/Weather Generation.md`; `z_Scripts/JS/weatherGenerator.js`.
- **Change 1:** add `enums`, `settlement_wealth`, `shop_defaults`, and `rules_lookup` exactly as in `04 Expansion` §1.2.
- **Change 2 — deferred to J7 (DM, 2026-11-16).** Found during B3: Weather Generation has no "Roll weather" UI, `weatherGenerator.js` has no caller or export, and the Months dataviewjs block rewrites the active note's frontmatter via `processFrontMatter` on every render when `useCalendarium` is true. J7 does this change, guarding that block so it writes only when Calendarium's months differ. The change: move the keys `useCalendarium`, `tempFlux`, `seasons`, `months`, `climates`, `states` from Weather Generation's frontmatter to Configuration under `weather:`, values unchanged, renaming the camelCase keys to snake_case on the way (X11): `use_calendarium`, `temp_flux`, and inside the lists `temp_high`, `temp_low`, `wind_high`, `wind_low`, `precip_prob`, `temp_mod`, `wind_mod`, `precip_mod`. Update `weatherGenerator.js`'s destructuring and the moved tables' bindings to match. Repoint `weatherGenerator.js` to read `Configuration.weather`. Move the Add/Remove Month, Season, Climate, and State buttons and their tables into a Weather section of the Configuration body, targeting Configuration. Weather Generation keeps only a "Roll weather" UI. First grep `z_Scripts` and `z_Templates` for every reader of those keys (`weatherGenerator.js` is the only known one); any other reader is a stop-and-report. Verify: `node -e` parse of Configuration shows `weather.climates.length` equal to the old count; the DM rolls weather once in Obsidian and gets a result.
- **Done (bd325986e):** change 1 only. `enums.npc_roles` was later removed (NPC `role` dropped from X1, 2026-11-16).
- **Rollback path:** `1. DM Toolkit/Configuration.md`.

### B4 [DM] Disable the duplicate tabs snippet

Ask the DM to disable `metabind-tabs` in Settings → Appearance → CSS snippets (`TabsInObsidian` v0.5.4 stays). Verify: `appearance.json` no longer lists it.

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
- **`travelTimes.js`:** read `input.current.routes || []`; for each `r` use `dv.page(r.to?.path ?? r.to)` and `r.miles`; skip rows whose page does not resolve; keep the existing three columns. **Travel source (`04 Expansion` §3.4 #4):** compute travel time from the active party note's pace fields (`travel_calc`, `travel_hours_per_day`) instead of `{Travel#TravelCalc}` / `{Travel#HoursPerDay}`; resolve the party via Configuration → campaign → `party`.
- **Add template:** one Modal Forms form with target, miles, and mode (road, river, trail, sea, air) (`04 Expansion` Q6); write `fm.routes = [...(fm.routes || []), {to: "[[" + page.file.path + "|" + page.file.name + "]]", miles: Number(distance), mode}]` (select the location by path, label by name).
- **Remove template:** read `tp.frontmatter.routes || []`; options labelled by the link alias; remove by index.
- **Location template:** add `routes: []` to the frontmatter.
- **Report, do not fix:** Barovia has a 60-mile route to the shop Blinsky Toys; ask the DM whether it is intended.
- **Verify:** `legacy: travel` and `legacy: travelDistances` → 0; ask the DM to open Vallaki and confirm the Travel Distances table renders.

### C5b [M] Frontmatter keys to snake_case (`04 Expansion` §1.3, X11; approved 2026-11-15)

**Rule:** every frontmatter field name the vault owns is `snake_case`. Exempt: plugin-owned keys (`tags`, `aliases`, `cssclasses`, `obsidianUIMode`, `obsidianEditingMode`, `fc-*`, `aat-render-enabled`); map keys that are values (party names, `item_pricing` rarity and recharge names, `shop_types` names); `5. Mechanics/` and `6. Resources/`; Leaflet block parameters and Modal Forms definitions (not frontmatter).

Run after A3 (repairs `prep-notes` values) and C5 (drops `travelDistances` and `{Travel#TravelCalc}`). Run before C6, C8, and C9 so the new templates, header, and bodies are written against the new names. One group per commit. Ask the DM to close NPC notes, journals, and PCs first (working rule 3).

**Step 1 (all groups): find every reader.** For each old key, run `grep -rn "<old>" z_Scripts z_Templates z_Bases z_Extra/ttrpg-convert/templates .claude "1. DM Toolkit" "2. Scratch Notes" "3. The Party" "4. World Almanac"`. Compare the result to the reader list below. A reader that isn't listed is a stop-and-report.

| Group | Rename | Files | Body and code changes |
|---|---|---|---|
| 1. NPC party relationship | `partyRelationships` → `party_relationships` | 95 NPC notes; `NPC.md`; `monster.txt` (`isNpc` branch, mirror); `Party/Party Dashboard.md` and the Midnight Covenant party note; `z_Bases/NPCs.base` | Script: rename the key, keeping its value and position. Body: exact replace `field: ['partyRelationships',` → `field: ['party_relationships',` (94 notes, both options variants). Party note: `partyRelationships[this.file.name]` and `contains(partyRelationships,` → the new name. Leave the DM prose mention in one NPC's notes alone: it's canon-adjacent text; report it to the DM. |
| 2. Journal prep link | `prep-notes` → `prep_notes` | 49 journals; `DM Prep/Session Journal.md` | Script: rename the key in place. Body: exact replace `):prep-notes]` → `):prep_notes]` (48 notes, both quoting variants). Journals marked `wrapped: true` still get this rename: it changes the key name only, not content or canon. Say so in the report. |
| 3. Weather | Deferred to J7, which renames on the move: `use_calendarium`, `temp_flux`; nested `temp_high`, `temp_low`, `wind_high`, `wind_low`, `precip_prob`, `temp_mod`, `wind_mod`, `precip_mod` | — | C5b skips these. `key-case` rows for `1. DM Toolkit/Tools/Weather Generation.md` are expected until J7. |
| 4. D&D Beyond PC sheet | `abilityScores` → `ability_scores`, `savingThrows` → `saving_throws`, `racialTraits` → `racial_traits`, `classFeatures` → `class_features`, `raceSpells` → `race_spells`, `classSpells` → `class_spells`; nested: `armorClass` → `armor_class`, `baseValue` → `base_value`, `canEquip` → `can_equip`, `canAttune` → `can_attune`, `damageType` → `damage_type`, `isPrepared` → `is_prepared`, `cantripsKnown` → `cantrips_known`, `spellSlots` → `spell_slots`, `subClass` → `subclass`, `animal-handling` → `animal_handling`, `sleight-of-hand` → `sleight_of_hand` | 8 PC notes (`3. The Party/Players/`); `z_Scripts/Templater/dndBeyondCharacter.js`; `Party/Player Character.md`; `z_Bases/Players.base` | **Script first:** change the keys `dndBeyondCharacter.js` writes. Then rename the keys in the 8 notes with a recursive rename limited to the PC's own keys. Then update the template's bindings and `Players.base` formulas (`abilityScores.strength.value` → `ability_scores.strength.value`). **Don't touch** reads of Mechanics item fields in the PC template (`one-hand-damage`, an item's `armorClass`): those belong to generated items and stay. **Verify with the DM:** re-sync one PC from D&D Beyond and confirm `git diff` shows no camelCase keys returning. |
| 5. Calculators | Travel: `BaseSpeed` → `base_speed`, `SpeedMultiplier` → `speed_multiplier`, `AdditionalBonus` → `additional_bonus`, `Encumbered` → `encumbered`, `HorseshoesofSpeed` → `horseshoes_of_speed`, `HoursPerDay` → `hours_per_day`, `MinutesPerMile` → `minutes_per_mile`, `ExhaustionLevel` → `exhaustion_level`, `TravelDistance` → `travel_distance`, `ShipCostPerM` → `ship_cost_per_mile`, `MessengerCostPerM` → `messenger_cost_per_mile`, `CoachCost` → `coach_cost`, `CoachCostPerM` → `coach_cost_per_mile`, `DangerLevel` → `danger_level`, `FamiliarRoute` → `familiar_route`, `PartyMembers` → `party_members`, `LifestyleCostSP` → `lifestyle_cost_sp`, `IncludeMeals` → `include_meals`, `TravelCalc` → `travel_calc`, `varMins` → `var_mins`. Currency: `CoinsCopper` → `coins_copper` (and silver, electrum, gold, platinum), `PartySize` → `party_size` | `1. DM Toolkit/Calculators/Travel.md`, `Currency.md` | Rename the keys. In each note body, replace every `:Old]` binding and `{Old}` reference with the new name. Replace longest names first, so `CoachCostPerM` is replaced before `CoachCost`. Confirm `grep -c "{Travel#" z_Scripts -r` → 0 (C5 removed the only external reader). J4 runs before C5b: skip `Travel.md` if J4 deleted it, and check that keys J4 moved to the party note and Party Dashboard template are already snake_case. |
| 6. Leaflet calculator | `defaultZoom` → `default_zoom`, `minZoom` → `min_zoom`, `maxZoom` → `max_zoom`, `zoomDelta` → `zoom_delta`, `unitCount` → `unit_count` | `1. DM Toolkit/Tools/Leaflet Bounds Calculator.md`; `z_Scripts/Dataview/utils/leafletConfig.js` | Note body: `INPUT[number:defaultZoom]` etc. → new names. `leafletConfig.js`: read `currentPage.default_zoom` etc., but keep emitting `minZoom:`, `maxZoom:`, `defaultZoom:`, `zoomDelta:` inside the generated `leaflet` block, because those are the plugin's parameter names. |

**Docs and skills in the same batch:**

- `vault-note/references/entity-schemas.md` and `campaign-schemas.md`: the new names.
- `vault-note/SKILL.md` conventions: one line with the rule and the exempt list.
- `session-wrap/SKILL.md`: `party_relationships`, `prep_notes`.
- `vault-lint/scripts/vaultModel.js` and `lint.js`: read the new names. While the batch is running, keep reading the old names as a fallback, so the index works partway through. Remove the fallback at the end of the batch.
- dm-assistant agent memory: `.claude/agent-memory/dm-assistant/project_campaign-state.md` and `feedback_session-log-workflow.md`.
- CLAUDE.md "Conventions in brief": one line, "Frontmatter field names are snake_case; plugin keys (`obsidianUIMode`, `fc-*`) are the exception." (Approved 2026-11-15.)

**New lint rule `key-case`** (warning): any frontmatter key outside `5. Mechanics/` and `6. Resources/` that isn't `^[a-z][a-z0-9]*(_[a-z0-9]+)*$`. It checks top-level keys and field names inside nested objects. It skips the plugin allowlist above and the children of value-keyed maps. Those maps are listed in one constant in `lint.js`: `revealed`, `reveal`, `standing`, `renown`, `party_relationships`, `item_pricing.base_prices`, `item_pricing.recharge_modifiers`, `shop_types`. The C6 `note-fields` rule also rejects a `note_fields` entry whose field isn't snake_case.

- **Verify:**
  - `lint.js --rule key-case --max 999` → 0 rows.
  - `grep -rln "partyRelationships\|prep-notes" "1. DM Toolkit" "3. The Party" "4. World Almanac" z_Templates z_Scripts z_Bases z_Extra/ttrpg-convert/templates .claude` → only the one NPC prose mention reported to the DM.
  - `buildIndex.js` still lists every NPC's party relationship and every journal's prep link: compare the `entities.tsv` and `sessions.tsv` row counts to the pre-batch build.
  - Ask the DM to open Velmont (the Party Relationship select still shows Friendly), one journal (the Prep Notes link resolves), Wisp (the ability scores render), and the Travel and Currency calculators (the numbers compute).
- **Rollback paths:** `4. World Almanac/NPCs/`, `1. DM Toolkit/Session Journals/`, `3. The Party/`, `1. DM Toolkit/Calculators/`, `1. DM Toolkit/Tools/Leaflet Bounds Calculator.md`, `z_Templates/`, `z_Scripts/`, `z_Bases/`, `z_Extra/ttrpg-convert/templates/monster.txt`, `.claude/`.

### C6 [M] Templates to the target schema

- **Files:** all under `z_Templates/Templater/` named below, plus `z_Extra/ttrpg-convert/templates/monster.txt`.
- **Run C8 first** (shared header view, callout types, partials). C6 builds every template body on the `04 Expansion` §2 skeleton in one pass, so no template is rewritten twice. Where this table says "infobox row", place it in the skeleton's infobox; where it names body sections, place them in the tab listed in `04 Expansion` §2.2.
- **One field list per type (`04 Expansion` §2.6):** first add a `note_fields` key to Configuration: for each type, an ordered list of `{field, input, enum, tab, chip, bulk}` covering every editable flat field in the type's schema. Template inputs, the header chips (`chip: true`), the Edit-all form (Q2), and the Bases edit views (`bulk: true`, C10) all render from it. Add a lint rule `note-fields` that checks each entry names a field in the `vault-note` schema for that type and an enum that exists in `Configuration.enums`.
- **Edit all (Q2):** new `z_Scripts/Templater/editAll.js`: read `note_fields` for the note's type, open a Modal Forms inline form pre-filled with current values (or the T9 fallback), write all changes in one `app.fileManager.processFrontMatter` call. Per-party fields use the active party's key. Every template header gets an "Edit all" `meta-bind-button` running it.
- **Every note type (`04 Expansion` §2.2):** besides the templates in the table below, re-lay `Party/Player Character.md` and `Party/Party Dashboard.md` on the skeleton (PC body sections keep the D&D Beyond bindings; the sync button stays), and add **`World Building/World.md`** (new; approved 2026-11-15, `04 Expansion` §4). Campaign, Session Journal, and Session Prep get the prose-note form: header, section bar, right-hand panel.
- **Expansion fields (`04 Expansion` §1.1, approved 2026-11-15 without NPC `role`):** add each approved field to its template's frontmatter as an empty value, with an input in the tab §2.2 names. Option lists come from Configuration `enums` through `utils/metaBindInput` (the shop template's pattern), never hard-coded `option(...)` lists. Existing notes are **not** backfilled with the new keys.
- **Creation forms (`04 Expansion` §2.5):** every entity form asks only name, gist, and location/parent (plus level for locations). Remove the other form fields; their inputs stay in the note. The "roll from tables" checkbox only if T7 passed.
- **Docs in the same batch:** add the approved fields and enums to `.claude/skills/vault-note/references/entity-schemas.md` and `campaign-schemas.md`; describe the skeleton, tabs, partials, `[!player]`/`[!dm]`, `note_fields`, and the Q1–Q7 editing rules in `templates.md`. Sentence edits (Q7) are documented in C11. Remove the "Useful Frontmatter Fields" section from `1. DM Toolkit/DM Quick Reference.md`.

| Template | Frontmatter additions (as empty values) | Body |
|---|---|---|
| `World Building/NPC.md` | `gist: ""`, `summary: ""`, `revealed: {}`, `reveal: {}`, `facts: []`, `secrets: ""`. Remove `groups: []`, `religions: []`. | The gist input goes in the skeleton's gist strip (`04 Expansion` §2.1), not the infobox; the same applies to every "Gist row" in this table. Leave the Group(s)/Religion(s) rows until E2/E3. Add `### Plot Hooks` above `### Hidden Details` (matches the mirror). |
| `World Building/Location.md` | `gist`, `revealed`, `reveal`, `facts`, `secrets`, `routes: []`. Remove `religions: []`. | Add a Gist row; remove the Religions row. |
| `World Building/Shop.md` | done in C4 | — |
| `Campaign/Quest.md` | `kind: quest`, `parent: ""`, `gist`, `revealed`, `facts`, `secrets`, `giver: ""`, `locations: []`, `items: []`, `factions: []`, `pcs: []` | Replace the four legacy button scripts (`addItem.js`, `removeItem.js`, `moveUp.js`, `moveDown.js`) with `arrayActions.js` calls per `vault-note/references/templates.md`. |
| `Campaign/Campaign.md` | `site_slug: ""` | — |
| `DM Prep/Session Journal.md` | `factions: []`, `wrapped: false`, `publish: false` | Add a **Factions** row to Session Links (`inlineListSuggester(optionQuery(#faction))`). Change the Items row per T3's result. |
| `DM Prep/Session Prep.md` | `session_number:`, `journal: ""`, `obsidianUIMode: preview` | Add `## Improvisation Kit` as the last heading. |
| **New** `World Building/Faction.md`, `Item.md`, `Deity.md`, `Creature.md` | Per `vault-note/references/entity-schemas.md` | Model on `Shop.md`: the `templateInit`/`formFields` pattern, a name field, `init.moveFile(tp, config.locations.factions|items|deities|creatures, data.name)`, an infobox with inputs for the type's fields, `## DM Notes`. `Creature.md` also gets the `## Stats` section with an empty `statblock` block and `^statblock` anchor, copied from `NPC.md`. |

- **`monster.txt` `isNpc` branch:** bring its frontmatter to parity with `NPC.md`: emit every key `NPC.md` emits, with empty defaults where the import has no data (`location:` empty, `relationships: []`, `race:`, `gender:`, `age:`, `occupation: []`, `gist: ""`, `summary: ""`, `revealed: {}`, `reveal: {}`, `facts: []`, `secrets: ""`, `party_relationships: {}`, and the text fields as `""`). Make the same body changes as `NPC.md`. Qute syntax: literal braces are written `\{` and `\}`.
- **Delete** the empty stub `World Building/Group.md` (replaced by `Faction.md`; approved 2026-11-15). **Leave `Event.md`:** the DM wants an Event note type with a location; it is an open design item (`04 Expansion` §5), not part of the migration.
- **Verify:** `grep -c "groups:\|religions:" "z_Templates/Templater/World Building/NPC.md"` → 0. Ask the DM to create one throwaway NPC, Faction, Item, Deity, and Quest from the templates, confirm each lands in the right folder with the right tags, then delete them. `diff <(grep -o "^[a-zA-Z_]*:" NPC-template-frontmatter) <(same for monster.txt isNpc)` shows the same key set.

### C7 [M] Facts editor in notes

- **New file:** `z_Scripts/Datacore/FactsTable.tsx`, modelled on the Quest Steps table in `z_Templates/Templater/Campaign/Quest.md`: one row per `facts[i]` with columns **Fact** (`INPUT[textArea:facts[i].text]`), **Learned** (a `suggester(optionQuery(#session-journal))` bound to `facts[i].learned["<active party name>"]`, built with `dv.view('utils/metaBindInput', …)` as the Quest template does for per-party fields), **Locked** (`INPUT[toggle:facts[i].locked]`), and a delete button using `arrayActions.js` (`action: remove, field: facts, index: i`). Instead of an "Add Fact" button, the table always ends with one empty row (`04 Expansion` Q6): typing into its Fact cell appends `{text, learned: {}}` to `facts` through `arrayActions.js` (`action: add, field: facts`) and a new empty row appears. Apply the same pattern to the quest Steps table in C6.
- **Block to insert** (same text everywhere):

````
```datacorejsx
const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
return function View() { return <FactsTable /> }
```
````

- **Order changed by `04 Expansion`:** C7 now runs **before** C8 and C6, and builds only the component and the block. The block goes into the Player-Facing partial in C8 (below the `summary` input, without its own `##` heading, since the tab is the heading); templates get it through C6, existing notes through C9. C7 itself inserts nothing into notes.
- **Verify:** the block renders in a scratch note; ask the DM to add and delete one fact there.
- **Rollback path:** `z_Scripts/Datacore/FactsTable.tsx`.

### C8 [M] Shared layout pieces (`04 Expansion` §2.1–2.3)

- **New files:**
  - `z_Scripts/Dataview/views/entityHeader.js`: breadcrumb (reuse `locationBreadcrumbs` logic), image carousel (reuse `imageCarousel`), name, `pronounced`, state chips (NPC `condition`, `party_relationships[party]`; location `status`; faction `standing[party]`; quest active/completed; journal `wrapped`), a type-aware breadcrumb (location parents; for PCs, quests, parties, journals and prep: party, arc, or campaign), and, on entity types, the knowledge badge for the active party: "Revealed · n of m facts learned" or "Hidden". It reads only frontmatter.
  - `z_Templates/Partials/` (**new folder, approved with X4**): `Tabs - <Type>.md` for each type in `04 Expansion` §2.2, holding the `tabbed` select (`memory^tab` or the T5 fallback) and the `[!tabbed-box]` callout with one child callout per tab; `Player-Facing.md` holding the `summary` input in a `[!player]` callout and the C7 facts block. Use `tp.file.include` if T5b passed; otherwise C6 inlines them.
  - In `.obsidian/snippets/Custom Styles.css`: callout types `player` (green border, tinted background) and `dm` (red), a dotted underline on `.mb-input` in reading view, a `.derived` label style, and the auto-growing text area from T10 (or the pop-out button if T10 failed). Colours come from theme variables where they exist.
  - **Header chips are inputs (Q1):** `entityHeader.js` renders each `chip: true` field from `note_fields` as a Meta Bind inline input through `utils/metaBindInput` (per-party fields keyed by the active party), not as text.
- **Changed views:** `npcRelationships`, `npcsInLocation`, `locations`, and the quest tables print a small `derived` label in their heading.
- **Verify:** ask the DM to open a scratch note using the header and one tab partial and confirm it renders in reading view and in the ITS theme's dark and light modes.
- **Rollback paths:** the new files, `Custom Styles.css`.

### C9 [M + J] Re-skin existing note bodies

- **Files:** every note of every type in `04 Expansion` §2.2 that has notes today: NPCs, regions, settlements, places of interest, shops, the world, quests, PCs, the party, the campaign, session journals, and session prep. Faction, item, deity, and creature notes are created on the new templates in E and need no re-skin. Configuration is re-skinned in B3.
- **Change, field notes:** replace the body **above** `## Stats` (NPC) or `## DM Notes` (others) with the skeleton the matching C6 template now produces. For PCs, keep the D&D Beyond-generated sections' content and move them into the Sheet, Spells, and Inventory tabs; ask first if the sync button's code writes to fixed body positions.
- **Change, prose notes (campaign, journals, prep):** add the shared header, the section bar, and the right-hand panel. Leave every heading and every line of prose where it is, byte-identical. Wrapped journals get the header and panel only: their body is canon (CLAUDE.md rule 2), so nothing inside it is moved; the "What Happened" `[!dm]` styling applies only to new journals. C9 runs before G2 sets `wrapped: true` on any existing journal, so the post-wrap edit lint (`02 Design` §6.3) has nothing to flag; if a journal is already wrapped when C9 runs, list it and ask. Keep `## Stats` (with its `statblock` block and `^statblock` anchor) and everything from `## DM Notes` down **byte-identical**. Frontmatter is untouched.
- **[J] first:** dry-run compares each note's current above-anchor body with the **old** template output for its type (whitespace-normalized). Notes that match get re-skinned mechanically. Notes that differ hold hand-written content: list each with the differing lines and ask the DM, per note, where the content goes (DM Notes, a field, or delete). Expected: most COS imports match; hand-built notes (Marrow, Lord Caldris Velmont, the Amber Wardens) differ.
- **Location maps:** keep each note's Leaflet block, moved into the Map tab, with the tutorial comment lines (`### …` inside the block) removed and the other keys unchanged.
- **Verify:** `grep -L "entityHeader" <files>` → only listed skips. Ask the DM to open two NPCs, a settlement, and a shop.
- **Rollback paths:** `4. World Almanac/`, `3. The Party/`, `1. DM Toolkit/Campaigns/`, `1. DM Toolkit/Session Journals/`, `1. DM Toolkit/Session Prep/`.

### C10 [M] Bases bulk-edit views (`04 Expansion` Q3)

- **Files:** `z_Bases/NPCs.base`, `Locations.base` (existing); new `Shops.base`, `Quests.base`, `Journals.base`, and, after E1, `Factions.base`. Load the `obsidian-bases` skill first.
- **Change:** add a table view named **Edit** to each, filtered to campaign notes of that type (never `5. Mechanics/`), with one column per `note_fields` entry marked `bulk: true` for that type, plus `file.name`. Sort by parent `location`, then name. Leave existing views untouched.
- **Never as columns:** nested or per-party fields (`party_relationships`, `standing`, `revealed`, `reveal`, `facts`, `relationships`, `routes`). Bases can't edit them, and `revealed`/`learned` are written only from accepted proposals (CLAUDE.md rule 5).
- **Verify:** ask the DM to change `condition` on two NPCs from the NPCs Edit view and confirm both notes updated.
- **Rollback path:** `z_Bases/`.

### C11 [M] Skills, agents, and lint follow the expansion (`04 Expansion` §1, §2.6)

A field is finished only when every skill, agent, and script that reads or writes it knows about it (CLAUDE.md: "A field rename is finished only when…"). Run C11 **right after C6**, before any note gets the new fields, so no agent writes an old shape or misses a new one. Rows marked *later* are done in the J batch named, not here.

**Rules for every edit in this batch**

- Skills carry method, not schemas. Point to `vault-note/references/` for field shapes and to `Configuration.enums` for values; don't copy field tables into skills.
- Every proposed value for an enum field (`condition`, `status`, `standing`, `wealth`, `climate`, `kind`) comes from `Configuration.enums` (or the weather `climates`: Weather Generation's frontmatter until J7, `Configuration.weather.climates` after). A value that isn't in the list is proposed as an enum addition, not written.
- New fields are DM-voice and never player-facing unless the note's `reveal` lists them (`04 Expansion` §1). Say this once in `vault-note/references/knowledge-model.md`; skills link to it.

| File | Change | Fields / features |
|---|---|---|
| `vault-note/references/entity-schemas.md`, `campaign-schemas.md`, `templates.md` | Done in C6 (fields, enums, skeleton, `note_fields`). C11 checks they are complete against `04 Expansion` §1.1 and adds anything missed. | all |
| `vault-note/references/knowledge-model.md` | Add: fact `rumor` (default true; `false` keeps it out of the rumor roll; does not affect reveals). New fields are DM-voice unless listed in `reveal`; `curse` and `secrets` are never listable. | `rumor`, `curse`, visibility of new fields |
| `vault-note/references/folders-tags.md` | Add `z_Templates/Partials/`, the World template, and (*later*, J2) the tool subfolders. | folders |
| `vault-note/SKILL.md` | Add: values come from `Configuration.enums`; `note_fields` is the field list per type (adding a field = schema doc + `note_fields` entry); party location is derived from active PCs' `location`, never stored on the party; **sentence edits (Q7)**: a one-line DM instruction becomes a numbered edit proposal, written per accepted line. | enums, `note_fields`, party location, Q7 |
| `world-builder` | Outputs per type gain: NPC `voice`, `appearance`; location `atmosphere`, `hazards`, `status`, `climate`; settlement `wealth`; faction `symbol`, `motto`, `standing`; story item `charges`, `curse`; deity `title`, `symbol`, `alignment`. `gist` stays required; the rest are offered, not forced. | §1.1 entity fields |
| `story-creator` | Quests and threads carry `stakes`, `reward`, `deadline`. Secrets written as facts get `rumor: false` when only one source could know them. | `stakes`, `reward`, `deadline`, `rumor` |
| `campaign-planner` | Reconciliation checks quest `deadline` against the in-world date and faction `clock`; proposes faction `standing` and `status` changes the plan implies; reads campaign `status` and `level_range`. | `deadline`, `standing`, campaign fields |
| `session-prep` | Reads the last three journals' `spotlight` and proposes a scene for whoever is missing; uses `party_level` from the latest journal; lists quests with a `deadline` near the in-world date; uses location `atmosphere`, `hazards`, and `climate` for Fantastic Locations and weather; lists rumor-eligible unlearned facts at the party's location as table rumors; fills the prep header (target session, journal link). | `spotlight`, `party_level`, `deadline`, location fields, `rumor` |
| `session-wrap` | Step 5 (state changes) adds: NPC `condition` from the widened enum (captured, missing, unknown); location `status`; faction `standing`, `renown`, `status`, `clock`; item `charges`; journal `party_level` and `spotlight` (proposed with evidence lines, like the ledger); party `funds` when loot is banked. Party location is proposed as PC `location` changes, never as a party field. Step 1 drafts the journal into the new layout (recap, what happened, errata after wrap). | state fields in §1.1 |
| `reveal-review` | When proposing a `reveal` list, consider the new fields (e.g. `appearance`, `atmosphere`, `symbol` are often safe; `curse`, `hazards` with traps, and `standing` usually aren't). | new fields in `reveal` |
| `canon-check` | Treat wrap-set state as canon like `condition`: location `status`, faction `standing`/`renown`, item `charges`, journal `spotlight`/`party_level`. `deadline`, `stakes`, `reward` are plan. | canon vs plan for new fields |
| `lore-researcher` | Answers about an NPC lead with `voice`/`appearance` when asked "who is X" at the table; reads location and faction `status` from the index; party location from PCs. | index columns, PC location |
| `encounter-builder` | Party level from the latest journal's `party_level` (fallback: PC levels); uses location `hazards`; treasure can go to a story item, a PC, or party `funds`; checks item `charges`. *Later* (J8): the Loot tool. | `party_level`, `hazards`, `funds`, `charges` |
| `dnd-qa` | *Later* (J1): mention the Rules & Spells note as the DM's in-Obsidian lookup; the skill's own lookup method is unchanged. | — |
| `statblock-creator`, `obsidian-bases`, `json-canvas` | No change (creature fields unchanged; Bases method is generic; C10's Edit-view conventions live in `vault-note/references/templates.md`). Record "checked, no change" in the report. | — |
| `vault-lint` scripts (`vaultModel.js`, `lint.js`, `buildIndex.js`) | `vaultModel`: parse the new fields; `status` column for locations and factions (today only NPC `condition` and quest state). `lint`: new rules `enum-value` (value not in `Configuration.enums`), `note-fields` (from C6), `climate-unknown` (not in `weather.climates`), `wealth-not-settlement`, `pinned-unresolved`, `spotlight-not-present` (a `spotlight` PC missing from `party_present`), `party-location-field` (warn if a party note carries `location`). `buildIndex`: `state.md` shows party location from active PCs ("split" when they differ) and the last three sessions' spotlight. | lint and index |
| `vault-lint/SKILL.md` | List the new rules and what each means. | — |
| `agents/table-assistant.md` | NPC answers lead with `voice` and `appearance`; location answers with `atmosphere` and `hazards`; *later* (J1) point to the Rules & Spells note; *later* (J6) can roll a rumor from the location's facts. Stays read-only: sentence edits are appended to the live-session log. | new fields, Q7 boundary |
| `agents/vault-keeper.md`, `agents/dm-assistant.md` | Add sentence edits (Q7) and the enum rule. | Q7, enums |
| `commands/*.md` | No change (entry points only). Record "checked, no change". | — |
| `CLAUDE.md` | One line in "Conventions in brief": option values come from `Configuration.enums`; `note_fields` lists each type's fields. (Approved 2026-11-15.) | enums, `note_fields` |

- **Verify:**
  - `grep -L "Configuration.enums\|enums" .claude/skills/{world-builder,session-wrap,story-creator,session-prep}/SKILL.md` → nothing.
  - `grep -rn "party.*location:" .claude/skills .claude/agents` shows no instruction to write a party `location` field.
  - `grep -n "^role:" .claude/skills/vault-note/references/entity-schemas.md` → nothing (no NPC `role` field).
  - `node .claude/skills/vault-lint/scripts/lint.js --summary` runs with the new rules listed; `buildIndex.js` writes `state.md` with party location and spotlight lines.
  - Dry run: ask `vault-keeper` to "mark Velmont captured" on a scratch copy; the proposal uses `condition: captured` from the enum and nothing else.
- **Rollback paths:** `.claude/skills/`, `.claude/agents/`, `CLAUDE.md`.
- **Reminder:** `.claude/` is globally git-ignored; changed skill files that were force-added are tracked, new files need `git add -f` (H7).

### J-batch skill follow-ups

Each J batch that ships a tool also updates the skills named *later* above in the same batch: J1 → `dnd-qa`, `table-assistant`; J2 → `vault-note/references/folders-tags.md`; J3 → `vault-note` shop schema notes on `pinned_items`/`last_stocked`; J5 → `session-prep` (open the Session Dashboard); J6 → `table-assistant`, `session-prep`; J7 → `session-wrap` (advance time is a DM action, the wrap reads the result); J8 → `encounter-builder`.

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
- **`Functional/Add Relationship.md` — rewrite as one Modal Forms form (`04 Expansion` Q6)** with three fields, no chained pop-ups: a target from pages tagged `npc`, `player`, `faction`, `story-deity`, or `location`; a type from `Configuration.relationship_types`; an optional DM `note`. Include `note` in the pushed object when filled; push `{target: "[[<path>|<name>]]", type}` onto the active note's `relationships` (create the array if absent). Write nothing to the other note.
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

- **Candidates:** NPC notes that describe a kind of creature, not an individual. Known: `4. World Almanac/NPCs/Amber Warden.md` and `Unfinished Amber Warden.md`. Find others by listing NPC notes with no `gender`, no `age`, and empty `party_relationships`, and ask the DM about each.
- **Proposal per candidate:** move to `4. World Almanac/Creatures/`, replace tag `npc` with `story-creature`, drop the NPC-only keys (`location`, `condition`, `gender`, `age`, `alignment`, `occupation`, `personality`, `ideal`, `bond`, `flaw`, `likes`, `dislikes`, `party_relationships`) after moving any non-empty text into `description`, and swap the body scaffold for the Creature template's. Where the note records where the creature is found (e.g. Greyfen Hollow), keep that as a `home` edge.
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

- **Order:** S1 → S48 (S0 excluded, per the DM), five sessions per sitting (about 10 sittings).
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
| H7 | [DM] | Existing `.claude/` files are already tracked (verified 2026-11-15). Force-add only files created during the migration: `git add -f .claude/agents .claude/skills .claude/commands .claude/settings.json`. | `git status --short --ignored .claude` shows no `!!` rows for those paths |

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

## J. Tools (`04 Expansion` §3)

Independent of the site exporter. J1 runs **after the migration** (after H7; DM decision 2026-11-15); the rest have the dependencies listed.

| # | Marker | Build | Depends on | Verify |
|---|---|---|---|---|
| J1 | [M] | **Rules & Spells lookup.** `z_Scripts/Datacore/RulesLookup.tsx` and `Rules & Spells.md` in the At the Table tools folder (J2 has run by then), per `04 Expansion` §3.2, reading sources from Configuration `rules_lookup` (add that key in J1 if B3 has not run). `startup.js` opens the note pinned in the right sidebar. DM Screen gets a search box that opens it. Read-only: never writes to `5. Mechanics/` or `6. Resources/`. | T6, H7 | DM searches "prone", "concentration", "fireball", "cover" and each lands on the right section in under two seconds. |
| J2 | [J] | **Tools folders.** Propose the moves in `04 Expansion` §3.1 as a table; on approval, move with Obsidian's rename (ask the DM, or a script that updates links), then fix Configuration's tools list to group by subfolder. | X9 approved | `lint.js --rule unresolved-link` unchanged from before the move. |
| J3 | [M] | **Shop upgrades.** `generateShopInventory.js` keeps `pinned_items`, stamps `last_stocked`; `ShopInventory.tsx` adds settlement `wealth` to the price chain and a Sell column (`buy_rate`, default `Configuration.shop_defaults.buy_rate`), plus a `memory^` haggle ±% input. | C4, B3 | DM regenerates a test shop with one pin; the pin survives; prices change with the settlement's `wealth`. |
| J4 | [M] | **Retire `Calculators/Travel.md`.** After C5 points `travelTimes.js` at the party, move its transport-cost section into the Party Dashboard template and the party note, using the snake_case names from C5b group 5 for the moved keys; ask the DM before deleting the calculator. | C5 | Vallaki's Travel Distances table matches the old values for the same pace. |
| J5 | [M] | **Session Dashboard** (`04 Expansion` §3.4 #3). | C8, C9 | DM opens it at the start of a session. |
| J6 | [M] | **Rumor roll** on the location At the Table tab. | G2 (facts exist) | Rolls only unlearned facts with `rumor` not false. |
| J7 | [M] | **Advance Time.** First do B3 change 2 (weather into Configuration, with the snake_case renames and the Months-block write guard), deferred here; it also re-skins the Configuration body (`04 Expansion` §1.2). | T8 | Date moves; weather rolls for the party's `climate`. |
| J8 | [M] | **Loot**, **faction clock view**, **region encounter tables**, **party treasury** (`04 Expansion` §3.4 #7–10), one at a time, each after the DM asks for it. | E1 for clocks | per tool |

---

## Batch order and dependencies

```
T1–T10 → A1–A6 → B1–B4 → C1 → C2 → C3 → C4 → C5 (+J4) → C5b → C7 → C8 → C6 → C11 → C9 → T11 → C10 → D1 → D2
      → E1 → E2 → E3 → E4 → E5 → E6 → E6b → E7 → E8 → F → G1 → G2 → G3 → H1–H7 → J1 → I
J2, J3 after B3/C4; J5 after C9; J6 after G2; J7 after T8; J8 on request
```

The vault is usable after every batch. Mechanical batches A–D need about one working session. E1–E4 need one DM sitting for the faction and deity tables. E5–G2 are the judgment-heavy part and can be spread over weeks; the vault, the skills, and the index work throughout, and the lint shows what remains.
