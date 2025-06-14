---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'forest, grassland'
size: Huge
tags:
  - compendium/src/5e/mpmm
  - monster/cr/4
  - monster/environment/forest
  - monster/environment/grassland
  - monster/size/huge
  - monster/type/beast/dinosaur
aliases:
  - Stegosaurus
---
# [[5. Mechanics\Bestiary\Beast\Stegosaurus (MPMM).md|Stegosaurus]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*

This heavily built dinosaur has rows of plates on its back and a flexible, spiked tail held high to strike predators. It tends to travel in herds of mixed ages.

```statblock
"name": "Stegosaurus (MPMM)"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"modifier": !!int "-1"
"stats":
  - !!int "20"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "11"
  - !!int "5"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 26\
      \ (6d6 + 5) piercing damage."
    "name": "Tail"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/stegosaurus-mpmm.webp"
```
^statblock

## Environment

forest, grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
