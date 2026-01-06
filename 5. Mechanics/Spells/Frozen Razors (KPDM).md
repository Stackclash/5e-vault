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
  - spell/level/3rd-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 3
ritual: false
components: 'V, S, M (water from a melted icicle)'
verbal: true
somatic: true
material: true
material_desc: water from a melted icicle
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 90 feet
aliases:
  - Frozen Razors
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - cold
    - slashing
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cube
  size: 20
---
# Frozen Razors
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (water from a melted icicle)
- **Duration:** Concentration, up to 1 minute

Razor-sharp blades of ice erupt from the ground or other surface, filling a 20-foot cube centered on a point you can see within range. For the duration, the area is lightly obscured and is difficult terrain. A creature that moves more than 5 feet into or inside the area on a turn takes `dice:2d6|noform|noparens|avg` (`2d6`) slashing damage and `dice:3d6|noform|noparens|avg` (`3d6`) cold damage, or half as much damage if it makes a successful Dexterity saving throw.

A creature that takes cold damage from frozen razors is reduced to half speed until the start of its next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the slashing or cold damage (your choice) increases by `dice:1d6|noform|noparens|avg` (`1d6`) for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 73*
