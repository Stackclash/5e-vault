---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Druid
  - Sorcerer
  - Warlock
  - Wizard
school: Transmutation
level: 6
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: Self
aliases:
  - Investiture of Flame
damage:
  base: 1d10
  scaling:
    damage: null
    level: null
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: sphere
  size: 30
---
# Investiture of Flame
*6th-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S
- **Duration:** Concentration, up to 10 minutes

Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits:

- You are immune to fire damage and have resistance to cold damage.  
- Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes `dice:1d10|noform|noparens|avg` (`1d10`) fire damage.  
- You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes `dice:4d8|noform|noparens|avg` (`4d8`) fire damage on a failed save, or half as much damage on a successful one.  

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 159*
