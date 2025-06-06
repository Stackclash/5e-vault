---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'grassland, forest, hill'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/large
  - monster/type/beast
aliases:
  - Elk
---
# [[5. Mechanics\Bestiary\Beast\E(LK).md|Elk]]
*Source: Monster Manual p. 322. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "E(LK)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "12"
  - !!int "2"
  - !!int "10"
  - !!int "6"
"speed": "50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
      \ it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage.\
      \ If the target is a creature, it must succeed on a DC 13 Strength saving throw\
      \ or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage."
    "name": "Ram"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
      \ creature. Hit: 8 (2d4 + 3) bludgeoning damage."
    "name": "Hooves"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/elk.webp"
```
^statblock

## Environment

grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
