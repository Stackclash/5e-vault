---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Weasel"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "16"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "3"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The weasel has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one creature.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "IDRotF"
- "WBtW"
"image": "/compendium/bestiary/beast/token/weasel.png"
aliases: ["Weasel"]
---
# Weasel
*Source: Monster Manual p. 340, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*  

```ad-statblock
title: Weasel
![[/6. Mechanics/Bestiary/Beast/Token/weasel.png#token]]
*Tiny beast, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (-4)|16 (+3)| 8 (-1)| 2 (-4)|12 (+1)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +5
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Keen Hearing and Smell.*** The weasel has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or smell.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one creature. Hit: 1 piercing damage.
```
^statblock