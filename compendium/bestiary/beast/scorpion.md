---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Scorpion"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "11"
- !!int "8"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "walk 10 ft."
"senses": "blindsight 10 ft., passive Perception 9"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one creature.\
    \ Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving\
    \ throw, taking 4 (dice: 1d8|avg (1d8)) poison damage on a failed save, or\
    \ half as much damage on a successful one."
  "name": "Sting"
"source":
- "MM"
- "WDMM"
- "PSX"
"image": "/compendium/bestiary/beast/token/scorpion.png"
aliases: ["Scorpion"]
---
# Scorpion
*Source: Monster Manual p. 337, Waterdeep: Dungeon of the Mad Mage, Plane Shift: Ixalan*  

```ad-statblock
title: Scorpion
![](/compendium/bestiary/beast/token/scorpion.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (-4)|11 (+0)| 8 (-1)| 1 (-5)| 8 (-1)| 2 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 10 ft., passive Perception 9
- **Languages** —
- **Challenge** 0

## Actions

***Sting.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (`dice: 1d8|avg` (`1d8`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

desert