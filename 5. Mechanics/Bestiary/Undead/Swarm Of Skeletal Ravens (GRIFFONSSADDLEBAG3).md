---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/undead
aliases:
  - Swarm of Skeletal Ravens
---
# [[5. Mechanics/Bestiary/Undead/Swarm Of Skeletal Ravens (GRIFFONSSADDLEBAG3).md|Swarm of Skeletal Ravens]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Ravens transformed by necromancy to exist perpetually in life-defying undeath. Often found in places of relentless decay or in the realms and lairs of powerful necromancers and liches.

```statblock
"name": "Swarm Of Skeletal Ravens (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"stats":
- !!int "6"
- !!int "14"
- !!int "8"
- !!int "3"
- !!int "9"
- !!int "3"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_resistances": "piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The swarm can mimic simple sounds it has heard, such as people whispering,\
    \ babies crying, or animals chittering. A creature that hears the sounds can tell\
    \ they are imitations with a successful DC 8 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
    \ check."
  "name": "Mimicry"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny raven. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "The swarm doesn't require air, food, drink, or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm\
    \ has half of its hit points or fewer."
  "name": "Beaks"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
