# Phase 2 — Design

Date: 2026-11-14. Builds on `01 Audit.md` and your five answers. Nothing here is built yet.

**Labels.** *Verified* = checked in the vault. *To verify* = I believe it, and Phase 3 or the migration plan includes a test before anything depends on it.

## Decisions at a glance

| # | Decision | Recommendation |
|---|---|---|
| D1 | Visibility model | Field-level allow-list. Bodies are never exported, except one opt-in `## Public` section. |
| D2 | What "known" means | Three explicit, DM-approved things per party: the entity is `revealed`, a `facts[]` entry is `learned`, a `relationships[]` edge is `learned`. |
| D3 | Player-facing text field names | Unify on `summary` for every type; retire `player_impression`, `player_summary`, `public_premise`. **Needs your yes** (it changes a convention you set). |
| D4 | Relationships | Replace the `"Name\|type"` strings with one typed edge list, stored on one side only. Disable the Relations plugin. |
| D5 | New note types | Faction, Item, Deity. |
| D6 | Publishing | A custom export script writes sanitized JSON per campaign; Gatsby reads only that. |
| D7 | Findability | A generated index (TSV files) that agents read first; one-line `gist` required on every entity. |
| D8 | Agents | Three: `dm-assistant` (prep and creative), `table-assistant` (fast, read-only), `vault-keeper` (wrap, lint, index, reveals). |
| D9 | Environment | Project `settings.json` disables superpowers here; obsidian-second-brain write commands denied. |

---

## 1. Schemas and visibility

### 1.1 Why field-level

The site is a per-campaign wiki plus recaps. That needs three answers per entity: may it appear, which text may appear, and which of its connections may appear.

- **Note-level only** (a `publish` flag) fails: every NPC note is mostly DM text, so a published note leaks.
- **Section-level** (mark DM sections, publish the rest) is a deny-list. The audit found five different DM markers and DM text above `## DM Notes`; one missed marker is a leak.
- **Field-level allow-list** publishes only named fields that were written to be player-safe. A forgotten field is a gap on the site, not a leak. This also fits the vault: NPC content already lives in frontmatter, and the body is scaffold.

Cost: you write player-safe text separately from DM text. That is already your convention; this makes it the only route to the site.

### 1.2 The three knowledge states

All three are per-party maps keyed by the party note name, matching quest `active`/`completed`. Campaign and party are 1:1, so the exporter resolves campaign → party.

```yaml
revealed:
  Midnight Covenant: true          # the entity may appear on that party's site

facts:
  - text: "Runs the manifest desk at the Ferrymen's Guild."     # written player-safe
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S46 Duskferry.md|S46 Duskferry]]"
  - text: "He is the Tallyman."
    learned: {}                    # not learned by anyone yet
    dm: "Only Hesper Crane's handler knows. Three clues point here."   # optional, never exported

relationships:
  - target: "[[4. World Almanac/NPCs/Anselm Corrow.md|Anselm Corrow]]"
    type: employer
    learned:
      Midnight Covenant: "[[...S46 Duskferry.md|S46 Duskferry]]"
```

- `learned` holds a link to the journal where it was learned. Present = learned; absent = not. This gives you "when" for free and lets a session page list what was learned in it (derived, not stored).
- `facts` is your managed list of learnable things. Each fact is one sentence in player-safe wording, because once learned it is published verbatim.
- **Sessions an NPC appears in** is derived from journal `npcs` arrays (the existing reveal ledger). It is not stored on the NPC.
- `revealed` is explicit, not derived from the ledger. The ledger is evidence; `revealed` is your decision. This lets you reveal something the party has only heard of (Vecna) and hold back something they met in disguise.

### 1.3 What gets exported

For an entity where `revealed[party]` is true:

| Always | When learned | Only if listed in `reveal` | Never |
|---|---|---|---|
| display name, `pronounced`, type, `summary`, sessions appeared in (from published journals) | each `facts[].text`; each `relationships[]` edge whose target is also revealed | any other frontmatter field | body (except `## Public`), `secrets`, `dm`, `gist`, statblock, every DM-voice field |

```yaml
reveal:
  Midnight Covenant: [images, race, occupation, location, condition]
public_name:
  Midnight Covenant: "The Tallyman"     # optional: title and link text until you clear it
```

