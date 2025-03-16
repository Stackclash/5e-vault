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
  - Bat
---
# [[5. Mechanics/Bestiary/Beast/Bat.md|Bat]]
*Source: Monster Manual p. 318, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Bat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "15"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "5 ft., fly 30 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- "desc": "The bat can't use its blindsight while [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]."
  "name": "Echolocation"
- "desc": "The bat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/bat.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
