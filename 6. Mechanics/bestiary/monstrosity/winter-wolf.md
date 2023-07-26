---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Winter Wolf
ac: 13
hp: 75
hit_dice: 10d10 + 20
cr: '3'
stats: [
  18,
  13,
  14,
  7,
  12,
  8
]
source: [
  MM,
  SKT,
  TftYP,
  ToA,
  IDRotF,
  KftGV
]
aliases: ["Winter Wolf"]
---
*Source: Monster Manual p. 340, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Icewind Dale: Rime of the Frostmaiden, Keys from the Golden Vault*  

The arctic-dwelling winter wolf is as large as a dire wolf but has snow-white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves' deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.

```ad-statblock
title: Winter Wolf
![[token/winter-wolf.png#token]]
*Large monstrosity, Neutral Evil*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 10d10 + 20|text(75)` (10d10 + 20) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|14 (+2)| 7 (-2)|12 (+1)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +3
- **Senses** passive Perception 15
- **Damage Immunities** cold
- **Languages** Common, Giant, Winter Wolf
- **Challenge** 3

## Traits

***Keen Hearing and Smell.*** The wolf has advantage on Wisdom ([Perception](/6. Mechanics/rules/skills.md#Perception)) checks that rely on hearing or smell.

***Pack Tactics.*** The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't [incapacitated](/6. Mechanics/rules/conditions.md#incapacitated).

***Snow Camouflage.*** The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked [prone](/6. Mechanics/rules/conditions.md#prone).

***Cold Breath (Recharge 5-6).*** The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (`dice: 4d8|avg` (`4d8`)) cold damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

arctic