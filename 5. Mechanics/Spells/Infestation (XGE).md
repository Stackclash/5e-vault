---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/feat/magic-initiate/wizard-spells
  - spell/feat/wood-elf-magic
  - spell/level/cantrip
  - spell/optfeature/druidic-warrior
  - spell/optfeature/pact-of-the-tome
  - spell/race/kobold
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/circle-of-the-land/arctic
  - spell/subclass/eldritch-knight
  - spell/subclass/nature-domain
  - spell/subrace/elf-high
classes:
  - Bard (Magical Secrets)
  - Cleric (Nature Domain)
  - Druid
  - 'Druid (Circle of the Land, Arctic)'
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Conjuration
level: 0
ritual: false
components: 'V, S, M (a living flea)'
verbal: true
somatic: true
material: true
material_desc: a living flea
time: 1 Action
duration: Instantaneous
range: 30 feet
aliases:
  - Infestation
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Infestation
*cantrip, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S, M (a living flea)
- **Duration:** Instantaneous

You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes `dice:1d6|noform|noparens|avg` (`1d6`) poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a `dice:d4|noform|noparens|avg` (`d4`) for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.

The spell's damage increases by `dice:1d6|noform|noparens|avg` (`1d6`) when you reach 5th level (`dice:2d6|noform|noparens|avg` (`2d6`)), 11th level (`dice:3d6|noform|noparens|avg` (`3d6`)), and 17th level (`dice:4d6|noform|noparens|avg` (`4d6`)).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Nature Domain.md\|Cleric (Nature Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Arctic)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 158*
