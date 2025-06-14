---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/7th-level
  - spell/school/evocation
classes:
  - Bard
  - Sorcerer
  - Wizard
school: Evocation
level: 7
ritual: false
time: 1 Action
duration: Instantaneous
components:
  - V
  - S
aliases:
  - Prismatic Spray
range: Self
save:
  type: DEX
  success: other
area:
  type: cone
  size: 60
---
# Prismatic Spray
*7th-level, Evocation*  
![[5. Mechanics/Spells/img/prismatic-spray.webp#right]]  

- **Casting time:** 1 Action
- **Range:** Self (60-foot Cone)
- **Components:** V, S
- **Duration:** Instantaneous

Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a `dice:d8|noform|noparens|avg` (`d8`) to determine which color ray affects it.

## 1-Red

The target takes `dice:10d6|noform|noparens|avg` (`10d6`) fire damage on a failed save, or half as much damage on a successful one.

## 2-Orange

The target takes `dice:10d6|noform|noparens|avg` (`10d6`) acid damage on a failed save, or half as much damage on a successful one.

## 3-Yellow

The target takes `dice:10d6|noform|noparens|avg` (`10d6`) lightning damage on a failed save, or half as much damage on a successful one.

## 4-Green

The target takes `dice:10d6|noform|noparens|avg` (`10d6`) poison damage on a failed save, or half as much damage on a successful one.

## 5-Blue

The target takes `dice:10d6|noform|noparens|avg` (`10d6`) cold damage on a failed save, or half as much damage on a successful one.

## 6-Indigo

On a failed save, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]]. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the [[/5. Mechanics/Rules/Conditions.md#Petrified\|petrified]] condition. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind.

## 7-Violet

On a failed save, the target is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]]. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]]. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)

## 8-Special

The target is struck by two rays. Roll twice more, rerolling any 8.

## Summary

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]

*Source: Player's Handbook p. 267. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
