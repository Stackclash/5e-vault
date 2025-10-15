---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/ranger
  - spell/level/3rd-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Druid
  - Ranger
school: Transmutation
level: 3
ritual: false
components: 'V, S, M (a cloth soaked in water)'
verbal: true
somatic: true
material: true
material_desc: a cloth soaked in water
time: 1 Action
duration: Instantaneous
range: 120 feet
aliases:
  - Quench
damage:
  base: 8d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - cold
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: sphere
  size: 30
---
# Quench
*3rd-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (a cloth soaked in water)
- **Duration:** Instantaneous

You extinguish all nonmagical fires in a 30-foot-radius area centered on the point at which you cast the spell. You can extinguish fire spells in the area as well. For each fire spell in the area, make a spellcasting ability check. The DC equals 10 + the fire spell's level. On a successful check, the spell ends.

Fire elementals in the area take `dice:8d6|noform|noparens|avg` (`8d6`) cold damage. A successful Constitution saving throw reduces the damage by half.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the radius of the area increases by 10 feet, and the damage against fire elementals increases by `dice:1d6|noform|noparens|avg|text(1d6)`, for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Deep Magic p. 101*
