---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/5
  - monster/size/large
  - monster/type/construct
aliases:
  - Preserver Worker
---
# [[5. Mechanics\Bestiary\Construct\Preserver Worker (GRIFFONSSADDLEBAG3).md|Preserver Worker]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

By far the most commonplace Preserver model across the Lunar Sea, Preserver workers are Large constructs that can handle most of the derelict ship's tasks with minimal input or instruction.

```statblock
"name": "Preserver Worker (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "5"
  - !!int "10"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
  - "desc": "If damage reduces the worker to 0 hit points, it drops to 1 hit point\
      \ instead. This trait doesn't function if the damage is from a critical hit.\
      \ When this trait is activated, the worker gains a +5 bonus to its AC and all\
      \ saving throws until the end of its next turn."
    "name": "Fail-Safe (1/Day)"
  - "desc": "The worker is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The worker can take the Dash, Help, or Use an Object action as a bonus\
      \ action."
    "name": "Utilitarian"
"actions":
  - "desc": "The worker makes three attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 60 ft., one target. Hit: 11\
      \ (2d8 + 2) force damage."
    "name": "Laser"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
