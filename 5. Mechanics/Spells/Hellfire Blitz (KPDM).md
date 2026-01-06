---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/paladin
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/level/3rd-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Paladin
  - Sorcerer
  - Warlock
school: Evocation
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 30 feet
aliases:
  - Hellfire Blitz
damage:
  base: 6d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Hellfire Blitz
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S
- **Duration:** Instantaneous

Upon casting this spell, you assume a flaming spectral form until the end of your turn. You immediately move up to 40 feet in a straight line. You can move through spaces occupied by other creatures, but you must end your turn in an unoccupied space. This movement doesn't provoke [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack\|opportunity attacks]]. Each creature whose space you pass through takes `dice:6d6|noform|noparens|avg` (`6d6`) fire damage, or half as much damage with a successful Dexterity saving throw.

You leave a 5-foot-wide line of hellfire burning behind you in your path. This hellfire continues burning for a number of rounds equal to your spellcasting ability modifier. A creature that ends its turn in hellfire or passes through the line on its turn takes `dice:1d6|noform|noparens|avg` (`1d6`) fire damage, or half as much damage with a successful Dexterity saving throw. A creature can take this damage only once per turn.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Deep Magic p. 311*
