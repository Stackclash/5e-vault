---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Mongoose
---
# [[5. Mechanics\Bestiary\Beast\Mongoose (KPDM).md|Mongoose]]
*Source: Deep Magic p. 293*

The mongoose is a sleek mammal with tiny, sharp teeth that lives in forests and deserts and eats insects, eggs, and small lizards. The mongoose is a fierce familiar and has even been known to kill snakes.

```statblock
"name": "Mongoose (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "2"
"hit_dice": "1d4"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "14"
  - !!int "10"
  - !!int "2"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., burrow 5 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The mongoose has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "The mongoose has advantage on saving throws against the poison of snakes\
      \ and snakelike monsters."
    "name": "Venom Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 piercing\
      \ damage."
    "name": "Bite"
"source":
  - "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
