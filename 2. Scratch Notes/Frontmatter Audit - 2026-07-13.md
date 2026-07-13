---
obsidianUIMode: preview
---
# Frontmatter Audit — 2026-07-13

Full-vault pass ahead of the player site launch: which notes are missing frontmatter or images, what got fixed automatically this session, and what still needs a DM decision. Node.js wasn't available in this environment, so the audit ran via targeted `Grep`/PowerShell passes rather than a single script — solid for counting gaps, but treat the automated fills below as high-confidence, not infallible, and spot-check anything you publish.

## Headline finding: the session-journal reveal ledger was empty

All **44** session journals (`S0`–`S43`, [[Session Journals]]) were missing `session_number`, `party_present`, `npcs`, `quests`, and `items` — the fields CLAUDE.md calls out as the vault's reveal ledger. `locations` was the exception: 43/44 already had it filled by hand, so it was left alone.

**Fixed:** all 44 now have `session_number` (from the filename), plus `party_present` and `npcs` populated by scanning each journal's own summary/body text for wikilinks and name mentions against the real player and NPC rosters. `quests` and `items` were added as empty arrays (schema-complete, matching the Templater default) — no reliable way to auto-detect quest or item links from prose, so those still need a manual pass if you want them populated.

**Caveat:** the npcs/party_present fill is a name-matching heuristic (word-boundary match against every NPC/player display name), not a semantic read of the session. It's high-precision (proper nouns like "Ezmerelda Davenir" rarely collide) but not certified — worth a skim, especially on longer sessions.

## NPCs (`4. World Almanac/NPCs/` — 85 notes)

| Field | Before | Fixed this session | Still open |
|---|---|---|---|
| `images` | 65/85 no real portrait (4 empty, 61 placeholder-only) | — | 65 |
| `location` | 3 empty | 2 ([[Elvir Martikov]], [[Stefania Martikov]] → The Wizard of Wines, sourced from the CoS book's own text about Davian's sons) | 1 ([[Mab]] — a Feywild archfey; no vault location note fits her, needs a DM call rather than a fix) |
| `race` | 43 empty | 16 (pulled from each note's own embedded statblock `subtype`: 15× Human, 1× Savid → Elf) | 27 |

**Images** are the single biggest gap for a player-facing site: 76% of NPCs still show the grey placeholder. This can't be auto-filled — it needs either art assets dropped into `z_Assets`/`4. World Almanac/NPCs/img/` or portraits generated, then wired into each note's `images:` list.

**Race remainder (27):** most are either creature-type CoS NPCs whose statblock only gives a monster `type` (undead, construct, fiend, celestial, beast) rather than a player-style race, or `mongrelfolk`/`devil` subtypes with no corresponding note in `5. Mechanics/Races/` to link to. A few hand-authored NPCs ([[Archmortician Valeris Thorne]], [[Archwarden Selvara Kain]], [[Magister Kaelor Stormbrand]], [[Professor Alindra Quicksilver]], [[Seer Ithildra Moonveil]], [[Mistress Lyssandra Veil]]) have no statblock at all to pull from — these need the DM's own call.

**Not auto-fillable, flagged for DM attention:** `personality`, `ideal`, `bond`, `flaw`, `goals`, `likes`, `dislikes`, `occupation`, `groups`, `religions`, `pronounced`, `aliases` are blank on most of the ~67 CoS-imported minor NPCs. That's expected — the sourcebook doesn't characterize background NPCs in that much depth — but it means most NPC pages will look sparse below the infobox on a public site. Worth triaging by "will a player actually visit this NPC's page" rather than trying to fill all 67.

**Condition tracking looks healthy** — `Strahd Von Zarovich (COS)`, `Rahadin (COS)`, `Kiril Stoyanovich (COS)`, `Sir Godfrey Gwilym (COS)`, and `Baba Lysagas Creeping Hut (COS)` are already correctly marked `dead`, matching the campaign's own history. No changes made here.

**Housekeeping, not touched:** `4. World Almanac/NPCs/Npc.md` is a leftover ttrpg-convert-cli compendium index (links to generic 5etools NPCs like "Alistair Rook", "Alustriel Silverhand" — not part of this campaign). Looks like it slipped past `process_5etools_files.js`'s filtering; probably safe to delete, but flagging rather than removing it myself.

## Locations (`4. World Almanac/Regions`, `/Settlements`, `/Places of Interest` — 25 notes)

| Field | Gap | Fixed | Still open |
|---|---|---|---|
| `images` | 21/25 placeholder-only | — | 21 |
| `population` | 22/25 empty (mostly POIs, where it may not apply) | — | 22 |
| `terrain` | 24/25 empty (only [[Bruokdon]] has it) | — | 24 |
| `rulers` | 6/25 empty | 1 ([[Vallaki]] → [[Baron Vargas Vallakovich (COS)]], both still alive per their `condition` fields) | 5 |
| `summary` | 1 literal placeholder | — | [[Vallaki]]'s summary is still the literal text "Hello" |

The other 5 empty `rulers` are [[Barovia]] (region) and [[Castle Ravenloft]] — both would canonically be Strahd, but he's dead and the party has left the region, so "current ruler" is genuinely unresolved in-story rather than a data-entry gap. Left for the DM rather than guessed. [[Van Richten's Tower]], [[The Wizard of Wines]], and [[The Amber Temple]] don't really have "rulers" in the settlement sense — probably fine to stay blank.

