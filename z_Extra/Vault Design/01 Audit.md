# Phase 1 — Vault Audit

Date: 2026-11-14. Scope: everything outside `5. Mechanics/` and `6. Resources/` (those were sampled for shape only). Nothing in the vault was modified.

**Evidence labels.** *Verified* = counted by script or read directly by me. *Sub-verified* = counted or read by a delegated sweep, not re-checked by me. *Inferred* = reasoned from code or config, not observed running in Obsidian.

**Method.** A gray-matter census over 243 campaign notes (frontmatter key presence, non-empty counts, value shapes, link resolution), five delegated read-only sweeps (NPC bodies, journals/prep/scratch, locations/quests/party, scripts/Bases/plugin config, external skills + mechanics shape), and a full read of CLAUDE.md, Configuration, the campaign and party notes, every Templater template and helper, `monster.txt`, the agent, the seven vault skills, and agent memory.

---

## 1. Schema drift

Inventory (verified): 94 NPCs (70 "(COS)", 24 hand-made) + 2 non-NPC files in the NPC folder, 2 regions, 6 settlements, 20 places of interest, 5 shops, 1 world, 3 quests, 7 PCs, 1 party, 1 campaign, 49 journals (S0–S48), 46 prep notes. Each almanac folder also holds a folder note (`NPCs/NPCs.md` etc.) with no tags.

### Drift by note type

