---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Badger"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., burrow 10 ft."
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The badger has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The badger makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 1|avg (2d4 + 1) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "WDMM"
- "JttRC"
"image": "/compendium/bestiary/beast/token/giant-badger.png"
aliases: ["Giant Badger"]
---
# Giant Badger
*Source: Monster Manual p. 323, Waterdeep: Dungeon of the Mad Mage, Journeys through the Radiant Citadel*  

```ad-statblock
title: Giant Badger
![[/6. Mechanics/Bestiary/Beast/Token/giant-badger.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 2d8 + 4|text(13)` (2d8 + 4) 
- **Speed** walk 30 ft., burrow 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|10 (+0)|15 (+2)| 2 (-4)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 11
- **Languages** —
- **Challenge** 1/4

## Traits

***Keen Smell.*** The badger has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on smell.

## Actions

***Multiattack.*** The badger makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 1` (`1d6 + 1`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 1` (`2d4 + 1`) slashing damage.
```
^statblock

## Environment

forest