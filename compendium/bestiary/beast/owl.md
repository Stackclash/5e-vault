---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/forest
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Owl"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "13"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The owl has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: 1 slashing damage."
  "name": "Talons"
"source":
- "MM"
- "RoT"
- "IMR"
- "IDRotF"
- "CM"
"image": "/compendium/bestiary/beast/token/owl.png"
aliases: ["Owl"]
---
# Owl
*Source: Monster Manual p. 333, The Rise of Tiamat, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries*  

```ad-statblock
title: Owl
![](/compendium/bestiary/beast/token/owl.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 5 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (-4)|13 (+1)| 8 (-1)| 2 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +3
- **Senses** darkvision 120 ft., passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Flyby.*** The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.

***Keen Hearing and Sight.*** The owl has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or sight.

## Actions

***Talons.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: 1 slashing damage.
```
^statblock

## Environment

forest, arctic