| Type | CLAUDE.md says | Template writes | Notes actually have |
|---|---|---|---|
| **Session journal** | `party` wikilink, `calendar` | `party`, no `calendar`, no `campaign` | `campaign:` on 42/49, `party:` on 7/49 (S0, S43–S48). `calendar` on 35. `quests` non-empty 4/49, `items` 1/49, `npcs` 31/49, `party_present` 38/49, `locations` 48/49. |
| **Quest** | Template "writes `campaign:` and is out of date" | **Writes `world:`** — the CLAUDE.md warning is stale | `world` 3/3. `player_summary` key present on **0/3**. No `location`/`items` fields exist. |
| **Shop** | `shop_type`, `shop_size` | Frontmatter `shop_type`/`shop_size`, but the infobox inputs bind `type`/`size` | Code (`generateShopInventory.js`) reads `type`/`size`. 1/5 shops has them. `shop_type`/`shop_size` exist on 0. No `summary`, `images`, or `aliases` on shops. |
| **Location** | `summary` is the spoiler-safe teaser | `summary:` empty | Present on 4/28, real on 3 (Vallaki's is "Hello"). Overview is "TBD" on ~24/27 (sub-verified). `travel` on 2 notes, `travelDistances` (different shape, read by nothing) on 1; the template writes neither key. |
| **NPC** | `player_impression`/`secrets` appear on first write | Not seeded | `player_impression` non-empty on **3–4/94**; `secrets` on ~11/94. `partyRelationships` set on 48. `relationships` non-empty on 11. `location` null on 28. |
| **NPC mirror (`monster.txt`)** | "same frontmatter keys" as NPC.md | Emits only `obsidianUIMode, statblock, tags, condition, images, aliases, alignment` | Mirror has drifted: no `location`, `relationships`, `race`, `gender`, `age`, `occupation`, `groups`, `religions`, `partyRelationships`, or text fields; body has an extra `### Plot Hooks` that NPC.md lacks. Existing COS notes have the keys because they were backfilled later. A re-import would strip them. |
| **Player character** | `tagline` in frontmatter | `tagline: ''` | Key present on 0/7. `alignment` is written as the literal string `"character.alignment"` by the template (bug). `statblock` is bool on PCs, string `inline` on NPCs. `inventory` lags play (already in agent memory). |
| **Campaign** | `public_premise` | `public_premise: ""` | Key absent on the one campaign note. |
| **Session prep** | `date` + tag | same | 46/46. `obsidianUIMode` on 17. 9 old notes carry an undocumented reverse link `journal:`. |
| **World** | `economic_scale`, `calendar` | no template | OK. |
| **Party** | travel fields | — | OK. No member list, in-world date, or shared loot. |

### Shape inconsistencies (same concept, different encodings)

- **Links:** `location` and ledger arrays use full-path wikilinks with `.md` and alias. `relationships` and `travel` use bare basenames in plain strings, so Obsidian does not rewrite them on rename. Quest `npcs[].name` mixes both link styles.
- **`age`:** number on 69, string on 2, null on 22. **`goals`:** string on 87, array on 3. **`race`:** wikilink on 78, plain string on 13 COS NPCs and 2 PCs. **`date`:** mixed date/datetime.
- **`active`:** bool on PCs, per-party map on quests.
- **Free-text identity:** `groups` has 36 distinct strings for roughly 20 real groups ("Keepers of the Feather" vs "Keepers of the Feather (ally)", four Vistani variants, three dusk-elf variants). `religions` has "The Morninglord" ×10 and "Morninglord" ×1.

### Broken things found in passing

- `NPCs/Marrow.md` frontmatter is invalid YAML (line 37, an unquoted `**Continuity note` reads as a YAML alias). *Verified* that gray-matter rejects it; *inferred* that Obsidian also drops its properties, which would hide a key villain from every tag query.
- 15 unresolved frontmatter links (verified): Blue Water Inn `owners`/`staff` ×4 and Barovia `rulers` ×1 miss the "(COS)" suffix; Seluvis ×5; module `resources` links ×3; two are `travel` tuples misparsed as links.
- 28 journals (S16–S43) point `prep-notes` at a `Session Prep/Midnight Covenant/` folder that no longer exists; 3 point at the Templater template (sub-verified).
- `NPCs/Npc.md` is a stray index with ~70 links to non-existent notes.
- Party note "Session Log" filters `party = this.file.link`, so it can only show 7 of 49 sessions (inferred from the query plus verified key counts).
- `Add Relationship` throws on a note with no `relationships` key; `Add Travel Distance` throws on a note with no `travel` key, which is every note the template creates (both inferred from code).
- `types.json` types `statblock` as checkbox and `travel`/`relationship_mapping` as multitext; all three conflict with stored values.
- CLAUDE.md folder map lists `1. DM Toolkit/Knowledge/` (does not exist) and `Random Content/` (empty); Configuration points `groups` at `4. World Almanac/Groups` (does not exist); the Group and Event templates are empty stubs.

---

## 2. Findability for agents

### How an agent finds a note today

1. **Folder + filename glob.** Works for almanac notes. Reliable.
2. **`location:` grep** to walk the hierarchy down; follow `location` up. Hierarchy integrity is good: all 33 location parents resolve, no orphans (sub-verified).
3. **Backlink grep** for `[[Name`. This is the catch-all and the expensive path.
4. **Session journals read in order** for history.
5. **Agent memory** (`project_campaign-state.md`, 1.3k words) as a de facto "where are we" index.

### Where it fails

- **No index of any kind.** No MOC, no home note, no per-type roster. Folder notes embed `.base` views that do not render outside Obsidian. "Who are the Bruokdon NPCs" costs a grep plus N file opens.
- **Summaries are missing where they matter.** Location `summary` 3/28. No one-line field on NPCs (the closest is `description`, long and omniscient). Quest `player_summary` 0/3. Journal `summary` is the only well-populated summary (49/49).
- **Names are unstable.** 70 NPCs carry a "(COS)" suffix that prose and the DM never use. Aliases help (70/70 on COS, 18/24 on hand-made), but the suffix has already caused 5 broken frontmatter links and bare-name links in journals. S46–S48 are still named "New Session Journal".
- **Entities with no note.** The Silent Ascendency, Eternal Watch, Order of the Silver Dragon, Watchers over the Fallen, Ferrymen's Guild, Umbral Athenaeum Council, Keepers of the Feather, Eludrax, the Great Library, Ashcombe, The Dapper Helm, and Vecna himself (`[[Vecna]]` in the bible is unresolved). The campaign's central antagonists exist only as strings and bible prose.
- **Current state is nowhere queryable.** Latest session, in-world date, party location, open threads, and prep debts live in bible prose, agent memory, and the newest journal. Agent memory is stale at S47; S48 is played and S49 is in progress.
- **NPC text lives in frontmatter, not the body.** The body is ~330–680 words of identical Meta Bind/Dataview scaffolding. An agent that reads a whole NPC note pays for the scaffold every time and must know the content is in the YAML.
- **The bible is one 4.4k-word note** that every skill is told to read "before generating anything". Tone and lines & veils are ~300 words of it.
- **No stable IDs.** Identity is the filename. Acceptable while `alwaysUpdateLinks` is on and links are real wikilinks; it is not acceptable for the string-encoded fields above.

### Missing

A generated index per type (name, aliases, one-line summary, parent, status), a "current state" note, a required one-line summary on every entity, a naming rule for the "(COS)" suffix, and notes for factions/items/deities.

---

## 3. Player-knowledge model

### What exists

| Mechanism | Coverage |
|---|---|
| NPC `player_impression` | 3–4 of 94 |
| NPC `secrets` (DM-only) | ~11 of 94 |
| Quest `player_summary` | 0 of 3 |
| Campaign `public_premise` | 0 of 1 |
| Location `summary` | 3 of 28 |
| Journal `summary` | 49 of 49, player-facing by convention |
| Journal reveal ledger | `locations` good; `npcs` partial and heuristic-filled for S1–S44 (per the vault's own 2026-07-13 audit note); `quests`/`items` hand-filled from S45 only |

### Is it complete per note type?

No. The model defines one safe text field per type and a ledger that says an entity was *encountered*. It does not record:

- **Which facts are known.** The party has met Ostwin Reyes's code name but not his identity. A ledger entry for the NPC cannot express that.
- **Field-level safety for anything else.** Is an NPC's `race`, `occupation`, `groups`, `location`, `condition`, portrait, or true name publishable? There is no rule. `groups: Silent Ascendency` on Hesper Crane is a spoiler until it isn't. `aliases: the false Lord Velmont` on Marrow is a spoiler by itself.
- **Relationship knowledge.** `relationships`, `owners`, `rulers`, `groups` have no per-party visibility.
- **Locations, shops, PCs, the world, factions, items:** no known/unknown state at all beyond the location teaser. There is no "has the party discovered this place" flag except ledger membership.
- **Session journal bodies.** `summary` is safe; the body is not, and nothing marks which.
- **Note-level publish state.** Nothing says "this note may be exported".

### Can it drive a website export safely today?

No. An export today could publish journal summaries and nothing else with confidence.

### Leak vectors (all verified or sub-verified)

1. **Omniscient frontmatter.** NPC `description`, `history`, `personality`, `ideal`, `bond`, `flaw`, `goals` are DM-voice. Any exporter that publishes "the NPC note" leaks.
2. **DM content outside `## DM Notes`.** Greyfen Hollow's Overview states the hidden truth and ~170 lines of keyed dungeon sit above DM Notes; Cinderworks and Duskferry have DM commentary in Overview/History; 11 COS NPCs carry module prose (including "Ezmerelda's Secret") above the infobox.
3. **Journal bodies.** `#secret` on 4 journals, inline "**DM-only:**" sentences inside Key Learnings (S45), leftover prep pasted into S6–S12.
4. **Marker inconsistency.** DM-only is signalled five ways: `## DM Notes` position, `secrets` field, `[!warning]- DM only` callout (bible, Greyfen), inline "STILL DM-ONLY" prefixes inside `secrets`, and `#secret` tags. No single machine-checkable marker.
5. **Aliases and filenames.** Spoiler aliases; note titles like "Unfinished Amber Warden".
6. **Wikilink existence.** A published page linking to an unpublished one reveals that the target exists and its name.
7. **Images.** `images` paths come in five forms (bare name, `z_Assets/`, `Z_Assets/` capital, Windows backslashes, remote D&D Beyond URL). Maps with DM markers (Barovia leaflet has 13 pins) and tokens of unmet NPCs are unguarded.
8. **Statblocks** in every NPC body.
9. **Rendered views.** ~168 notes with dataviewjs, ~102 with Datacore, 139 with Meta Bind inputs. A static exporter that renders them would surface DM fields (the NPC page's quest table shows quest `description`); one that doesn't render them shows blanks.
10. **The NPC template's own label.** `player_impression` is headed "What the Party Knows" but sits one heading above `## Secrets` with no structural boundary.
11. **Session prep and the campaign bible** are DM-only in whole but carry no flag saying so.

### Assessment

The split is the right idea and correctly documented; it is unpopulated and too coarse. The safe direction is an **allow-list export** (publish only named player-safe fields from notes explicitly marked publishable), never a deny-list over existing bodies. Design in Phase 2.

---

## 4. Relationship map

Legend: **FM-link** frontmatter wikilink · **FM-str** frontmatter plain string · **typed** structured field · **prose** body or free-text only · **derived** computed by a view from the other side. Queryable = an agent can answer it by reading frontmatter alone.

| Pair | Recorded today | Direction | Queryable |
|---|---|---|---|
| NPC ↔ NPC | `relationships: ["Name\|type"]` FM-str. 11/94 populated, all family except one "ally of convenience". Types limited to 13 family terms in Configuration; the graph view throws on any other type (inferred). | Stored both sides by the Add template | Partly; breaks on rename; no non-family types |
| NPC → location (present at) | `location` FM-link, 66/94 | One-way; children derived | Yes |
| NPC → location (home, origin, workplace) | none; prose | — | No |
| NPC → faction | `groups` FM-str, 64/94, 36 spellings, no notes behind them | One-way | Weak (string match) |
| NPC → deity | `religions` FM-str (2 are links into `5. Mechanics/Deities`) | One-way | Weak |
| NPC → role/employer | `occupation` FM-str with the employer embedded ("Guildmaster, Ferrymen's Guild") | — | No |
| NPC ↔ party | `partyRelationships` map, 48/94 | One-way, read by party note | Yes |
| NPC ↔ individual PC | none; bible "Character Tie-Ins" prose | — | No |
| NPC → item (holds/owns) | none; statblock `gear`, prose | — | No |
| Location → parent | `location` FM-link, 33/33 | One-way; children derived | Yes |
| Location ↔ location (route, neighbor, distance) | `travel: [[name, miles]]` on 2 notes; `travelDistances` on 1 (orphan key); no neighbor field | One-way, by basename | No in practice |
| Location → ruler | `rulers` FM-link, 3/28 (1 broken) | One-way | Yes where filled |
| Location → faction presence | `government`/`army` FM-str | — | No |
| Shop → owner / staff | `owners`, `staff` FM-link, 2/5 each (4 broken) | One-way; NPC side not stored | Yes where filled |
| Shop → item | `items` FM-link into `5. Mechanics/Items`, 2/5; no quantity or price | One-way | Yes |
| Quest → NPC | `npcs: [{name, description}]` typed, 3/3 | One-way; NPC page derives via Datacore `connected()` | Yes |
| Quest → location | none; links inside `description` prose | — | No |
| Quest → item | none | — | No |
| Quest → quest (parent arc, prerequisite) | none | — | No |
| Quest → giver | none (`data/quests.js` expects `giver`/`status`; neither exists) | — | No |
| Quest ↔ party | `active`/`completed` per-party maps | — | Yes |
| Quest ↔ PC (personal thread) | none; bible prose | — | No |
| PC → party, PC → location | `party`, `location` FM-link | One-way | Yes |
| PC → item | `inventory` typed (D&D Beyond), stale | One-way | Yes but unreliable |
| PC ↔ faction / deity / backstory NPCs | `background.organizations/allies/enemies` (empty on 7/7); bible prose | — | No |
| Item → owner / location / history | none. Custom and story items have no notes; artifacts are tracked as prose lists duplicated in the bible and the party note | — | No |
| Session → PCs, locations, NPCs, quests, items | `party_present`, `locations`, `npcs`, `quests`, `items` FM-link arrays (coverage in §3) | One-way; entity side derived | Yes where filled |
| Session → prep | `prep-notes` FM-link, 42/49 present, ≥31 broken | One-way (9 old preps link back) | Unreliable |
| Session → faction / event / secret revealed | none | — | No |
| Campaign → party, world | FM-link | One-way | Yes |
| Faction ↔ faction, faction → leader/HQ/goal | none; no faction notes | — | No |
| Event/timeline | AAT `fc-date` on journals only; Event template is a stub | — | No |

### Flags

- **Missing pairs that matter most:** NPC→faction as links, faction notes at all, quest→location, item↔owner, NPC↔PC, location↔location routes, and non-family NPC↔NPC (rival, employer, ally, handler).
- **Trapped in prose:** over half of hand-made NPCs state a structured relationship only in `history`/`secrets`/DM Notes (sub-verified sample: Ostwin→Anselm, Ostwin→Hesper, Naerissa→Faerah's sister, Mab↔Baba Lysaga one-sided, Izek→Yevelda/Greyfen Hollow, Ezmerelda→van Richten). 35 NPC notes wikilink other NPCs inside frontmatter prose; 66 wikilink locations.
- **Same relationship, different field names:** `travel` vs `travelDistances`; `campaign` vs `party` on journals; `type`/`size` vs `shop_type`/`shop_size`; employer inside `occupation` vs `groups`; ruler in `rulers` vs `government`.
- **String-only entity types:** factions/groups, religions/deities, occupations, government, custom items, events.
- **Relations plugin:** enabled, configured with types `ally, enemy, family, friend, rival, spouse, lover, mentor, parent, location`, reads flat frontmatter keys named after each type. **Zero notes use it.** Its only live inputs are `location` and `images`. The vault's `relationships` strings are invisible to it.

---

## 5. Agent and skill review

Word counts verified by `wc -w`. Roughly 1.3 tokens per word.

| Item | Words | Trigger quality | Issues |
|---|---|---|---|
| **CLAUDE.md** (always loaded) | 2,276 | — | Carries the full folder map, schema table, Templater internals, Node utilities, and Meta Bind array syntax into every turn, including table-side lookups. Stale in at least 8 places (§1). |
| **dm-assistant** (agent) | 1,095 | Good, but covers everything, so it never narrows | Prep, wrap, Q&A, and live play share one prompt and one tool set (Write/Edit/Bash/Web always on). "Live-play mode" is a paragraph inside the heaviest context in the system. Wrap flow never names the ledger arrays or `player_impression`/`player_summary` as required outputs. No canonization step for the scratch log it tells itself to write. |
| **vault-note** | 1,045 | Good | Duplicates the CLAUDE.md folder map (and disagrees: lists `Random Content/Generators|Tables|Indexes`, `6. Resources/Resources/`). Says nothing about frontmatter schemas, tags, or player-facing fields, which is where drift actually happens. |
| **lore-researcher** | 560 | Good | Method is grep-and-read; no index path. Says `location` is "always" a full-path link (true today). Mentions `relationships`/`groups` without their string shapes. No traversal order, no cost guidance. |
| **world-builder** | 733 | Good | "DM-only section" instruction does not name the fields (`secrets`, `player_impression`, `summary`). "Factions" in scope but no faction note type exists. |
| **story-creator** | 801 | Good | Repeats the stale `campaign:`-key warning. No arc/thread note type; arcs land in bible prose. |
| **encounter-builder** | 1,530 | Good | ~40% is Initiative Tracker syntax reference that belongs in a reference file. Treasure picks rely on stale PC inventory (noted in memory, not in the skill). |
| **statblock-creator** | 1,799 | Good | ~60% is the YAML skeleton and CR table; reference-file material. |
| **dnd-qa** | 624 | Good | Accurate against the sampled mechanics shape. Bestiary needs `**/` globs (it says so implicitly). Fine. |
| **obsidian-markdown / -bases / json-canvas / obsidian-cli** | 677 / 1,776 / 1,229 / 442 | Generic; fire on "any .md file" | Third-party generic skills checked into the project. `obsidian-markdown` overlaps vault-note and knows none of the vault's schema. `obsidian-cli` can create notes at arbitrary paths, bypassing the folder map. |
| **Agent memory** | ~2,300 | — | `project_campaign-state.md` is 1.3k words of plot state, loot lists, and NPC lore. That is the "shadow canon" the agent prompt forbids, and it is one session stale. |

### Duplication across skills

"Resolve the active campaign from Configuration" appears in 5 files. "Outline first / ask targeted questions / push back / locked canon / flag don't resolve" appears in 4 skills, the agent, and CLAUDE.md. The folder map appears twice. "Dataview does not render" appears 4 times. None of the seven vault skills uses reference files.

### External plugins

- **obsidian-second-brain** (user-level, v0.14.0; sub-verified). A SessionStart hook in `~/.claude/settings.json` injects a "Skill root" block into every session in this vault. Its skill is 11.4k words; its ~40 commands appear twice each in the skill list (bare and namespaced), roughly 5–6k tokens of listing per session (estimate). It assumes a different vault: `Daily/`, `People/`, `Projects/`, `wiki/`, kanban boards, `ai-first: true` frontmatter, a "For future Claude" preamble on every note, and "use proactively" auto-saving. **Conflicts:** `/obsidian-save`, `/obsidian-ingest`, `/obsidian-reconcile`, `/obsidian-synthesize`, `/obsidian-init`, `/obsidian-person`, `/obsidian-daily`, and the board/task commands all create folders or rewrite notes outside the folder map, and `reconcile` auto-resolves contradictions, which violates rule 1. **Harmless:** `/obsidian-find`, `/obsidian-health` (read-only, but would drown in 11k generated files), `/obsidian-export`, `/obsidian-visualize`.
- **superpowers** (user-level). Injects "invoke a skill before ANY response, including clarifying questions" each session. It defers to CLAUDE.md, but it pushes a table-side lookup agent toward loading skills before answering. Subagents are exempt.
- **graphify** (user-level, 4.7k words). No hook. A graph over 13k files would be dominated by generated content; not evaluated further.
- **Scoping:** the project has no `.claude/settings.json`. Whether project-level settings can disable user-level skills/hooks here was **not verified**.

### Repo note

`.claude` is ignored by a global gitignore (`~/.gitignore`); the existing agent, skills, and memory are force-tracked. New files under `.claude/plans/` (including this one) will not be picked up by Obsidian Git unless force-added.

---

## 6. Workflow coverage

| Workflow | Today | Gap |
|---|---|---|
| Campaign / arc planning | story-creator + bible prose | No arc or thread note type; the Act I/II roadmap, threads, and locked canon are one prose note. The approved whole-campaign outline sits in `2. Scratch Notes/continue.md`. No villain/faction clock. |
| Session planning | dm-assistant prep flow; Lazy DM template | Works. Recent preps are 44–56 KB and hold lore that should live in entity notes. No carry-over of unused scenes except via agent memory. |
| Post-session wrap | dm-assistant paragraph + one memory note | Underspecified. Ledger arrays, player-facing field updates, journal rename, `fc-end`, and the `prep-notes` link are not a checklist. S46–S48 are untitled; S47 has empty `npcs`, no prep link, no `fc-end`. |
| Encounter building | encounter-builder + statblock-creator | Good. Treasure depends on stale inventory. |
| In-session Q&A | "Live-play mode" inside dm-assistant | No lightweight agent. Full context load, write tools on, superpowers pressure. Improvised-fact logs from S44 and S49 were never filed. |

### Unlisted workflows — recommendation

| Workflow | Worth it? | Why |
|---|---|---|
| **Reveal tracking / player-knowledge update** | Yes, highest | Prerequisite for the website and for honest Q&A about "what do they know". |
| **Player-facing recap + site publish** | Yes | Goal 1. Journal `summary` is already close. |
| **Canonize improvised facts** (scratch → entity notes) | Yes | Two logs already orphaned; cheap to fix with a defined step. |
| **Vault lint / schema health** | Yes | Every drift item in §1 is mechanically detectable. Should be a script-backed skill, run after wrap. |
| **Secrets-and-clues tracking** (which prepped secrets landed) | Yes | Feeds the reveal ledger directly; today prep secrets vanish after the session. |
| **Faction / villain clocks** | Yes, light | The bible already tracks Vecna's five steps in prose; needs faction notes first. |
| **Loot and party inventory ledger** | Yes, light | A per-session `items` ledger plus a party-held list of story items. Do not try to mirror D&D Beyond. |
| **In-world time** | Minor | `fc-date`/`fc-end` already work. Only fix: wrap must set `fc-end`. |
| **Travel tracking** | No | Two parallel calculators, data on 2 notes. Fix the bugs or leave it; not worth agent coverage. |
| **Economy / shop restock** | No | Shop generation already works in Obsidian. |
| **NPC quick-voice cards for the table** | Fold into the in-session agent | One-line summary + mannerism field covers it. |

---

## 7. Top 10 problems, ranked by impact on the goals

1. **No export-safe visibility model.** Player-safe fields are near-empty (NPC 4/94, quest 0/3, location 3/28, campaign 0/1) and nothing marks a note or field as publishable. Blocks goal 1.
2. **DM-only content is not machine-separable.** Five different markers, omniscient frontmatter, DM text above `## DM Notes`, secrets inline in journals. Any body-based export leaks.
3. **Factions, items, and deities are strings.** The campaign's main actors (Silent Ascendency, Eternal Watch, Vecna) have no notes; 36 group spellings. Blocks goal 4.
4. **Relationships are family-only, string-encoded, and mostly in prose.** 11/94 NPCs; breaks on rename; the enabled Relations plugin reads none of it.
5. **The reveal ledger is partial and entity-level only.** `quests`/`items` start at S45; S1–S44 `npcs` were heuristic-filled; no fact-level knowledge; the wrap flow does not require it.
6. **No index or current-state note.** Agents grep and read; state lives in a stale 1.3k-word agent memory file that functions as shadow canon.
7. **Templates, the `monster.txt` mirror, CLAUDE.md, and notes disagree** (journal `campaign`/`party`, shop `type`/`shop_type`, stale quest warning, mirror frontmatter). Agents following CLAUDE.md write fields that views don't read.
8. **One heavy agent for every mode.** No fast, read-only table assistant; skills duplicate rules and embed reference material; CLAUDE.md is loaded whole every turn.
9. **External plugins conflict with vault conventions.** obsidian-second-brain's write commands and proactive-save behavior; superpowers' skill-first rule; ~5k tokens of irrelevant skill listing per session.
10. **Accumulated breakage erodes trust in queries.** Marrow's invalid YAML, ≥31 broken `prep-notes` links, 15 broken frontmatter links, the party Session Log showing 7 of 49, untitled S46–S48, two un-canonized scratch logs.

---

## Contradictions and stale canon found (flagged, not resolved)

- **Bible, Locked Canon — Marrow entry** says it "escap[ed] into a crowd (S43)" and "the party doesn't know any of this yet"; **Active Threads** in the same note says Faerah killed it in S44 with the graft visible.
- **Bible, Act II Arc 3 / Yevelda tie-in** treats Izek as surfacing in Act II; agent memory and the Izek note place him at Greyfen Hollow now. Memory records this as a revision the DM deliberately deferred.
- **`Settlements/Duskferry.md`** History says "Not yet visited by the party"; S46 is set there.
- **S28** `date: 2024-01-11` sorts between S11 and S12 (its prep is 2025-01-11). **S33** `date: 2025-04-19` vs linked prep 2025-10-25.
- **`Helga Ruvak (COS)`** `age: 22` on a vampire spawn.
- **Fortunes of Ravenloft** list is duplicated in the bible and the party note.
- **Greyfen Hollow** General Notes holds a superseded 2026-09-05 design beside the 2026-11-13 revision; **Izek** likewise.
- **Greyfen Hollow** is described as near Duskferry but parented to the region.

---

## Questions (answers change the Phase 2 design)

1. **Website scope.** Is the player site (a) session recaps only, (b) recaps plus a wiki of met NPCs, visited places, and known quests, or (c) that plus player-contributed content? And is any hosting already decided? (b) needs field-level visibility on every entity type; (a) needs almost none.
2. **Fact-level knowledge.** Is entity-level reveal enough ("the party has met X; show X's `player_impression`"), or do you want individual facts tracked as known/unknown (e.g. "knows the Tallyman code name, not that it's Ostwin")? Fact-level is more accurate and costs you an approval per fact every session.
3. **New note types.** May I design Faction, Item (story/custom items only), and Deity as first-class notes with their own folders and tags? Factions I consider required; Item recommended; Deity optional (could link into `5. Mechanics/Deities` instead).
4. **Relationship storage and existing scripts.** Replacing the `"Name|type"` strings means rewriting `npcRelationships.js` and the Add/Remove Relationship templates (specified in the migration plan, executed by the cheaper model). Acceptable? And do you want the Relations plugin's graph, which would push the design toward one flat frontmatter key per relationship type?
5. **Legacy and environment scope.** (a) Are the 70 "(COS)" NPCs and S1–S39 in scope for backfill, or frozen as an archive with only a minimal safe export? (b) May the plan include a project `.claude/settings.json` and changes to how obsidian-second-brain/superpowers load in this vault? That file is outside the paths you authorized me to edit.
