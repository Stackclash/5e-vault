# Vault Roadmap

A DM-perspective review of this vault: what is built and working, what is half-built, and a prioritized roadmap for improvements. Generated 2026-07-03.

---

## Complete Features (Working Well)

These systems are finished, integrated, and worth protecting as the vault evolves.

- **Configuration-driven core** — [[Configuration]] centralizes the active world/party/campaign, folder locations, relationship mappings, shop economics, and item pricing. Templates and scripts all read from it, so switching campaigns is a dropdown change instead of a refactor. This is the strongest architectural decision in the vault.
- **Template pipeline** — Every note type (NPC, Location, Shop, PC, Quest, Session Journal/Prep) is created through Templater + Modal Forms with shared helpers (`templateInit.js`, `formFields.js`). Consistent frontmatter, consistent placement.
- **D&D Beyond character sync** — One button pulls a full character sheet (stats, spells, inventory, backstory) into a player note. Rich rendered sheet with ability scores, saves, skills, spell slots, and inventory tables.
- **Party dashboard** — [[Midnight Covenant]] combines a travel calculator (mount/pace/encumbrance/exhaustion aware), the Lazy DM encounter benchmark, per-party quest tracking, NPC relationship rollup, and a session log in one place. This is a genuinely good at-the-table screen.
- **Fantasy calendar integration** — Calendarium + `calendarDate.js` give in-world dates on journals, timelines on the party note, and season-aware weather.
- **Shop economy engine** — Shop inventory generation with dice-notation stock counts, rarity tiers, and a full pricing model (tier/consumable/attunement/recharge modifiers, per-world `economic_scale`).
- **Generated 5e compendium** — `5. Mechanics/` via ttrpg-convert-cli with a post-processing script. Clean separation of generated vs. authored content.
- **Data-quality dashboards** — The "Fix Notes" section of [[Configuration]] surfaces NPCs, locations, and journals with missing fields. The tooling for vault hygiene already exists; it just needs to be acted on (see roadmap).
- **Session prep structure** — The prep template follows the Lazy DM method (strong start, scenes, secrets and clues, fantastic locations, NPCs, monsters, treasure). Recent preps (e.g. the planar journey prep) are excellent and table-ready.
- **DM reference layer** — [[DM Screen]], [[DM Quick Reference]], the Knowledge folder, and the calculators cover in-session rules lookups well.
- **Prompt Builder** — A working AI-prompt templating system that can inject vault content into reusable prompt templates.

---

## Incomplete Features (Summary)

| Feature | State |
|---|---|
| Session journals | ~10 of 42 are unnamed placeholders or missing summaries; template sections go unused |
| Quest tracking | Full infrastructure, but only one quest note exists ([[The Ones Who Were Forgotten]]) |
| Groups/Factions | Config + template exist; the `4. World Almanac/Groups` folder does not, and zero group notes exist |
| Events | Template exists; no folder, no config entry, no notes |
| Campaign note | [[The Hunt for Vecna]] is a scratchpad with dangling bullets, not a campaign command center |
| Meta Bind migration | Legacy `addItem.js`/`removeItem.js`/`moveUp.js`/`moveDown.js` still wired into [[Configuration]] and the Quest template |
| D&D Beyond sync | Known FIXME: classes don't update; alignment imports as the literal string `character.alignment` |
| Weather generator | Storms unfinished; `weather.json` duplicated at vault root and in `z_Scripts/JS/` |
| Encounter Generator | Still transcludes Curse of Strahd random encounters; stale for the current arc |
| Vault hygiene | Stray root files (`test.md`, `Untitled.md`, root `Session Prep.md`), unprocessed [[Inbox]] |

---

## Roadmap

Ordered roughly by impact at the table. Sections 1–3 pay off every session; 4–7 are structural; 8–12 are cleanup and polish.

### 1. Clear the Session Journal Backlog

**Problem:** S33–S42 are mostly titled "New Session Journal" with empty summaries, and even titled journals (S29, S30, S31, S36) still contain template boilerplate ("Small description.", "Description"). The vault's own Fix Notes dashboard flags these. This matters beyond tidiness: session prep pulls "Details to Remember" from `#remember` tags in journals, and the party dashboard's session log displays summaries — both features degrade when journals are empty.

