---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/9th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Wizard
school: Conjuration
level: 9
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 120 feet
aliases:
  - Black Hole
damage:
  base: 20d6
  scaling:
    damage: null
    level: null
  types:
    - cold
    - force
area:
  shape: sphere
  size: 15
---
# Black Hole
*9th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You create a tiny black hole at a point you can see within range. The black hole is a sphere with a 15-foot radius. All fires and flames within 40 feet of the black hole—magical or otherwise—are instantly extinguished. Each creature within 40 feet of the black hole when it appears must make a Strength saving throw. On a failed save, the creature takes `dice:20d6|noform|noparens|avg` (`20d6`) force damage and is pulled to within 5 feet of the black hole. On a successful save, the creature takes half as much damage and is knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] but isn't pulled toward the black hole.

A creature that's within 5 feet of the black hole at the start of its turn must make a successful Strength saving throw or take `dice:8d6|noform|noparens|avg` (`8d6`) force damage and have its speed reduced to 0 until the start of its next turn. A creature that's within 40 feet of the black hole (but not within 5 feet of it) at the end of its turn takes `dice:2d6|noform|noparens|avg` (`2d6`) cold damage. A creature reduced to 0 hit points while within 5 feet of the black hole dies immediately.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 309*
