---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Conjuration
level: 2
ritual: false
components: 'V, S, M (a vial of oil)'
verbal: true
somatic: true
material: true
material_desc: a vial of oil
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
aliases:
  - Boiling Oil
damage:
  base: 3d8
  scaling:
    damage: 1d8
    level: 3
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: sphere
  size: 15
---
# Boiling Oil
*2nd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a vial of oil)
- **Duration:** Concentration, up to 1 minute

You conjure a shallow, 15-foot-radius pool of boiling oil centered on a point within range. The pool is difficult terrain, and any creature that enters the pool or starts its turn there must make a Dexterity saving throw. On a failed save, the creature takes `dice:3d8|noform|noparens|avg` (`3d8`) fire damage and falls [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]]. On a successful save, a creature takes half as much damage and doesn't fall [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]].

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 165*
