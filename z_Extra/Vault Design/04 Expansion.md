# Phase 2b — Expansion: fields, layouts, tools

Date: 2026-11-15. Extends `02 Design.md`; nothing here is built yet. Changes to the migration are written into `03 Migration Plan.md` (tests T5–T8, batches B3–B4, C5–C9, and section J).

**Mock-up:** https://claude.ai/artifact/CbZqj3gugAvs3HsXBUsP5A (NPC, settlement, journal, rules lookup, quick-create). Content is real vault data; rows marked "example" are illustrative only and are not canon.

**Labels.** *Verified* = checked in the vault. *To verify* = a test in the migration plan runs before anything depends on it.

**Your answers (2026-11-15):** write this doc and fold it into the plan; mock up the layouts; your table pain is rules and spell lookup; shop and pricing config stays in Configuration, and **Configuration is the one note that configures the vault**.

## Decisions at a glance

| # | Decision | Recommendation |
|---|---|---|
| X1 | New fields | The per-type additions in §1. Only fields you use at the table or a tool reads; nothing derivable. **Needs your yes.** |
| X2 | Vocabularies | Every option list now hard-coded in a template (`condition`, party relationship, alignment, shop sizes…) moves to Configuration `enums`. Templates, views, and the lint read one list. |
| X3 | One configuration note | Configuration absorbs the weather config from `Weather Generation.md` and the new enums. Tool notes keep only their UI and scratch inputs. |
| X4 | Note skeleton | One skeleton for every entity type: breadcrumb → header → gist → tabs, with a right-hand infobox. "At the Table" is the default tab. |
| X5 | Tabs | The `TabsInObsidian` snippet you already have, bound to a Meta Bind `memory^` variable, so switching tabs writes nothing to the note (*to verify*, T5). Disable the duplicate `metabind-tabs` snippet. |
| X6 | Colour semantics | Two callout types: `[!player]` (green: summary, facts, recap) and `[!dm]` (red: secrets, hooks, DM notes). Nothing else gets colour. |
| X7 | Creation forms | Three fields (name, gist, location/parent). Everything else is filled in the note. |
| X8 | First tool to build | **Rules & Spells lookup** (§3.2). It doesn't depend on the migration and can ship before batch A. |
| X9 | Tools folders | Group tools by use: At the Table, Generators, Calculators, and per-world. **Needs your yes** (new folders). |

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
| | `role` | enum `npc_roles`: villain, lieutenant, patron, ally, contact, rival, minor | Filter NPCs by story weight in Bases and prep. | DM |
| | `condition` | enum widened: healthy, injured, captured, missing, dead, unknown | `captured` and `missing` both happened in this campaign (Velmont). | wrap |
| **Location** (all levels) | `atmosphere` | string | Sights, sounds, smells: the read-aloud line. | DM |
| | `hazards` | string | Environmental danger, checkpoints, closures. | DM |
| | `status` | enum `location_statuses`: thriving, stable, wary, besieged, occupied, ruined | State that play changes. | wrap |
| | `climate` | a Configuration `weather.climates` name | Lets the weather generator roll for the party's current location. Inherited from the parent when empty. | DM |
| **Settlement** | `wealth` | enum `settlement_wealth`: destitute, poor, modest, prosperous, rich | Multiplies shop prices (§3.3). Distinct from world `economic_scale`. | DM |
| **Shop** | `pinned_items` | links into `5. Mechanics/Items` or story items | Survive regeneration. Today `generateShopInventory.js` replaces `items` outright (`fm.items = selectedItems`, verified), so hand-added stock is lost. | DM |
| | `buy_rate` | number, default from Configuration (0.5) | What the shop pays for items the party sells. | DM |
| | `last_stocked` | in-world date | Stamped by Generate Inventory; shows how stale the stock is. | script |
| **Faction** | `standing` | `{Party: enum party_standings}` | The party's reputation with the faction; same shape as NPC `partyRelationships`. | wrap |
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
| **Party** | `location` | link | Current whereabouts. Today it is inferred by `views/partyLocation.js`; storing it lets the dashboard, rumor roll, and weather read one field. | wrap |
| | `funds` | `{cp, sp, ep, gp, pp}` | Party treasury. Replaces coin values kept in the Currency calculator's frontmatter. | DM/wrap |
| | travel pace fields | existing Party Dashboard keys | Become the only travel source; `Calculators/Travel.md` is retired (§3.4). | DM |
| **Campaign** | `status` | enum: planning, active, hiatus, finished | Low cost. | DM |
| | `level_range` | string, e.g. "3–12" | Power-level reference for agents. | DM |
| **Fact** (inside `facts[]`) | `rumor` | bool, default true | `false` keeps a fact out of the rumor roll (e.g. a truth only one NPC could know). | DM |

