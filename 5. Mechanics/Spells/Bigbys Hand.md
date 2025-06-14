---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/artificer
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/evocation
  - spell/subclass/the-fathomless
classes:
  - Artificer
  - Bard
  - Sorcerer
  - Warlock (The Fathomless)
  - Wizard
school: Evocation
level: 5
ritual: false
time: 1 Action
duration: up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Bigby's Hand
concentration: true
material: an eggshell and a snakeskin glove
---
# Bigby's Hand
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (an eggshell and a snakeskin glove)
- **Duration:** Concentration, up to 1 minute

You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.

The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of `dice:1d20+8|noform|noparens|text(26)` (`+8`) and a Dexterity of `dice:1d20+0|noform|noparens|text(10)` (`+0`). The hand doesn't fill its space.

When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.

## Clenched Fist

The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes `dice:4d8|noform|noparens|avg` (`4d8`) force damage.

## Forceful Hand

The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength ([[/5. Mechanics/Rules/Skills.md#Athletics\|Athletics]]) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.

## Grasping Hand

The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to `dice:2d6|noform|noparens|avg` (`2d6`) + your spellcasting ability modifier.

## Interposing Hand

The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.

## At Higher Levels

When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by `dice:2d8|noform|noparens|avg|text(2d8)` and the damage from the grasping hand increases by `dice:2d6|noform|noparens|avg|text(2d6)` for each slot level above 5th.

## Summary

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Artificer.md\|Artificer]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [Warlock (The Fathomless)](compendium/lists/list-spells-classes-the-fathomless-tce.md "subclass=TCE")

*Source: Player's Handbook p. 218. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> (as "Arcane Hand")*
