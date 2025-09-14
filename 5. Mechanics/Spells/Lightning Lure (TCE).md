---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/tce
  - spell/class/artificer
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/feat/artificer-initiate
  - spell/feat/magic-initiate
  - spell/level/cantrip
  - spell/optfeature/pact-of-the-tome
  - spell/race/kobold
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
  - spell/subrace/elf-high
classes:
  - Artificer
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
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
    - lightning
saving_throw:
  skills:
    - Strength
  succeeds: see spell description
ritual: false
time: 1 Action
duration: Instantaneous
range: Self (15-foot Radius)
somatic: false
verbal: true
area:
  shape: radius
  size: 15
aliases:
  - Lightning Lure
---
# Lightning Lure
*cantrip, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Radius)
- **Components:** V
- **Duration:** Instantaneous

You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take `dice:1d8|noform|noparens|avg` (`1d8`) lightning damage if it is within 5 feet of you.

This spell's damage increases by `dice:1d8|noform|noparens|avg` (`1d8`) when you reach 5th level (`dice:2d8|noform|noparens|avg` (`2d8`)), 11th level (`dice:3d8|noform|noparens|avg` (`3d8`)), and 17th level (`dice:4d8|noform|noparens|avg` (`4d8`)).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Artificer.md\|Artificer]]; [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

**Feats**: [[/5. Mechanics/Lists/List Spells Feats Artificer Initiate (TCE).md\|Artificer Initiate]]; [[/5. Mechanics/Lists/List Spells Feats Magic Initiate.md\|Magic Initiate]]

*Source: Tasha's Cauldron of Everything p. 107*
