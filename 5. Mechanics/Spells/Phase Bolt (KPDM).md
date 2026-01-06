---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Druid
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 3
ritual: false
components: 'S, M (a bit of colored glass)'
verbal: false
somatic: true
material: true
material_desc: a bit of colored glass
time: 1 Action
duration: Instantaneous
range: Self (100-foot Line)
aliases:
  - Phase Bolt
damage:
  base: 5d8
  scaling:
    damage: 1d8
    level: 4
  types:
    - force
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: line
  size: 100
---
# Phase Bolt
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (100-foot Line)
- **Components:** S, M (a bit of colored glass)
- **Duration:** Instantaneous

You focus ambient energy into a crackling bolt 100 feet long and 5 feet wide. Each creature in the line takes `dice:5d8|noform|noparens|avg` (`5d8`) force damage, or half as much damage if it makes a successful Dexterity saving throw.

The bolt passes through the first inanimate object in its path, and creatures on the other side of it receive no benefit from cover. The bolt stops if it strikes a second object.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the bolt's damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 98*
