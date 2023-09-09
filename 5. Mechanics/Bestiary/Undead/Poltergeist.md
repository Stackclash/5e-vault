---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
aliases: ["Poltergeist"]
---
# Poltergeist
*Source: Monster Manual p. 279, Curse of Strahd*  

A poltergeist is the confused, invisible spirit of an individual with no sense of how he or she died. A poltergeist expresses its rage by hurling creatures and objects using the power of its shattered psyche.

```statblock
"name": "Poltergeist"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "2"
"traits":
- "desc": "The poltergeist can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (dice: 1d10|avg (1d10)) force damage\
    \ if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "While in sunlight, the poltergeist has disadvantage on attack rolls, as\
    \ well as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|")"]] checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The poltergeist is [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]."
  "name": "Invisibility"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: 10 (dice: 3d6|avg (3d6)) force damage."
  "name": "Forceful Slam"
- "desc": "The poltergeist targets a creature or unattended object within 30 feet\
    \ of it. A creature must be Medium or smaller to be affected by this magic, and\
    \ an object can weigh up to 150 pounds.\n\nIf the target is a creature, the poltergeist\
    \ makes a Charisma check contested by the target's Strength check. If the poltergeist\
    \ wins the contest, the poltergeist hurls the target up to 30 feet in any direction,\
    \ including upward. If the target then comes into contact with a hard surface\
    \ or heavy object, the target takes dice: 1d6|avg (1d6) damage per 10 feet\
    \ moved.\n\nIf the target is an object that isn't being worn or carried, the poltergeist\
    \ hurls it up to 30 feet in any direction. The poltergeist can use the object\
    \ as a ranged weapon, attacking one creature along the object's path (dice: d20+4\
    \ (+4 to hit)) and dealing 5 (dice: 2d4|avg (2d4)) bludgeoning damage on a\
    \ hit."
  "name": "Telekinetic Thrust"
"source":
- "MM"
- "CoS"
- "IDRotF"
- "CM"
- "KftGV"
- "PSI"
"image": "compendium/bestiary/undead/token/poltergeist.png"
```
^statblock

## Environment

underdark, urban