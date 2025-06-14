---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: 'forest, hill, urban'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/urban
  - monster/size/medium
  - monster/type/beast
aliases:
  - Mastiff
---
# [[5. Mechanics\Bestiary\Beast\Mastiff.md|Mastiff]]
*Source: Monster Manual p. 332, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Mastiffs are impressive hounds prized by humanoids for their loyalty and keen senses. Mastiffs can be trained as guard dogs, hunting dogs, and war dogs. Halflings and other Small humanoids ride them as mounts.

```statblock
"name": "Mastiff"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "14"
  - !!int "12"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
  - "desc": "The mastiff has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
      \ + 1) piercing damage. If the target is a creature, it must succeed on a DC\
      \ 11 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Bite"
"source":
  - "MM"
  - "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/mastiff.webp"
```
^statblock

## Environment

forest, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
