---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
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
components: 'V, S, M (a handful of clay, crystal, glass, or mineral spheres)'
verbal: true
somatic: true
material: true
material_desc: 'a handful of clay, crystal, glass, or mineral spheres'
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Feeblemind
damage:
  base: 4d6
  scaling:
    damage: null
    level: null
  types:
    - psychic
saving_throw:
  skills:
    - Intelligence
  succeeds: see spell description
---
# Feeblemind
*8th-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a handful of clay, crystal, glass, or mineral spheres)
- **Duration:** Instantaneous

You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes `dice:4d6|noform|noparens|avg` (`4d6`) psychic damage and must make an Intelligence saving throw.

On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.

At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.

The spell can also be ended by [[/5. Mechanics/Spells/Greater Restoration.md\|greater restoration]], [[/5. Mechanics/Spells/Heal.md\|heal]], or [[/5. Mechanics/Spells/Wish.md\|wish]].

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 239. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
