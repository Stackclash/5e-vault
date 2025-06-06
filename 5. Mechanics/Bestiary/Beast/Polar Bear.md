---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'underdark, arctic'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/arctic
  - monster/environment/underdark
  - monster/size/large
  - monster/type/beast
aliases:
  - Polar Bear
---
# [[5. Mechanics\Bestiary\Beast\Polar Bear.md|Polar Bear]]
*Source: Monster Manual p. 334. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Polar Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "16"
  - !!int "2"
  - !!int "13"
  - !!int "7"
"speed": "40 ft., swim 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The bear has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "The bear makes two attacks: one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8\
      \ + 5) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d6 + 5) slashing damage."
    "name": "Claws"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/polar-bear.webp"
```
^statblock

## Environment

underdark, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
