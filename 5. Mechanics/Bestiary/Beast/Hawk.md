---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Hawk
---
# [[5. Mechanics\Bestiary\Beast\Hawk.md|Hawk]]
*Source: Monster Manual p. 330. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Hawk"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "16"
  - !!int "8"
  - !!int "2"
  - !!int "14"
  - !!int "6"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The hawk has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on sight."
    "name": "Keen Sight"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing\
      \ damage."
    "name": "Talons"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/hawk.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
