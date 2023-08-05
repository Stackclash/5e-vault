---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/urban
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Cat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The cat has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one target.\
    \ Hit: 1 slashing damage."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "SKT"
- "ToA"
- "WDH"
- "IMR"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "JttRC"
"image": "/compendium/bestiary/beast/token/cat.png"
aliases: ["Cat"]
---
# Cat
*Source: Monster Manual p. 320, Curse of Strahd, Hoard of the Dragon Queen, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*  

```ad-statblock
title: Cat
![](/compendium/bestiary/beast/token/cat.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d4|text(2)` (1d4) 
- **Speed** walk 40 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (-4)|15 (+2)|10 (+0)| 3 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Keen Smell.*** The cat has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

## Actions

***Claws.*** *Melee Weapon Attack:* `dice: d20+0` (+0 to hit), reach 5 ft., one target. Hit: 1 slashing damage.
```
^statblock

## Environment

grassland, forest, urban, desert