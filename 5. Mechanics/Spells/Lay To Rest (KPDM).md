---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/paladin
  - spell/level/5th-level
  - spell/school/evocation
  - spell/subclass/divine-soul/good
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Paladin
  - 'Sorcerer (Divine Soul, Good)'
school: Evocation
level: 5
ritual: false
components: 'V, S, M (a pinch of grave dirt)'
verbal: true
somatic: true
material: true
material_desc: a pinch of grave dirt
time: 1 Action
duration: Instantaneous
range: Self (15-foot Sphere)
aliases:
  - Lay to Rest
damage:
  base: 8d6
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
area:
  shape: sphere
  size: 15
---
# Lay to Rest
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Sphere)
- **Components:** V, S, M (a pinch of grave dirt)
- **Duration:** Instantaneous

A pulse of searing light rushes out from you. Each undead creature within 15 feet of you must make a Constitution saving throw. A target takes `dice:8d6|noform|noparens|avg` (`8d6`) radiant damage on a failed save, or half as much damage on a successful one.

An undead creature reduced to 0 hit points by this spell disintegrates in a burst of radiant motes, leaving anything it was wearing or carrying in the space it formerly occupied.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Deep Magic p. 90*
