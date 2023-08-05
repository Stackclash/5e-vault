---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Hawk"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "5"
- !!int "16"
- !!int "8"
- !!int "2"
- !!int "14"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 1 slashing damage."
  "name": "Talons"
"source":
- "MM"
- "WDH"
- "BGDIA"
- "IDRotF"
- "CM"
- "WBtW"
- "JttRC"
"image": "/compendium/bestiary/beast/token/hawk.png"
aliases: ["Hawk"]
---
# Hawk
*Source: Monster Manual p. 330, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*  

```ad-statblock
title: Hawk
![](/compendium/bestiary/beast/token/hawk.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 10 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 5 (-3)|16 (+3)| 8 (-1)| 2 (-4)|14 (+2)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** passive Perception 14
- **Languages** —
- **Challenge** 0

## Traits

***Keen Sight.*** The hawk has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

## Actions

***Talons.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: 1 slashing damage.
```
^statblock