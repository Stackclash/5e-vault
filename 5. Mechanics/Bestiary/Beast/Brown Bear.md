---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'forest, hill, arctic'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/arctic
  - monster/environment/forest
  - monster/environment/hill
  - monster/size/large
  - monster/type/beast
aliases:
  - Brown Bear
---
# [[5. Mechanics\Bestiary\Beast\Brown Bear.md|Brown Bear]]
*Source: Monster Manual p. 319. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Brown Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "34"
"hit_dice": "4d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "16"
  - !!int "2"
  - !!int "13"
  - !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The bear has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "The bear makes two attacks: one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claws"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/brown-bear.webp"
```
^statblock

## Environment

forest, hill, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
