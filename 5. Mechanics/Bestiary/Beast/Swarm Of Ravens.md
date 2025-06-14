---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'forest, swamp, hill, urban'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/swamp
  - monster/environment/urban
  - monster/size/medium
  - monster/type/beast
aliases:
  - Swarm of Ravens
---
# [[5. Mechanics\Bestiary\Beast\Swarm Of Ravens.md|Swarm of Ravens]]
*Source: Monster Manual p. 339, Curse of Strahd, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [[5. Mechanics/Bestiary/Monstrosity/Yuan Ti Abomination.md|yuan-ti abomination]] might have [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm Of Ravens"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "8"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny raven. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's\
      \ space. Hit: 7 (2d6) piercing damage, or 3 (d6) piercing damage if the swarm\
      \ has half of its hit points or fewer."
    "name": "Beaks"
"source":
  - "MM"
  - "CoS"
  - "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/swarm-of-ravens.webp"
```
^statblock

## Environment

forest, swamp, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
