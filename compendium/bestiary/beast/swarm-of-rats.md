---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Swarm of Rats"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"stats":
- !!int "9"
- !!int "11"
- !!int "9"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny rat. The swarm can't regain\
    \ hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 0 ft., one target\
    \ in the swarm's space. Hit: dice: 2d6|avg (2d6) piercing damage, or 3 (dice:\
    \ 1d6|avg (1d6)) piercing damage if the swarm has half of its hit points or\
    \ fewer."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "TCE"
- "CM"
"image": "/compendium/bestiary/beast/token/swarm-of-rats.png"
aliases: ["Swarm of Rats"]
---
# Swarm of Rats
*Source: Monster Manual p. 339, Curse of Strahd, Hoard of the Dragon Queen, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything, Candlekeep Mysteries*  

> [!quote] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [swarms of poisonous snakes](/compendium/bestiary/beast/swarm-of-poisonous-snakes.md) slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```ad-statblock
title: Swarm of Rats
![](/compendium/bestiary/beast/token/swarm-of-rats.png#token)
*Medium beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 7d8 - 7|text(24)` (7d8 - 7) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|11 (+0)| 9 (-1)| 2 (-4)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 10
- **Damage Resistances** bludgeoning, piercing, slashing
- **Condition Immunities** charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned
- **Languages** —
- **Challenge** 1/4

## Traits

***Keen Smell.*** The swarm has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

***Swarm.*** The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.

## Actions

***Bites.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 0 ft., one target in the swarm's space. Hit: `dice: 2d6|avg` (`2d6`) piercing damage, or 3 (`dice: 1d6|avg` (`1d6`)) piercing damage if the swarm has half of its hit points or fewer.
```
^statblock

## Environment

swamp, urban