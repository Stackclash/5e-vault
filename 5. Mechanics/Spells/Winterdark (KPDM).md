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
  - spell/level/6th-level
  - spell/school/transmutation
classes:
  - Bard
  - Druid
  - Sorcerer
  - Warlock
  - Wizard
school: Transmutation
level: 6
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - cold
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 hour'
range: 120 feet
somatic: true
verbal: true
area:
  shape: sphere
  size: 40
aliases:
  - Winterdark
---
# Winterdark
*6th-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 hour

This spell invokes the deepest part of night on the winter solstice. You target a 40-foot-radius, 60-foot-high cylinder centered on a point within range, which is plunged into darkness and unbearable cold. Each creature in the area when you cast the spell and at the start of its turn must make a successful Constitution saving throw or take `dice:1d6|noform|noparens|avg` (`1d6`) cold damage and gain one level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]]. Creatures immune to cold damage are also immune to the [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]] effect, as are creatures wearing cold weather gear or otherwise adapted for a cold environment.

As a bonus action, you can move the center of the effect 20 feet.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 276*
