---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Sorcerer
  - Warlock
  - Wizard
school: Transmutation
level: 6
ritual: false
components: 'V, S, M (a vial of ectoplasm or ghostly essence)'
verbal: true
somatic: true
material: true
material_desc: a vial of ectoplasm or ghostly essence
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: Self
aliases:
  - Investiture of Blight
damage:
  base: 2d10
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: sphere
  size: 15
---
# Investiture of Blight
*6th-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S, M (a vial of ectoplasm or ghostly essence)
- **Duration:** Concentration, up to 10 minutes

Ghostly spirits emerge from your body and whirl around you. Your body emits dim light in a 15-foot radius for the spell's duration. Until the spell ends, you gain the following benefits:

- You have immunity to necrotic damage and resistance to poison damage.  
- Creatures that miss on melee attacks against you become [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] of you until the end of their next turn.  
- You can use an action to direct the ghostly spirits to assail a creature you can see within 15 feet of you. The target must make a successful Constitution saving throw or take `dice:2d10|noform|noparens|avg` (`2d10`) necrotic damage and gain one level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]].  

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 311*
