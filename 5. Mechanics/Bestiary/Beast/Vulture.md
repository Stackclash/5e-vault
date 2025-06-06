---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'grassland, hill, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/desert
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/medium
  - monster/type/beast
aliases:
  - Vulture
---
# [[5. Mechanics\Bestiary\Beast\Vulture.md|Vulture]]
*Source: Monster Manual p. 339. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Vulture"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"modifier": !!int "0"
"stats":
  - !!int "7"
  - !!int "10"
  - !!int "13"
  - !!int "2"
  - !!int "12"
  - !!int "4"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The vulture has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on sight or smell."
    "name": "Keen Sight and Smell"
  - "desc": "The vulture has advantage on an attack roll against a creature if at\
      \ least one of the vulture's allies is within 5 feet of the creature and the\
      \ ally isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (d4)\
      \ piercing damage."
    "name": "Beak"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/vulture.webp"
```
^statblock

## Environment

grassland, hill, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