**Actions:**
- Backfill titles and 2–3 sentence summaries for S33–S42 while the sessions are still recallable. The "What Happened" bullets that do exist (e.g. S42's Tavish interrogation) are enough seed material.
- Set `fc-end` dates and `locations` on the flagged journals so the timeline and Locations Visited views stay accurate.
- **Simplify the journal template to match how you actually take notes.** "Key Learnings" and "Items Of Importance" are unused in every journal reviewed — either drop them or replace them with the sections you do fill in (running bullets + magic item tracking). A template you fight is a template you skip.
- Consider a post-session ritual note pinned in the template: title, summary, `#remember` tags, done. Five minutes after each session prevents this backlog from re-forming.

### 2. Rebuild Quest Tracking Around the Current Arc

**Problem:** The quest system (steps, per-party active/completed toggles, dashboard integration) is fully built but holds a single quest. Meanwhile the actual campaign state — pursue [[Lord Caldris Velmont]] to the Impenetrable Fortress, investigate the Silent Ascendency, the noble-coercion political thread, five separate character tie-ins — lives as scratch bullets in [[The Hunt for Vecna]]. At level 10 with a multi-front campaign, untracked threads get dropped.

**Actions:**
- Create quest notes for the live threads: the Velmont pursuit, the Silent Ascendency investigation, the Bruokdon noble-coercion arc, and one per character tie-in (Redgrave's Order of the Silver Dragon, Faerah's Eilistraee/Underdark hook, Wisp's slumbering master, Yevelda's parents, Roark — currently blank).
- Use quest steps as "possible next beats," not a railroad — the infrastructure already supports partial completion per party.
- Retire the campaign-note scratch bullets once each is promoted to a quest note, leaving the campaign note as an index (see section 4).

### 3. Finish the Groups/Factions Feature

**Problem:** [[Configuration]] declares `locations.groups: 4. World Almanac/Groups`, a Group template exists, and NPC notes have a `groups` field — but the folder doesn't exist, so the Group template will fail on file move, and every NPC's group is untracked free text. This campaign is faction-heavy: the Umbral Athenaeum Council, the Silent Ascendency, the Keepers of the Feather, the Watchers over the Fallen, the Artisan Guild, the Order of the Silver Dragon.

**Actions:**
- Create `4. World Almanac/Groups/` (plus a `Groups.md` folder note matching the pattern of `NPCs.md`, `Shops.md`, etc.) and add a `#group` tag row to the folder map in `CLAUDE.md`.
- Create group notes for the six factions above, with members, goals, and current disposition toward the party.
- Convert the NPC `groups` free-text field to a wikilink suggester (like `location`) so group membership becomes queryable — then a group note can auto-list its members with a Dataview query.

### 4. Promote the Campaign Note to a Command Center

**Problem:** [[The Hunt for Vecna]] contains an Excalidraw embed and scratch notes with dangling bullets ("2." with nothing after it; Roark's section empty). There's no at-a-glance view of villain activity, active fronts, or where each thread stands. For a campaign whose villain works off-screen, that's the one view a DM needs between sessions.

**Actions:**
- Add a "Fronts" section (Lazy DM / Dungeon World style): Vecna's next milestone, the Silent Ascendency's current operation, Velmont's rebuilding — each with a countdown of what happens if the party does nothing.
- Add Dataview rollups: active quests for the linked party, NPCs with `partyRelationships` set, recent journals. Make the campaign note the hub that links out, instead of a second scratchpad.
- Complete or delete the empty tie-in bullets; blank sections hide the fact that Roark has no hook yet.

### 5. Decide the Events Feature

**Problem:** `z_Templates/Templater/World Building/Event.md` exists, but there's no Events folder, no config key, no tag in the canonical tag table, and no event notes. Half-features cost attention every time you see them.

**Actions:**
- If world events are worth tracking (they pair naturally with Calendarium timelines already in use): create the folder, add `locations.events` to [[Configuration]], add the tag to `CLAUDE.md`, and backfill major campaign events.
- If not: delete the template. Either outcome is better than the current state.

### 6. Complete the Meta Bind Migration

**Problem:** `arrayActions.js` is the declared standard, but [[Configuration]]'s relationship-mapping table and the Quest template still call `removeItem.js`, `addItem.js`, `moveUp.js`, and `moveDown.js`. As long as canonical notes use legacy scripts, every copy-paste propagates them.

**Actions:**
- Migrate the remaining call sites (Configuration relationship mapping, Quest template NPC/step tables, and the existing quest note) to the `arrayActions.js` dispatcher.
- Delete the four legacy files once `grep` shows zero references.

### 7. Fix the D&D Beyond Sync Bugs

**Problem:** The sync script has a known FIXME (classes not updating), and synced sheets show artifacts: [[Redgrave]] has `alignment: character.alignment` (a literal unresolved string) and an empty gender/age. Since this powers the at-the-table character sheets and the encounter benchmark reads player levels, silent staleness has mechanical consequences.

**Actions:**
- Fix the classes update path and the alignment mapping in `z_Scripts/Templater/dndBeyondCharacter.js`.
- Re-sync all six active PCs and spot-check level/AC/HP against D&D Beyond.
- Add a "last synced" timestamp to the frontmatter so stale sheets are visible.

### 8. Retarget the DM Tools at the Current Campaign

**Problem:** Several tools are still aimed at Barovia: [[Encounter Generator]] is a single transclusion of the Curse of Strahd random encounter tables, and [[Barovian Lore]], [[Barovian Names]], and [[Vistani Lore]] headline the Tools folder. The party is now in [[Bruokdon]] heading into planar travel — the tools won't answer the questions this arc asks.

**Actions:**
- Rebuild [[Encounter Generator]] to be campaign-aware: random tables for the current region/planes, or a Dataview-driven picker over `5. Mechanics/Bestiary` filtered by CR against the party benchmark (the benchmark script already exists).
- Add name/rumor tables for Eldoria/Bruokdon cultures to match the Barovian ones.
- Move the Barovia-specific tools into an archive subfolder so the Tools list reflects the live campaign.

### 9. Flesh Out the World Layer

**Problem:** [[Eldoria]] — the active world — contains an economic scale input and a locations query, and nothing else: no pantheon, no history, no map, no themes. The Vecna arc is now planar and political, which leans on exactly this missing layer (gods, cosmology, nations, who the nobles are). Post-Barovia settlements ([[Bruokdon]], [[Thornmere]], [[Greenfall]]) are similarly thin compared to the imported Curse of Strahd content.

**Actions:**
- Write the Eldoria overview: pantheon (Eilistraee and Gond already matter to PCs), cosmology (the party is actively plane-hopping), major powers, and campaign themes.
- Give Bruokdon a proper settlement entry: districts (the journals already name Fancy/Common/Industry districts), power structure, the noble houses implicated in Velmont's scheme.
- Add a Leaflet map for the current region — the template and bounds calculator already exist.

### 10. Vault Hygiene Pass

**Problem:** Root-level strays undermine an otherwise disciplined structure: `test.md` (empty), `Untitled.md` (a captured Templater error), `Session Prep.md` at the root (S42's `prep-notes` frontmatter points at it instead of a dated prep note), and `weather.json` duplicated at the root and in `z_Scripts/JS/`. [[Inbox]] holds ~50 unprocessed links, and `2. Scratch Notes/` has timestamp-named fragments.

**Actions:**
- Delete `test.md` and `Untitled.md`; move root `Session Prep.md` content into `1. DM Toolkit/Session Prep/Midnight Covenant/` and repoint S42's `prep-notes` link.
- Consolidate to one `weather.json` (the `z_Scripts/JS/` copy) and update whatever reads the root copy.
- Process the [[Inbox]]: promote keepers into `1. DM Toolkit/Knowledge/` or Tools, drop the rest. Same for the timestamped scratch notes (the Final Encounter and Warehouse notes look like they belong in session prep).
- New journals still list `COS` under `timelines` — decide the timeline name for the Vecna era so Calendarium views separate the two arcs.

### 11. Promote House Rules to a Real Note

**Problem:** [[House Rules]] is a polished, table-affecting document (hidden death saves, potion rules, usage dice, crit rules) living in `2. Scratch Notes/` — the folder defined as "unprocessed." Rules that change how players play shouldn't live in an inbox.

**Actions:**
- Move it to `1. DM Toolkit/` and link it from [[DM Screen]] or [[DM Quick Reference]] so it's one click away mid-session.
- Consider exporting/sharing it with players — several rules (Die Silently, You're Coming With Me) change player decision-making and should be known before they matter.

### 12. Documentation Refresh

**Problem:** `README.md` links Quest to `z_Templates/Templater/Story/Quest.md` (it lives in `Campaign/`), the CSS Snippets section is empty headers, and newer systems (Prompt Builder, shop economy, weather generator, Bases views) are undocumented. Future-you is the audience.

**Actions:**
- Fix the template paths and fill or remove the empty CSS sections.
- Add short entries for the undocumented systems: what each does, where its config lives, and its entry-point note.
- Document the storm-generation TODO in [[Weather Generation]] (currently only recorded in the stray `test.md`) and finish the storms feature or descope it.

---

## Suggested Order of Attack

1. **This week:** Section 10 (hygiene — an afternoon), Section 1 (journal backfill before memory fades).
2. **Before next session:** Sections 2 and 3 (quests + factions — the current arc needs them), Section 11 (house rules).
3. **Between arcs:** Sections 4, 7, 8 (campaign hub, sync fixes, tool retargeting).
4. **Ongoing/low-stakes:** Sections 5, 6, 9, 12.
