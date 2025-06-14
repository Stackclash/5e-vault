---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/cleric
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/enchantment
  - spell/subclass/lust-domain
classes:
  - Bard
  - Cleric
  - Cleric (Lust Domain)
  - Sorcerer
  - Warlock
  - Wizard
school: Enchantment
level: 4
ritual: false
time: 1 Action
duration: up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Lovesick
concentration: true
material: a handful of red rose petals
---
# Lovesick
*4th-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (a handful of red rose petals)
- **Duration:** Concentration, up to 1 minute

This spell causes creatures to behave unpredictably, as they randomly experience the full gamut of emotions of someone who has fallen head over heels in love. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.

An affected target can't take reactions and must roll a `dice:d10|noform|noparens|avg` (`d10`) at the start of each of its turns to determine its behavior for that turn.

**Lovesick Actions**

`dice: [[Lovesick (KPDM).md#^lovesick-actions]]`

| dice: d10 | Behavior |
|-----------|----------|
| 1-3 | The creature spends its turn moping like a lovelorn teenager; it doesn't move or take actions. |
| 4-5 | The creature bursts into tears, takes the [[/5. Mechanics/Rules/Actions.md#Dash\|Dash]] action, and uses all its movement to run off in a random direction. To determine the direction, roll a `dice:d8\|noform\|noparens\|avg` (`d8`) and assign a direction to each die face. |
| 6 | The creature uses its action to remove one item of clothing or piece of armor. Each round spent removing pieces of armor reduces its AC by 1. |
| 7-8 | The creature drops anything it is holding in its hands and passionately embraces a randomly determined creature. Treat this as a grapple attempt which uses the [[/5. Mechanics/Rules/Actions.md#Attack\|Attack]] action. |
| 9 | The creature flies into a jealous rage and uses its action to make a melee attack against a randomly determined creature. |
| 10 | The creature can act and move normally. |
^lovesick-actions

At the end of each of its turns, an affected target can make a Wisdom saving throw, ending the effect on itself on a successful save.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Cleric (Lust Domain)](compendium/lists/list-spells-classes-lust-domain-kpdm.md "subclass=KPDM")

*Source: Deep Magic p. 92*
