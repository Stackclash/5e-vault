---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/grassland
  - monster/environment/urban
  - monster/size/large
  - monster/type/beast
statblock: inline
aliases:
  - Riding Horse
---
# [[5. Mechanics/Bestiary/Beast/Riding Horse.md|Riding Horse]]
*Source: Monster Manual p. 336, Curse of Strahd. Available in the SRD and the Basic Rules.*

```statblock
"name": "Riding Horse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "2"
- !!int "11"
- !!int "7"
"speed": "60 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d4 + 3|text(8) (2d4 + 3) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
- "SKT"
- "ToA"
- "WDH"
- "DIP"
- "BGDIA"
- "EGW"
- "CRCotN"
- "JttRC"
- "KftGV"
- "GHLoE"
- "DoDk"
"image": "5. Mechanics/Bestiary/Beast/token/riding-horse.webp"
```
^statblock

## Environment

grassland, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
