---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/xge
  - spell/class/artificer
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/feat/artificer-initiate
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
  - Artificer
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
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
aliases:
  - Create Bonfire
damage:
  base: 1d8
  scaling:
    damage: null
    level: null
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cube
  size: 5
---
# Create Bonfire
*cantrip, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take `dice:1d8|noform|noparens|avg` (`1d8`) fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there.

The bonfire ignites flammable objects in its area that aren't being worn or carried.

The spell's damage increases by `dice:1d8|noform|noparens|avg` (`1d8`) when you reach 5th level (`dice:2d8|noform|noparens|avg` (`2d8`)), 11th level (`dice:3d8|noform|noparens|avg` (`3d8`)), and 17th level (`dice:4d8|noform|noparens|avg` (`4d8`)).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Artificer.md\|Artificer]]; [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Nature Domain.md\|Cleric (Nature Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Arctic)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 152*