- `reveal` is the per-note opt-in for structural fields. Default is conservative because `race: Doppelganger` or `location` can be the spoiler. The wrap workflow proposes a sensible `reveal` list for each newly revealed entity.
- `public_name` covers entities known under another name. Aliases are never exported.
- Images are exported only when `images` is in `reveal`. Paths get normalized in migration (the audit found five path forms).
- A wikilink inside exported text that points to an unrevealed entity is exported as plain text, and the lint reports it so you can reword.

### 1.4 Text fields per type

| Field | Audience | Types |
|---|---|---|
| `summary` | Player-safe, one or two sentences | all entity types, journals |
| `gist` | DM one-liner for agents and the index (≤ 20 words, who/what/why it matters) | all entity types |
| `secrets` | DM-only | NPC, faction, item, location, quest |
| `## Public` body section | Player-safe long form, optional | any; mainly journals and locations |

**D3 — unify on `summary`.** Today the same role has four names (`player_impression`, `player_summary`, `public_premise`, `summary`). One name gives agents and the exporter one rule: *`summary`, learned `facts`, and `## Public` are the only player-facing text in the vault.* Only 7 values are populated today, so the rename is cheap now and expensive later. Alternative: keep the four names and map them in the exporter; it works, and every skill has to carry the mapping forever.

### 1.5 Target schemas

Every note keeps `obsidianUIMode: preview` first. "Common block" = `gist`, `summary`, `revealed`, `reveal`, `public_name` (optional), `facts`, `relationships`, `aliases`, `images`, `tags`.

| Type | Folder · tags | Fields beyond the common block | Changes from today |
|---|---|---|---|
| **NPC** | `4. World Almanac/NPCs/` · `npc` | `statblock`, `location` (current whereabouts), `condition`, `race`, `gender`, `age`, `alignment`, `occupation`, `pronounced`, `description`, `history`, `personality`, `ideal`, `bond`, `flaw`, `goals`, `likes`, `dislikes`, `secrets`, `party_relationships` | `groups`, `religions` removed (become edges). `relationships` changes shape. `player_impression` → `summary`. `partyRelationships` → `party_relationships` (`04 Expansion` §1.3, batch C5b), shape `{<Party>: <value>}` keyed by party note name, values from `Configuration.enums.party_relationships`. `age` number or null; `goals` string. |
| **Location** (region, settlement, place of interest) | existing · type + `location` | `location` (parent), `pronounced`, `population`, `terrain`, `rulers`, `government`, `army`, `imports`, `exports`, `resources`, `routes`, `secrets` | `religions` removed. `travel`/`travelDistances` → `routes`. |
| **Shop** | existing · `shop` + `location` | `location`, `owners`, `staff`, `cost_modifier`, `type`, `size`, `items`, `resources` | CLAUDE.md corrected to `type`/`size` (what the code reads). Template frontmatter fixed to match. |
| **World** | existing | `economic_scale`, `calendar` | none |
| **Faction** *(new)* | `4. World Almanac/Factions/` · `faction` | `location` (base, optional), `kind` (guild, cult, order, house, court, family…), `status` (active, broken, dormant, destroyed), `goals`, `resources`, `secrets`, `clock` (optional: `[{step, done}]` for villain timelines) | Replaces 36 `groups` strings. Leader and members are derived from inbound edges. |
| **Item** *(new, story and custom items only)* | `4. World Almanac/Items/` · `story-item` | `base_item` (link into `5. Mechanics/Items`, optional), `holder` (link: PC, NPC, faction, or party), `location` (when not held), `rarity`, `attunement`, `secrets` | Tag is `story-item`, not `item`, so the generated Items base and shop generator are unaffected. |
| **Deity** *(new, only gods that matter to the campaign)* | `4. World Almanac/Deities/` · `deity` | `mechanics` (link into `5. Mechanics/Deities`, optional), `domains`, `secrets` | Replaces `religions` strings. Gods that never matter can stay as direct links into `5. Mechanics/Deities`. |
| **Quest** | existing · `quest` | `kind` (arc, quest, thread), `parent` (link to arc), `world`, `active`, `completed`, `description`, `steps`, `npcs` (existing `{name, description}` shape, unchanged), `giver`, `locations`, `items`, `factions`, `pcs` | Adds links for location, item, faction, PC, parent. `player_summary` → `summary`. No `relationships` field; the flat arrays cover it. |
| **Player character** | existing · `player` | D&D Beyond schema plus common block, `tagline` | Verified: the "Update From DnD Beyond" button sets named keys only, so added keys survive a sync. `revealed` defaults true. |
| **Party** | existing | travel fields | none |
| **Campaign** | existing · `campaign` | `party`, `world`, `summary`, `site_slug` | `public_premise` → `summary`. Body stays DM-only in whole. |
| **Session journal** | existing · `session-journal` | `date`, `session_number`, `summary`, `party`, `prep_notes`, calendar fields, `party_present`, `locations`, `npcs`, `quests`, `items`, `factions`, `publish` | `campaign:` → `party:` on 42 notes. `prep-notes` → `prep_notes` (`04 Expansion` §1.3, batch C5b). Adds `factions` and `publish` (bool: recap may go to the site). |
| **Session prep** | existing · `session-prep` | `date`, `session_number` (target), `journal` (back-link once played) | Never exported. |

