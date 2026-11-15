---
name: encounter-builder
description: Build and balance D&D 5e encounters for the current party — combat first, plus social and puzzle challenges — and choose or design treasure and magic items. Use for session encounters, random encounter tables, difficulty checks on a planned fight, turning an encounter brief into a stat-backed encounter, or awarding loot.
---

# Encounter building

## Before building

1. **The party, from frontmatter.** Resolve the active campaign's `party`, then read `3. The Party/Players/*.md` where `active: true` and `party` links to it: `level`, `classes`, `ac`, `hp`. If it looks stale or empty, ask.
2. **The site.** Read the location note: terrain, who is present, what already happened there. Honor an encounter brief's constraints and payload.
3. The campaign note sets tone and lethality.

## Balancing method

Use the method the DM names. Default: the **Lazy DM benchmark** — potentially deadly when total monster CR exceeds one quarter of total character levels (one half at 5th level and up). Alternatives on request: 2014 DMG XP thresholds, 2024 DMG XP budgets (never mix the two), or a homebrew method. Always show the math: budget, per-monster CR or XP, total, verdict.

## Monster selection

- From `5. Mechanics/Bestiary/` (use the `dnd-qa` skill's lookup). Cite each stat block by wikilink.
- Creatures must fit the site's climate, factions, and ecology. A new creature type in an area is a lore change: flag it.
- Check `4. World Almanac/Creatures/` for campaign-made creatures before the bestiary when the site belongs to a faction that has them.
- No fitting creature, or a named NPC without stats: the `statblock-creator` skill builds it; use its CR here.

## Design the fight

- **Action economy.** A lone boss needs legendary or lair actions, minions, or terrain. A horde needs a real threat vector.
- **Terrain.** Two to four live features: cover, elevation, chokepoints, hazards, interactables.
- **Tactics.** Opening moves, focus or spread, morale: when they flee, surrender, or bargain.
- **Payload.** Put the brief's clues and reveals where players will find them. Link the `facts` they deliver.
- Hidden elements go in a `> [!dm]` callout with the traces players could catch.
- State each conditional mechanic's starting state (a ward that is down plays very differently).
- Recompute the total against the threshold before presenting; a difficulty label the math contradicts is a bug.

## Delivery

Combat encounters in a vault note get an Initiative Tracker `encounter` block; several at once get an `encounter-table` block. Syntax: `references/initiative-tracker.md`. Encounters normally live in the prep note or the location note, not standalone files.

## Treasure

- **Published items:** search `5. Mechanics/Items/` by `rarity`, `tier`, `attunement`. Rough fit: uncommon in tiers 1–2, rare from 5th, very rare from 11th, legendary from 17th.
- **Check what the party holds:** story-item notes with a `holder`, then player `inventory`. Inventory lags play, so confirm picks with the DM before finalizing.
- **Custom or story-significant items** get a story-item note (via `world-builder` and `vault-note`): state rarity and attunement, benchmark against the closest published item, keep bonuses inside bounded accuracy, one memorable property, abuse cases in `secrets`.
- Tie items to the world: who made it, who wants it back.

## Social and puzzle encounters

Objective, obstacles, NPC motives from the vault, DCs with distinct success, partial, and failure outcomes (failure costs time, resources, or position; it never stalls play), and a clock when it helps.

## Working style

- Quick or random encounter: one compact finished pass. A 4–6 entry table is often better than a single fight.
- Setpieces: pitch the concept and math first.
- When theme and difficulty conflict, say so and offer two or three fixes (elite variants, environment, waves, a leader, a different objective).
