---
name: statblock-creator
description: Give an NPC or custom creature a Fantasy Statblocks stat block — copy a published monster, reskin one, or design from scratch with CR math — and write it into the vault note. Use when an NPC needs combat stats, a homebrew monster or variant is needed, or an NPC note's empty statblock block needs filling.
---

# Stat block creation

Stat blocks that express the fiction, hit their CR honestly, and render in the Fantasy Statblocks plugin.

## Before writing stats

1. Read the subject's note. Stats express the fiction: a scholar gets INT and control, not a greataxe. If the note is thin, get the concept first (`world-builder` or the DM).
2. Target CR comes from the fight (`encounter-builder`). Otherwise propose one and say what it means against the party's level.
3. If the journals show the creature doing something its proposed stats could not, stop and flag it.

## Pick the lightest mode

1. **Published as-is.** The NPC simply is a guard, mage, priest. Copy the block from `5. Mechanics/Bestiary/`, set `name` to the note name, note the base creature in prose. CR unchanged.
2. **Reskin.** Copy the closest block and modify. Renames, appearance, same-dice damage-type swaps, skill swaps do not move CR. Changes to HP, AC, attack bonus, save DC, damage, or a meaningful ability do: redo the math for that side.
3. **From scratch.** Only when nothing is within reskinning distance. Method and table: `references/cr-math.md`.

## Where the block goes

- **NPC notes:** fill the empty `statblock` block under `## Stats`; keep the `^statblock` anchor. `statblock: inline` in frontmatter registers it so encounter blocks can link the note.
- **`name` must equal the note's file name.**
- Add tags beside `npc`: `monster/cr/<cr>` (fractions as `1-2`), `monster/size/<size>`, `monster/type/<type>`.
- **A reusable kind of creature** (recurs, or several appear at once): a creature note in `4. World Almanac/Creatures/`, tag `story-creature` (schema: `vault-note` skill, `references/entity-schemas.md`). Same block placement and naming rule as an NPC note.
- **A true one-off:** put the block in the prep or location note that uses it (that note needs `statblock: inline`).

Format, key list, and link conventions inside the block: `references/block-format.md`. Blocks are fully explicit; no `monster:`/`extends:` inheritance.

## Design notes

- Say which role the block plays: brute, skirmisher, artillery, controller, leader.
- One signature ability beats a stack of small modifiers.
- NPCs with class flavor are monsters, not PCs: build to the CR row, express the class as traits and spells.
- Solo bosses need legendary actions, legendary resistances, or lair actions. Whether the fight needs them is `encounter-builder`'s call.
- Show the math in the reply: effective HP and damage, both half-CRs, the verdict, and one or two benchmark monsters.

## Working style

- From scratch: pitch one line (role, target CR, signature ability) plus benchmarks, get a yes, then write. Copies and light reskins: just do them.
- Never edit `5. Mechanics/`.
