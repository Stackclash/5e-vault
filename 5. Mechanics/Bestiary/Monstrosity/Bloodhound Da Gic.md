---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - 'compendium/src/5e/da:gic'
  - monster/cr/4
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Bloodhound
---
# [[5. Mechanics/Bestiary/Monstrosity/Bloodhound Da Gic.md|Bloodhound]]
*Source: Devil's Advocate: A Guide to Infernal Contracts p. 22*

Hellhounds are excellent trackers, but they're mediocre at sniffing out signees who can mask their trail with illusion magic or hide through a spell like Mordenkainen's private sanctum. Deep in the lorehouses of frigid Cania, servants of the archdevil Mephistopheles sought to remedy this problem by experimenting on hellhounds with ancient magic. The result was the bloodhound, a brutish tracker with a nose calibrated to arcane violators. When it's in range, the olfactory glands of a bloodhound's snout are capable of disrupting magical nondetection and illusions.

```statblock
"name": "Bloodhound (DA:GIC)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "12d8 + 22"
"stats":
- !!int "19"
- !!int "15"
- !!int "15"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "50 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Perception": !!int "7"
  "Survival": !!int "7"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., passive Perception 17"
"languages": "understands Infernal but can't speak it"
"cr": "4"
"traits":
- "desc": "The bloodhound knows the most direct path to a tracked creature. If the\
    \ creature is not on the same plane of existence as the bloodhound, it knows the\
    \ closest arcane portal to that plane."
  "name": "Planar Travel"
- "desc": "The bloodhound has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The bloodhound has advantage on an attack roll against a creature if at\
    \ least one of the bloodhound's allies is within 5 feet of the creature and the\
    \ ally isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "The bloodhound makes two attacks: one with its hoof and one with its bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Hoof"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, plus 7 (2d6) fire damage."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: The\
    \ creature is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]. A creature\
    \ can use its action to make a DC 14 Strength check, freeing itself or a creature\
    \ within its reach on a success."
  "name": "Snot (Recharge 5-6)"
"source":
- "DA:GIC"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