Not added: XP and gold per session (add them only if you track them), PC `goals`/`secrets` (PC threads are quest notes with `kind: thread`, per `02 Design`), and an Encounter note type (`encounter-builder` output stays in prep notes until you find yourself reusing encounters; revisit then).

**`Event.md` stub.** The 22-line template has no schema and isn't in `02 Design`. Recommend deleting it along with `Group.md` in C6 (ask).

### 1.2 Configuration (X2, X3)

Configuration stays the single note for vault settings. New top-level keys:

```yaml
enums:
  npc_roles: [villain, lieutenant, patron, ally, contact, rival, minor]
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
weather:                       # moved verbatim from Weather Generation.md (B3)
  useCalendarium: true
  tempFlux: 10
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

- **The Configuration body becomes tabbed** using the same pattern as entity notes: Campaign · Folders · Relationships · Shops & Pricing · Weather · Lists · Templates. The weather add/remove buttons move with their data.
- **Cost (tradeoff):** the frontmatter grows by about 200 lines of weather data. Obsidian handles it, but the Properties panel on that note gets long; the note is in preview mode, so you seldom see the panel. `weatherGenerator.js` is the only reader of the weather keys (verified) and gets repointed.
- **What isn't config:** tool state stays with its tool or owner. Travel pace belongs to the party (per-party state). The Currency calculator's coin inputs are scratch values on that note.

---

## 2. Layouts

### 2.1 The skeleton (all entity types)

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

- **Header** is one shared view, `views/entityHeader.js`: breadcrumb, image carousel, name, `pronounced`, state chips (role, condition, party relationship or standing, location status), and the **knowledge badge**: "Revealed · 1 of 3 facts learned" for the active party, or "Hidden" in grey. Today every template copies the carousel and breadcrumb code; one view stops template drift and shrinks the NPC.md / `monster.txt` mirror.
- **Gist strip** sits directly under the header. It's the line you read first.
- **Infobox** is the existing ITS `[!infobox]` callout, regrouped. It ends with a **Knowledge** card: revealed-to, public name, facts learned, and the `reveal` list ("site shows").
- **Free markdown stays below the tabs.** `## Stats` keeps its `^statblock` anchor (encounter links depend on it), and `## DM Notes` stays the free-text area. Both stay outside the tab box so scripts and anchors find them unchanged.

### 2.2 Tabs per type

| Type | Tabs (first = default) |
|---|---|
| NPC | At the Table (voice, appearance, goals, personality/ideal/bond/flaw, likes/dislikes) · Lore (description, history) · Player-Facing · Connections (relationships, quests, sessions) · Secrets · Stats |
| Location | At the Table (atmosphere, hazards, services, rumor roll, routes) · What's Here (NPCs, places, shops, factions, visits) · Player-Facing · Map · DM Notes |
| Shop | Inventory (table with buy/sell, Generate, Add, pins) · At the Table (owners, staff, atmosphere) · Player-Facing · DM Notes |
| Faction | At the Table (goals, standing, symbol, motto) · Members (derived) · Clock · Player-Facing · Secrets |
| Story item / deity / creature | Overview · Player-Facing · Connections · Secrets (· Stats for creatures) |
| Quest | Steps · NPCs & Links · Player-Facing · Plan Changelog |

