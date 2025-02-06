---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'forest, arctic'
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\0
  - monster\Environment\Arctic
  - monster\Environment\Forest
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Owl
---
# [[5. Mechanics\Bestiary\Beast\Owl.md|Owl]]
*Source: Monster Manual p. 333. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Owl"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "13"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "3"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- "desc": "The owl has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage."
  "name": "Talons"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/owl.webp"
```
^statblock

## Environment

forest, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
