---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/arctic
- monster/environment/forest
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Brown Bear"]
---
# [Brown Bear](compendium/bestiary/beast/brown-bear.md)
*Source: Monster Manual p. 319. Available in the SRD and the Basic Rules.*

```statblock
"name": "Brown Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "34"
"hit_dice": "4d10 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "The bear has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "GoS"
- "IMR"
- "MOT"
- "IDRotF"
- "WBtW"
- "BMT"
"image": "compendium/bestiary/beast/token/brown-bear.webp"
```
^statblock

## Environment

forest, hill, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```