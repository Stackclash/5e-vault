---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/necromancy
classes:
  - Bard
  - Druid
  - Sorcerer
  - Warlock
  - Wizard
school: Necromancy
level: 5
damage:
  base: 8d10
  scaling:
    damage: 1d10
    level: 6
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
ritual: false
time: 1 Action
duration: Instantaneous
range: Touch
somatic: true
verbal: true
aliases:
  - Necrotic Leech
---
# Necrotic Leech
*5th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Instantaneous

You channel destructive energy through your touch. Make a melee spell attack against a creature within your reach. The target takes `dice:8d10|noform|noparens|avg` (`8d10`) necrotic damage and must succeed on a Constitution saving throw or have disadvantage on attack rolls, saving throws, and ability checks for a number of rounds equal to the spell slot you expended. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

This spell has no effect on constructs or undead.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the spell's damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 96*
