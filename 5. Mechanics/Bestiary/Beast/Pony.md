---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: urban
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/urban
  - monster/size/medium
  - monster/type/beast
aliases:
  - Pony
---
# [[5. Mechanics\Bestiary\Beast\Pony.md|Pony]]
*Source: Monster Manual p. 335. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Pony"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "13"
  - !!int "2"
  - !!int "11"
  - !!int "7"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) bludgeoning damage."
    "name": "Hooves"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/pony.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
