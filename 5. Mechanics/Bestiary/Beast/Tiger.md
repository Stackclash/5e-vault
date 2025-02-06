---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'grassland, forest'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Tiger
---
# [[5. Mechanics\Bestiary\Beast\Tiger.md|Tiger]]
*Source: Monster Manual p. 339. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Tiger"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "The tiger has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the tiger can\
    \ make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/tiger.webp"
```
^statblock

## Environment

grassland, forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
