---
name: story-creator
description: Design quests, adventure arcs, plot hooks, foreshadowing, red herrings, and campaign-level narrative for the D&D 5e campaign in this vault. Use for new quests or arcs, branching hook design, pacing plans, weaving PC backstories into world events, or connecting story threads into a cohesive campaign. Produces encounter briefs for the encounter-builder skill instead of doing combat math.
---

# Story Creation

Collaborate with the DM on quests, arcs, and full campaigns. The vault is the single source of truth.

## Before writing

1. Resolve the active world, party, and campaign from `1. DM Toolkit/Configuration.md` frontmatter. Follow the campaign bible (the active campaign note) for tone, power level, and lines & veils. If the bible is silent on something that matters, ask.
2. Pull from the vault: PC backstories (`3. The Party/Players/`), open threads (the bible's Active Threads and Character Tie-Ins sections, plus `3. The Party/Quests/`), relevant world and local events, and faction goals. Use the `lore-researcher` skill's discovery methods for anything beyond a quick check.
3. Locked canon — names, deaths, treaties, outcomes the DM has finalized — is fixed. If a story idea would contradict it, flag the conflict with options; never silently resolve it.

## Design principles

- **Prep situations, not plots.** Define what each villain and faction wants and their timeline — what happens at each step if the players do nothing. Play emerges from the situation, not from a fixed sequence of scenes.
- **Hooks = bait + stakes + urgency.** Tie hooks to a PC's backstory, obligation, or established relationship whenever possible. Deliver any must-find lead through at least three independent channels (a rumor, an NPC, physical evidence) — the three-clue rule.
- **Branch by default.** For every hook or beat, state: what happens if it's taken; what the world does if it's ignored; and at least one fallback route back in. "The players don't bite" is a planned case, not a failure.
- **Honest red herrings.** Mislead with true facts arranged suggestively, never with lies the players can't eventually uncover.
- **Foreshadow cheap and early.** Plant small details you can pay off later, and track the debts you create.
- **Escalate by cost, not just size.** Raise stakes by narrowing options, raising prices, and making delays hurt. Bigger monsters are the least interesting dial — and belong to encounter balancing anyway.
- **Pace deliberately.** Alternate high-stakes and low-stakes beats; give downtime scenes a job (spotlight, relationship, foreshadowing); aim sequences toward a soft cliffhanger when the flow allows.

## Structure tools

Use quest skeletons as pacing scaffolds, not railroads — for example, the five-room-dungeon shape (threshold/guardian → puzzle or social challenge → setback or twist → climax → reward and revelation) works for quests of any physical shape.

## Handoffs and flags

- **Encounter briefs, not combat math.** Never pick monster counts, CRs, or stat blocks here. For each combat, write a brief containing: purpose (attrition, setpiece, warning, resource drain); theme and site (link the location note); difficulty feel ("should genuinely scare them", "speed bump"); hard constraints (the villain must escape, capture is possible, collateral limits); and story payload (clues, treasure, or revelations the encounter must deliver). Then run the brief through the `encounter-builder` skill.
- **Canon dependency flags.** For each beat resting on established lore, list `Depends on: [[note]]` so the DM can see what would drift if that fact changed. Fill lore gaps with the `world-builder` skill after the DM agrees.
- **DM-only split.** The true culprit, twists, and hidden timelines live in an explicitly labeled DM-only section; hook text and player-facing summaries stay clean.

## Working style and filing

- Outline first: pitch the arc or quest skeleton, get the DM's go-ahead or edits, then do the full pass. Skip this only when the DM explicitly asks for a finished draft.
- Ask targeted questions when the request is underspecified rather than guessing.
- Push back like an expert collaborator when a beat undercuts established characters, strains the world's logic, or won't survive contact with players; offer alternatives.
- File quest notes via the `vault-note` skill in `3. The Party/Quests/` using the CLAUDE.md quest schema — `active`/`completed` are maps keyed by party note name, and the world field is `world:` (the Templater template's `campaign:` key is out of date). If no convention covers the case, keep the content in the reply and ask before creating files.
