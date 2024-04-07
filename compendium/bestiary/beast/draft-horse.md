---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-4
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Draft Horse"]
---
# [Draft Horse](compendium/bestiary/beast/draft-horse.md)
*Source: Monster Manual p. 321, Curse of Strahd. Available in the SRD and the Basic Rules.*

```statblock
"name": "Draft Horse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "2"
- !!int "11"
- !!int "7"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 4|avg (2d4 + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
- "SKT"
- "WDH"
- "GoS"
- "BGDIA"
- "PaBTSO"
- "DoDk"
"image": "compendium/bestiary/beast/token/draft-horse.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```