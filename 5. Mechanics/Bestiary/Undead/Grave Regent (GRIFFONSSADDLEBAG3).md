---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 16
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/16
  - monster/size/large
  - monster/type/undead
aliases:
  - Grave Regent
---
# [[5. Mechanics\Bestiary\Undead\Grave Regent (GRIFFONSSADDLEBAG3).md|Grave Regent]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The timeless guardian of the Graveyard in charge of shepherding resilient creatures from the edges of death into eternal slumber. When a creature recovers from a near-death experience having "seen the light" or similar, it's often an indicator of having visited and escaped the Regent's clutches in their own personal Graveyard.

While the Regent exists in the metaphysical Graveyard between life and death, other graveyard protectors like the Regent can exist in the Material Plane, which all use the same statblock.

```statblock
"name": "Grave Regent (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"modifier": !!int "5"
"stats":
  - !!int "10"
  - !!int "20"
  - !!int "20"
  - !!int "20"
  - !!int "20"
  - !!int "20"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  - "intelligence": "+10"
  - "wisdom": "+10"
  - "charisma": "+10"
"damage_resistances": "acid; cold; fire; lightning; psychic; thunder; bludgeoning,\
  \ piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "The grave regent's innate spellcasting ability is Charisma (spell save\
      \ DC 18, +10 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\nAt will: [[5. Mechanics/Spells/Chill Touch.md|chill touch]]\
      \ (4d8), [[5. Mechanics/Spells/Gentle Repose.md|gentle repose]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
      \ [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]]\n\n3/day each:\
      \ [[5. Mechanics/Spells/Hallucinatory Terrain.md|hallucinatory terrain]], [[5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic\
      \ pattern]]\n\n1/day: [[5. Mechanics/Spells/Circle Of Death.md|circle of death]]"
    "name": "Innate Spellcasting"
  - "desc": "The grave regent can move through other creatures and objects as if they\
      \ were difficult terrain.\n\nIt takes 5 (d10) force damage if it ends its turn\
      \ inside an object."
    "name": "Incorporeal Movement"
  - "desc": "If the grave regent fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The grave regent has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "If it dies, the grave regent returns to life in 1d6 + 1 days and regains\
      \ all its hit points."
    "name": "Rejuvenation"
  - "desc": "The grave regent is immune to features that turn undead."
    "name": "Turn Immunity"
"actions":
  - "desc": "The grave regent makes two attacks: one with its Life Drain and one with\
      \ its Shadow Blade."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one creature. Hit:\
      \ 18 (3d8 + 5) necrotic damage. The target must succeed on a DC 18 Constitution\
      \ saving throw or its hit point maximum is reduced by an amount equal to the\
      \ damage taken. This reduction lasts until the target finishes a long rest.\n\
      \nThe target dies if this effect reduces its hit point maximum to 0."
    "name": "Life Drain"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 18\
      \ (3d8 + 5) psychic damage."
    "name": "Shadow Blade"
"legendary_actions":
  - "desc": "The grave regent moves up to its speed."
    "name": "Move"
  - "desc": "The grave regent makes an attack with its Life Drain or casts the [[5. Mechanics/Spells/Chill Touch.md|chill\
      \ touch]] cantrip."
    "name": "Touch of the Grave"
  - "desc": "The grave regent makes a Shadow Blade attack against a creature within\
      \ its reach. On a hit, the target must make a DC 18 Wisdom saving throw. If\
      \ the target is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ it has disadvantage on the saving throw. On a failed save, the target drops\
      \ to 0 hit points. If the target already had 0 hit points, it immediately dies.\
      \ If a humanoid is killed by this effect, an undead shadow rises from its corpse\
      \ and acts immediately after the grave regent. The shadow is under the grave\
      \ regent's control."
    "name": "Reap (Costs 3 Actions)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
