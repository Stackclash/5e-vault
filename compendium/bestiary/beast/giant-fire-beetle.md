---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Fire Beetle"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d6 + 1"
"stats":
- !!int "8"
- !!int "10"
- !!int "12"
- !!int "1"
- !!int "7"
- !!int "3"
"speed": "walk 30 ft."
"senses": "blindsight 30 ft., passive Perception 8"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beetle sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 ft.."
  "name": "Illumination"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 - 1|avg (1d6 - 1) slashing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "WDH"
- "WDMM"
- "PSX"
"image": "/compendium/bestiary/beast/token/giant-fire-beetle.png"
aliases: ["Giant Fire Beetle"]
---
# Giant Fire Beetle
*Source: Monster Manual p. 325, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Plane Shift: Ixalan*  

A giant fire beetle is a nocturnal creature that takes its name from a pair of glowing glands that give off light. Miners and adventurers prize these creatures, for a giant fire beetle's glands continue to shed light for `dice: 1d6|avg` (`1d6`) days after the beetle dies. Giant fire beetles are most commonly found underground and in dark forests.

```ad-statblock
title: Giant Fire Beetle
![](/compendium/bestiary/beast/token/giant-fire-beetle.png#token)
*Small beast, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 1d6 + 1|text(4)` (1d6 + 1) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|10 (+0)|12 (+1)| 1 (-5)| 7 (-2)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft., passive Perception 8
- **Languages** —
- **Challenge** 0

## Traits

***Illumination.*** The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft..

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+1` (+1 to hit), reach 5 ft., one target. Hit: `dice: 1d6 - 1|avg` (`1d6 - 1`) slashing damage.
```
^statblock

## Environment

underdark