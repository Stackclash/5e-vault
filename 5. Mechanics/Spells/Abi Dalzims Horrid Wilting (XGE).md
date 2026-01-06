---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/necromancy
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Wizard
school: Necromancy
level: 8
ritual: false
components: 'V, S, M (a bit of sponge)'
verbal: true
somatic: true
material: true
material_desc: a bit of sponge
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Abi-Dalzim's Horrid Wilting
damage:
  base: 12d8
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
area:
  shape: cube
  size: 30
---
# Abi-Dalzim's Horrid Wilting
*8th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a bit of sponge)
- **Duration:** Instantaneous

You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes `dice:12d8|noform|noparens|avg` (`12d8`) necrotic damage on a failed save, or half as much damage on a successful one.

Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 150*
