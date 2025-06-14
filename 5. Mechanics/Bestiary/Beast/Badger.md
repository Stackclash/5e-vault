---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: forest
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/forest
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Badger
---
# [[5. Mechanics\Bestiary\Beast\Badger.md|Badger]]
*Source: Monster Manual p. 318. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Badger"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"modifier": !!int "0"
"stats":
  - !!int "4"
  - !!int "11"
  - !!int "12"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "20 ft., burrow 5 ft."
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The badger has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing\
      \ damage."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/badger.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
