---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: coastal
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/coastal
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Tortle Druid
---
# [[5. Mechanics\Bestiary\Humanoid\Tortle Druid (MPMM).md|Tortle Druid]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 244, Mordenkainen's Tome of Foes p. 242*

Many tortles view the world as a place of wonder. They live for the chance to hear a soft wind blowing through trees, to watch a frog croaking on a lily pad, or to stand in a crowded marketplace. A tortle druid savors such things more than most, channeling the natural magic of the world around them.

## Tortles

Tortles are omnivorous, turtle-like bipeds with shells that cover most of their bodies. Because they carry their homes on their backs, tortles feel little need to stay put for long.

Most tortles like to see how other folk live. A tortle can spend decades away from their native land without feeling homesick, often viewing their current companions as their family.

```statblock
"name": "Tortle Druid (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "12"
  - !!int "11"
  - !!int "15"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Animal%20Handling|Animal Handling]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+4"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "2"
"traits":
  - "desc": "The tortle can hold its breath for 1 hour."
    "name": "Hold Breath"
"actions":
  - "desc": "The tortle makes four Claw attacks or two [[/5. Mechanics/Rules/Skills.md#Nature|Nature]]'s\
      \ Wrath attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) slashing damage."
    "name": "Claw"
  - "desc": "Ranged Spell Attack: +4 to hit, range 90 ft., one target. Hit: 9\
      \ (2d6 + 2) damage of a type chosen by the tortle: cold, fire, lightning, or\
      \ thunder."
    "name": "Nature's Wrath"
  - "desc": "The tortle withdraws into its shell. Until it emerges, it gains a +4\
      \ bonus to AC and has advantage on Strength and Constitution saving throws.\
      \ While in its shell, the tortle is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
      \ its speed is 0 and can't increase, it has disadvantage on Dexterity saving\
      \ throws, it can't take reactions, and the only action it can take is a bonus\
      \ action to emerge."
    "name": "Shell Defense"
  - "desc": "The tortle casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 12):\n\nAt will: [[5. Mechanics/Spells/Druidcraft.md|druidcraft]],\
      \ [[5. Mechanics/Spells/Guidance.md|guidance]]\n\n2/day each: [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
      \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Speak With Animals.md|speak with animals]],\
      \ [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/tortle-druid-mpmm.webp"
```
^statblock

## Environment

coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
