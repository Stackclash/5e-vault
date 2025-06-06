---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Cacophony Crow
---
# [[5. Mechanics\Bestiary\Monstrosity\Cacophony Crow (GRIFFONSSADDLEBAG3).md|Cacophony Crow]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Cacophony crows are dark, but brassy in color and can imitate the sound and even resonance of temple bells. Some crows are trained to take the place of bells in buildings with limited space or resources, and can even be used to tell time, with enough patience, in much the same way that a belltower chimes throughout the day.

In the wild, the crows use their raucous calls to startle and disarm potential prey, or even mislead wandering travelers with a false promise of faraway civilization. A group of cacophony crows is called a crashing.

```statblock
"name": "Cacophony Crow (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d6 + 18"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "17"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "20 ft., fly 60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"damage_resistances": "thunder"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The crow doesn't provoke opportunity attacks when it flies out of an\
      \ enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6\
      \ + 2) piercing damage."
    "name": "Beak"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) piercing damage, and if the target is a Small or smaller creature, it\
      \ is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape DC 13). Until\
      \ this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ and the crow can't use its talons on another target."
    "name": "Talons"
  - "desc": "The crow emits a thunderous screech. Each creature within 30 feet of\
      \ the crow must make a DC 13 Constitution saving throw. On a failed save, a\
      \ creature takes 10 (3d6) thunder damage and is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ until the end of the crow's next turn. On a successful save, a creature takes\
      \ half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]."
    "name": "Screech (Recharge 6)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