Journals and prep aren't tabbed; they read top to bottom (§2.4).

### 2.3 Mechanics (how it is built in Obsidian)

| Piece | Implementation | Status |
|---|---|---|
| Tabs | `INPUT[select(class(tabbed), option(At the Table), …):memory^tab]` followed by a `> [!tabbed-box]` callout whose children are the panels. Uses the enabled `TabsInObsidian` snippet (v0.5.4). `memory^` keeps the selection out of frontmatter, so switching tabs doesn't trigger Meta Bind writes or Obsidian Git commits. | *To verify* (T5): `memory^` with the `tabbed` class, and Meta Bind inputs nested inside the tab panels. Fallback: bind to a frontmatter `ui_tab` key (works, but each click is a write). |
| Duplicate snippet | `metabind-tabs.css` (v0.5.2) and `TabsInObsidian.css` (v0.5.4) are two versions of the same snippet, and both are enabled (verified). | Disable `metabind-tabs` (DM, in Obsidian). |
| Player / DM colour | `[!player]` and `[!dm]` callout types in `Custom Styles.css`: green and red border, tinted background, no icon noise. `[!dm]` is already the design's marker for DM asides. | Build |
| "Editable" cue | A dotted underline on Meta Bind inputs in preview: one CSS rule on `.mb-input` in `Custom Styles.css`. | Build |
| "Derived" tag | A small `derived` label on view-generated sections so you know not to edit them. | Build in the views |
| Facts table | `FactsTable.tsx` from C7, placed in the Player-Facing tab. | Planned (C7) |
| Shared body | Templater templates `tp.file.include("[[z_Templates/Partials/<Section>]]")` for the tab box and the Player-Facing panel, so NPC, Location, Faction, Item, Deity, and Creature share one source. `monster.txt` (Qute) can't include; it stays a mirror of the NPC result. | *To verify* that `tp.file.include` runs nested Templater code inside the partial (T5b). |
| Map tab | Keep the Leaflet code block but drop the 40 lines of tutorial comments, and set `id` from the note name. The Leaflet Bounds Calculator stays the way you compute bounds. Leaflet blocks can't be generated by a Dataview view, so the block stays literal. | Build |

### 2.4 Journal and prep

- **Journal:** session nav (previous/next), header (number, title placeholder until wrap, wrapped state, real and in-world dates, `party_level`, a **Wrap this session** button that runs `/wrap` instructions), **Recap** (`summary`, in `[!player]`, with the `publish` toggle), **Learned this session** (derived from `facts[].learned` pointing at this journal), **What happened** (`[!dm]`, your notes), **Errata** (shown once wrapped). The ledger and `spotlight` move into the right-hand panel as link pills. The template's placeholder lines ("Description of any important information…") are removed; S46 shows they survive into played journals.
- **Prep:** unchanged except §5 of `02 Design` (secrets link to facts) and a "Plan touched" box; the prompt callouts stay.

### 2.5 Creation (X7)

Every entity form asks for **name, gist, location/parent** (location templates also ask the level). An optional checkbox, "Roll personality, voice and appearance", fills those fields from the NPC Generator tables via the Dice Roller API (*to verify*, T7). The note opens on the At the Table tab with its inputs ready. The current NPC form asks 16 questions before the note exists.

---

## 3. Tools

### 3.1 Inventory and reorganization (X9)

