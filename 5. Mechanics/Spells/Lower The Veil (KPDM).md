---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/divination
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Wizard
school: Divination
level: 8
ritual: false
components: 'V, S, M (a strip of thin gauze or other sheer material)'
verbal: true
somatic: true
material: true
material_desc: a strip of thin gauze or other sheer material
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Lower the Veil
damage:
  base: 8d10
  scaling:
    damage: null
    level: null
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Lower the Veil
*8th-level, Divination*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a strip of thin gauze or other sheer material)
- **Duration:** Instantaneous

You briefly drop the veil of reality for selected targets, allowing a brief glimpse into the deep nothing beyond this realm to shatter their minds. Each creature you choose within 60 feet of you must succeed on a Wisdom saving throw or take `dice:8d10|noform|noparens|avg` (`8d10`) psychic damage and be driven insane for 10 minutes, per the [[/5. Mechanics/Spells/Symbol.md\|symbol]] spell. On a successful saving throw, a creature takes half the damage and is [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] for 1 round. Creatures already suffering from insanity are immune to this spell. Blindness, however, is not a defense, since the experience is not sight-based, but an internal awareness.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 92*
