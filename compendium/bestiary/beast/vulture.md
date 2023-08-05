---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Vulture"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "7"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vulture has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vulture has advantage on an attack roll against a creature if at least\
    \ one of the vulture's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](compendium/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Beak"
"source":
- "MM"
- "RoT"
- "ToA"
- "BGDIA"
- "CM"
- "WBtW"
"image": "/compendium/bestiary/beast/token/vulture.png"
aliases: ["Vulture"]
---
# Vulture
*Source: Monster Manual p. 339, The Rise of Tiamat, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Candlekeep Mysteries, The Wild Beyond the Witchlight*  

```ad-statblock
title: Vulture
![](/compendium/bestiary/beast/token/vulture.png#token)
*Medium beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 1d8 + 1|text(5)` (1d8 + 1) 
- **Speed** walk 10 ft., fly 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|10 (+0)|13 (+1)| 2 (-4)|12 (+1)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Keen Sight and Smell.*** The vulture has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight or smell.

***Pack Tactics.*** The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't [incapacitated](compendium/rules/conditions.md#incapacitated).

## Actions

***Beak.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d4|avg` (`1d4`) piercing damage.
```
^statblock

## Environment

grassland, hill, desert