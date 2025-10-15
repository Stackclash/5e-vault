---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/necromancy
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Warlock
  - Wizard
school: Necromancy
level: 5
ritual: false
components: 'V, S, M (a gilded bone or a fossil worth at least 100 gp)'
verbal: true
somatic: true
material: true
material_desc: a gilded bone or a fossil worth at least 100 gp
time: 1 Action
duration: Instantaneous
range: 90 feet
aliases:
  - Detonate Corpses
damage:
  base: 4d10
  scaling:
    damage: 1d10
    level: 6
  types:
    - piercing
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Detonate Corpses
*5th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (a gilded bone or a fossil worth at least 100 gp)
- **Duration:** Instantaneous

You cause up to five Small or Medium corpses that you can see within range to explode in a hail of bone shards. Each creature within 20 feet of a detonated corpse takes `dice:4d10|noform|noparens|avg` (`4d10`) piercing damage, or half as much damage with a successful Dexterity saving throw.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 310*
