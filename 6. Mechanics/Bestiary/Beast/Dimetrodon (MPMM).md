---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/swamp
- monster/size/medium
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
"name": "Dimetrodon"
"size": "Medium"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., swim 20 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/dimetrodon.png"
aliases: ["Dimetrodon"]
---
# Dimetrodon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*  

This sail-backed reptile is commonly found in areas where dinosaurs live. It hunts on shores and in shallow water, filling a similar role to a crocodile.

```ad-statblock
title: Dimetrodon
![[/6. Mechanics/Bestiary/Beast/Token/dimetrodon.png#token]]
*Medium beast(dinosaur), Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 3d8 + 6|text(19)` (3d8 + 6) 
- **Speed** walk 30 ft., swim 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|10 (+0)|15 (+2)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** passive Perception 12
- **Languages** —
- **Challenge** 1/4

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 2` (`2d6 + 2`) piercing damage.
```
^statblock

## Environment

coastal, swamp