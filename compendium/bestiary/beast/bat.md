---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Bat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "15"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 5 ft., fly 30 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bat can't use its blindsight while [deafened](compendium/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bat has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one creature.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "IDRotF"
- "WBtW"
- "PSX"
"image": "/compendium/bestiary/beast/token/bat.png"
aliases: ["Bat"]
---
# Bat
*Source: Monster Manual p. 318, Curse of Strahd, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight, Plane Shift: Ixalan*  

```ad-statblock
title: Bat
![](/compendium/bestiary/beast/token/bat.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 5 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (-4)|15 (+2)| 8 (-1)| 2 (-4)|12 (+1)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft., passive Perception 11
- **Languages** —
- **Challenge** 0

## Traits

***Echolocation.*** The bat can't use its blindsight while [deafened](compendium/rules/conditions.md#deafened).

***Keen Hearing.*** The bat has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+0` (+0 to hit), reach 5 ft., one creature. Hit: 1 piercing damage.
```
^statblock