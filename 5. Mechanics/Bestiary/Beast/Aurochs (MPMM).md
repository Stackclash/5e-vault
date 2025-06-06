---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'grassland, hill, mountain'
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/beast/cattle
aliases:
  - Aurochs
---
# [[5. Mechanics\Bestiary\Beast\Aurochs (MPMM).md|Aurochs]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 71, Volo's Guide to Monsters p. 207*

An aurochs is a large, fierce bovine with jutting horns. In many lands, herds of aurochs roam free, while elsewhere orcs and humans train them from an early age to carry riders into combat.

## Cattle

Many kinds of cattle roam the multiverse, some of them domesticated and others feral. In many cultures, cattle are almost like family to the folk who tend to them.

```statblock
"name": "Aurochs (MPMM)"
"size": "Large"
"type": "beast"
"subtype": "cattle"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "4d10 + 16"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "19"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "50 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "2"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d8 + 5) piercing damage. If the aurochs moved at least 20 feet straight\
      \ toward the target immediately before the hit, the target takes an extra 9\
      \ (2d8) piercing damage, and the target must succeed on a DC 15 Strength saving\
      \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]] if it is\
      \ a creature."
    "name": "Gore"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/aurochs-mpmm.webp"
```
^statblock

## Environment

grassland, hill, mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
