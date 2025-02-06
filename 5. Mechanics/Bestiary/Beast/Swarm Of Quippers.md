---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: underwater
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1
  - monster\Environment\Underwater
  - monster\Size\Medium
  - monster\Type\Beast
aliases:
  - Swarm of Quippers
---
# [[5. Mechanics\Bestiary\Beast\Swarm Of Quippers.md|Swarm of Quippers]]
*Source: Monster Manual p. 338. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [[5. Mechanics/Bestiary/Monstrosity/Yuan Ti Abomination.md|yuan-ti abomination]] might have [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm Of Quippers"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "28"
"hit_dice": "8d8 - 8"
"stats":
- !!int "13"
- !!int "16"
- !!int "9"
- !!int "1"
- !!int "7"
- !!int "2"
"speed": "0 ft., swim 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "1"
"traits":
- "desc": "The swarm has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny quipper. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "The swarm can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's\
    \ space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm\
    \ has half of its hit points or fewer."
  "name": "Bites"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/swarm-of-quippers.webp"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
