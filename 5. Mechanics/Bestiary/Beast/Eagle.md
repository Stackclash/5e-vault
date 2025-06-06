---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'mountain, grassland, hill, coastal'
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/coastal
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/small
  - monster/type/beast
aliases:
  - Eagle
---
# [[5. Mechanics\Bestiary\Beast\Eagle.md|Eagle]]
*Source: Monster Manual p. 322. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Eagle"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "15"
  - !!int "10"
  - !!int "2"
  - !!int "14"
  - !!int "7"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The eagle has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on sight."
    "name": "Keen Sight"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) slashing damage."
    "name": "Talons"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/eagle.webp"
```
^statblock

## Environment

mountain, grassland, hill, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
