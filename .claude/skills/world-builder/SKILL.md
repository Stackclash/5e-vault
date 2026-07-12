---
name: world-builder
description: Create or expand campaign-world lore for the D&D 5e campaign in this vault — NPCs, towns, cities, regions, dungeons, landmarks, and factions. Use whenever the DM wants new lore at any scope, existing lore deepened, or a location or NPC fleshed out. Reads existing vault notes first, keeps locked canon fixed, and separates DM-only secrets from player-known information.
---

# World Building

Produce lore that is internally consistent, discoverable in play, and useful at the table. The vault is the single source of truth.

## Before creating anything

1. Resolve the active world, party, and campaign from `1. DM Toolkit/Configuration.md` frontmatter. Follow the campaign bible (the active campaign note) for tone, power level, and lines & veils. If the bible is silent on something that matters here, ask.
2. Search the vault for existing notes on the subject **and its neighbors**: the surrounding region, connected factions, related NPCs, prior events. For anything beyond a quick check, use the `lore-researcher` skill's discovery methods (world-hierarchy walk, backlink grep, session-journal sweep).
3. If the request would contradict established material, stop and flag the conflict with options. Never silently resolve it. Anything the DM has finalized — names, deaths, treaties, outcomes — is locked canon unless the DM explicitly reopens it.

## Craft principles

- **Conflict first.** Start from the pressure, need, or scarcity shaping the subject; let geography, layout, and demographics serve that conflict rather than leading with them.
- **No isolates.** Tie every new element to at least two existing elements (a faction, an NPC, an event, a place). If no tie exists, propose one and flag it as new lore.
- **Three-clue rule.** Anything meant to be discovered — a secret, a hidden site, a true allegiance — gets at least three distinct, findable pointers to it.
- **Secrets have surfaces.** Hidden things leave visible traces (rumors, scars, ledger gaps) that players could notice.

## What each output includes

**NPCs:** a one-line concept; faction ties and role; appearance plus one memorable mannerism; likes and dislikes; current goal (what they want now); underlying motivation (why); a brief backstory; leverage (what they can offer or threaten). DM-only: secrets, hidden allegiances, and what they do under pressure.

**Locations (settlements, landmarks, dungeons):** origin and backstory; present state and who holds power; two or three live tensions; hooks the DM can pull; a few sensory anchors for narration. DM-only: hidden history and what is really going on.

**Scope scaling:** a single NPC gets full depth. A town: 4–8 sketched key NPCs, notable places, 2–3 tensions. A city: districts, factions, and a power map. A region: settlements, routes, biome logic, and the regional conflict. A dungeon: its history, why it still stands or who looted it, the current occupants as an ecology (who eats, fears, or trades with whom), and a layout with loops, multiple approaches, and landmark spaces — never a corridor railroad.

At every scope, tie the details together: the same conflict should echo from the region down to street level.

## Boundaries and handoffs

- Keep DM-only material in an explicitly labeled DM-only section, never blended into player-facing text.
- When a hook deserves quest development, note it and continue with the `story-creator` skill; when a site wants encounters, hand its details to the `encounter-builder` skill. Get the DM's go-ahead before expanding scope.
- World-builder does no stat math. When an NPC needs combat stats — a fight is plausible, or the DM asks — load the `statblock-creator` skill to copy, reskin, or design the stat block from the NPC's established fiction.

## Working style and filing

- Outline first: deliver a short skeleton, get the DM's go-ahead or edits, then do the full pass. Skip this only when the DM explicitly asks for a finished draft.
- Ask targeted questions when the request is underspecified rather than guessing.
- Push back like an expert collaborator when something seems inconsistent with established lore or won't work at the table; offer alternatives.
- File notes via the `vault-note` skill using the frontmatter schemas in CLAUDE.md. Remember: location-type notes carry the `location` co-tag; the `location` frontmatter field is a wikilink to the immediate parent in the World → Region → Settlement → Place of Interest hierarchy; NPC `partyRelationships` and quest state are maps keyed by party note name. If no convention covers the case, keep the content in the reply and ask before creating files.
