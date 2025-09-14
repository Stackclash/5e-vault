---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/xge
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Evocation
level: 2
damage:
  base: 3d8
  scaling:
    damage: 1d8
    level: 3
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
ritual: false
time: 1 Action
duration: Instantaneous
range: 30 feet
somatic: true
verbal: true
material: a red dragon's scale
aliases:
  - Aganazzar's Scorcher
---
# Aganazzar's Scorcher
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S, M (a red dragon's scale)
- **Duration:** Instantaneous

A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes `dice:3d8|noform|noparens|avg` (`3d8`) fire damage on a failed save, or half as much damage on a successful one.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 150*
