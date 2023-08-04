---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Air Elemental Myrmidon
ac: 18
hp: 117
hit_dice: 18d8 + 36
cr: '7'
stats: [
  18,
  14,
  14,
  9,
  10,
  10
]
source: [
  MPMM,
  MTF
]
aliases: ["Air Elemental Myrmidon"]
---
# Air Elemental Myrmidon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

## Stat Block

```ad-statblock
title: Air Elemental Myrmidon
![[/6. Mechanics/Bestiary/Elemental/Token/air-elemental-myrmidon.png#token]]
*Medium elemental, Neutral*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate]])
- **Hit Points** `dice: 18d8 + 36|text(117)` (18d8 + 36) 
- **Speed** walk 30 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|14 (+2)| 9 (-1)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** paralyzed, petrified, poisoned, prone
- **Languages** Auran, one language of its creator's choice
- **Challenge** 7

## Actions

***Multiattack.*** The myrmidon makes three Flail attacks.

***Flail.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4\|avg` (`1d8 + 4`) force damage.

***Lightning Strike (Recharge 6).*** The myrmidon makes one Flail attack. On a hit, the target takes an extra 18 (`dice: 4d8\|avg` (`4d8`)) lightning damage, and the target must succeed on a DC 13 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until the end of the myrmidon's next turn.
```
^statblock