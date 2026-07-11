---
name: encounter-builder
description: Build and balance D&D 5e encounters for the current party — combat first, plus social and puzzle challenges — and pick or design balanced treasure and magic item rewards. Use for session encounters, random encounters for a location, difficulty checks on planned fights, turning story encounter briefs into stat-backed encounters, or awarding loot.
---

# Encounter Building

Build encounters that are correctly balanced for the actual party, make sense in the world, and are tactically interesting to run. The vault is the single source of truth.

## Before building

1. **Party first — resolve it from player frontmatter, never from Dataview.** The party note's roster is a Dataview query and does not render in raw markdown. Instead: resolve `active_party` from `1. DM Toolkit/Configuration.md`, then Glob `3. The Party/Players/*.md` and keep files whose frontmatter has `active: true` and a `party` wikilink to that party. Read `level`, `classes`, `ac`, `hp`, and notable abilities from those notes. If the result looks stale or empty, ask — never balance against a guessed party.
2. Read the vault note for the encounter site: terrain, climate, faction presence, ecology, and what has already happened there. If working from a story-creator encounter brief, honor its constraints and story payload, and still verify site details against the vault.
3. The campaign bible (active campaign note) sets tone and lethality expectations.

## Balancing method — the DM's choice

If the request, CLAUDE.md, or an earlier instruction states a method, use it; never silently substitute another. The party note's infobox uses the Lazy DM benchmark — that is the default unless the DM says otherwise. The menu:

- Lazy DM (Sly Flourish) benchmark: potentially deadly when summed monster CR exceeds ¼ of summed character levels (½ at 5th level and up)
- 2014 DMG XP thresholds with encounter multipliers
- 2024 DMG XP budgets (per-character budgets, no multipliers — never mix its numbers with the 2014 tables)
- Action-economy / adjusted-difficulty judgment
- A homebrew method the DM specifies

Whatever the method, show the math: budget, per-monster XP or CR, adjusted totals, and the verdict.

## Monster selection

- Source stat blocks from `5. Mechanics/Bestiary/` (organized by creature type). Facet search via frontmatter and tags: `cr:`, `environments:`, `type:`, `size:`, or tags like `monster/cr/5` and `monster/environment/urban`. Cite each stat block's vault note with a wikilink.
- Creatures must make sense at the site: climate and terrain, faction presence, food and lair logic, and the ecology already established in the vault. Prefer creatures the region's lore already supports; introducing a new creature type to an area is a lore change — flag it.
- When no bestiary creature fits — a named NPC combatant without stats, or a homebrew creature/variant the fight needs — load the `statblock-creator` skill to build the full stat block with CR math, then use the resulting CR in the balance math here.

## Design the fight, not just the list

- **Action economy sanity.** Compare actions per side. A lone boss against a full party needs legendary/lair actions, minions, or terrain, or it will be ganked. A horde against a high-level party needs a real threat vector (an objective, a hazard, a support caster) or it's set dressing.
- **Terrain that matters.** Include 2–4 tactically live features: cover, elevation, chokepoints, hazards, interactables.
- **Tactics.** Monster synergies, opening moves (round 1–2 intent), focus-fire or spread logic, and morale — when and how they flee, surrender, or negotiate, and how behavior changes at half strength.
- **Story payload.** Place the brief's clues, treasure, or revelations where players will plausibly find them (bodies, lairs, captives), supporting the three-clue rule.
- Hidden elements (ambushes, reinforcements, secret weaknesses) go in a labeled DM-only section, along with the perceivable traces players could catch.

## Deliver combat encounters as Initiative Tracker blocks

Every combat encounter written into a vault note gets an `encounter` code block (Initiative Tracker plugin) so it can be launched at the table. The prose (tactics, terrain, DM-only sections) stays alongside the block — the block is the roster, not the write-up.

````yaml
```encounter
name: Yester Hill
creatures:
  - 3: [[Giant Spider]]
  - 1: [[Conjurer Wizard (MPMM)]]
---
name: Second Wave
creatures:
  - 2: [[Needle Blight]]
```
````

