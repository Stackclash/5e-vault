---
name: story-creator
description: Design quests, hooks, branches, foreshadowing, red herrings, and reveals for this D&D campaign, and weave PC backstories into them. Use for a new quest or thread, hook design, a mystery's clue structure, or turning a world-building seed into playable story. Produces encounter briefs instead of combat math. For act and arc structure or adjusting the plan after play, use campaign-planner.
---

# Story creation

## Before writing

1. Pull context with the `lore-researcher` skill: open quests, the current arc, PC threads, faction goals.
2. Run the `canon-check` skill on anything touching played events.
3. Follow the campaign note's Tone and Lines & Veils.

## Design principles

- **Situations, not plots.** State what each faction wants and what it does at each step if the players do nothing.
- **Hooks = bait + stakes + urgency**, tied to a PC's backstory, obligation, or relationship where possible.
- **Three clues.** Every must-find lead through three independent channels.
- **Branch by default.** For each beat: what happens if taken, what the world does if ignored, one fallback route back in.
- **Honest red herrings.** Mislead with true facts arranged suggestively.
- **Foreshadow cheap and early**, and list the debts you create.
- **Escalate by cost**: narrower options, higher prices, delays that hurt.
- **Pace.** Alternate high and low stakes; give downtime a job.

## What a quest note carries

Schema: `vault-note` skill, `references/campaign-schemas.md`.

- `kind` (from `Configuration.enums.quest_kinds`) and `parent` (its arc). Step `status` values come from `Configuration.enums.step_statuses`.
- `gist`; `description` (DM planning); `summary` left empty for the DM.
- `stakes` (what is lost if it fails), `reward`, and `deadline` (in-world date or event) when the quest has one. These are plan, not canon.
- `steps`: situations in likely order, each `status: planned`.
- Links: `giver`, `npcs`, `locations`, `items`, `factions`, `pcs`.
- **Reveals as facts.** Each truth the quest can surface is a `fact` on the entity it concerns (the culprit's note, the site's note), unlearned. The quest `description` points to them. This is what lets the wrap ask which landed. A truth only one source could know gets `rumor: false`.
- The true culprit, the twist, hidden timelines: facts where learnable, otherwise `## DM Notes` on the quest. There is no `secrets` field.

## Encounter brief

Five lines, handed to the `encounter-builder` skill:

```
Purpose: attrition | setpiece | warning | resource drain
Site: [[location note]]
Feel: e.g. "should genuinely scare them"
Constraints: e.g. the villain must escape; capture is possible
Payload: clues, treasure, or reveals the fight must deliver (link the facts)
```

Never pick monsters, counts, or CRs here.

## Working style

- Outline first, get a yes, then the full pass.
- Mark each beat that rests on established lore: `Depends on: [[note]]`.
- New NPCs, places, factions, and items go to their own notes through `world-builder`; the quest links to them.
- File through the `vault-note` skill.
