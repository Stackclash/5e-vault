---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/illusion
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Wizard
school: Illusion
level: 5
ritual: false
components: 'V, S, M (a dead mouse)'
verbal: true
somatic: true
material: true
material_desc: a dead mouse
time: 1 Action
duration: 1 round
range: 60 feet
aliases:
  - Labyrinthine Howl
damage:
  base: 7d8
  scaling:
    damage: 2d8
    level: 6
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Labyrinthine Howl
*5th-level, Illusion*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a dead mouse)
- **Duration:** 1 round

You let loose the howl of a ravenous beast, causing each enemy within range that can hear you to make a Wisdom saving throw. On a failed save, a creature believes it has been transported into a labyrinth and is under attack by savage beasts. An affected creature must choose either to face the beasts or to curl into a ball for protection. A creature that faces the beasts takes `dice:7d8|noform|noparens|avg` (`7d8`) psychic damage, and then the spell ends on it. A creature that curls into a ball falls [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] and is [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] until the end of your next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:2d8|noform|noparens|avg|text(2d8)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 88*
