---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'grassland, forest, hill, desert'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\0
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Hill
  - monster\Size\Medium
  - monster\Type\Beast
aliases:
  - Hyena
---
# [[5. Mechanics\Bestiary\Beast\Hyena.md|Hyena]]
*Source: Monster Manual p. 331. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Hyena"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The hyena has advantage on an attack roll against a creature if at least\
    \ one of the hyena's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/hyena.webp"
```
^statblock

## Environment

grassland, forest, hill, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
