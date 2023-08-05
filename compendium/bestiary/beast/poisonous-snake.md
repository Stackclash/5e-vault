---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/swamp
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Poisonous Snake"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "16"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving\
    \ throw, taking 5 (dice: 2d4|avg (2d4)) poison damage on a failed save, or\
    \ half as much damage on a successful one."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "ToA"
- "GoS"
- "IMR"
"image": "/compendium/bestiary/beast/token/poisonous-snake.png"
aliases: ["Poisonous Snake"]
---
# Poisonous Snake
*Source: Monster Manual p. 334, Tales from the Yawning Portal, Tomb of Annihilation, Ghosts of Saltmarsh, Infernal Machine Rebuild*  

```ad-statblock
title: Poisonous Snake
![](/compendium/bestiary/beast/token/poisonous-snake.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 1d4|text(2)` (1d4) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (-4)|16 (+3)|11 (+0)| 1 (-5)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 10 ft., passive Perception 10
- **Languages** —
- **Challenge** 1/8

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (`dice: 2d4|avg` (`2d4`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

grassland, forest, swamp, hill, desert, coastal