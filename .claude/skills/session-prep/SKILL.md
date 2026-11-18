---
name: session-prep
description: Prepare the next D&D session for this vault — review where things stand, propose a strong start, scenes, and secrets and clues, then assemble the prep note. Use when the DM asks to prep, plan, or outline a session, or to pick up unused material from a previous prep.
---

# Session prep

Prep is plan, not canon. Build it so it survives the players ignoring it.

## 1. Orient

- `z_Extra/index/state.md`, then the latest journal.
- The current arc and active quests: steps marked `skipped` are reusable material; check them before writing anything new.
- The previous prep note: scenes that never fired are still valid unless a step is `void`.
- The campaign note's Tone and Lines & Veils sections.
- The party: level from the latest journal's `party_level` (fallback: PC levels); location from `state.md` (derived from active PCs).
- Spotlight: the last three journals' `spotlight` (`state.md`). Propose a scene for any active PC missing from all three.
- Quests with a `deadline` near the in-world date.

## 2. Propose an outline, then stop for the DM

- **Strong start** — what is happening in the first five minutes.
- **Scenes** — situations, order-free, each with what the opposition wants.
- **Secrets and clues** — eight to ten, drawn from unlearned facts. Each is a `fact` on the entity it concerns: reuse an existing unlearned fact, or propose a new one. Each can surface in more than one scene.
- **Table rumors** — unlearned facts on the party's location and its neighbors, skipping any with `rumor: false`.
- **If they go sideways** — the two most likely detours and what the world does.

## 3. Fill gaps after approval

| Need | Skill |
|---|---|
| A new or deeper NPC, place, faction, item | `world-builder` |
| Hooks, branches, a quest | `story-creator` |
| Fights, loot | `encounter-builder`, `statblock-creator` |
| Anything touching played events | `canon-check` first |

New or expanded lore goes into the entity's own note. The prep note links to it.

## 4. Assemble the prep note

Created from the Session Prep template (`1. DM Toolkit/Session Prep/<Campaign>/<YYYY-MM-DD>.md`). Keep its headings: Resources, Details to Remember, Strong Start, Scenes, Secrets and Clues, Fantastic Locations, Important NPCs, Potential Monsters, Potential Treasure.

- Set `session_number` to the session it targets; link `journal` once that journal exists.
- **Fantastic Locations** draw on each place's `atmosphere`, `hazards`, and `climate` (for weather).
- **Secrets and Clues**: one line per fact, linking the entity, quoting the fact text.
- **Important NPCs**: link plus one line of voice or mannerism. No biographies.
- Encounters as Initiative Tracker blocks.
- A closing **Improvisation kit**: five unused names, two NPC wants, one complication, one piece of treasure. The table-assistant reads this first when asked to improvise.

## Rules

- The whole prep note is DM-only.
- Any field value the prep proposes (an NPC `condition`, a location `status`) comes from `Configuration.enums`.
- Do not mark anything `learned`, `revealed`, or `played` in prep. That happens in the wrap.
- Keep the note to what will be used at the table; link out for the rest.