| Today | Problem | Proposal |
|---|---|---|
| `Tools/` + `Calculators/` | The split is arbitrary; `Calculators/` holds two notes. | `Tools/At the Table/`, `Tools/Generators/`, `Tools/Calculators/`, `Tools/Worlds/<World>/` |
| Barovian Names, Barovian Lore, Vistani Lore, Encounter Generator (an embed of a CoS chapter) | Campaign-specific tools mixed with generic ones. | `Tools/Worlds/Barovia/` |
| `Calculators/Travel.md` | Duplicates the Party Dashboard's 11 travel fields; `travelTimes.js` reads `{Travel#TravelCalc}` from it (verified). | Retire; the party note is the source (§3.4). |
| `Weather Generation.md` | 2,400 words of config in a tool note. | Config moves to Configuration (B3); the note becomes UI only: roll today's weather for the party's location. |
| Shop generator and pricing | Config in Configuration (stays, per your answer); scripts in `Meta Bind/` and `Datacore/`. | Unchanged location; upgrades in §3.3. |
| `DM Quick Reference.md` "Useful Frontmatter Fields" | Superseded by §1. | Remove that section after C6. |
| Configuration's "DM Tools/Calculators" list | A flat query on `1. DM Toolkit/Tools`. | A grouped list by subfolder. |

Proposed placement:

| Folder | Notes |
|---|---|
| `At the Table/` | **Rules & Spells** (new), DM Screen, **Session Dashboard** (new), Critical Tables, NPC Generator, Sound Board (moved from `1. DM Toolkit/`) |
| `Generators/` | Weather, Story Engine, Herbs, **Loot** (new) |
| `Calculators/` | Currency, Leaflet Bounds Calculator |
| `Worlds/Barovia/` | Barovian Names, Barovian Lore, Vistani Lore, Encounter Generator |

Moves are link-safe because `alwaysUpdateLinks` is on (per `02 Design` §2.2); the lint's `unresolved-link` rule confirms.

### 3.2 Rules & Spells lookup (X8, top priority)

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
| 1 | Rules & Spells | §3.2 | T6 only; build first |
| 2 | Shop upgrades | §3.3 | C4 (shop fields) |
| 3 | **Session Dashboard** | One screen: party location and today's weather, NPCs and shops there, active quests, the prep's strong start and its secrets list, the live-session log link, a Rules & Spells box. Reads party `location` and the index's `state.md` data. | Party `location`; C6 |
| 4 | **Travel consolidation** | `travelTimes.js` computes from the party note's pace fields instead of `Travel#TravelCalc`; Calculators/Travel's transport-cost section moves to the party note's travel tab. | C5 (routes), done together |
| 5 | **Rumor roll** | On a location's At the Table tab: a random unlearned fact (`rumor` not false) from the place, its children, NPCs whose `location` is there, and factions based there. Rolling never marks anything learned; the wrap does. | Facts populated (G) |
| 6 | **Advance time** | A button on the dashboard: move the in-world date forward N days, roll weather for the party's location `climate`. | `calendarDate.js`; Calendarium write API (*to verify*, T8) |
| 7 | **Loot** | DMG treasure by CR or hoard tier, output as a list you paste into the journal or turn into story items. Uses the treasure tables in `5. Mechanics/Tables` (*to verify* which exist). | — |
| 8 | Faction clock view | Renders `clock` steps as segments on the faction note and lists all clocks on the dashboard. | E1 |
| 9 | Region encounter tables | A region field `encounter_table` linking a table note; the dashboard rolls it for the party's region. | — |
| 10 | Party treasury | The Currency calculator reads and writes party `funds` instead of its own frontmatter. | Party `funds` |

**Not recommended:** a tavern/inn generator and a name generator beyond what you have. The Fantasy Content Generator plugin is installed and covers both.

---

## 4. Approvals needed

1. **X1** — the new fields in §1.1. Strike any you won't use; each costs an input row and a skill line.
2. **X3** — move the weather config into Configuration (follows your "one note" answer; confirm it covers weather).
3. **X9** — the four tool subfolders and the moves in §3.1.
4. Delete the `Event.md` and `Group.md` template stubs.
5. **X8** — build Rules & Spells now, ahead of the migration.
