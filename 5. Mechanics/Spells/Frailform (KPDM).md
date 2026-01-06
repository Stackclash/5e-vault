---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/enchantment
classes:
  - Bard (Magical Secrets)
  - Druid
  - Warlock
  - Wizard
school: Enchantment
level: 8
ritual: false
components: 'V, S, M (a mummified heart encased in amber, worth at least 1,500 gp)'
verbal: true
somatic: true
material: true
material_desc: 'a mummified heart encased in amber, worth at least 1,500 gp'
time: 1 Action
duration: Instantaneous
range: 120 feet
aliases:
  - Frailform
damage:
  base: 4d6
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Frailform
*8th-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (a mummified heart encased in amber, worth at least 1,500 gp)
- **Duration:** Instantaneous

You blast a creature within range with a beam of pure, entropic energy that ages it rapidly. The target takes `dice:4d6|noform|noparens|avg` (`4d6`) necrotic damage and must make a successful Constitution saving throw; on a failure, its Strength and Dexterity are both reduced to 1. While its Strength and Dexterity are reduced in this way, the creature can't hold weapons weighing more than 3 pounds, its speed is halved, and it can't take reactions. The creature's Armor Class and attack rolls are modified to account for its reduced attributes. The creature can cast spells normally.

An affected creature can repeat the saving throw after it finishes a long rest, ending the effect on a success. The effect can also be ended by [[/5. Mechanics/Spells/Greater Restoration.md\|greater restoration]], [[/5. Mechanics/Spells/Wish.md\|wish]], or comparable magic.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 310*
