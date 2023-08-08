---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Swarm of Rats
*Source: Monster Manual p. 339, Curse of Strahd, Hoard of the Dragon Queen, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything, Candlekeep Mysteries*  

> [!quote] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [[/6. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
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
  "desc": "The swarm has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
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
"image": "6. Mechanics/Bestiary/Beast/token/swarm-of-rats.png"
```
^statblock

## Environment

swamp, urban