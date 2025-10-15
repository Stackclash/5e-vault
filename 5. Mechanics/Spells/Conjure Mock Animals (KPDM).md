---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/ranger
  - spell/feat/magic-initiate/druid-spells
  - spell/level/1st-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Druid
  - Ranger
school: Conjuration
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 30 feet
aliases:
  - Conjure Mock Animals
damage:
  base: 2d4
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Conjure Mock Animals
*1st-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S
- **Duration:** Concentration, up to 10 minutes

You summon fey spirits that take the outward appearance of animals, but merely to serve as a distraction and trap for the unwary. The spell functions as [[/5. Mechanics/Spells/Conjure Animals.md\|conjure animals]], but each mock animal has only 1 hit point and deals only 1 damage on a hit regardless of its appearance.

When a mock animal is dropped to 0 hit points, it explodes in a flash of light, dealing `dice:2d4|noform|noparens|avg` (`2d4`) radiant damage to all creatures within 5 feet of it. Each creature that takes damage must make a Dexterity saving throw. On a failed save, the creature is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] for 1 round. Exploding mock animals do not deal this damage to other mock animals.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Deep Magic p. 53*
