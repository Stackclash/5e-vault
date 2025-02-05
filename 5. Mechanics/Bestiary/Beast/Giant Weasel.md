---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 'grassland, forest, hill'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/medium
  - monster/type/beast
aliases:
  - Giant Weasel
---
# [[5. Mechanics\Bestiary\Beast\Giant Weasel.md|Giant Weasel]]
*Source: Monster Manual p. 329. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Weasel"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "4"
- !!int "12"
- !!int "5"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The weasel has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-weasel.webp"
```
^statblock

## Environment

grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
