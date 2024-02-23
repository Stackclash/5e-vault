---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/desert
  - monster/size/large
  - monster/type/beast
statblock: inline
aliases:
  - Camel
---
# [[5. Mechanics\Bestiary\Beast\Camel.md|Camel]]
*Source: Monster Manual p. 320. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Camel"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "15"
"hit_dice": "2d10 + 4"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "2"
- !!int "8"
- !!int "5"
"speed": "50 ft."
"senses": "passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Bite"
"source":
- "MM"
- "GoS"
- "CM"
"image": "5. Mechanics/Bestiary/Beast/token/camel.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
