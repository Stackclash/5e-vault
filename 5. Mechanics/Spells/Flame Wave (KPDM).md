---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 4
ritual: false
components: 'V, S, M (a drop of tar, pitch, or oil)'
verbal: true
somatic: true
material: true
material_desc: 'a drop of tar, pitch, or oil'
time: 1 Action
duration: Instantaneous
range: Self (40-foot Cone)
aliases:
  - Flame Wave
damage:
  base: 6d8
  scaling:
    damage: 1d8
    level: 5
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cone
  size: 40
---
# Flame Wave
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (40-foot Cone)
- **Components:** V, S, M (a drop of tar, pitch, or oil)
- **Duration:** Instantaneous

A rushing burst of fire rips out from you in a rolling wave, filling a 40-foot cone. Each creature in the area must make a Dexterity saving throw. A creature takes `dice:6d8|noform|noparens|avg` (`6d8`) fire damage and is pushed 20 feet away from you on a failed save; on a successful save, the creature takes half as much damage and isn't pushed.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 71*