Body convention for humans (the exporter does not rely on it): DM content goes under `## DM Notes`; the one marker for DM asides elsewhere is a `> [!dm]` callout. Migration moves the stray cases.

### 1.6 Publishing approach

**Recommend: custom export script → JSON → Gatsby.**

```
vault ──(export script, allow-list)──▶ export/<site_slug>/{entities,sessions,index}.json ──▶ Gatsby repo (gatsby-source-filesystem + transformer-json)
```

- The Gatsby repo never contains the vault. It sees only the export output.
- JSON, not Markdown: there is no body to leak, and Gatsby gets a typed GraphQL schema (entity, fact, edge, session).
- `--dry-run` prints a diff against the last export: newly visible entities, facts, edges, images. That diff is your last approval gate before a publish.
- Per campaign: `--campaign "The Hunt for Vecna"` resolves the party and writes to that campaign's `site_slug`.

| Option | Why not |
|---|---|
| Point Gatsby at the vault | Bodies, Dataview, and Meta Bind do not render; every note is mostly DM text; leak-by-default. |
| Obsidian Publish / Digital Garden | Note-level publish flags only; not Gatsby. |
| Quartz | Its own site generator; section-level removal at best. |

Design only. The exporter is specified in the migration plan as a later, separate build.

---

## 2. Findability

### 2.1 Generated index

A script reads frontmatter and writes four tab-separated files to `z_Extra/index/`. TSV, not Markdown, so Obsidian does not index them and one `grep` returns whole rows.

| File | One row per | Columns |
|---|---|---|
| `entities.tsv` | entity | type, name, aliases, path, parent/location, status, revealed-to, gist |
| `edges.tsv` | relationship (typed edges plus flat links: `location`, `owners`, `staff`, `rulers`, `holder`, quest links, `routes`) | source, type, target, learned-by |
| `sessions.tsv` | journal | number, title, real date, in-world dates, path, counts, summary |
| `facts.tsv` | fact | entity, text, learned-by, learned-in |
| `state.md` | — | latest session, in-world date, party location, active quests, entities with unfiled scratch facts |

- Rebuilt at the end of every wrap and by the lint. Each file carries a build stamp; agents compare it to the newest journal and fall back to grep if it is stale.
- `state.md` replaces the 1.3k-word campaign-state file in agent memory. Memory keeps preferences only.

### 2.2 Rules

- **`gist` is required on every entity.** It is what makes the index useful without opening notes.
- **Names.** Existing "(COS)" filenames stay (renaming 70 notes risks every link for no gain). The bare name must be the first alias (already true on 70/70). New notes never take a source suffix. Links are always full-path with alias, which is the form Obsidian rewrites on rename.
- **Journals get a real title at wrap.** No "New Session Journal" survives a wrap.
- **No stable IDs.** With real wikilinks everywhere and `alwaysUpdateLinks` on, the path is a sufficient identity. The string-encoded fields that broke this rule are removed by this design.

### 2.3 Minimal read paths

