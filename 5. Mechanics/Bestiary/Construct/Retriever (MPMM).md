---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: 'desert, forest, underdark'
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/14
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/underdark
  - monster/size/large
  - monster/type/construct
aliases:
  - Retriever
---
# [[5. Mechanics\Bestiary\Construct\Retriever (MPMM).md|Retriever]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 209, Mordenkainen's Tome of Foes p. 222*

The retriever is a potent, spider-like Construct conceived and built by Underdark followers of Lolth for one original purpose—to prowl the Abyss and capture demons for these cultists to enslave or use in their rituals. The automatons proved so effective and so fearsome that they now perform many different missions.

Though retrievers were created to operate only in the Abyss, they are sometimes dispatched when a powerful devotee of Lolth needs some creature or object captured and brought back alive and intact. Only under the rarest of circumstances is a retriever handed over or sold to others, since Lolth's cultists don't want to take the chance that their creations will be turned against them.

```statblock
"name": "Retriever (MPMM)"
"size": "Large"
"type": "construct"
"alignment": "Typically  Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"modifier": !!int "3"
"stats":
  - !!int "22"
  - !!int "16"
  - !!int "20"
  - !!int "3"
  - !!int "11"
  - !!int "4"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": "+8"
  - "constitution": "+10"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+8"
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 15"
"languages": "understands Abyssal, Elvish, and Undercommon but can't speak"
"cr": "14"
"traits":
  - "desc": "The retriever is given a quarry by its master. The quarry can be a specific\
      \ creature or object the master is personally acquainted with, or it can be\
      \ a general type of creature or object the master has seen before. The retriever\
      \ knows the direction and distance to its quarry as long as the two of them\
      \ are on the same plane of existence. The retriever can have only one such quarry\
      \ at a time. The retriever also always knows the location of its master."
    "name": "Faultless Tracker"
"actions":
  - "desc": "The retriever makes two Foreleg attacks, and it uses Force Beam or Paralyzing\
      \ Beam, if available."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 15\
      \ (2d8 + 6) slashing damage."
    "name": "Foreleg"
  - "desc": "The retriever targets one creature it can see within 60 feet of it. The\
      \ target must make a DC 16 Dexterity saving throw, taking 27 (5d10) force damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Force Beam"
  - "desc": "The retriever targets one creature it can see within 60 feet of it. The\
      \ target must succeed on a DC 18 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]] target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success.\n\nIf the [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ creature is Medium or smaller, the retriever can pick it up as part of the\
      \ retriever's move and walk or climb with it at full speed."
    "name": "Paralyzing Beam (Recharge 5-6)"
  - "desc": "The retriever casts one of the following spells, requiring no material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 13):\n\
      \n3/day each: [[5. Mechanics/Spells/Plane Shift.md|plane shift]] (only self\
      \ and up to one incapacitated creature, which is considered willing for the\
      \ spell), [[5. Mechanics/Spells/Web.md|web]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Construct/token/retriever-mpmm.webp"
```
^statblock

## Environment

desert, forest, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
