---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/underwater
- monster/size/huge
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
name: Giant Constrictor Snake
ac: 12
hp: 60
hit_dice: 8d12 + 8
cr: '2'
stats: [
  19,
  14,
  12,
  1,
  10,
  3
]
source: [
  MM,
  ToA,
  GoS,
  DIP,
  SLW,
  EGW,
  WBtW
]
aliases: ["Giant Constrictor Snake"]
---
*Source: Monster Manual p. 324, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Explorer's Guide to Wildemount, The Wild Beyond the Witchlight*  

```ad-statblock
title: Giant Constrictor Snake
![[token/giant-constrictor-snake.png#token]]
*Huge beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 8d12 + 8|text(60)` (8d12 + 8) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|14 (+2)|12 (+1)| 1 (-5)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** blindsight 10 ft., passive Perception 12
- **Languages** —
- **Challenge** 2

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one creature. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) piercing damage.

***Constrict.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage, and the target is [grappled](/6. Mechanics/rules/conditions.md#grappled) (escape DC 16). Until this grapple ends, the creature is [restrained](/6. Mechanics/rules/conditions.md#restrained), and the snake can't constrict another target.
```
^statblock

## Environment

underwater, underdark, forest, swamp, desert