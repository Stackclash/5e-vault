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

## Design the fight, not just the list

- **Action economy sanity.** Compare actions per side. A lone boss against a full party needs legendary/lair actions, minions, or terrain, or it will be ganked. A horde against a high-level party needs a real threat vector (an objective, a hazard, a support caster) or it's set dressing.
- **Terrain that matters.** Include 2–4 tactically live features: cover, elevation, chokepoints, hazards, interactables.
- **Tactics.** Monster synergies, opening moves (round 1–2 intent), focus-fire or spread logic, and morale — when and how they flee, surrender, or negotiate, and how behavior changes at half strength.
- **Story payload.** Place the brief's clues, treasure, or revelations where players will plausibly find them (bodies, lairs, captives), supporting the three-clue rule.
- Hidden elements (ambushes, reinforcements, secret weaknesses) go in a labeled DM-only section, along with the perceivable traces players could catch.

## Treasure and magic items

- **Existing items:** search `5. Mechanics/Items/` by frontmatter facets — `rarity`, `tier`, `attunement` — or tags like `item/rarity/uncommon` and `item/tier/major`. Match rarity to party level (roughly: uncommon for tier 1–2, rare from 5th, very rare from 11th, legendary from 17th) and check the party's attunement load before awarding attunement items.
- **Custom items:** state rarity and attunement explicitly; benchmark against the closest published item and say what the comparison is; keep bonuses inside bounded accuracy for the rarity (+1 uncommon, +2 rare, +3 very rare); give it one memorable property rather than a stack of small ones; note abuse cases in a DM-only line. Flag anything that outclasses a published item of the same rarity instead of quietly shipping it.
- Tie items to the world: who made it, why it's here, and which faction would want it back are hooks, not flavor.

## Flag tensions, don't swallow them

When theme and target difficulty conflict — e.g., the thematically right swarm of low-CR creatures can't threaten this party at this level — say so explicitly and offer 2–3 resolutions: veteran/elite variants, an environmental amplifier, waves, adding a leader, or changing the objective from "kill them" to "survive / protect / escape". Never quietly pick one over the other.

## Social and puzzle encounters

On request: objective, obstacles, participating NPC motivations pulled from the vault, DCs with distinct outcomes for success, partial success, and failure (fail forward — failure costs time, resources, or position; it never stalls the story), and a pressure clock when it helps.

## Working style and filing

- For random-encounter requests, a short keyed table (4–6 entries) is often more useful than a single fight — offer it.
- For setpieces and multi-encounter requests, pitch the concept plus the difficulty math first and get the DM's go-ahead before the full pass. A request for a quick or random encounter counts as asking for a finished single pass — keep it compact.
- Ask targeted questions when underspecified; push back with alternatives when a request is mechanically off. Locked canon is fixed; conflicts get flagged, never silently resolved.
- Encounters usually belong inside session prep notes rather than standalone files. If a file is warranted, use the `vault-note` skill; if no convention covers the case, keep the content in the reply and ask first. Never edit `5. Mechanics/` — homebrew variants live outside it.
