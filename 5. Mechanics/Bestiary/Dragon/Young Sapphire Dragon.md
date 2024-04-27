---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/10
  - monster/size/large
  - monster/type/dragon
statblock: inline
aliases:
  - Young Sapphire Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Young Sapphire Dragon.md|Young Sapphire Dragon]]
*Source: Strongholds and Followers p. 215*

Eldest, first, the sapphire dragons inspire awe in any who see them. They guard the knowledge of past and future and the power that lets one shift between them. They approve of the dwarves, who imposed the rigid rules of causality on the world, and consider the remnant domains of the elves, the wodes, as a danger. Not a threat per se, because they know it is in the elves' nature to ignore past and future, but when mortals exploit this or discover the means to move through time, or summon creatures from the past and future, then the sapphire dragons get riled up.

Of course, because they guard this knowledge, they are also experts on it and thus are sometimes the best sages to seek out if you are in dire need. They will aid adventurers, using their knowledge to bend the rules of the timescape if they feel the danger warrants it.

Being oldest, they are also the most reserved, taciturn. Even the young sapphires are aware of their species' place in history and expect to be treated with respect. They talk like old university professors who know they have tenure and expect everyone to hang on their every word.

```statblock
"name": "Young Sapphire Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "17d10 + 34"
"stats":
- !!int "18"
- !!int "17"
- !!int "14"
- !!int "18"
- !!int "16"
- !!int "17"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
"skillsaves":
  "Religion": !!int "8"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Arcana": !!int "8"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "10"
"traits":
- "desc": ". . [[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics.md|Gemstone Dragon Psionics]].\
    \ Charges: 17 • Recharge: 1d6 • Fracture: 17"
  "name": ""
- "desc": "All creatures within 30 feet must make a DC 16 Charisma saving throw in\
    \ order to attack this dragon. On a failed save, the attacking creature's turn\
    \ ends immediately. On a success, that creature is immune to the Awe Aura of all\
    \ gemstone dragons for 1 week."
  "name": "Awe Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claw"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium\
  \ Sapphire Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
