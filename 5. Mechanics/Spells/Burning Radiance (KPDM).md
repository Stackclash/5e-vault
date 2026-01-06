---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Sorcerer
  - Wizard
school: Evocation
level: 6
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Self (60-foot Line)
aliases:
  - Burning Radiance
damage:
  base: 10d8
  scaling:
    damage: null
    level: null
  types:
    - fire
    - radiant
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: line
  size: 60
---
# Burning Radiance
*6th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (60-foot Line)
- **Components:** V, S
- **Duration:** Instantaneous

A line of light 60 feet long and 5 feet wide emanates from you in a direction of your choice. Each creature in the line must make a Dexterity saving throw. On a failed save, a creature takes `dice:10d8|noform|noparens|avg` (`10d8`) radiant damage and catches fire; until someone takes an action to douse the fire, the creature takes `dice:1d10|noform|noparens|avg` (`1d10`) fire damage at the start of each of its turns. A successful saving throw halves the damage and prevents a creature from catching fire.

The spell ignites flammable objects in the area that aren't being worn or carried.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 224*
