---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
statblock: inline
aliases:
  - Hawk
---
# [[5. Mechanics\Bestiary\Beast\Hawk.md|Hawk]]
*Source: Monster Manual p. 330. Available in the SRD and the Basic Rules.*

```statblock
"name": "Hawk"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "5"
- !!int "16"
- !!int "8"
- !!int "2"
- !!int "14"
- !!int "6"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
- "desc": "The hawk has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: 1 slashing damage."
  "name": "Talons"
"source":
- "MM"
- "WDH"
- "BGDIA"
- "IDRotF"
- "CM"
- "WBtW"
- "JttRC"
"image": "5. Mechanics/Bestiary/Beast/token/hawk.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
