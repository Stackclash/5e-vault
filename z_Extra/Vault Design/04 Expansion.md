# Phase 2b — Expansion: fields, layouts, tools

Date: 2026-11-15. **Status: settled.** Every decision below is made (§4); the only open item is the Event note type (§5), which is outside the migration. Extends `02 Design.md`; nothing here is built yet. Changes to the migration are written into `03 Migration Plan.md` (tests T5–T11, batches B3–B4, C5–C11 with C5b for key casing, and section J; C11 brings every skill, agent, and lint script up to the new fields).

**Mock-up:** https://claude.ai/artifact/CbZqj3gugAvs3HsXBUsP5A. It has one board per note type: NPC, settlement, shop, faction, quest, story item/deity/creature, PC, party, campaign, world, session journal, session prep, and Configuration, plus the rules lookup and the quick-create form. Content is real vault data; rows marked "example" or shown as `[placeholder]` are illustrative and are not canon.

**Labels.** *Verified* = checked in the vault. *To verify* = a test in the migration plan runs before anything depends on it.

**DM requirements (2026-11-15):** the table pain is rules and spell lookup; **Configuration is the one note that configures the vault** (shop and pricing config stays there); no NPC `role`; **the redesign covers every note type**, not only entities; content and frontmatter must be quick to update; every vault-owned frontmatter key is snake_case.

## Decisions at a glance

