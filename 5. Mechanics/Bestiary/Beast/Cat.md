---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'grassland, forest, urban, desert'
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/urban
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Cat
---
# [[5. Mechanics/Bestiary/Beast/Cat.md|Cat]]
*Source: Monster Manual p. 320, Curse of Strahd, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Cat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The cat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/cat.webp"
```
^statblock

## Environment

grassland, forest, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
