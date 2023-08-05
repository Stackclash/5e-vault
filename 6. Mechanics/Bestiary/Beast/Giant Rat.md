---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Rat"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "7"
- !!int "15"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The rat has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The rat has advantage on an attack roll against a creature if at least\
    \ one of the rat's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "EGW"
- "IDRotF"
- "CM"
- "WBtW"
"image": "/compendium/bestiary/beast/token/giant-rat.png"
aliases: ["Giant Rat"]
---
# Giant Rat
*Source: Monster Manual p. 327, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight*  

```ad-statblock
title: Giant Rat
![[/6. Mechanics/Bestiary/Beast/Token/giant-rat.png#token]]
*Small beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|15 (+2)|11 (+0)| 2 (-4)|10 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** —
- **Challenge** 1/8

## Traits

***Keen Smell.*** The rat has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on smell.

***Pack Tactics.*** The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

underdark, forest, swamp, urban