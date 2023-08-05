---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Weasel"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "4"
- !!int "12"
- !!int "5"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The weasel has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "GoS"
"image": "/compendium/bestiary/beast/token/giant-weasel.png"
aliases: ["Giant Weasel"]
---
# Giant Weasel
*Source: Monster Manual p. 329, Tales from the Yawning Portal, Ghosts of Saltmarsh*  

```ad-statblock
title: Giant Weasel
![[/6. Mechanics/Bestiary/Beast/Token/giant-weasel.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 2d8|text(9)` (2d8) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|16 (+3)|10 (+0)| 4 (-3)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +5
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** —
- **Challenge** 1/8

## Traits

***Keen Hearing and Smell.*** The weasel has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or smell.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3` (`1d4 + 3`) piercing damage.
```
^statblock

## Environment

grassland, forest, hill