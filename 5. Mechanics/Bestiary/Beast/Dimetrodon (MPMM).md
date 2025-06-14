---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'coastal, swamp'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/coastal
  - monster/environment/swamp
  - monster/size/medium
  - monster/type/beast/dinosaur
aliases:
  - Dimetrodon
---
# [[5. Mechanics\Bestiary\Beast\Dimetrodon (MPMM).md|Dimetrodon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*

This sail-backed reptile is commonly found in areas where dinosaurs live. It hunts on shores and in shallow water, filling a similar role to a crocodile.

```statblock
"name": "Dimetrodon (MPMM)"
"size": "Medium"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "30 ft., swim 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
      \ + 2) piercing damage."
    "name": "Bite"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/dimetrodon-mpmm.webp"
```
^statblock

## Environment

coastal, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
