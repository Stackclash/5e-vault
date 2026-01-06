---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/evocation
  - spell/subclass/divine-soul/good
  - spell/subclass/dragon-domain
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (Dragon Domain)
  - Sorcerer
  - 'Sorcerer (Divine Soul, Good)'
  - Wizard
school: Evocation
level: 5
ritual: false
components: V
verbal: true
somatic: false
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Claws of the Earth Dragon
damage:
  base: 6d8
  scaling:
    damage: 1d8
    level: 6
  types:
    - bludgeoning
saving_throw:
  skills:
    - Strength
  succeeds: see spell description
---
# Claws of the Earth Dragon
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V
- **Duration:** Instantaneous

You summon the power of an earth dragon and shoot a ray at one target within 60 feet. The target falls [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] and takes `dice:6d8|noform|noparens|avg` (`6d8`) bludgeoning damage from being slammed to the ground. (If the target was flying or levitating, it takes an additional `dice:1d6|noform|noparens|avg` (`1d6`) bludgeoning damage per 10 feet it falls.)

If the target makes a successful Strength saving throw, damage is halved, it doesn't fall, and it isn't knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]].

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage done by the attack increases by `dice:1d8|noform|noparens|avg|text(1d8)` and the range increases by 10 feet for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Dragon Domain)](/compendium/lists/list-spells-classes-dragon-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 199*
