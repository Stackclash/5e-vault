---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Warlock
  - Wizard
school: Evocation
level: 8
ritual: false
components: 'V, M (a drop of pitch mixed with a drop of mercury)'
verbal: true
somatic: false
material: true
material_desc: a drop of pitch mixed with a drop of mercury
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 150 feet
aliases:
  - Maddening Darkness
damage:
  base: 8d8
  scaling:
    damage: null
    level: null
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: half damage
area:
  shape: sphere
  size: 60
---
# Maddening Darkness
*8th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, M (a drop of pitch mixed with a drop of mercury)
- **Duration:** Concentration, up to 10 minutes

Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with [[/5. Mechanics/Rules/Senses.md#Darkvision\|darkvision]] can't see through this darkness. Non-magical light, as well as light created by spells of 8th level or lower, can't illuminate the area.

Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking `dice:8d8|noform|noparens|avg` (`8d8`) psychic damage on a failed save, or half as much damage on a successful one.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 160*
