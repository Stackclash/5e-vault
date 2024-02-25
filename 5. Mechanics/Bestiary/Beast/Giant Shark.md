---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/underwater
  - monster/size/huge
  - monster/type/beast
statblock: inline
aliases:
  - Giant Shark
---
# [[5. Mechanics\Bestiary\Beast\Giant Shark.md|Giant Shark]]
*Source: Monster Manual p. 328. Available in the SRD and the Basic Rules.*

A giant shark is 30 feet long and normally found in deep oceans. Utterly fearless, it preys on anything that crosses its path, including whales and ships.

```statblock
"name": "Giant Shark"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "11"
- !!int "21"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "swim 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": ""
"cr": "5"
"traits":
- "desc": "The shark has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d10 + 6|avg (3d10 + 6) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "ToA"
- "GoS"
- "DIP"
- "SDW"
- "LR"
- "IDRotF"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "PSX"
"image": "5. Mechanics/Bestiary/Beast/token/giant-shark.webp"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
