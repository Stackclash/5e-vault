---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 18
environments: 
size: Huge
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/18
- monster/size/huge
- monster/type/undead
aliases: ["Death Coach"]
---
# [Death Coach](compendium\bestiary\undead/death-coach-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 352*

Known across the land in myth and song as a specter of terror, the death coach is a manifestation of death and harbinger of woe. This smoky black carriage pulled by horses dark as midnight is one with its headless driver. Within the carriage are countless wailing souls, but their screams go unheard. The legends claim that seeing the coach is to court misfortune, and hearing your name uttered by the coachman is an instant death sentence, as he instructs you to board the carriage with the other damned passengers.

## Undead Nature

A death coach doesn't require air, food, drink, or sleep.

```statblock
"name": "Death Coach (GriffonsSaddlebag2)"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d12 + 80"
"stats":
- !!int "14"
- !!int "16"
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "23"
"speed": "60 ft., fly 50 ft. (hover)"
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "9"
"skillsaves":
  "Intimidation": !!int "18"
  "Investigation": !!int "8"
  "Perception": !!int "10"
  "Survival": !!int "16"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained)"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all"
"cr": "18"
"traits":
- "desc": "The death coach's spellcasting ability is Charisma (spell save DC 20. The\
    \ death coach can innately cast the following spells, requiring no material components:\n\
    \nAt will: [blindness/deafness](compendium/spells/blindness-deafness.md),\
    \ [command](compendium/spells/command.md) (as a 2nd-level spell)\n\n1/day each:\
    \ [finger of death](compendium/spells/finger-of-death.md), [power word kill](compendium/spells/power-word-kill.md)\n\
    \n3/day each: [bestow curse](compendium/spells/bestow-curse.md), [blight](compendium/spells/blight.md)"
  "name": "Innate Spellcasting"
- "desc": "The death coach can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "If the death coach fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The death coach has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The area within 60 feet of the death coach is under the effects of a [silence](compendium/spells/silence.md)\
    \ spell. The death coach is immune to this effect."
  "name": "Silencing Aura"
- "desc": "If the death coach moves at least 20 feet straight toward a creature and\
    \ then hits it with a hooves attack on the same turn, that target must succeed\
    \ on a DC 20 Strength saving throw or be knocked [prone](/compendium/rules/conditions.md#Prone).\
    \ If the target is [prone](/compendium/rules/conditions.md#Prone), the death coach\
    \ can make another attack with its hooves against the target as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 28 (4d10\
    \ + 6) force damage."
  "name": "Hooves"
- "desc": "The death coach enters the Ethereal Plane from the Material Plane, or vice\
    \ versa. It is visible on the Material Plane while it is in the Border Ethereal,\
    \ and vice versa, yet it can't affect or be affected by anything on the other\
    \ plane."
  "name": "Etherealness (Ghost)"
"legendary_actions":
- "desc": "The death coach can take 3 legendary actions, choosing from the options\
    \ below. Only one legendary action can be used at a time and only at the end of\
    \ another creature's turn. The death coach regains spent legendary actions at\
    \ the start of its turn."
  "name": ""
- "desc": "The death coach moves up to its speed."
  "name": "Move"
- "desc": "Each creature of the death coach's choice that is within 30 feet of it\
    \ must succeed on a DC 20 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target's speed is also reduced\
    \ to 0 until this [frightened](/compendium/rules/conditions.md#Frightened) effect\
    \ ends for it. A [frightened](/compendium/rules/conditions.md#Frightened) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the [frightened](/compendium/rules/conditions.md#Frightened)\
    \ condition on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to the death coach's Dreadful\
    \ Presence for the next 24 hours."
  "name": "Dreadful Presence (Costs 2 Actions)"
- "desc": "The death coach casts a spell."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```