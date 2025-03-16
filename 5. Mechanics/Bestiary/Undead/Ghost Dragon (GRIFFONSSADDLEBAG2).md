---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 19
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/19
  - monster/size/huge
  - monster/type/undead
aliases:
  - Ghost Dragon
---
# [[5. Mechanics/Bestiary/Undead/Ghost Dragon (GRIFFONSSADDLEBAG2).md|Ghost Dragon]]
*Source: The Griffon's Saddlebag, Book 2 p. 355*

In pursuit of knowledge or power, occasionally the soul of a chromatic dragon will accidentally or willfully ascend from its mortal trappings to terrorize the Ethereal Plane. Most often, a slain dragon will follow a pattern similar to other mortal creatures, becoming so consumed by the desire for vengeance that their incorporeal essence lingers. These vicious creatures are not to be underestimated upon observing their singleminded fury, for their bone-chilling breath weapon and life-sapping melee onslaught are truly formidable.

## Undead Nature

A ghost dragon doesn't require air, food, drink, or sleep.

```statblock
"name": "Ghost Dragon (GRIFFONSSADDLEBAG2)"
"size": "Huge"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "13"
- !!int "12"
- !!int "22"
- !!int "15"
- !!int "14"
- !!int "23"
"speed": "0 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "14"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "19"
"traits":
- "desc": "The dragon can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- "desc": "The dragon can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The dragon can use its Horrifying Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 17\
    \ (2d10 + 6) necrotic damage, plus 5 (1d10) cold damage."
  "name": "Withering Bite"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) necrotic damage."
  "name": "Withering Claw"
- "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 10\
    \ (2d8 + 1) necrotic damage."
  "name": "Withering Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 20 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] creature can\
    \ repeat the saving throw at the end of each of its turns, ending the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ condition on itself of a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to the dragon's Horrifying\
    \ Presence for the next 24 hours. The aging effect can be reversed with a [[5. Mechanics/Spells/Greater Restoration.md|greater\
    \ restoration]] spell, but only within\
    \ 24 hours of it occurring."
  "name": "Horrifying Presence"
- "desc": "The dragon exhales deathly cold energy in a 60-foot cone. Each creature\
    \ in that area must make a DC 20 Dexterity saving throw, taking 63 (18d6) cold\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Chilling Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dragon can take 3 legendary actions, choosing from the options below.\
    \ Only one legendary action can be used at a time and only at the end of another\
    \ creature's turn. The dragon regains spent legendary actions at the start of\
    \ its turn."
  "name": ""
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness (Costs 2 Actions)"
- "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 20 Dexterity saving throw or take 13 (2d6 + 6) necrotic\
    \ damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]. The dragon\
    \ can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
