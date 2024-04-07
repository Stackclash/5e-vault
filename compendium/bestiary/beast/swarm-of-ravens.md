---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-4
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
aliases: ["Swarm of Ravens"]
---
# [Swarm of Ravens](compendium/bestiary/beast/swarm-of-ravens.md)
*Source: Monster Manual p. 339, Curse of Strahd, Tasha's Cauldron of Everything. Available in the SRD and the Basic Rules.*

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [swarms of poisonous snakes](compendium/bestiary/beast/swarm-of-poisonous-snakes.md) slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Ravens"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"stats":
- !!int "6"
- !!int "14"
- !!int "8"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [frightened](/compendium/rules/conditions.md#frightened),\
  \ [grappled](/compendium/rules/conditions.md#grappled), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [prone](/compendium/rules/conditions.md#prone),\
  \ [restrained](/compendium/rules/conditions.md#restrained), [stunned](/compendium/rules/conditions.md#stunned)"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny raven. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target\
    \ in the swarm's space. Hit: dice: 2d6|avg (2d6) piercing damage, or dice:\
    \ 1d6|avg (1d6) piercing damage if the swarm has half of its hit points or\
    \ fewer."
  "name": "Beaks"
"source":
- "MM"
- "CoS"
- "RoT"
- "DIP"
- "SDW"
- "EGW"
- "IDRotF"
- "TCE"
- "CM"
"image": "compendium/bestiary/beast/token/swarm-of-ravens.webp"
```
^statblock

## Environment

forest, swamp, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```