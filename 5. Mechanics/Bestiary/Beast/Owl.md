---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'forest, arctic'
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/arctic
  - monster/environment/forest
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Owl
---
# [[5. Mechanics\Bestiary\Beast\Owl.md|Owl]]
*Source: Monster Manual p. 333. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Owl"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "1"
"stats":
  - !!int "3"
  - !!int "13"
  - !!int "8"
  - !!int "2"
  - !!int "12"
  - !!int "7"
"speed": "5 ft., fly 60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
      \ reach."
    "name": "Flyby"
  - "desc": "The owl has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or sight."
    "name": "Keen Hearing and Sight"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing\
      \ damage."
    "name": "Talons"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/owl.webp"
```
^statblock

## Environment

forest, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
