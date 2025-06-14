---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: grassland
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/grassland
  - monster/size/large
  - monster/type/beast
aliases:
  - Rhinoceros
---
# [[5. Mechanics\Bestiary\Beast\Rhinoceros.md|Rhinoceros]]
*Source: Monster Manual p. 336. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Rhinoceros"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "8"
  - !!int "15"
  - !!int "2"
  - !!int "12"
  - !!int "6"
"speed": "40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "If the rhinoceros moves at least 20 feet straight toward a target and\
      \ then hits it with a gore attack on the same turn, the target takes an extra\
      \ 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on\
      \ a DC 15 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d8 + 5) bludgeoning damage."
    "name": "Gore"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/rhinoceros.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
