---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/forest
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/small
  - monster/type/beast
statblock: inline
aliases:
  - Giant Rat
---
# [[5. Mechanics/Bestiary/Beast/Giant Rat.md|Giant Rat]]
*Source: Monster Manual p. 327. Available in the SRD and the Basic Rules.*

```statblock
"name": "Giant Rat"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "7"
- !!int "15"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The rat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The rat has advantage on an attack roll against a creature if at least\
    \ one of the rat's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "EGW"
- "IDRotF"
- "CM"
- "WBtW"
- "GHLoE"
- "DoDk"
"image": "5. Mechanics/Bestiary/Beast/token/giant-rat.webp"
```
^statblock

## Environment

underdark, forest, swamp, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
