---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/ooze
statblock: true
statblock-link: "#^statblock"
name: Gelatinous Cube
ac: 6
hp: 84
hit_dice: 8d10 + 40
cr: '2'
stats: [
  14,
  3,
  20,
  1,
  6,
  1
]
source: [
  MM,
  TftYP,
  WDMM,
  GoS,
  ERLW,
  IDRotF,
  WBtW
]
aliases: ["Gelatinous Cube"]
---
# Gelatinous Cube
*Source: Monster Manual p. 242, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*  

Gelatinous cubes scour dungeon passages in silent, predictable patterns, leaving perfectly clean paths in their wake. They consume living tissue while leaving bones and other materials undissolved.

A gelatinous cube is all but transparent, making it hard to spot until it attacks. A cube that is well fed can be easier to spot, since its victims' bones, coins, and other objects can be seen suspended inside the creature.

> [!quote]- A quote from From the journal of Jaster Hollowquill, on his first exploration of Undermountain  
> 
> The dungeon's floors were spotless. That should have been our first clue.


```ad-statblock
title: Gelatinous Cube
![](/compendium/bestiary/ooze/token/gelatinous-cube.png#token)
*Large ooze, Unaligned*

- **Armor Class** 6 
- **Hit Points** `dice: 8d10 + 40|text(84)` (8d10 + 40) 
- **Speed** walk 15 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)| 3 (-4)|20 (+5)| 1 (-5)| 6 (-2)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 8
- **Condition Immunities** blinded, charmed, deafened, exhaustion, frightened, prone
- **Languages** —
- **Challenge** 2

## Traits

***Ooze Cube.*** The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.

Creatures inside the cube can be seen but have total cover.

A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes `dice: 3d6|avg` (`3d6`) acid damage.

The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.

***Transparent.*** Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.

## Actions

***Pseudopod.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 3d6|avg` (`3d6`) acid damage.

***Engulf.*** The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.

On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.

On a failed save, the cube enters the creature's space, and the creature takes `dice: 3d6|avg` (`3d6`) acid damage and is engulfed. The engulfed creature can't breathe, is [restrained](compendium/rules/conditions.md#restrained), and takes `dice: 6d6|avg` (`6d6`) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.

An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.
```
^statblock

## Environment

underdark