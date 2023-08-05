---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Deer"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "11"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "14"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 12"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "DIP"
"image": "/compendium/bestiary/beast/token/deer.png"
aliases: ["Deer"]
---
# Deer
*Source: Monster Manual p. 321, Hoard of the Dragon Queen, Dragon of Icespire Peak*  

```ad-statblock
title: Deer
![[/6. Mechanics/Bestiary/Beast/Token/deer.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 13 
- **Hit Points** `dice: 1d8|text(4)` (1d8) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|16 (+3)|11 (+0)| 2 (-4)|14 (+2)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 12
- **Languages** —
- **Challenge** 0

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d4` (`1d4`) piercing damage.
```
^statblock

## Environment

grassland, forest