| Question | Read |
|---|---|
| Where are we now? | `state.md` |
| Who or what is X? | `entities.tsv` row; open the note only if the gist is not enough |
| Who is connected to X? | `grep X edges.tsv` (both directions in one pass) |
| Who is in Bruokdon? | `edges.tsv` rows of type `location` with that target, then one level down |
| When did the party meet X? | `edges.tsv` rows from sessions with target X |
| What does the party know about X? | `facts.tsv` rows for X where learned-by is set, plus `summary` |
| What happened in S31? | `sessions.tsv` row; journal body only if detail is needed |
| Tone, lines and veils | The `# Tone` through `# Lines & Veils` sections of the campaign note only |
| Rule, spell, monster | Filename glob in `5. Mechanics/` (unchanged from `dnd-qa`) |

---

## 3. Relationship model

### 3.1 Your question: is the current approach good?

No. It handles family trees and nothing else.

| Problem today | Consequence |
|---|---|
| Target is a plain string `"Name\|type"` | Renaming a note silently breaks it; backlinks, graph, and Bases cannot see it |
| Types limited to 13 family terms; the graph view throws on any other (inferred from code) | No rival, employer, ally, handler, member |
| Both sides written by hand-off template | Drift when one side is edited; Remove matches by substring |
| No per-edge data | Cannot say the party doesn't know two NPCs are allied |
| Faction and deity ties are separate free-text fields | 36 spellings for ~20 groups |

### 3.2 The two real options

| | A. Typed edge list (recommended) | B. One flat key per type (`ally:`, `rival:`, …) |
|---|---|---|
| Per-party visibility per edge | Yes | No. Would need a parallel structure. |
| Open type vocabulary | Yes, one list in Configuration | A new frontmatter key per type |
| Agent parsing | One field; one grep for inbound edges | Must know every key name |
| Obsidian Properties panel | Shows as raw YAML; edited through the Add/Remove Relationship forms | Native link pills |
| Bases | Needs a formula over the list (*to verify*) | Native columns |
| Relations plugin graph | Not supported | Supported |
| Rename-safe | Yes, if Obsidian tracks links nested in lists (*to verify*; quest `npcs[].name` already relies on it) | Yes |

Per-edge visibility is a hard requirement of yours, and B cannot carry it. So: **A, and disable the Relations plugin.** Its graph is replaced by a rewritten `npcRelationships` view that draws inbound and outbound edges for any type. You lose native link pills for relationships in the Properties panel; the forms you already use cover editing.

### 3.3 Edge shape and vocabulary

```yaml
relationships:
  - target: "[[path|Name]]"     # any note: NPC, PC, faction, deity, location
    type: employer              # from Configuration.relationship_types
    note: "optional DM text"
    learned: { <Party>: "[[journal]]" }
```

`Configuration.relationship_types` replaces `relationship_mapping`. Each entry: `type`, `inverse` (with male/female forms where needed, as today), `symmetric`, `category`.

| Category | Types (inverse) |
|---|---|
| Family | father/mother (son/daughter), husband/wife, brother/sister, uncle/aunt (nephew/niece), cousin |
| Personal | friend, ally, rival, enemy, lover, mentor (student) |
| Work | employer (employee), serves (master of), handler (asset), patron (client) |
| Faction | member, leader, founder, agent, former-member — target is a faction |
| Faith | worships, cleric-of — target is a deity |
| Place | home, works-at, origin, imprisoned-at — target is a location (`location` stays the current-whereabouts field) |

### 3.4 Who owns each relationship

Stored once, on the owner. The other direction is derived (index, views, agents).

| Relationship | Owner · field | Inverse |
|---|---|---|
| NPC → NPC, NPC → PC | source NPC · `relationships` | derived, labelled with the inverse type |
| NPC → faction / deity / non-current place | NPC · `relationships` | faction roster, worshippers, residents derived |
| Faction ↔ faction (ally, rival, parent, front-for) | source faction · `relationships` | derived |
| Anything → current place / parent | the thing · `location` | children derived (as today) |
| Location → ruler | location · `rulers` | derived |
| Location ↔ location route | either end · `routes: [{to, miles, mode, note}]` | derived; lint flags a pair stored on both ends |
| Shop → owner, staff, stock | shop · `owners`, `staff`, `items` | derived |
| Item → holder / resting place | item · `holder`, `location` | inventories derived |
| Quest → NPC, giver, location, item, faction, PC, parent arc | quest · `npcs`, `giver`, `locations`, `items`, `factions`, `pcs`, `parent` | derived |
| Session → everything encountered | journal · ledger arrays | appearances derived |
| PC → NPC / faction | stored on the NPC or faction side (PC notes stay close to the D&D Beyond shape) | derived |

