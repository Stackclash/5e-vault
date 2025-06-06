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
  - Ape
---
# [[5. Mechanics\Bestiary\Beast\Ape.md|Ape]]
*Source: Monster Manual p. 317. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Ape"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "The ape makes two fist attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage."
    "name": "Fist"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit:\
      \ 6 (1d6 + 3) bludgeoning damage."
    "name": "Rock"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/ape.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
