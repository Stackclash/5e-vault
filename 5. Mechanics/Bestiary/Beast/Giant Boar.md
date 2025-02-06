---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'grassland, forest, hill'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\2
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Hill
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Giant Boar
---
# [[5. Mechanics\Bestiary\Beast\Giant Boar.md|Giant Boar]]
*Source: Monster Manual p. 323. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Boar"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "7"
- !!int "5"
"speed": "40 ft."
"senses": "passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing\
    \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Charge"
- "desc": "If the boar takes 10 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Tusk"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-boar.webp"
```
^statblock

## Environment

grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