Directed edges are intentional: A may count B an ally while B counts A a mark. A mirrored pair is allowed when the two sides differ; the lint flags mirrored pairs that say the same thing.

**Visibility of flat links.** `location`, `owners`, `staff`, `rulers`, `holder` have no per-edge `learned`. They follow `reveal` on the owning note plus `revealed` on the target. If a flat link must be secret while the note is public, record it as a typed edge instead (e.g. a secret owner as `relationships: [{type: owner-of}]`) and leave the flat field empty. Quest links are exported when the quest and the target are both revealed.

---

## 4. Agents and skills

### 4.1 Roster

**Agents**

| Agent | Purpose | Model · tools | Reads | Writes | Never |
|---|---|---|---|---|---|
| `dm-assistant` | Prep, arc planning, creative collaboration, campaign Q&A | inherit · full | index, bible, whatever the task touches | entity notes, prep notes, via `vault-note` | set `revealed`/`learned`/`summary` without approval; store lore in memory |
| `table-assistant` | In-session answers in seconds | fast model · Read, Grep, Glob, plus Edit limited to one scratch log | `state.md`, index TSVs, single notes, `5. Mechanics/` by glob | appends to `2. Scratch Notes/S<N> Live Session - Improvised Facts.md`, only when told "log that" | load skills, read the bible beyond tone, create or edit vault notes, produce outlines |
| `vault-keeper` | Post-session wrap, canonizing scratch logs, reveal review, lint, index rebuild | mid model · full | journals, scratch logs, prep, index | journals, entity notes, index, after per-item approval | invent facts; resolve contradictions; touch `5. Mechanics/` |

`table-assistant` carries its own ~400-word prompt with the lookup paths inline, so it needs no skill load. Its answers label player-known vs DM-only in one word when it matters.

**Skills**

| Skill | Trigger (short form) | Change |
|---|---|---|
| `vault-note` | creating or editing any vault note or template | Becomes the schema authority. SKILL.md holds the rules (links, folders, tags, the three knowledge states); `references/<type>.md` holds each schema, loaded on demand. Folder map lives here only. |
| `lore-researcher` | what happened, who knows whom, what is near X | Rewritten index-first with the traversal method in §4.3. |
| `world-builder` | new or deeper NPCs, places, factions, items, deities | Adds the three new types; names `gist`, `summary`, `secrets`, `facts`, `relationships` as required outputs. |
| `story-creator` | quests, arcs, threads, hooks | Arcs and threads become quest notes (`kind`, `parent`). Every secret meant to be discovered is written as a `fact` on its entity. |
| `encounter-builder` | encounters, loot | Initiative Tracker syntax moves to a reference file. Treasure checks story-item notes as well as PC inventory. |
| `statblock-creator` | stat blocks | YAML skeleton and CR table move to reference files. |
| `dnd-qa` | rules, monsters, spells, items | Minor tightening. |
| `session-prep` *(new)* | planning the next session | The prep flow, moved out of the agent prompt. Secrets and clues link to `facts`. |
| `session-wrap` *(new)* | after a session; processing raw notes or a scratch log | The loop in §5. |
| `reveal-review` *(new)* | "what does the party know about X", marking facts learned, backfilling reveals | Ad hoc version of the wrap's reveal step; used for the S1–S39 backfill. |
| `vault-lint` *(new)* | health check, after wrap, before export | Bundles the index and lint scripts in the skill folder. |

**Removed from the project:** `obsidian-markdown` (overlaps `vault-note`, knows none of the schema) and `obsidian-cli` (creates notes at arbitrary paths). **Kept:** `obsidian-bases`, `json-canvas`.

**Commands** (`.claude/commands/`): `/prep`, `/wrap`, `/table`, `/reveal`, `/lint`. Each is a one-line entry into the matching agent or skill.

