---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'grassland, forest, hill'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/medium
  - monster/type/beast
aliases:
  - Boar
---
# [[5. Mechanics\Bestiary\Beast\Boar.md|Boar]]
*Source: Monster Manual p. 319. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Boar"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "0"
"stats":
  - !!int "13"
  - !!int "11"
  - !!int "12"
  - !!int "2"
  - !!int "9"
  - !!int "5"
"speed": "40 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "If the boar moves at least 20 feet straight toward a target and then\
      \ hits it with a tusk attack on the same turn, the target takes an extra 3 (d6)\
      \ slashing damage. If the target is a creature, it must succeed on a DC 11 Strength\
      \ saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge"
  - "desc": "If the boar takes 7 damage or less that would reduce it to 0 hit points,\
      \ it is reduced to 1 hit point instead."
    "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
      \ + 1) slashing damage."
    "name": "Tusk"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/boar.webp"
```
^statblock

## Environment

grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
