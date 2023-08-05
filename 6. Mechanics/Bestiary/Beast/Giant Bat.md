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
"name": "Giant Bat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bat can't use its blindsight while [[6. Mechanics/Rules/conditions.md#deafened\|deafened]]."
  "name": "Echolocation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bat has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "WDMM"
- "MOT"
- "TCE"
- "PSX"
"image": "/compendium/bestiary/beast/token/giant-bat.png"
aliases: ["Giant Bat"]
---
# Giant Bat
*Source: Monster Manual p. 323, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Plane Shift: Ixalan*  

```ad-statblock
title: Giant Bat
![[/6. Mechanics/Bestiary/Beast/Token/giant-bat.png#token]]
*Large beast, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 4d10|text(22)` (4d10) 
- **Speed** walk 10 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|16 (+3)|11 (+0)| 2 (-4)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft., passive Perception 11
- **Languages** —
- **Challenge** 1/4

## Traits

***Echolocation.*** The bat can't use its blindsight while [[6. Mechanics/Rules/conditions.md#deafened\|deafened]].

***Keen Hearing.*** The bat has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage.
```
^statblock

## Environment

underdark, forest