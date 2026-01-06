---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/necromancy
  - spell/subclass/divine-soul/good
  - spell/subclass/lust-domain
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (Lust Domain)
  - Sorcerer
  - 'Sorcerer (Divine Soul, Good)'
  - Warlock
  - Wizard
school: Necromancy
level: 5
ritual: false
components: S
verbal: false
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Touch
aliases:
  - Kiss of the Succubus
damage:
  base: 5d10
  scaling:
    damage: 1d10
    level: 6
  types:
    - psychic
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
---
# Kiss of the Succubus
*5th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** S
- **Duration:** Instantaneous

You kiss a willing creature or one you have [[/5. Mechanics/Rules/Conditions.md#Charmed\|charmed]] or held spellbound through spells or abilities such as [[/5. Mechanics/Spells/Dominate Person.md\|dominate person]]. The target must make a Constitution saving throw. A creature takes `dice:5d10|noform|noparens|avg` (`5d10`) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken; this reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Lust Domain)](/compendium/lists/list-spells-classes-lust-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 88*
