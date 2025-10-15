---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Wizard
school: Transmutation
level: 6
ritual: false
components: 'V, S, M (a lodestone and a pinch of dust)'
verbal: true
somatic: true
material: true
material_desc: a lodestone and a pinch of dust
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Disintegrate
damage:
  base: 10d6+40
  scaling:
    damage: 3d6
    level: 7
  types:
    - force
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cube
  size: 10
---
# Disintegrate
*6th-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a lodestone and a pinch of dust)
- **Duration:** Instantaneous

A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by [[/5. Mechanics/Spells/Wall Of Force.md\|wall of force]].

A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes `dice:10d6+40|noform|noparens|avg` (`10d6 + 40`) force damage. The target is disintegrated if this damage leaves it with 0 hit points.

A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a [[/5. Mechanics/Spells/True Resurrection.md\|true resurrection]] or a [[/5. Mechanics/Spells/Wish.md\|wish]] spell.

This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.

**At Higher Levels.** When you cast this spell using a spell slot of 7th level or higher, the damage increases by `dice:3d6|noform|noparens|avg|text(3d6)` for each slot level above 6th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 233. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