**Shared rules live once.** The eight "rules that bind all campaign work" stay in CLAUDE.md and are deleted from every skill. Schema tables move from CLAUDE.md into `vault-note/references/`; CLAUDE.md keeps the folder-independent conventions, the knowledge model in ten lines, and pointers. Target: CLAUDE.md under ~1,100 words (from 2,276). **Needs your yes**, since it edits sections outside "agents and skills".

**Scripts.** The index builder and lint are bundled in `.claude/skills/vault-lint/scripts/` (inside the paths I may write), sharing one module that parses the vault into entities, edges, facts, sessions. The exporter is a third consumer of the same module, built later. They write only to `z_Extra/index/`.

### 4.2 Handoffs

```
story-creator ──encounter brief──▶ encounter-builder ──needs stats──▶ statblock-creator
      │                                   │
      └──new NPC / place / faction──▶ world-builder ──files via──▶ vault-note
session-prep ──secrets as facts──▶ entity notes ──after play──▶ session-wrap ──proposals──▶ DM ──approved──▶ notes ──▶ vault-lint (index) ──▶ export dry-run
table-assistant ──"log that"──▶ scratch log ──▶ session-wrap (canonize)
```

- An encounter brief is a fixed five-line block (purpose, site link, difficulty feel, constraints, story payload). `encounter-builder` refuses to guess a missing line.
- Anything a skill learns that belongs to an entity is filed on that entity, not left in a prep note.

### 4.3 Relationship traversal method (for `lore-researcher` and `table-assistant`)

1. Resolve the name: grep `entities.tsv` on name and aliases → path and gist.
2. One pass: grep that path in `edges.tsv`. Rows where it is the source are outbound; rows where it is the target are inbound. Apply the inverse label to inbound rows.
3. Group by category: family, personal, work, faction, place, quests, sessions.
4. Second hop only if asked ("who else is in that faction"): repeat step 2 on the faction's path.
5. Open a note only for `note` text or prose detail.
6. If the index stamp is older than the newest journal, say so and grep frontmatter directly: `target:` lines for typed edges, then `location:`, `owners:`, `staff:`, `rulers:`, `holder:`.
7. Report `learned` state with each edge when the question is about what the party knows.

### 4.4 Environment

- Project `.claude/settings.json` with `enabledPlugins: {"superpowers@claude-plugins-official": false}`. *To verify* that a project file overrides the user-level `true`; if not, the fallback is yours to make in `~/.claude/settings.json`.
- Deny rules for obsidian-second-brain's write commands in this project (*to verify* the exact rule syntax). Its SessionStart hook is user-level and cannot be scoped from here; it costs about 60 tokens and is otherwise harmless.
- `.claude/` is globally git-ignored. New skill, agent, command, plan, and settings files need `git add -f` once to join Obsidian Git's backups. I will list them; I will not run git.

---

## 5. The self-organizing loop

**Before the session (`session-prep`).** Each secret or clue in the prep note is a link to a `facts` entry on the entity it is about, with `learned` empty. New secrets are added to the entity first. The prep note then lists what *could* be learned.

**During (`table-assistant`).** Improvised names and rulings go to the session's scratch log on request.

**After (`session-wrap`, run by `vault-keeper`).** One proposal document, numbered, answered in one pass (your stated preference in agent memory):

