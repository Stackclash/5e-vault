---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/forest
  - monster/environment/hill
  - monster/size/small
  - monster/type/beast
statblock: inline
aliases:
  - Baboon
---
# [[5. Mechanics\Bestiary\Beast\Baboon.md|Baboon]]
*Source: Monster Manual p. 318, Curse of Strahd. Available in the SRD and the Basic Rules.*

```statblock
"name": "Baboon"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "11"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "30 ft., climb 30 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- "desc": "The baboon has advantage on an attack roll against a creature if at least\
    \ one of the baboon's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "ToA"
- "CM"
- "CoS"
- "WBtW"
- "KftGV"
"image": "5. Mechanics/Bestiary/Beast/token/baboon.webp"
```
^statblock

## Environment

forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
