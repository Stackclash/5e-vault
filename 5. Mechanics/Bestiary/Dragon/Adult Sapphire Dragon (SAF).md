---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 17
environments: null
size: Huge
tags:
  - compendium/src/5e/saf
  - monster/cr/17
  - monster/size/huge
  - monster/type/dragon
aliases:
  - Adult Sapphire Dragon
---
# [[5. Mechanics/Bestiary/Dragon/Adult Sapphire Dragon (SAF).md|Adult Sapphire Dragon]]
*Source: Strongholds and Followers p. 214*

Eldest, first, the sapphire dragons inspire awe in any who see them. They guard the knowledge of past and future and the power that lets one shift between them. They approve of the dwarves, who imposed the rigid rules of causality on the world, and consider the remnant domains of the elves, the wodes, as a danger. Not a threat per se, because they know it is in the elves' nature to ignore past and future, but when mortals exploit this or discover the means to move through time, or summon creatures from the past and future, then the sapphire dragons get riled up.

Of course, because they guard this knowledge, they are also experts on it and thus are sometimes the best sages to seek out if you are in dire need. They will aid adventurers, using their knowledge to bend the rules of the timescape if they feel the danger warrants it.

Being oldest, they are also the most reserved, taciturn. Even the young sapphires are aware of their species' place in history and expect to be treated with respect. They talk like old university professors who know they have tenure and expect everyone to hang on their every word.

```statblock
"name": "Adult Sapphire Dragon (SAF)"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "19d12 + 38"
"stats":
- !!int "21"
- !!int "23"
- !!int "14"
- !!int "22"
- !!int "17"
- !!int "22"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "12"
  "Wisdom": !!int "9"
  "Intelligence": !!int "12"
"skillsaves":
  "Religion": !!int "12"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "Arcana": !!int "12"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 25"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "17"
"traits":
- "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Gemstone Dragon Psionics]].\
    \ Charges: 19 • Recharge: 1d8 • Fracture: 23"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "All creatures within 30 feet must make a DC 20 Charisma saving throw in\
    \ order to attack this dragon. On a failed save, the attacking creature's turn\
    \ ends immediately. On a success, that creature is immune to the Awe Aura of all\
    \ gemstone dragons for 1 week."
  "name": "Awe Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +11 to hit; reach 15 ft., one target. Hit: 14\
    \ (2d8 + 5) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ Check."
  "name": "Detect"
- "desc": "The dragon uses a [[5. Mechanics/Lists/List Optfeaturetype Psi Man.md|psionic ability]]."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take 13 (2d6 +\
    \ 6) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Sapphire%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
