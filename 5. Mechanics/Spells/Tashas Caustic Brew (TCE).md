---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/tce
  - spell/class/artificer
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/feat/artificer-initiate
  - spell/feat/magic-initiate
  - spell/level/1st-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Artificer
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Evocation
level: 1
damage:
  base: 2d4
  scaling:
    damage: 2d4
    level: 2
  types:
    - acid
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Self (30-foot Line)
somatic: true
verbal: true
material: a bit of rotten food
area:
  shape: line
  size: 30
aliases:
  - Tasha's Caustic Brew
---
# Tasha's Caustic Brew
*1st-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (30-foot Line)
- **Components:** V, S, M (a bit of rotten food)
- **Duration:** Concentration, up to 1 minute

A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes `dice:2d4|noform|noparens|avg` (`2d4`) acid damage at start of each of its turns.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:2d4|noform|noparens|avg|text(2d4)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Artificer.md\|Artificer]]; [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

**Feats**: [[/5. Mechanics/Lists/List Spells Feats Artificer Initiate (TCE).md\|Artificer Initiate]]; [[/5. Mechanics/Lists/List Spells Feats Magic Initiate.md\|Magic Initiate]]

*Source: Tasha's Cauldron of Everything p. 115*
