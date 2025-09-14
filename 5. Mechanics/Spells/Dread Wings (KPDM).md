---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Necromancy
level: 4
damage:
  base: 4d8
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
somatic: true
verbal: true
area:
  shape: sphere
  size: 20
aliases:
  - Dread Wings
---
# Dread Wings
*4th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

A swarm of flying, bat-like shapes swirl into existence in a 20-foot-radius cloud around the point you target your spell. Each round a creature begins its turn in the swarm, it takes `dice:4d8|noform|noparens|avg` (`4d8`) necrotic damage and must succeed on a Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] for `dice:1d4|noform|noparens|avg` (`1d4`) rounds. Creatures that are immune to necrotic damage are not susceptible to the [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] effect.

You can use an action on your turn to move the swarm up to 40 feet in any direction.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 64*
