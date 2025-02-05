---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 16
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/16
- monster/size/large
- monster/type/undead
aliases: ["Grave Regent"]
---
# [Grave Regent](compendium\bestiary\undead/grave-regent-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The timeless guardian of the Graveyard in charge of shepherding resilient creatures from the edges of death into eternal slumber. When a creature recovers from a near-death experience having "seen the light" or similar, it's often an indicator of having visited and escaped the Regent's clutches in their own personal Graveyard.

While the Regent exists in the metaphysical Graveyard between life and death, other graveyard protectors like the Regent can exist in the Material Plane, which all use the same statblock.

```statblock
"name": "Grave Regent (GriffonsSaddlebag3)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "10"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "20"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "10"
  "Intelligence": !!int "10"
"damage_resistances": "acid; cold; fire; lightning; psychic; thunder; bludgeoning,\
  \ piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained), [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
- "desc": "The grave regent's innate spellcasting ability is Charisma (spell save\
    \ DC 18, +10 to hit with spell attacks). It can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [chill touch](compendium/spells/chill-touch.md)\
    \ (4d8), [gentle repose](compendium/spells/gentle-repose.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [speak with dead](compendium/spells/speak-with-dead.md)\n\n1/day: [circle\
    \ of death](compendium/spells/circle-of-death.md)\n\n3/day each: [hallucinatory\
    \ terrain](compendium/spells/hallucinatory-terrain.md), [hypnotic pattern](compendium/spells/hypnotic-pattern.md)"
  "name": "Innate Spellcasting"
- "desc": "The grave regent can move through other creatures and objects as if they\
    \ were difficult terrain.\n\nIt takes 5 (1d10) force damage if it ends its turn\
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
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one creature. Hit: 18\
    \ (3d8 + 5) necrotic damage. The target must succeed on a DC 18 Constitution saving\
    \ throw or its hit point maximum is reduced by an amount equal to the damage taken.\
    \ This reduction lasts until the target finishes a long rest.\n\nThe target dies\
    \ if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 18 (3d8\
    \ + 5) psychic damage."
  "name": "Shadow Blade"
"legendary_actions":
- "desc": "The grave regent moves up to its speed."
  "name": "Move"
- "desc": "The grave regent makes an attack with its Life Drain or casts the [chill\
    \ touch](compendium/spells/chill-touch.md) cantrip."
  "name": "Touch of the Grave"
- "desc": "The grave regent makes a Shadow Blade attack against a creature within\
    \ its reach. On a hit, the target must make a DC 18 Wisdom saving throw. If the\
    \ target is [incapacitated](/compendium/rules/conditions.md#Incapacitated), [frightened](/compendium/rules/conditions.md#Frightened),\
    \ or [restrained](/compendium/rules/conditions.md#Restrained), it has disadvantage\
    \ on the saving throw. On a failed save, the target drops to 0 hit points. If\
    \ the target already had 0 hit points, it immediately dies. If a humanoid is killed\
    \ by this effect, an undead shadow rises from its corpse and acts immediately\
    \ after the grave regent. The shadow is under the grave regent's control."
  "name": "Reap (Costs 3 Actions)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```