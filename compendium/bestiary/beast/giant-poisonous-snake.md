---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Poisonous Snake"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "18"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d4 + 4|avg (1d4 + 4) piercing damage, and the target must make\
    \ a DC 11 Constitution saving throw, taking 10 (dice: 3d6|avg (3d6)) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "SKT"
- "ToA"
- "GoS"
- "MOT"
- "TCE"
- "WBtW"
"image": "/compendium/bestiary/beast/token/giant-poisonous-snake.png"
aliases: ["Giant Poisonous Snake"]
---
# Giant Poisonous Snake
*Source: Monster Manual p. 327, Curse of Strahd, Storm King's Thunder, Tomb of Annihilation, Ghosts of Saltmarsh, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight*  

```ad-statblock
title: Giant Poisonous Snake
![](/compendium/bestiary/beast/token/giant-poisonous-snake.png#token)
*Medium beast, Unaligned*

- **Armor Class** 14 
- **Hit Points** `dice: 2d8 + 2|text(11)` (2d8 + 2) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|18 (+4)|13 (+1)| 2 (-4)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** blindsight 10 ft., passive Perception 12
- **Languages** —
- **Challenge** 1/4

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 1d4 + 4|avg` (`1d4 + 4`) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (`dice: 3d6|avg` (`3d6`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark, grassland, forest, swamp, urban, desert