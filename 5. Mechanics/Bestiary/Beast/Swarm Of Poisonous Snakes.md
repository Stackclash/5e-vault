---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/forest
  - monster/environment/swamp
  - monster/size/medium
  - monster/type/beast
statblock: inline
aliases:
  - Swarm of Poisonous Snakes
---
# [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|Swarm of Poisonous Snakes]]
*Source: Monster Manual p. 338, Curse of Strahd. Available in the SRD and the Basic Rules.*

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
"stats":
- !!int "8"
- !!int "18"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny snake. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 0 ft., one creature\
    \ in the swarm's space. Hit: dice:2d6|text(7) (2d6) piercing damage, or\
    \ dice:1d6|text(3) (1d6) piercing damage if the swarm has half of its hit\
    \ points or fewer. The target must make a DC 10 Constitution saving throw, taking\
    \ dice:4d6|text(14) (4d6) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "RoT"
- "TftYP"
- "ToA"
- "DIP"
- "SDW"
- "EGW"
- "MOT"
- "JttRC"
"image": "5. Mechanics/Bestiary/Beast/token/swarm-of-poisonous-snakes.webp"
```
^statblock

## Environment

forest, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
