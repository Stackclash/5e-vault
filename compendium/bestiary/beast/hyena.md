---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: grassland, forest, hill, desert
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/0
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
aliases: ["Hyena"]
---
# [Hyena](compendium\bestiary\beast/hyena.md)
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
    \ [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "compendium/bestiary/beast/token/hyena.webp"
```
^statblock

## Environment

grassland, forest, hill, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```