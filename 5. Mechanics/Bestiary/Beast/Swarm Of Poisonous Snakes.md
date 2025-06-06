---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'forest, swamp'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/forest
  - monster/environment/swamp
  - monster/size/medium
  - monster/type/beast
aliases:
  - Swarm of Poisonous Snakes
---
# [[5. Mechanics\Bestiary\Beast\Swarm Of Poisonous Snakes.md|Swarm of Poisonous Snakes]]
*Source: Monster Manual p. 338, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [[5. Mechanics/Bestiary/Monstrosity/Yuan Ti Abomination.md|yuan-ti abomination]] might have [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm Of Poisonous Snakes"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d8"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "18"
  - !!int "11"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny snake. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's\
      \ space. Hit: 7 (2d6) piercing damage, or 3 (d6) piercing damage if the swarm\
      \ has half of its hit points or fewer. The target must make a DC 10 Constitution\
      \ saving throw, taking 14 (4d6) poison damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Bites"
"source":
  - "MM"
  - "CoS"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Beast/token/swarm-of-poisonous-snakes.webp"
```
^statblock

## Environment

forest, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
