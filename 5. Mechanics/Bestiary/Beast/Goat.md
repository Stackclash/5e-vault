---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/urban
  - monster/size/medium
  - monster/type/beast
statblock: inline
aliases:
  - Goat
---
# [[5. Mechanics/Bestiary/Beast/Goat.md|Goat]]
*Source: Monster Manual p. 330, Curse of Strahd. Available in the SRD and the Basic Rules.*

```statblock
"name": "Goat"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning\
    \ damage. If the target is a creature, it must succeed on a DC 10 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
- "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Sure-Footed"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "CoS"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "WBtW"
- "PaBTSO"
"image": "5. Mechanics/Bestiary/Beast/token/goat.webp"
```
^statblock

## Environment

mountain, grassland, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
