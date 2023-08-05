---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Brown Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "34"
"hit_dice": "4d10 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bear has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "GoS"
- "IMR"
- "MOT"
- "IDRotF"
- "WBtW"
"image": "/compendium/bestiary/beast/token/brown-bear.png"
aliases: ["Brown Bear"]
---
# Brown Bear
*Source: Monster Manual p. 319, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*  

```ad-statblock
title: Brown Bear
![[/6. Mechanics/Bestiary/Beast/Token/brown-bear.png#token]]
*Large beast, Unaligned*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 4d10 + 12|text(34)` (4d10 + 12) 
- **Speed** walk 40 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|10 (+0)|16 (+3)| 2 (-4)|13 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1

## Traits

***Keen Smell.*** The bear has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on smell.

## Actions

***Multiattack.*** The bear makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4` (`1d8 + 4`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4` (`2d6 + 4`) slashing damage.
```
^statblock

## Environment

forest, hill, arctic