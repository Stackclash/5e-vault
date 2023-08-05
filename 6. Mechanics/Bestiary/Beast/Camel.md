---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Camel"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "15"
"hit_dice": "2d10 + 4"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "2"
- !!int "8"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Bite"
"source":
- "MM"
- "GoS"
- "CM"
"image": "/compendium/bestiary/beast/token/camel.png"
aliases: ["Camel"]
---
# Camel
*Source: Monster Manual p. 320, Ghosts of Saltmarsh, Candlekeep Mysteries*  

```ad-statblock
title: Camel
![[/6. Mechanics/Bestiary/Beast/Token/camel.png#token]]
*Large beast, Unaligned*

- **Armor Class** 9 
- **Hit Points** `dice: 2d10 + 4|text(15)` (2d10 + 4) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)| 8 (-1)|14 (+2)| 2 (-4)| 8 (-1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 9
- **Languages** —
- **Challenge** 1/8

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4` (`1d4`) bludgeoning damage.
```
^statblock

## Environment

desert