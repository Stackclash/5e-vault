---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/xge
  - monster/cr/1
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Hound of Ill Omen
---
# [[5. Mechanics\Bestiary\Monstrosity\Hound Of Ill Omen (XGE).md|Hound of Ill Omen]]
*Source: Xanathar's Guide to Everything p. 50*

```statblock
"name": "Hound Of Ill Omen (XGE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "15"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "50 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The hound has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "The hound has advantage on an attack roll against a creature if at least\
      \ one of the hound's allies is within 5 feet of the creature and the ally isn't\
      \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
  - "desc": "The hound appears with a number of temporary hit points equal to half\
      \ your sorcerer level."
    "name": "Cloak of Shadows"
  - "desc": "The hound can move through other creatures and objects as if they were\
      \ difficult terrain. The hound takes 5 force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "At the start of its turn, the hound automatically knows its target's\
      \ location. If the target was hidden, it is no longer hidden from the hound."
    "name": "Omen Sight"
  - "desc": "On its turn, it can move only toward its target by the most direct route,\
      \ and it can use its action only to attack its target. The hound can make opportunity\
      \ attacks, but only against its target. Additionally, while the hound is within\
      \ 5 feet of the target, the target has disadvantage on saving throws against\
      \ any spell you cast. The hound disappears if it is reduced to 0 hit points,\
      \ if its target is reduced to 0 hit points, or after 5 minutes."
    "name": "Ever at Your Heels"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) piercing damage. If the target is a creature, it must succeed on\
      \ a DC 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Bite"
"source":
  - "XGE"
"image": "5. Mechanics/Bestiary/Monstrosity/token/hound-of-ill-omen-xge.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
