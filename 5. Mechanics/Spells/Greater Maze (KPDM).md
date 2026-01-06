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
duration: 'Concentration, up to 10 minutes'
range: 60 feet
aliases:
  - Greater Maze
damage:
  base: 4d6
  scaling:
    damage: null
    level: null
  types:
    - psychic
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Greater Maze
*9th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Concentration, up to 10 minutes

This spell functions as [[/5. Mechanics/Spells/Maze.md\|maze]], but the target must make a Dexterity saving throw each time it starts its turn in the maze. The target takes `dice:4d6|noform|noparens|avg` (`4d6`) psychic damage on a failed save, or half as much damage on a success.

Escaping this maze is especially difficult. To do so, the target must use an action to make a DC 20 Intelligence check. It escapes when it makes its second successful check.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 77*
