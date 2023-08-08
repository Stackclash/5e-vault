---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Swarm of Bats
*Source: Monster Manual p. 337, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount, Candlekeep Mysteries, The Wild Beyond the Witchlight*  

> [!quote] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [[/6. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Bats"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "5"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 0 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm can't use its blindsight while [[6. Mechanics/Rules/Conditions.md#deafened|deafened]]."
  "name": "Echolocation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny bat. The swarm can't regain\
    \ hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 0 ft., one creature\
    \ in the swarm's space. Hit: dice: 2d4|avg (2d4) piercing damage, or 2 (dice:\
    \ 1d4|avg (1d4)) piercing damage if the swarm has half of its hit points or\
    \ fewer."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "TftYP"
- "ToA"
- "WDMM"
- "EGW"
- "CM"
- "WBtW"
"image": "6. Mechanics/Bestiary/Beast/token/swarm-of-bats.png"
```
^statblock

## Environment

underdark, mountain, hill, urban