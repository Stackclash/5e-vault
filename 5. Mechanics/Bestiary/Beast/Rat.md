---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'swamp, urban'
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\0
  - monster\Environment\Swamp
  - monster\Environment\Urban
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Rat
---
# [[5. Mechanics\Bestiary\Beast\Rat.md|Rat]]
*Source: Monster Manual p. 335. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Rat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "11"
- !!int "9"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "20 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- "desc": "The rat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/rat.webp"
```
^statblock

## Environment

swamp, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
