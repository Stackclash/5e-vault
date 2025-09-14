---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/druid
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/cantrip
  - spell/optfeature/pact-of-the-tome
  - spell/school/evocation
  - spell/subclass/arcane-trickster
classes:
  - Bard
  - Druid
  - Rogue (Arcane Trickster)
  - Warlock
  - Wizard
school: Evocation
level: 0
damage:
  base: 1d8
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Charisma
  succeeds: see spell description
ritual: false
time: 1 Action
duration: Instantaneous
range: 60 feet
somatic: true
verbal: true
area:
  shape: cube
  size: 5
aliases:
  - Starburst
---
# Starburst
*cantrip, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Instantaneous

You cause a mote of starlight to appear and explode in a 5-foot cube you can see within range. If a creature is in the cube, it must succeed on a Charisma saving throw or take `dice:1d8|noform|noparens|avg` (`1d8`) radiant damage.

This spell's damage increases to `dice:2d8|noform|noparens|avg` (`2d8`) when you reach 5th level, `dice:3d8|noform|noparens|avg` (`3d8`) when you reach 11th level, and `dice:4d8|noform|noparens|avg` (`4d8`) when you reach 17th level.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 226*
