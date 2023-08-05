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
"name": "Black Bear"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bear has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDMM"
- "GoS"
- "IMR"
"image": "/compendium/bestiary/beast/token/black-bear.png"
aliases: ["Black Bear"]
---
# Black Bear
*Source: Monster Manual p. 318, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Infernal Machine Rebuild*  

```ad-statblock
title: Black Bear
![](/compendium/bestiary/beast/token/black-bear.png#token)
*Medium beast, Unaligned*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 3d8 + 6|text(19)` (3d8 + 6) 
- **Speed** walk 40 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|10 (+0)|14 (+2)| 2 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1/2

## Traits

***Keen Smell.*** The bear has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

## Actions

***Multiattack.*** The bear makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 2|avg` (`2d4 + 2`) slashing damage.
```
^statblock

## Environment

forest