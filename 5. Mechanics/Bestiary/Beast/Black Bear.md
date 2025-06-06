---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: forest
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/forest
  - monster/size/medium
  - monster/type/beast
aliases:
  - Black Bear
---
# [[5. Mechanics\Bestiary\Beast\Black Bear.md|Black Bear]]
*Source: Monster Manual p. 318. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Black Bear"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "14"
  - !!int "2"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The bear has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "The bear makes two attacks: one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) slashing damage."
    "name": "Claws"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/black-bear.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
