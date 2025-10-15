---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/level/3rd-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Warlock
school: Conjuration
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 0 minutes'
range: Self
aliases:
  - Terrifying Lash
damage:
  base: 2d10
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
# Terrifying Lash
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S
- **Duration:** Concentration, up to 0 minutes

A faintly luminous whip of energy coalesces in your hand. The whip has 10 ft. of reach, and you can take an action to make a melee attack roll against a target on your turn, using your spellcasting ability modifier as a bonus on the attack roll.

On a hit, the target takes `dice:2d10|noform|noparens|avg` (`2d10`) psychic damage and must make a Wisdom saving throw. On a failed save, the target is [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] for `dice:1d4|noform|noparens|avg` (`1d4`) rounds. If you attack a target with this spell that is already [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]], you gain advantage on the attack roll, and the target has disadvantage on its Wisdom saving throw.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Deep Magic p. 113*
