---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 4
ritual: false
time: 1 Action
duration: up to 1 minute
components:
  - V
  - S
aliases:
  - Time Vortex
concentration: true
---
# Time Vortex
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

This spell destabilizes the flow of time, enabling you to create a vortex of temporal fluctuations that are visible as a spherical distortion with a 10-foot radius, centered on a point within range. Each creature in the area when you cast the spell must succeed on a Wisdom saving throw or be affected by the time vortex. While the spell lasts, a creature that enters the sphere or starts its turn inside the sphere must also succeed on a Wisdom saving throw or be affected. On a succesful save, it becomes immune to this casting of the spell.

An affected creature can't take reactions and rolls a `dice:d10|noform|noparens|avg` (`d10`) at the start of its turn to determine its behavior for that turn.

`dice: [[Time Vortex (KPDM).md#^effect]]`

| dice: d10 | Effect |
|-----------|--------|
| 1-2 | The creature is affected as if by a [[5. Mechanics/Spells/Slow.md\|slow]] spell until the start of its next turn. |
| 3-5 | The creature is [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] until the start of its next turn. |
| 6-8 | The creature's current initiative result is reduced by 5. The creature begins using this new initiative result in the next round. Multiple occurrences of this effect for the same creature are cumulative. |
| 9-10 | The creature's speed is halved (round up to the nearest 5-foot increment) until the start of its next turn. |
^effect

You can move the temporal vortex 10 feet each round as a bonus action. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]

*Source: Deep Magic p. 262*
