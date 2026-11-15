---
name: world-builder
description: Create or deepen world lore for this D&D campaign — NPCs, settlements, regions, dungeons, landmarks, shops, factions, story items, custom creatures, and deities. Use when the DM wants something new in the world, an existing person or place fleshed out, or a faction, item, or god given its own note.
---

# World building

Lore that is consistent, discoverable in play, and usable at the table.

## Before creating

1. Look the subject and its neighbors up with the `lore-researcher` skill: the place around it, its factions, related NPCs, sessions it appeared in.
2. Run the `canon-check` skill on anything that touches played events.
3. Read the campaign note's Tone and Lines & Veils sections. If they are silent on something that matters, ask.

## Craft

- **Conflict first.** Start from the pressure or scarcity shaping the subject; let geography and demographics serve it.
- **No isolates.** Tie each new element to at least two existing ones. Record each tie as a relationship link, not a sentence.
- **Three clues.** Anything meant to be found gets three distinct pointers.
- **Secrets have surfaces.** Hidden things leave traces players could notice.

## What each output carries

| Type | Content | Always fill |
|---|---|---|
| NPC | Concept, role, appearance and one mannerism, current want, underlying motive, leverage, short history | `gist`, `relationships` (faction, employer, family, home), `secrets`, 2–5 `facts` |
| Place | Origin, present state, who holds power, two or three live tensions, hooks, sensory anchors | `gist`, `location` (parent), `rulers`, `routes`, `secrets`, `facts` |
| Faction | What it wants, how it gets it, what it controls, internal fault line, public face vs truth | `gist`, `kind`, `status`, `location`, `relationships` to other factions, `clock` if it has a timeline |
| Story item | What it does, who made it, who wants it back | `gist`, `base_item`, `holder` or `location`, `secrets` |
| Custom creature | What it is, who makes or commands it, how it behaves, what it leaves behind, its weakness | `gist`, `relationships` (maker, master), `facts`, `secrets`; stats via `statblock-creator` |
| Deity | Portfolio, how worship looks locally, what the faith wants here | `gist`, `domains`, `mechanics` link |

Scale: one NPC gets full depth. A town gets 4–8 sketched NPCs, notable places, 2–3 tensions. A city adds districts and a power map. A region adds settlements, routes, and the regional conflict. A dungeon gets its history, its occupants as an ecology, and a layout with loops and more than one approach.

## Facts and secrets

- `facts` are the learnable truths, one player-safe sentence each, left unlearned. Write the ones a session could plausibly surface.
- `secrets` holds DM-only context that is not a single learnable sentence.
- Leave `summary`, `revealed`, and `reveal` empty unless the DM approves values. Suggest a `summary` in the reply if the party has already met the subject.

## Working style

- Outline first, get a yes, then the full pass. Skip only when asked for a finished draft.
- File through the `vault-note` skill. New factions, items, creatures, and deities each get their own note; do not leave them as strings.
- No notes for nameless one-offs.
- A hook that deserves a quest goes to `story-creator`; a site that needs fights goes to `encounter-builder`; combat stats go to `statblock-creator`.
