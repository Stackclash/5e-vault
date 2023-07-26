---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/huge
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
name: Giant Elk
ac: 14
hp: 42
hit_dice: 5d12 + 10
cr: '2'
stats: [
  19,
  16,
  14,
  7,
  14,
  10
]
source: [
  MM,
  SKT
]
aliases: ["Giant Elk"]
---
*Source: Monster Manual p. 325, Storm King's Thunder*  

The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.

```ad-statblock
title: Giant Elk
![[token/giant-elk.png#token]]
*Huge beast, Unaligned*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 5d12 + 10|text(42)` (5d12 + 10) 
- **Speed** walk 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|16 (+3)|14 (+2)| 7 (-2)|14 (+2)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** passive Perception 14
- **Languages** Giant Elk, understands Common, Elvish, Sylvan but can't speak them
- **Challenge** 2

## Traits

***Charge.*** If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked [prone](/6. Mechanics/rules/conditions.md#prone).

## Actions

***Ram.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) bludgeoning damage.

***Hooves.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one [prone](/6. Mechanics/rules/conditions.md#prone) creature. Hit: `dice: 4d8 + 4|avg` (`4d8 + 4`) bludgeoning damage.
```
^statblock

## Environment

mountain, grassland, forest, hill