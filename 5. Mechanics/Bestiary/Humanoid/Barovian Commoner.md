---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Barovian Commoner
---
# [[5. Mechanics/Bestiary/Humanoid/Barovian Commoner.md|Barovian Commoner]]
*Source: Curse of Strahd p. 29*

```statblock
"name": "Barovian Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+2 (+2) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6|text(3) (1d6) piercing damage."
  "name": "Pitchfork"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/barovian-commoner-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
