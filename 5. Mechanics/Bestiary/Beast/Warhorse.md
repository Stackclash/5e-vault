---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: urban
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 2
  - monster\Environment\Urban
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Warhorse
---
# [[5. Mechanics\Bestiary\Beast\Warhorse.md|Warhorse]]
*Source: Monster Manual p. 340, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Warhorse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "60 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "If the horse moves at least 20 feet straight toward a creature and then\
    \ hits it with a hooves attack on the same turn, that target must succeed on a\
    \ DC 14 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the horse can\
    \ make another attack with its hooves against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/warhorse.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