| # | Topic | Decision |
|---|---|---|
| X1 | New fields | The per-type additions in §1. Only fields you use at the table or a tool reads; nothing derivable. **Approved 2026-11-15, without NPC `role`.** No party `location` field: the party's whereabouts already come from the PC notes' `location` (verified, `views/partyLocation.js`). |
| X2 | Vocabularies | Every option list now hard-coded in a template (`condition`, party relationship, alignment, shop sizes…) moves to Configuration `enums`. Templates, views, and the lint read one list. **Approved 2026-11-15.** |
| X3 | One configuration note | Configuration absorbs the weather config from `Weather Generation.md` and the new enums. Tool notes keep only their UI and scratch inputs. **Approved 2026-11-15.** |
| X4 | Note skeleton | One skeleton for **every note type**: breadcrumb → header → gist → body, with a right-hand infobox. In field notes (content in frontmatter) the body is tabs, with "At the Table" or its equivalent as the default tab. In prose notes (campaign, session prep, a journal's narrative) the body is ordinary headings with a section bar (§2.2). **Approved 2026-11-15.** |
| X5 | Tabs | The `TabsInObsidian` snippet you already have, bound to a Meta Bind `memory^` variable, so switching tabs writes nothing to the note (*to verify*, T5). Disable the duplicate `metabind-tabs` snippet. **Approved 2026-11-15.** |
| X6 | Colour semantics | Two callout types: `[!player]` (green: summary, facts, recap) and `[!dm]` (red: secrets, hooks, DM notes). Nothing else gets colour. **Approved 2026-11-15.** |
| X7 | Creation forms | Three fields (name, gist, location/parent). Everything else is filled in the note. **Approved 2026-11-15.** |
| X8 | Rules & Spells lookup | The first new tool (§3.2). It doesn't depend on the migration, but **it is built after the migration** (J1 after H7; DM decision 2026-11-15). |
| X9 | Tools folders | Group tools by use: At the Table, Generators, Calculators, and per-world. **Approved 2026-11-15.** |
| X10 | Editing speed | Rules Q1–Q7 in §2.6: edit where shown, "Edit all" form, Bases bulk-edit tables, growing text areas, a 1-second render budget, one-step list entry, and sentence edits through the agents. One field list per type in Configuration drives all of them. **Approved 2026-11-15.** |
| X11 | Key casing | Every frontmatter field name the vault owns is `snake_case` (a single lowercase word counts). Keys that a plugin reads, generated `5. Mechanics/` content, and map keys that are values (party names, rarities) are exempt. Six groups of keys get renamed (§1.3). **Approved 2026-11-15: snake_case only.** |

---

## 1. Frontmatter additions

The rule from `02 Design` still holds: store only what can't be derived. Sessions an NPC appeared in, an NPC's last interaction, a location's residents, and a faction's members are derived and stay out of frontmatter. That rules out `lastInteraction`, `openThreads`, and `decisionsToTrack` from `DM Quick Reference.md` (decisions and threads are facts and quest threads).

All new fields are DM-voice unless the table says otherwise. None is exported unless it is listed in that note's `reveal`, so the visibility model doesn't change.

**No backfill.** The new keys go into templates as empty values. Existing notes don't get empty keys; Meta Bind creates a key the first time you edit it. That keeps 98 NPC notes from growing ten empty lines each.

### 1.1 Per type

| Type | Field | Shape | Why | Set by |
|---|---|---|---|---|
| **NPC** | `voice` | string | Speech, cadence, mannerism, catchphrase. Scannable mid-conversation; `description` isn't. | DM |
| | `appearance` | string, one line | Read-aloud description on first meeting. | DM |
| | `condition` | enum widened: healthy, injured, captured, missing, dead, unknown | `captured` and `missing` both happened in this campaign (Velmont). | wrap |
| **Location** (all levels) | `atmosphere` | string | Sights, sounds, smells: the read-aloud line. | DM |
| | `hazards` | string | Environmental danger, checkpoints, closures. | DM |
| | `status` | enum `location_statuses`: thriving, stable, wary, besieged, occupied, ruined | State that play changes. | wrap |
| | `climate` | a Configuration `weather.climates` name | Lets the weather generator roll for the party's current location. Inherited from the parent when empty. | DM |
| **Settlement** | `wealth` | enum `settlement_wealth`: destitute, poor, modest, prosperous, rich | Multiplies shop prices (§3.3). Distinct from world `economic_scale`. | DM |
| **Shop** | `pinned_items` | links into `5. Mechanics/Items` or story items | Survive regeneration. Today `generateShopInventory.js` replaces `items` outright (`fm.items = selectedItems`, verified), so hand-added stock is lost. | DM |
| | `buy_rate` | number, default from Configuration (0.5) | What the shop pays for items the party sells. | DM |
| | `last_stocked` | in-world date | Stamped by Generate Inventory; shows how stale the stock is. | script |
| **Faction** | `standing` | `{Party: enum party_standings}` | The party's reputation with the faction; same shape as NPC `party_relationships` (renamed from `partyRelationships`, §1.3). | wrap |
| | `renown` | `{Party: number}`, optional | DMG renown, if you use it. | wrap |
| | `symbol`, `motto` | string | Table-recognisable markers. | DM |
| **Story item** | `charges` | `{max, current, recharge}`, optional | Tracked in play. | wrap |
| | `curse` | string, DM-only | Kept apart from `secrets` so the wrap can propose "curse discovered" as a fact. | DM |
| **Deity** | `title`, `symbol`, `alignment` | string | Small and stable. | DM |
| **Quest / arc / thread** | `stakes` | string | What happens if the party ignores it. Prep's first question. | DM |
| | `reward` | string | What is on offer, as the giver states it. | DM |
| | `deadline` | in-world date, optional | Lets arcs and faction clocks meet the calendar. | DM |
| **Session journal** | `party_level` | number | Encounter tuning and recaps. | wrap |
| | `spotlight` | links to PCs | Whose story moved. Feeds `session-prep` ("who hasn't had a turn?"). | wrap |
| **Party** | `funds` | `{cp, sp, ep, gp, pp}` | Shared party treasury (loot not yet split). Each PC's own purse stays in the PC's D&D Beyond `currencies`. Replaces the coin values kept in the Currency calculator's frontmatter. | DM/wrap |
| | travel pace fields | existing Party Dashboard keys | Become the only travel source; `Calculators/Travel.md` is retired (§3.4). | DM |
| **Campaign** | `status` | enum: planning, active, hiatus, finished | Low cost. | DM |
| | `level_range` | string, e.g. "3–12" | Power-level reference for agents. | DM |
| **Fact** (inside `facts[]`) | `rumor` | bool, default true | `false` keeps a fact out of the rumor roll (e.g. a truth only one NPC could know). | DM |

**Party location** stays derived: every PC note has a `location`, and the party note's Party Location picker sets it on all active PCs (verified). The dashboard, rumor roll, and weather read the active PCs' shared `location`, and show "split" when they differ.

**Player characters** get no new fields beyond the common block and `tagline` (`02 Design`). The PC frontmatter is the D&D Beyond shape, and the sync only overwrites its own keys (verified in `02 Design`).

Not added: XP and gold per session (add them only if you track them), PC `goals`/`secrets` (PC threads are quest notes with `kind: thread`, per `02 Design`), and an Encounter note type (`encounter-builder` output stays in prep notes until you find yourself reusing encounters; revisit then).

**Template stubs.** C6 deletes `Group.md` (the Faction template replaces it). `Event.md` (22 lines, no schema, not in `02 Design`) stays as it is until the Event note type is designed (§5).

### 1.2 Configuration (X2, X3)

Configuration stays the single note for vault settings. New top-level keys:

```yaml
enums:
  npc_conditions: [healthy, injured, captured, missing, dead, unknown]
  party_relationships: [Acquaintance, Friendly, Ally, Disgruntled, Enemy]   # today hard-coded in NPC.md
  party_standings: [Hostile, Unfriendly, Neutral, Friendly, Allied]
  location_statuses: [thriving, stable, wary, besieged, occupied, ruined]
  faction_kinds: [guild, cult, order, house, court, family, company, other]
  faction_statuses: [active, broken, dormant, destroyed]
  alignments: [Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil]
settlement_wealth:
  - {name: destitute, price: 0.8}
  - {name: poor, price: 0.9}
  - {name: modest, price: 1}
  - {name: prosperous, price: 1.15}
  - {name: rich, price: 1.3}
shop_defaults: {buy_rate: 0.5}
weather:                       # moved from Weather Generation.md in J7 (deferred from B3); keys renamed to snake_case (§1.3)
  use_calendarium: true
  temp_flux: 10
  seasons: [...]
  months: [...]
  climates: [...]
  states: [...]
rules_lookup:
  sources:
    - {path: "5. Mechanics/Spells", kind: Spell}
    - {path: "5. Mechanics/Rules", kind: Rule, sections: true}
    - {path: "6. Resources/Books/Players Handbook 2014", kind: Rule, sections: true}
    - {path: "6. Resources/Books/Dungeon Masters Guide 2014", kind: Rule, sections: true}
    - {path: "5. Mechanics/Items", kind: Item, default_off: true}
```

- **The Configuration body becomes tabbed** using the same pattern as entity notes: Campaign · Create (the template buttons) · Folders · Relationships · Shops & Pricing · Weather · Lists · Tools. The weather add/remove buttons move with their data. Shop sizes render as a size × rarity grid instead of 14 separate list entries (same data, verified).
- **Cost (tradeoff):** the frontmatter grows by about 200 lines of weather data. Obsidian handles it, but the Properties panel on that note gets long; the note is in preview mode, so you seldom see the panel. `weatherGenerator.js` is the only reader of the weather keys (verified) and gets repointed.
- **What isn't config:** tool state stays with its tool or owner. Travel pace belongs to the party (per-party state). The Currency calculator's coin inputs are scratch values on that note.

### 1.3 Key casing (X11)

**Rule:** every frontmatter field name the vault owns is `snake_case`. A single lowercase word (`gist`, `location`) already qualifies. This covers top-level keys and the field names inside nested objects (`facts[].learned`, `weather.climates[].temp_high`). Nearly every campaign field is already snake_case (`party_present`, `session_number`, `active_campaign`, `cost_modifier`, `economic_scale`), and so is everything in §1.1, so snake_case is the smallest change.

**Why one convention, not camelCase or snake_case:** with two allowed, every new field needs a choice, and the lint can't tell a typo (`partyrelationships`) from a style. Allowing camelCase would have kept `partyRelationships` and the D&D Beyond PC keys; the DM chose snake_case only (2026-11-15).

**Audit (2026-11-15, every `.md` frontmatter in the vault).** Outside the exempt groups below, 34 snake keys and 192 single-word keys already comply. These don't:

| Group | Keys | Where | Readers to update |
|---|---|---|---|
| NPC party relationship | `partyRelationships` | 95 NPC notes (frontmatter plus the body input on 94), 1 note body (Party Dashboard query), 1 NPC's DM prose | `NPC.md`, `monster.txt` (mirror), `Party Dashboard.md`, `z_Bases/NPCs.base`, `vault-note` schemas, `session-wrap`, `vaultModel.js`, `lint.js`, dm-assistant agent memory |
| Journal prep link | `prep-notes` | 49 journals (frontmatter plus the body suggester on 48) | `Session Journal.md`, `vaultModel.js`, `lint.js`, `campaign-schemas.md`, `session-wrap`, dm-assistant agent memory |
| Weather config | `useCalendarium`, `tempFlux`; nested `tempHigh`, `tempLow`, `windHigh`, `windLow`, `precipProb`, `tempMod`, `windMod`, `precipMod` | Weather Generation (moving to Configuration in J7) | `weatherGenerator.js`, the weather tables' bindings (22) |
| D&D Beyond PC sheet | `abilityScores`, `savingThrows`, `racialTraits`, `classFeatures`, `raceSpells`, `classSpells`; nested `armorClass`, `baseValue`, `canEquip`, `canAttune`, `damageType`, `isPrepared`, `cantripsKnown`, `spellSlots`, `subClass`, skill keys `animal-handling`, `sleight-of-hand` | 8 PC notes | `z_Scripts/Templater/dndBeyondCharacter.js` (the sync writes them), `Player Character.md`, `z_Bases/Players.base` |
| Calculator scratch inputs | Travel: `BaseSpeed`, `SpeedMultiplier`, `AdditionalBonus`, `Encumbered`, `HorseshoesofSpeed`, `HoursPerDay`, `MinutesPerMile`, `ExhaustionLevel`, `TravelDistance`, `ShipCostPerM`, `MessengerCostPerM`, `CoachCost`, `CoachCostPerM`, `DangerLevel`, `FamiliarRoute`, `PartyMembers`, `LifestyleCostSP`, `IncludeMeals`, `TravelCalc`, `varMins`. Currency: `CoinsCopper`…`CoinsPlatinum`, `PartySize` | `Calculators/Travel.md`, `Calculators/Currency.md` | each note's own `INPUT`/`VIEW` bindings; `travelTimes.js` stops reading `{Travel#…}` in C5 |
| Leaflet calculator | `defaultZoom`, `minZoom`, `maxZoom`, `zoomDelta`, `unitCount` | `Tools/Leaflet Bounds Calculator.md` | `z_Scripts/Dataview/utils/leafletConfig.js` (reads them, writes the Leaflet block) |

`travelDistances` is not listed because C5 already deletes it.

**Exempt (never renamed; the lint allows them):**

- **Plugin-owned keys:**
  - Obsidian: `tags`, `aliases`, `cssclasses`.
  - View Mode by Frontmatter: `obsidianUIMode`, `obsidianEditingMode`.
  - Calendarium: `fc-date`, `fc-end`, `fc-category`, and the other `fc-*` keys.
  - April's Automatic Timelines: `aat-render-enabled`.
  - Renaming any of these breaks the plugin.
- **Map keys that are values, not fields:**
  - Party names under per-party maps (`party_relationships["Midnight Covenant"]`, `revealed`, `standing`).
  - Rarity and recharge names under `item_pricing` (`very-rare`, `short-rest`, `long-rest`). These must match the Mechanics items' `rarity` and `item_recharge` values, which use those spellings.
  - Shop type names under `shop_types`.
- **Generated content:** `5. Mechanics/` (kebab and camel keys such as `one-hand-damage`, `attunement-requirement`, `armorClass`, `hazardType` come from the ttrpg-convert templates) and `6. Resources/`. Changing them means editing the convert templates, regenerating about 9,000 notes, and updating `Items.base`, `Hazards.base`, the PC template's item lookups, and `process_5etools_files.js` (`damageType` on spells). That's a separate project; not proposed.
- **Not frontmatter:** Leaflet code-block parameters in note bodies (`minZoom`, `darkMode`), and Modal Forms definitions inside templates (`isRequired`, `templateFile`).

**Tradeoff:** the `partyRelationships` and `prep-notes` renames rewrite 144 notes and touch every NPC and journal body binding. That churn is why they run in one batch (C5b), before C6 and C9 rebuild those bodies. That way no new code is written against the old names. The PC rename depends on the D&D Beyond sync script: if the script isn't updated first, the next sync writes the camelCase keys back.

---

## 2. Layouts

### 2.1 The skeleton (every note type)

```
breadcrumb (world › region › settlement › place)
┌ header ─────────────────────────────┐ ┌ infobox ───────┐
│ portrait · Name · pronounced        │ │ structured     │
│ state chips · knowledge badge       │ │ fields, by     │
├ gist strip ─────────────────────────┤ │ group          │
│ tabs: At the Table | Lore | Player- │ │                │
│ Facing | Connections | Secrets |…   │ │ Knowledge card │
│ [active tab content]                │ │                │
└─────────────────────────────────────┘ └────────────────┘
## Stats (NPC, creature)      ## DM Notes (free markdown)
```

- **Header** is one shared view, `views/entityHeader.js`: breadcrumb (location parents; for a PC, quest, party, or journal, its party, arc, or campaign instead), image carousel, name, `pronounced`, state chips (condition, party relationship or standing, location status, quest active/completed, journal wrapped), and, on entity types, the **knowledge badge**: "Revealed · 1 of 3 facts learned" for the active party, or "Hidden" in grey. Today every template copies the carousel and breadcrumb code; one view stops template drift and shrinks the NPC.md / `monster.txt` mirror.
- **Gist strip** sits directly under the header. It's the line you read first.
- **Infobox** is the existing ITS `[!infobox]` callout, regrouped. It ends with a **Knowledge** card: revealed-to, public name, facts learned, and the `reveal` list ("site shows").
- **Free markdown stays below the tabs.** `## Stats` keeps its `^statblock` anchor (encounter links depend on it), and `## DM Notes` stays the free-text area. Both stay outside the tab box so scripts and anchors find them unchanged.

### 2.2 Every note type

**Field notes vs prose notes.** Tabs need the panel content inside a callout, so every line starts with `>`. That's fine when the content is Meta Bind inputs over frontmatter (most types). It's painful for long prose you write and revise. So prose notes keep ordinary headings and get a **section bar**: one generated line of links to the note's headings, plus Obsidian's heading fold. They still share the header, infobox, and colour semantics.

| Type | Body | Panels (first = default) | Infobox |
|---|---|---|---|
| NPC | tabs | At the Table (voice, appearance, goals, personality/ideal/bond/flaw, likes/dislikes) · Lore (description, history) · Player-Facing · Connections (relationships, quests, sessions) · Secrets · Stats | Bio · Info · Knowledge |
| Region / Settlement / Place of Interest | tabs | At the Table (atmosphere, hazards, services, rumor roll, routes) · What's Here (child locations, NPCs, shops, factions, visits) · Player-Facing · Map · DM Notes | Overview · Politics · Trade (`wealth` on settlements) · Today (weather) |
| Shop | tabs | Inventory (buy and sell columns, Generate, Add, pins, haggle) · At the Table (owners, staff, atmosphere) · Player-Facing · DM Notes | People · Pricing · Generator |
| World | tabs | Overview (regions, party whereabouts, factions, deities: all derived) · Regions · Factions & Faiths · Player-Facing · Map · DM Notes (lore) | Settings (calendar, `economic_scale`, default climate) · Campaigns here |
| Faction | tabs | At the Table (goals, standing) · Members (derived) · Clock · Player-Facing · Secrets | Overview · Ties · Knowledge |
| Story item | tabs | Overview (holder, rests at, base item, attunement, charges) · Player-Facing · Connections (changed hands, derived) · Secrets (curse) | in the Overview tab |
| Deity | tabs | Overview (title, symbol, domains) · Player-Facing · Connections (worshippers, sites: derived) · Secrets | in the Overview tab |
| Creature | tabs | Overview · Player-Facing · Connections (makers, named individuals) · Stats | in the Overview tab |
| Quest / arc / thread | tabs | Steps (status, outcome, reorder) · NPCs & Links · Description · Player-Facing · Plan Changelog | Hook (giver, reward) · Links · Sessions |
| Player character | tabs | Sheet · Spells · Inventory (all three from D&D Beyond, read-only) · Story (backstory, threads from quests) · Player-Facing · DM Notes (hidden details) | Bio · Purse · Ties (derived) |
| Party | tabs | Overview (character table, active quests, encounter budget) · Travel · Quests · Standing (NPC and faction standings, derived) · Session Log · Timelines | Treasury (`funds`) · Travel pace · Standing |
| Campaign | prose | section bar over Premise · Tone · Power Level · Lines & Veils · Villain · Campaign Arc · Endings · Character Tie-Ins · Active Threads · Locked Canon · Timelines · Plan Changelog. **Lines & Veils is pinned** above the first section in a `[!dm]` callout. | Summary (player-safe) · Setup · Now (latest session, date, active arcs) |
| Session journal | mixed | Recap (`summary`, field) and Learned this session (derived) on top; What Happened (prose) and Errata below, with a section bar | Prep · Ledger pills (incl. `spotlight`) · Plan touched |
| Session prep | prose | section bar over the prep headings (Strong Start, Scenes, Secrets & Clues, …); Strong Start shown open, scenes folded; Secrets & Clues as a facts checklist | Where we left off · Plan in play · Spotlight lately · At the table |
| Configuration | tabs | Campaign · Create · Folders · Relationships · Shops & Pricing · Weather · Lists · Tools | none; the header carries campaign, world, party |

Reading this table as a checklist: C6 builds every template in it, C8 builds the shared pieces, and C9 re-skins the existing notes of every type that has notes today.

### 2.3 Mechanics (how it is built in Obsidian)

| Piece | Implementation | Status |
|---|---|---|
| Tabs | A `meta-bind` code block holding `INPUT[select(class(tabbed), option(At the Table), …):memory^tab]` (Meta Bind rejects `select` in inline code; T5, 2026-11-16), followed by a `> [!tabbed-box]` callout whose children are the panels. Uses the enabled `TabsInObsidian` snippet (v0.5.4). `memory^` keeps the selection out of frontmatter, so switching tabs doesn't trigger Meta Bind writes or Obsidian Git commits. | *To verify* (T5): `memory^` with the `tabbed` class, and Meta Bind inputs nested inside the tab panels. Fallback: bind to a frontmatter `ui_tab` key (works, but each click is a write). |
| Duplicate snippet | `metabind-tabs.css` (v0.5.2) and `TabsInObsidian.css` (v0.5.4) are two versions of the same snippet, and both are enabled (verified). | Disable `metabind-tabs` (DM, in Obsidian). |
| Player / DM colour | `[!player]` and `[!dm]` callout types in `Custom Styles.css`: green and red border, tinted background, no icon noise. `[!dm]` is already the design's marker for DM asides. | Build |
| "Editable" cue | A dotted underline on Meta Bind inputs in preview: one CSS rule on `.mb-input` in `Custom Styles.css`. | Build |
| "Derived" tag | A small `derived` label on view-generated sections so you know not to edit them. | Build in the views |
| Facts table | `FactsTable.tsx` from C7, placed in the Player-Facing tab. | Planned (C7) |
| Shared body | Templater templates `tp.file.include("[[z_Templates/Partials/<Section>]]")` for the tab box and the Player-Facing panel, so NPC, Location, Faction, Item, Deity, and Creature share one source. `monster.txt` (Qute) can't include; it stays a mirror of the NPC result. | *To verify* that `tp.file.include` runs nested Templater code inside the partial (T5b). |
| Map tab | Keep the Leaflet code block but drop the 40 lines of tutorial comments, and set `id` from the note name. The Leaflet Bounds Calculator stays the way you compute bounds. Leaflet blocks can't be generated by a Dataview view, so the block stays literal. | Build |

### 2.4 Journal and prep

- **Journal:** session nav (previous/next), header (number, title placeholder until wrap, wrapped state, real and in-world dates, `party_level`, a **Wrap this session** button that runs `/wrap` instructions), **Recap** (`summary`, in `[!player]`, with the `publish` toggle), **Learned this session** (derived from `facts[].learned` pointing at this journal), **What happened** (`[!dm]`, your notes), **Errata** (shown once wrapped). The ledger and `spotlight` move into the right-hand panel as link pills. The template's placeholder lines ("Description of any important information…") are removed; S46 shows they survive into played journals.
- **Prep:** gets the shared header (date, target session, linked journal, secrets prepped/landed count), a section bar, and a right-hand panel (where we left off, plan in play, spotlight lately, Rules & Spells and live-log links). Secrets & Clues becomes a checklist of facts (`02 Design` §5). The prompt callouts stay in the template and fold away once a section has content.

### 2.4b Other non-entity notes

- **PC:** the body today is built around the D&D Beyond data (stat block callout, Spells, Weapons, Armor, Background). Those become the Sheet, Spells, and Inventory tabs, read-only. The sync button stays in the header. Hidden Details moves to the DM Notes tab, in `[!dm]`.
- **Party:** the existing Party Dashboard sections (party location, encounter benchmark, characters, NPC relationships, quests, session log, timelines) map onto the tabs in §2.2; the travel inputs move to the Travel tab and the infobox.
- **World:** there is no World template today (`Eldoria.md` has frontmatter and an empty body, verified). C6 adds `World Building/World.md`.
- **Configuration:** re-skinned in J7, when the weather data moves in (B3 added the frontmatter only).

### 2.5 Creation (X7)

Every entity form asks for **name, gist, location/parent** (location templates also ask the level). An optional checkbox, "Roll personality, voice and appearance", fills those fields from the NPC Generator tables via the Dice Roller API (*to verify*, T7). The note opens on the At the Table tab with its inputs ready. The current NPC form asks 16 questions before the note exists.

### 2.6 Editing speed (X10)

The DM needs to update content and frontmatter quickly. §2.1–2.5 make one field in one note fast to edit, but on their own they make some editing slower: tabs hide fields, long text sits in small boxes, there's no way to edit many notes at once, nested data needs custom forms, and heavier notes render and save slower. These rules fix that. **Tabs are for reading; the edit paths below don't depend on them.**

| # | Rule | How | Status |
|---|---|---|---|
| Q1 | **Anything shown is editable where it is shown.** Header chips (NPC condition, party relationship; location status; faction standing; quest active/completed; journal party level) are Meta Bind inputs, not labels. No field is read-only in one place and editable in another. Calculated values (counts, sessions, members) are the only display-only text, and they carry the `derived` tag. | `entityHeader.js` emits inputs through `utils/metaBindInput` | Build (C8) |
| Q2 | **"Edit all" button in every header.** Opens a Modal Forms pop-up pre-filled with the note's current flat fields, in tab order, keyboard-driven (Tab between fields, Enter to save), written back in one `processFrontMatter` call. Per-party fields are edited for the active party. | `z_Scripts/Templater/editAll.js` + one button per template | *To verify* (T9: Modal Forms pre-fill). Fallback: a full-width "All fields" tab listing every input with no grouping. |
| Q3 | **Bulk-edit tables in Bases.** One editable table view per type for flat state fields: NPCs (location, condition, gist, occupation), locations (status, wealth, climate, gist), shops (type, size, cost modifier, buy rate), quests (kind, deadline, gist), journals (party level, publish). Bases edits flat properties inline. Nested and per-party values (`party_relationships`, `standing`, `revealed`, facts, relationships) stay with the wrap and the note's own inputs, because Bases can't edit them. | New "Edit" views in the existing `z_Bases/*.base`, plus `Factions.base`, `Quests.base`, `Journals.base`, `Shops.base` | Build (C10) |
| Q4 | **Text areas grow to fit their text.** `description`, `history`, `secrets`, quest `description`, and long `summary` text gets an auto-growing text area with a comfortable minimum height. If Meta Bind's text area can't grow, each long field gets a "pop out" button that opens it in a full-size modal editor. | CSS on `.mb-input-type-textArea` in `Custom Styles.css` | *To verify* (T10) |
| Q5 | **Performance budget.** A fully filled NPC note renders and accepts input in under 1 s. CSS tabs render every panel, hidden or not, so every view runs. If the budget fails, tabs become a Datacore component that renders only the open tab (inputs inside still Meta Bind). | Measured on Lord Caldris Velmont and Duskferry after C9 | *To verify* (T11) |
| Q6 | **One-step entry for lists.** "Add relationship" is one form: target, type (from `relationship_types`), and optional note. Facts and quest steps keep an Add button, like every other list (DM, 2026-11-16; the always-present empty last row was dropped). Routes: one form (to, miles). No per-route mode: the party's Method and pace set how it travels (DM, 2026-11-16). | E4 batch's Add Relationship rewrite; `FactsTable.tsx`; the quest steps table; Add Route | Build (C7, E4, C5) |
| Q7 | **Sentence edits through the agents.** Telling `vault-keeper` or `dm-assistant` "Velmont is captured, now at the Cinderworks" produces a numbered edit proposal you accept in one word. `table-assistant` stays read-only: at the table it appends the sentence to the live-session log, and the wrap turns it into the proposal. Documented as a supported edit path in `vault-note`. | Skill and agent text only | Build (C11) |

**One field list per type.** The template, the Edit-all form, the Bases edit view, and the header chips all render the same fields, so they read them from one source: a `note_fields` key in Configuration (per type: field, input type, enum, tab, whether it's a chip, whether it goes in the Bases edit view). C6 generates the template inputs from it, and `editAll.js` and the Bases views follow it. Adding a field is then one Configuration entry plus the schema doc, and the four surfaces can't drift. Cost: the templates become partly data-driven, so a broken `note_fields` entry breaks rendering for every note of that type; the lint validates `note_fields` against `vault-note` schemas.

---

## 3. Tools

### 3.1 Inventory and reorganization (X9)

| Today | Problem | Change |
|---|---|---|
| `Tools/` + `Calculators/` | The split is arbitrary; `Calculators/` holds two notes. | `Tools/At the Table/`, `Tools/Generators/`, `Tools/Calculators/`, `Tools/Worlds/<World>/` |
| Barovian Names, Barovian Lore, Vistani Lore, Encounter Generator (an embed of a CoS chapter) | Campaign-specific tools mixed with generic ones. | `Tools/Worlds/Barovia/` |
| `Calculators/Travel.md` | Duplicates the Party Dashboard's 11 travel fields; `travelTimes.js` reads `{Travel#TravelCalc}` from it (verified). | Retire; the party note is the source (§3.4). |
| `Weather Generation.md` | 2,400 words of config in a tool note. | Config moves to Configuration (J7, deferred from B3); the note becomes UI only: roll today's weather for the party's location. |
| Shop generator and pricing | Config in Configuration (stays, per your answer); scripts in `Meta Bind/` and `Datacore/`. | Unchanged location; upgrades in §3.3. |
| `DM Quick Reference.md` "Useful Frontmatter Fields" | Superseded by §1. | Remove that section after C6. |
| Configuration's "DM Tools/Calculators" list | A flat query on `1. DM Toolkit/Tools`. | A grouped list by subfolder. |

Placement (J2):

| Folder | Notes |
|---|---|
| `At the Table/` | **Rules & Spells** (new), DM Screen, **Session Dashboard** (new), Critical Tables, NPC Generator, Sound Board (moved from `1. DM Toolkit/`) |
| `Generators/` | Weather, Story Engine, Herbs, **Loot** (new) |
| `Calculators/` | Currency, Leaflet Bounds Calculator |
| `Worlds/Barovia/` | Barovian Names, Barovian Lore, Vistani Lore, Encounter Generator |

Moves are link-safe because `alwaysUpdateLinks` is on (per `02 Design` §2.2); the lint's `unresolved-link` rule confirms.

### 3.2 Rules & Spells lookup (X8; built in J1, after the migration)

The `table-assistant` agent answers rules questions, but only through the terminal. This tool is for the moment you don't want to type to anyone.

- **Where:** `Tools/At the Table/Rules & Spells.md`, pinned in the right sidebar. `startup.js` (already runs on vault open) opens it there pinned, so it's always one click away beside any note.
- **Component:** `z_Scripts/Datacore/RulesLookup.tsx`. One search box (focused on open), kind chips (All, Spell, Condition, Action, Rule, Item), a result list, and a detail pane.
- **Sources** come from Configuration `rules_lookup.sources`:
  - Spells: 1,200 notes in `5. Mechanics/Spells` (verified). Each result shows level, school, casting time, range, duration, and concentration/ritual flags from frontmatter. Spell-only filters: class, level, concentration, ritual.
  - Rules glossary: `5. Mechanics/Rules`, 130 notes (verified). `Conditions.md` has 19 `##` sections and `Actions.md` 30 (verified); each section is its own hit, so "prone" lands on Prone, not on the whole note.
  - Core rule prose: PHB and DMG 2014 chapter notes in `6. Resources/Books/`, searched by heading (e.g. Cover in `10 Combat.md`).
  - Items: off by default (3,381 notes), one chip to include.
- **Detail pane** renders the source itself as an embed (`![[note#section]]`), not a copy, so the text is always the compendium's.
- **Ranking:** exact title, then title prefix, then heading, then body. Conditions and actions rank above PHB prose for the same word.
- **Read-only.** It never writes to `5. Mechanics/` or `6. Resources/`.
- *To verify* (T6): Datacore indexes `@section` blocks with a title that can be queried by path, and a Datacore component can render a markdown embed of a section. Fallbacks: build a section list from `dc.useQuery("@page")` plus the file cache's headings, and open the hit in a hover preview instead of an inline embed.
- **DM Screen** keeps its static links (verified: it links `Actions#…` and `Conditions#…` sections) and gains a search box that opens the lookup.

### 3.3 Shops and pricing

- **Price chain:** `calculateItemPrice` × world `economic_scale` × settlement `wealth` multiplier × shop `cost_modifier`. Today it's base × `economic_scale` × `cost_modifier` (verified in `ShopInventory.tsx`). The settlement is found by walking up `location`.
- **Sell price column:** buy price × `buy_rate`.
- **Pinned items:** `pinned_items` always appear in the inventory. Generate Inventory fills `items` around them and never removes a pin.
- **`last_stocked`:** stamped with the current in-world date (`calendarDate.js`) on generate.
- **Haggle:** not a field. A small "±%" input on the inventory applies a one-off discount for the scene and isn't saved (`memory^`).

### 3.4 Other new tools, ranked

| # | Tool | What it does | Depends on |
|---|---|---|---|
| 1 | Rules & Spells | §3.2 | T6; built after the migration (J1) |
| 2 | Shop upgrades | §3.3 | C4 (shop fields) |
| 3 | **Session Dashboard** | One screen: party location and today's weather, NPCs and shops there, active quests, the prep's strong start and its secrets list, the live-session log link, a Rules & Spells box. Reads the active PCs' `location` and the index's `state.md` data. | C8, C9 |
| 4 | **Travel consolidation** | `travelTimes.js` computes from the party note's pace fields instead of `Travel#TravelCalc`; Calculators/Travel's transport-cost section moves to the party note's travel tab, with snake_case keys. | C5 (routes), done together (J4) |
| 5 | **Rumor roll** | On a location's At the Table tab: a random unlearned fact (`rumor` not false) from the place, its children, NPCs whose `location` is there, and factions based there. Rolling never marks anything learned; the wrap does. | Facts populated (G) |
| 6 | **Advance time** | A button on the dashboard: move the in-world date forward N days, roll weather for the party's location `climate`. | `calendarDate.js`; Calendarium write API (*to verify*, T8) |
| 7 | **Loot** | DMG treasure by CR or hoard tier, output as a list you paste into the journal or turn into story items. Uses the treasure tables in `5. Mechanics/Tables` (*to verify* which exist). | — |
| 8 | Faction clock view | Renders `clock` steps as segments on the faction note and lists all clocks on the dashboard. | E1 |
| 9 | Region encounter tables | A region field `encounter_table` linking a table note; the dashboard rolls it for the party's region. | — |
| 10 | Party treasury | The Currency calculator reads and writes party `funds` instead of its own frontmatter. | Party `funds` |

**Not recommended:** a tavern/inn generator and a name generator beyond what you have. The Fantasy Content Generator plugin is installed and covers both.

---

## 4. Decision log

Dated 2026-11-15 unless noted.

| Item | Decision |
|---|---|
| X1 new fields (§1.1) | Approved, without NPC `role` (and no `npc_roles` enum; removed from Configuration 2026-11-16). |
| X2 vocabularies in Configuration `enums` | Approved. |
| X3 weather into Configuration | Approved. |
| X9 tool subfolders (§3.1) | Approved. |
| Template stubs | Delete `Group.md`; keep `Event.md` (§5). |
| X8 Rules & Spells timing | After the migration (J1 after H7), not before batch A. |
| World template (§2.4b) | Approved. |
| X4 skeleton, X5 tabs, X6 colour, X7 creation forms | Approved. |
| X10 editing rules Q1–Q7 | Approved. |
| X11 key casing (§1.3) | snake_case only. |
| G2 reveal backfill | Starts at S1; S0 is excluded. |
| Q6 list entry (2026-11-16) | Facts and quest steps use an Add button, not an empty last row. Route `mode` dropped. |
| Party travel (2026-11-16) | `horseshoes_of_speed` toggle on the party (+30 speed). |
| Campaign `summary` (2026-11-16) | Agents may edit it without a proposal line; it stays player-safe. |
| CLAUDE.md lines (enums and `note_fields` in C11; casing in C5b) | Both approved. |

Where a decision depends on a test (T5, T5b, T7, T9–T11), the test result picks between the design and the fallback named in that row. The fallback isn't a new decision.

## 5. Open design item: Event note type

Not part of the migration. The DM wants an Event template with a location. To settle in a later design session:

- What an event is: a dated happening in the world, an incident independent of sessions, a festival?
- Fields: a fantasy-calendar date, `location`, participants, `facts`, and the knowledge fields.
- Folder and tag.
- How it relates to Calendarium `fc-*` events and to session journals.
- Whether it gets a timeline view.

Until then, `Event.md` stays as it is.
