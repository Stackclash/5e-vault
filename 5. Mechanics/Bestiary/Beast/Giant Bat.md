---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/environment/underdark
  - monster/size/large
  - monster/type/beast
statblock: inline
aliases:
  - Giant Bat
---
# [[5. Mechanics\Bestiary\Beast\Giant Bat.md|Giant Bat]]
*Source: Monster Manual p. 323, Tasha's Cauldron of Everything. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Bat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "10 ft., fly 60 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The bat can't use its blindsight while [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]]."
  "name": "Echolocation"
- "desc": "The bat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "WDMM"
- "MOT"
- "TCE"
- "PSX"
"image": "5. Mechanics/Bestiary/Beast/token/giant-bat.webp"
```
^statblock

## Environment

underdark, forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
