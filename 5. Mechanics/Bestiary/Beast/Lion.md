---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'mountain, grassland, hill, desert'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/desert
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/beast
aliases:
  - Lion
---
# [[5. Mechanics\Bestiary\Beast\Lion.md|Lion]]
*Source: Monster Manual p. 331. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Lion"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "13"
  - !!int "3"
  - !!int "12"
  - !!int "8"
"speed": "50 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The lion has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The lion has advantage on an attack roll against a creature if at least\
      \ one of the lion's allies is within 5 feet of the creature and the ally isn't\
      \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
  - "desc": "If the lion moves at least 20 feet straight toward a creature and then\
      \ hits it with a claw attack on the same turn, that target must succeed on a\
      \ DC 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the lion\
      \ can make one bite attack against it as a bonus action."
    "name": "Pounce"
  - "desc": "With a 10-foot running start, the lion can long jump up to 25 feet."
    "name": "Running Leap"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Claw"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/lion.webp"
```
^statblock

## Environment

mountain, grassland, hill, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
