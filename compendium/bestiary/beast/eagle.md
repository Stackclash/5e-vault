---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Eagle"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "14"
- !!int "7"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The eagle has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "CM"
"image": "/compendium/bestiary/beast/token/eagle.png"
aliases: ["Eagle"]
---
# Eagle
*Source: Monster Manual p. 322, Candlekeep Mysteries*  

```ad-statblock
title: Eagle
![](/compendium/bestiary/beast/token/eagle.png#token)
*Small beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d6|text(3)` (1d6) 
- **Speed** walk 10 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|15 (+2)|10 (+0)| 2 (-4)|14 (+2)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** passive Perception 14
- **Languages** —
- **Challenge** 0

## Traits

***Keen Sight.*** The eagle has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

## Actions

***Talons.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) slashing damage.
```
^statblock

## Environment

mountain, grassland, hill, coastal