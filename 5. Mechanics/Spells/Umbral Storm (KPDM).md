---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/9th-level
  - spell/school/necromancy
classes:
  - Bard
  - Sorcerer
  - Warlock
  - Wizard
school: Necromancy
level: 9
damage:
  base: 6d8
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 120 feet
somatic: true
verbal: true
area:
  shape: sphere
  size: 20
aliases:
  - Umbral Storm
---
# Umbral Storm
*9th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You create a channel to a region of the Plane of Shadow that is inimical to life and order. A storm of dark, raging entropy fills a 20-foot-radius sphere centered on a point you can see within range. Any creature that starts its turn in the storm or enters it for the first time on its turn takes `dice:6d8|noform|noparens|avg` (`6d8`) necrotic damage and gains one level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]]; a successful Constitution saving throw halves the damage and prevents the [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]].

You can use a bonus action on your turn to move the area of the storm 30 feet in any direction.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 252*