- **Creature entries are wikilinks to `5. Mechanics/Bestiary/` notes** (`- 3: [[Giant Spider]]`) — Fantasy Statblocks supplies HP, AC, initiative, and XP from the linked stat block. This is the vault convention; it also satisfies the "cite each stat block" rule.
- Creature not in the bestiary: for anything beyond a quick HP/AC tweak, build it a real stat block via the `statblock-creator` skill — a note with `statblock: inline` registers in the bestiary and can then be wikilinked like any other creature. For simple tweaks, pass stats inline as `Name, hp, ac, mod, xp` (all after the name optional), or the expanded form:
  ```yaml
  - 2:
      creature: Hobgoblin
      name: Elite Guard
      hp: 18
      ac: 15
  ```
- **Display names** distinguish identical creatures: `[[Hobgoblin, Bob]]` renders a Hobgoblin named Bob. Names containing a comma need quotes: `[["Rat, Giant"]]`.
- **Flags** append after an entry: `, ally` (fights with the party), `, friendly`, `, hidden` (concealed in the tracker — use for the DM-only ambush/reinforcement elements).
- **Dice quantities** (`- 1d5: [[Twig Blight]]`) give a re-rollable random count — good for swarm padding and random encounters.
- Multiple encounters in one block are separated by `---` lines; each takes its own `name:`.
- Optional block parameters: `party: <party name>` / `players: false` (or a name list) to control which PCs load, `rollHP: true` to roll HP from hit dice.

### Encounter tables

When delivering several encounters at once — a random-encounter table, a dungeon's keyed fights, a session's planned encounters — offer an `encounter-table` block instead of separate `encounter` blocks. Same syntax and parameters, encounters separated by `---`; each renders as a table row showing the name and creature list, with a difficulty rating against the loaded party, and clicking the name launches it in the tracker.

````yaml
```encounter-table
name: Goblin Ambush
creatures:
  - 1: [[Goblin]]
  - 2: [[Hobgoblin]]

---

name: Undead Foes
creatures:
  - 2: [[Skeleton]]
  - 1d4: [[Zombie]]
```
````

## Treasure and magic items

- **Existing items:** search `5. Mechanics/Items/` by frontmatter facets — `rarity`, `tier`, `attunement` — or tags like `item/rarity/uncommon` and `item/tier/major`. Match rarity to party level (roughly: uncommon for tier 1–2, rare from 5th, very rare from 11th, legendary from 17th) and check the party's attunement load before awarding attunement items.
- **Custom items:** state rarity and attunement explicitly; benchmark against the closest published item and say what the comparison is; keep bonuses inside bounded accuracy for the rarity (+1 uncommon, +2 rare, +3 very rare); give it one memorable property rather than a stack of small ones; note abuse cases in a DM-only line. Flag anything that outclasses a published item of the same rarity instead of quietly shipping it.
- Tie items to the world: who made it, why it's here, and which faction would want it back are hooks, not flavor.

## Flag tensions, don't swallow them

When theme and target difficulty conflict — e.g., the thematically right swarm of low-CR creatures can't threaten this party at this level — say so explicitly and offer 2–3 resolutions: veteran/elite variants, an environmental amplifier, waves, adding a leader, or changing the objective from "kill them" to "survive / protect / escape". Never quietly pick one over the other.

## Social and puzzle encounters

On request: objective, obstacles, participating NPC motivations pulled from the vault, DCs with distinct outcomes for success, partial success, and failure (fail forward — failure costs time, resources, or position; it never stalls the story), and a pressure clock when it helps.

## Working style and filing

- For random-encounter requests, a short keyed table (4–6 entries) is often more useful than a single fight — offer it, delivered as an `encounter-table` block.
- For setpieces and multi-encounter requests, pitch the concept plus the difficulty math first and get the DM's go-ahead before the full pass. A request for a quick or random encounter counts as asking for a finished single pass — keep it compact.
- Ask targeted questions when underspecified; push back with alternatives when a request is mechanically off. Locked canon is fixed; conflicts get flagged, never silently resolved.
- Encounters usually belong inside session prep notes rather than standalone files. If a file is warranted, use the `vault-note` skill; if no convention covers the case, keep the content in the reply and ask first. Never edit `5. Mechanics/` — homebrew variants live outside it.
