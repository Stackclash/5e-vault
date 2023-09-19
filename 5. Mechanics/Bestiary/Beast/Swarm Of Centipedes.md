---
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
aliases: ["Swarm of Centipedes"]
---
# Swarm of Centipedes
*Source: Monster Manual p. 338, Curse of Strahd. Available in the SRD.*  

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [[5. Mechanics/Bestiary/Monstrosity/Yuan Ti Abomination.md|yuan-ti abomination]] might have [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarms of poisonous snakes]] slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Centipedes"
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
"speed": "20 ft., climb 20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone,\
  \ restrained, stunned"
"senses": "blindsight 10 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny insect. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 0 ft., one target\
    \ in the swarm's space. Hit: dice: 4d4|avg (4d4) piercing damage, or dice:\
    \ 2d4|avg (2d4) piercing damage if the swarm has half of its hit points or\
    \ fewer.\n\nA creature reduced to 0 hit points by a swarm of centipedes is stable\
    \ but [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] for 1 hour, even after\
    \ regaining hit points, and [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way."
  "name": "Bites"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "WDMM"
"image": "compendium/bestiary/beast/token/swarm-of-centipedes.png"
```
^statblock

## Environment

underdark, grassland, forest, swamp, hill, urban, desert