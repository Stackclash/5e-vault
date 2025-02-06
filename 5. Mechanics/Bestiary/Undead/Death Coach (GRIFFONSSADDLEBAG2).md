---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 18
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG2)
  - monster\Cr\18
  - monster\Size\Huge
  - monster\Type\Undead
aliases:
  - Death Coach
---
# [[5. Mechanics\Bestiary\Undead\Death Coach (GRIFFONSSADDLEBAG2).md|Death Coach]]
*Source: The Griffon's Saddlebag, Book 2 p. 352*

Known across the land in myth and song as a specter of terror, the death coach is a manifestation of death and harbinger of woe. This smoky black carriage pulled by horses dark as midnight is one with its headless driver. Within the carriage are countless wailing souls, but their screams go unheard. The legends claim that seeing the coach is to court misfortune, and hearing your name uttered by the coachman is an instant death sentence, as he instructs you to board the carriage with the other damned passengers.

## Undead Nature

A death coach doesn't require air, food, drink, or sleep.

```statblock
"name": "Death Coach (GRIFFONSSADDLEBAG2)"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all"
"cr": "18"
"traits":
- "desc": "The death coach's spellcasting ability is Charisma (spell save DC 20. The\
    \ death coach can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]],\
    \ [[5. Mechanics/Spells/Command.md|command]] (as a 2nd-level spell)\n\n1/day each:\
    \ [[5. Mechanics/Spells/Finger Of Death.md|finger of death]], [[5. Mechanics/Spells/Power Word Kill.md|power word kill]]\n\
    \n3/day each: [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]], [[5. Mechanics/Spells/Blight.md|blight]]"
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
- "desc": "The area within 60 feet of the death coach is under the effects of a [[5. Mechanics/Spells/Silence.md|silence]]\
    \ spell. The death coach is immune to this effect."
  "name": "Silencing Aura"
- "desc": "If the death coach moves at least 20 feet straight toward a creature and\
    \ then hits it with a hooves attack on the same turn, that target must succeed\
    \ on a DC 20 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the death coach\
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
    \ must succeed on a DC 20 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ for 1 minute. If the save fails by 5 or more, the target's speed is also reduced\
    \ to 0 until this [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] effect\
    \ ends for it. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] creature\
    \ can repeat the saving throw at the end of each of its turns, ending the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
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