`population`/`terrain` being this sparse (essentially only Bruokdon has terrain filled) is a worldbuilding gap more than a data-entry one — not something to auto-fill without inventing lore.

## Shops (`4. World Almanac/Shops/` — 5 notes)

Spot-checked individually (the multi-line list format made blanket regex checks unreliable):
- [[Golden Hammer]]: `owners`, `staff`, `resources` all empty — generic blacksmith, may be intentional.
- [[Blinsky Toys]]: `staff` and `items` empty; owner ([[Gadof Blinsky (COS)]]) is set.
- [[Bildrath's Mercantile]], [[Blue Water Inn]], [[Blood of the Vine Tavern]]: reasonably filled ([[Blue Water Inn]] has both owners and staff; [[Blood of the Vine Tavern]] wasn't individually re-verified this pass, worth a quick look).
- `items:` (stock) is empty on 4/5 shops — this is likely just "inventory not generated yet" via the shop's own Generate Inventory button, not a frontmatter defect.

## Players, Party, Quests, World, Campaign

- **Players** (7 notes, `3. The Party/Players/`): none have `tagline` set — it's a one-line DM/player-authored blurb per CLAUDE.md, and it's simply never been written for anyone yet. Since it's the one field the D&D Beyond sync deliberately leaves alone, it needs a person, not a script.
- **Party** ([[Midnight Covenant]]): all travel/encounter fields populated, nothing missing.
- **Quests** (2 notes): [[The Well of Many Worlds]] is fully fleshed out (description, steps, npcs). [[The Ones Who Were Forgotten]] wasn't individually re-verified this pass — worth a quick look before publishing.
- **World** ([[Eldoria]]): `economic_scale` and `calendar` both set, nothing missing.
- **Campaign** ([[The Hunt for Vecna]]): `public_premise` is well-developed (premise, tone, power level, lines & veils all written out).

## Suggested priority for the player site

1. **Images first** — it's the single largest, most visible gap (76% of NPCs, 84% of locations still show the placeholder), and the one thing a visiting player will notice immediately.
2. **Vallaki's summary** — replace the literal "Hello" placeholder before anything public links to that page.
3. **Spot-check the new session-journal `npcs`/`party_present` fills** — skim a handful, especially the busier sessions (S6, S16, S43), to confirm the name-matching didn't over- or under-include anyone.
4. Everything else (race remainder, personality/goals backlog, population/terrain, shop staffing, taglines) is backlog — real, but not blocking a launch.

This note lives in `2. Scratch Notes/` since it's a vault-maintenance report rather than campaign content — move it into `1. DM Toolkit/Knowledge/` or elsewhere if you'd rather it live there permanently.
