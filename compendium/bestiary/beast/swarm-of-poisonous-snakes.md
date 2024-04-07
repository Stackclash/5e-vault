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
aliases: ["Swarm of Poisonous Snakes"]
---
# [Swarm of Poisonous Snakes](compendium/bestiary/beast/swarm-of-poisonous-snakes.md)
*Source: Monster Manual p. 338, Curse of Strahd. Available in the SRD and the Basic Rules.*

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [swarms of poisonous snakes](compendium/bestiary/beast/swarm-of-poisonous-snakes.md) slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Poisonous Snakes"
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [frightened](/compendium/rules/conditions.md#frightened),\
  \ [grappled](/compendium/rules/conditions.md#grappled), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [prone](/compendium/rules/conditions.md#prone),\
  \ [restrained](/compendium/rules/conditions.md#restrained), [stunned](/compendium/rules/conditions.md#stunned)"
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny snake. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 0 ft., one creature\
    \ in the swarm's space. Hit: dice: 2d6|avg (2d6) piercing damage, or dice:\
    \ 1d6|avg (1d6) piercing damage if the swarm has half of its hit points or\
    \ fewer. The target must make a DC 10 Constitution saving throw, taking dice:\
    \ 4d6|avg (4d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
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
"image": "compendium/bestiary/beast/token/swarm-of-poisonous-snakes.webp"
```
^statblock

## Environment

forest, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```