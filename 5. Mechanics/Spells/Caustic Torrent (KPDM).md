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
  - spell/level/8th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Warlock
  - Wizard
school: Conjuration
level: 8
ritual: false
components: 'V, S, M (a chip of bone pitted by acid)'
verbal: true
somatic: true
material: true
material_desc: a chip of bone pitted by acid
time: 1 Action
duration: Instantaneous
range: Self (60-foot Line)
aliases:
  - Caustic Torrent
damage:
  base: 14d6
  scaling:
    damage: null
    level: null
  types:
    - acid
saving_throw:
  skills:
    - Dexterity
    - Constitution
  succeeds: see spell description
area:
  shape: line
  size: 60
---
# Caustic Torrent
*8th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self (60-foot Line)
- **Components:** V, S, M (a chip of bone pitted by acid)
- **Duration:** Instantaneous

A swirling jet of acid sprays from you in a direction you choose. The acid fills a line 60 feet long and 5 feet wide. Each creature in the line takes `dice:14d6|noform|noparens|avg` (`14d6`) acid damage, or half as much damage if it makes a successful Dexterity saving throw. A creature reduced to 0 hit points by this spell is killed, and its body is liquefied. In addition, each creature other than you that's in the line or within 5 feet of it is [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] for 1 minute by toxic fumes. Creatures that don't breathe or that are immune to acid damage aren't [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]]. A [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] creature can repeat the Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 166*
