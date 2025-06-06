---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'grassland, forest'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/forest
  - monster/environment/grassland
  - monster/size/medium
  - monster/type/beast
aliases:
  - Deer
---
# [[5. Mechanics\Bestiary\Beast\Deer.md|Deer]]
*Source: Monster Manual p. 321. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Deer"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d8"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "11"
  - !!int "2"
  - !!int "14"
  - !!int "5"
"speed": "50 ft."
"senses": "passive Perception 12"
"languages": ""
"cr": "0"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (d4)\
      \ piercing damage."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/deer.webp"
```
^statblock

## Environment

grassland, forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
