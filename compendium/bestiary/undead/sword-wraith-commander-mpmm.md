---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/swamp
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Sword Wraith Commander
ac: 18
hp: 127
hit_dice: 15d8 + 60
cr: '8'
stats: [
  18,
  14,
  18,
  11,
  12,
  14
]
source: [
  MPMM,
  MTF
]
aliases: ["Sword Wraith Commander"]
---
# Sword Wraith Commander
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239, Mordenkainen's Tome of Foes p. 241*  

Sword wraith commanders haunt battlefields, attacking anyone who questions their valor but looking kindly on those who sing their praises.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

## Stat Block

```ad-statblock
title: Sword Wraith Commander
![](/compendium/bestiary/undead/token/sword-wraith-commander.png#token)
*Medium undead, Lawful Evil*

- **Armor Class** 18 ([breastplate](/compendium/items/breastplate.md), [shield](/compendium/items/shield.md))
- **Hit Points** `dice: 15d8 + 60|text(127)` (15d8 + 60) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|18 (+4)|11 (+0)|12 (+1)|14 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, frightened, poisoned, unconscious
- **Languages** the languages it knew in life
- **Challenge** 8

## Traits

***Turning Defiance.*** The commander and any other sword wraiths within 30 feet of it have advantage on saving throws against effects that turn Undead.

***Unusual Nature.*** The commander doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The commander makes two Longsword or Longbow attacks.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4|avg` (`1d8 + 4`) slashing damage, or 9 (`dice: 1d10 + 4|avg` (`1d10 + 4`)) slashing damage if used with two hands.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.

***Call to Honor (1/Day).*** If the commander has taken damage during this combat, it gives itself advantage on attack rolls until the end of its next turn, and `dice: 1d4 + 1|avg` (`1d4 + 1`) [sword wraith warriors](/compendium/bestiary/undead/sword-wraith-warrior-mpmm.md) appear in unoccupied spaces within 30 feet of it. The warriors last until they drop to 0 hit points, and they take their turns immediately after the commander's turn on the same initiative count.

## Bonus Actions

***Martial Fury.*** The commander makes one Longsword or Longbow attack, which deals an extra 9 (`dice: 2d8|avg` (`2d8`)) necrotic damage on a hit, and attack rolls against it have advantage until the start of its next turn.
```
^statblock

## Environment

grassland, swamp