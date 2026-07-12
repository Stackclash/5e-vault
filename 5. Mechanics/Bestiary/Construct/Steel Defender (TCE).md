---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Unaligned
ac: 15
hp: >-
  2 + your Intelligence modifier + five times your artificer level (the defender
  has a number of Hit Dice [d8s] equal to your artificer level)
type: construct
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/construct
aliases:
  - Steel Defender
cr: null
---
# [[/5. Mechanics/Bestiary/Construct/Steel Defender (TCE).md|Steel Defender]]
*Source: Tasha's Cauldron of Everything p. 19*

```statblock
"name": "Steel Defender (TCE)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": "2 + your Intelligence modifier + five times your artificer level (the defender\
  \ has a number of Hit Dice [d8s] equal to your artificer level)"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "40 ft."
"saves":
  - "name": "Dexterity"
    "desc": "+1 plus PB"
  - "name": "Constitution"
    "desc": "+2 plus PB"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+2 plus PB"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+0 plus PB × 2"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 0"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The defender can't be [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]."
    "name": "Vigilant"
"actions":
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target you can see. *Hit:* 1d8 + PB force damage."
    "name": "Force-Empowered Rend"
  - "desc": "The magical mechanisms inside the defender restore 2d8 + PB hit points\
      \ to itself or to one construct or object within 5 feet of it."
    "name": "Repair (3/Day)"
"reactions":
  - "desc": "The defender imposes disadvantage on the attack roll of one creature\
      \ it can see that is within 5 feet of it, provided the attack roll is against\
      \ a creature other than the defender."
    "name": "Deflect Attack"
"source":
  - "TCE"
"image": "/5. Mechanics/Bestiary/Construct/token/steel-defender-tce.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
