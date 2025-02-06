---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'forest, hill, arctic'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1
  - monster\Environment\Arctic
  - monster\Environment\Forest
  - monster\Environment\Hill
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Brown Bear
---
# [[5. Mechanics\Bestiary\Beast\Brown Bear.md|Brown Bear]]
*Source: Monster Manual p. 319. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Brown Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
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
- "desc": "The bear has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/brown-bear.webp"
```
^statblock

## Environment

forest, hill, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
