---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Swarm of Spiders"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "3"
- !!int "13"
- !!int "10"
- !!int "1"
- !!int "7"
- !!int "1"
"speed": "walk 20 ft., climb 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "blindsight 10 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny insect. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in contact with a web, the swarm knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 0 ft., one target\
    \ in the swarm's space. Hit: dice: 4d4|avg (4d4) piercing damage, or 5 (dice:\
    \ 2d4|avg (2d4)) piercing damage if the swarm has half of its hit points or\
    \ fewer."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "SKT"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "MOT"
"image": "/compendium/bestiary/beast/token/swarm-of-spiders.png"
aliases: ["Swarm of Spiders"]
---
# Swarm of Spiders
*Source: Monster Manual p. 338, Curse of Strahd, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Mythic Odysseys of Theros*  

> [!quote] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [[/6. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md\|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```ad-statblock
title: Swarm of Spiders
![[/6. Mechanics/Bestiary/Beast/Token/swarm-of-spiders.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 5d8|text(22)` (5d8) 
- **Speed** walk 20 ft., climb 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (-4)|13 (+1)|10 (+0)| 1 (-5)| 7 (-2)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 10 ft., passive Perception 8
- **Damage Resistances** bludgeoning, piercing, slashing
- **Condition Immunities** charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned
- **Languages** —
- **Challenge** 1/2

## Traits

***Swarm.*** The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.

***Spider Climb.*** The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Web Sense.*** While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web.

***Web Walker.*** The swarm ignores movement restrictions caused by webbing.

## Actions

***Bites.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 0 ft., one target in the swarm's space. Hit: `dice: 4d4` (`4d4`) piercing damage, or 5 (`dice: 2d4` (`2d4`)) piercing damage if the swarm has half of its hit points or fewer.
```
^statblock

## Environment

underdark, grassland, forest, swamp, hill, urban, desert