1. **Journal draft** — title, `summary`, body sections, dates, with a short question list for anything not in your notes.
2. **Ledger** — `party_present`, `locations`, `npcs`, `quests`, `items`, `factions`, each with the evidence line it came from.
3. **New entities** — scratch-log and journal names with no note: create, alias to an existing note, or skip (nameless one-offs are skipped by default).
4. **Reveals**
   - Entities to mark `revealed`, with a proposed `summary` and `reveal` list.
   - Prepped facts that landed (matched against the prep note's list) and new facts worded for players.
   - Relationship edges the party learned.
5. **State changes** — NPC `condition`, `location`, `party_relationships`; quest `active`/`completed`/steps; item `holder`; faction `status`/`clock`.
6. **Contradictions** — anything in the notes that conflicts with existing canon, flagged with both sources. Never resolved.

You answer by number: accept, strike, or reword. Only accepted lines are written. Then the lint runs, the index rebuilds, and the scratch log is marked filed.

**Guarantees**

- No agent writes `revealed`, `learned`, `summary`, `public_name`, `reveal`, or `## Public` without an accepted proposal line. This rule sits in CLAUDE.md so it binds every agent.
- The lint checks the invariants: every `learned` points at an existing journal for that party; no exported text links an unrevealed entity; no learned edge targets an unrevealed entity; every entity in a published ledger is either revealed or explicitly held back; every revealed entity has a `summary`.
- The export dry-run diff is a second gate: nothing newly visible reaches the site without you seeing it listed.
- Git history (Obsidian Git, every 5 minutes) is the audit trail and the undo.

**Backfill for S1–S39 and the 70 COS NPCs** uses the same loop in bulk through `reveal-review`: per session, propose the ledger and reveals from the journal; you approve a batch. This is the part of the migration that needs your judgment, and the plan will size it per session so it can be done in sittings.

---

## 6. Addendum — campaign plan vs canon (added after approval, at the DM's request)

The DM's requirement: keep an established campaign plan, adjust it to what actually happens, and never change what happened.

### 6.1 Two kinds of truth

| | **Canon** | **Plan** |
|---|---|---|
| What it is | What happened at the table, what the party has learned, and anything the DM has locked | Everything intended but not yet played or learned |
| Where it lives | Wrapped session journals; `facts` and `relationships` with `learned` set; any fact with `locked: true`; state fields changed by a wrap (`condition`, quest `completed`, item `holder`) | Quest/arc `steps` not yet played; unlearned, unlocked `facts`; `secrets`; prep notes; the campaign note's roadmap |
| May an agent change it? | **No.** Only the DM reopens canon, explicitly, per item | Yes, by proposal, with the reason logged |

New fields:

- **Journal `wrapped: true`** — set when the wrap is approved. A wrapped journal's body, `summary`, and ledger are canon. Later corrections are appended under `## Errata` with a date; nothing is rewritten.
- **Fact `locked: true`** — a DM-finalized truth the party has not learned yet (today's "Locked Canon" list in the campaign note). Unlearned and unlocked facts are plan and may change.
- **Quest step `status`** — `planned`, `played`, `skipped` (still usable), `void` (made impossible by play) — and `outcome` (one line of what actually happened, with the journal link). The existing per-party `completed` map stays.
- **`## Plan Changelog`** on arc notes and the campaign note — one dated line per change: what changed, why, which session caused it.

### 6.2 Skills

| Skill | Purpose |
|---|---|
| `campaign-planner` *(new)* | Owns the plan: acts and arcs as quest notes (`kind: arc`, `parent`), villain and faction clocks, PC threads. Runs **plan reconciliation** after each wrap: for every planned step touched by the session, propose `played` / `skipped` / `void`, then propose downstream adjustments. Writes the changelog. Never edits canon to fit the plan. |
| `canon-check` *(new)* | The gate every creative skill runs before proposing content: collect the canon that touches the subject (wrapped journals, learned facts, locked facts), list conflicts with both sources, and stop. Also the procedure for an explicit DM reopen. |

`session-wrap` gains a final step: hand the approved journal to `campaign-planner` for reconciliation. `story-creator` keeps quest and hook craft; `campaign-planner` owns structure and the plan/played ledger.

### 6.3 Lint additions

- A wrapped journal modified after its wrap date without an `## Errata` entry (warning; needs git, so it is advisory).
- A fact that is `learned` or `locked` whose text differs from the last index build (the index stores a hash of canon fact text).
- A quest step marked `played` with no `outcome`.

## Approvals (given 2026-11-14)

D3 unify on `summary`: yes. D4 typed edges, disable Relations plugin: yes. Slim CLAUDE.md: yes. Index and lint scripts in `.claude/skills/vault-lint/scripts/`: yes. Roster addition requested: campaign planning and canon tracking (§6).

## What I asked

1. **D3** — unify the player-facing text field on `summary`? (Recommended: yes.)
2. **D4** — typed edge list and disable the Relations plugin? (Recommended: yes.)
3. **CLAUDE.md** — may I move the schema tables into `vault-note` references and cut CLAUDE.md to rules and pointers?
4. **Scripts** — are index and lint scripts inside `.claude/skills/vault-lint/scripts/`, writing to `z_Extra/index/`, acceptable? The alternative is to specify them in the migration plan under `z_Scripts/JS/`.
5. Anything in the roster or the wrap loop you want changed before I build.
