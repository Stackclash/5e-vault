---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Swarm of Ravens
*Source: Monster Manual p. 339, Curse of Strahd, The Rise of Tiamat, Dragon of Icespire Peak, Sleeping Dragon's Wake, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries*  

> [!quote] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [[/6. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
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
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny raven. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target\
    \ in the swarm's space. Hit: dice: 2d6|avg (2d6) piercing damage, or 3 (dice:\
    \ 1d6|avg (1d6)) piercing damage if the swarm has half of its hit points or\
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
"image": "6. Mechanics/Bestiary/Beast/token/swarm-of-ravens.png"
```
^statblock

## Environment

forest, swamp, hill, urban