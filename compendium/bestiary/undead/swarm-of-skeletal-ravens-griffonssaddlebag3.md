---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1-4
- monster/size/medium
- monster/type/undead
aliases: ["Swarm of Skeletal Ravens"]
---
# [Swarm of Skeletal Ravens](compendium\bestiary\undead/swarm-of-skeletal-ravens-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Ravens transformed by necromancy to exist perpetually in life-defying undeath. Often found in places of relentless decay or in the realms and lairs of powerful necromancers and liches.

```statblock
"name": "Swarm of Skeletal Ravens (GriffonsSaddlebag3)"
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The swarm can mimic simple sounds it has heard, such as people whispering,\
    \ babies crying, or animals chittering. A creature that hears the sounds can tell\
    \ they are imitations with a successful DC 8 Wisdom ([Insight](/compendium/rules/skills.md#Insight))\
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