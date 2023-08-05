---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/underdark
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Cave Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "20"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "walk 40 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
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
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 5|avg (1d8 + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 5|avg (2d6 + 5) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "TftYP"
- "WDMM"
"image": "/compendium/bestiary/beast/token/cave-bear.png"
aliases: ["Cave Bear"]
---
# Cave Bear
*Source: Monster Manual p. 334, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage*  

```ad-statblock
title: Cave Bear
![](/compendium/bestiary/beast/token/cave-bear.png#token)
*Large beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 5d10 + 15|text(42)` (5d10 + 15) 
- **Speed** walk 40 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|10 (+0)|16 (+3)| 2 (-4)|13 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** —
- **Challenge** 2

## Traits

***Keen Smell.*** The bear has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

## Actions

***Multiattack.*** The bear makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 5|avg` (`1d8 + 5`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 5|avg` (`2d6 + 5`) slashing damage.
```
^statblock

## Environment

forest, underdark