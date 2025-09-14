---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/wizard
  - spell/level/7th-level
  - spell/school/conjuration
classes:
  - Bard
  - Wizard
school: Conjuration
level: 7
damage:
  base: 10d6
  scaling:
    damage: null
    level: 8
  types:
    - acid
saving_throw:
  skills:
    - Intelligence
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
somatic: true
verbal: true
material: a vial of acid and a polished silver mirror worth 125 gp
aliases:
  - Acid Gate
---
# Acid Gate
*7th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a vial of acid and a polished silver mirror worth 125 gp)
- **Duration:** Concentration, up to 1 minute

You create a portal of swirling, acidic green vapor in an unoccupied space you can see. This portal connects with a target destination within 100 miles that you are personally familiar with and have seen with your own eyes, such as your wizard's tower or an inn you have stayed at. You and up to three creatures of your choice can enter the portal and pass through it, arriving at the target destination (or within 10 feet of it, if it is currently occupied). If the target destination doesn't exist or is inaccessible, the spell automatically fails and the gate doesn't form.

Any creature that tries to move through the gate, other than those selected by you when the spell was cast, takes `dice:10d6|noform|noparens|avg` (`10d6`) acid damage and is teleported `1d100 × 10` feet in a random, horizontal direction. If the creature makes a successful Intelligence saving throw, it can't be teleported by this portal, but it still takes acid damage when it enters the acid-filled portal and every time it ends its turn in contact with it.

**At Higher Levels.** When you cast this spell using a spell slot of 8th level or higher, you can allow one additional creature to use the gate for each slot level above 7th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 163*
