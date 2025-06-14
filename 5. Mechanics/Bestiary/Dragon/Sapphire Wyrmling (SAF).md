---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/4
  - monster/size/medium
  - monster/type/dragon
aliases:
  - Sapphire Wyrmling
---
# [[5. Mechanics\Bestiary\Dragon\Sapphire Wyrmling (SAF).md|Sapphire Wyrmling]]
*Source: Strongholds and Followers p. 215*

Eldest, first, the sapphire dragons inspire awe in any who see them. They guard the knowledge of past and future and the power that lets one shift between them. They approve of the dwarves, who imposed the rigid rules of causality on the world, and consider the remnant domains of the elves, the wodes, as a danger. Not a threat per se, because they know it is in the elves' nature to ignore past and future, but when mortals exploit this or discover the means to move through time, or summon creatures from the past and future, then the sapphire dragons get riled up.

Of course, because they guard this knowledge, they are also experts on it and thus are sometimes the best sages to seek out if you are in dire need. They will aid adventurers, using their knowledge to bend the rules of the timescape if they feel the danger warrants it.

Being oldest, they are also the most reserved, taciturn. Even the young sapphires are aware of their species' place in history and expect to be treated with respect. They talk like old university professors who know they have tenure and expect everyone to hang on their every word.

```statblock
"name": "Sapphire Wyrmling (SAF)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "15"
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "15"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  - "dexterity": "+4"
  - "intelligence": "+4"
  - "wisdom": "+4"
  - "charisma": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "4"
"traits":
  - "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Psionics]].\
      \ Charges: 10 • Recharge: d4 • Fracture: 9"
    "name": ""
  - "desc": "All creatures within 30 feet must make a DC 13 Charisma saving throw\
      \ in order to attack this dragon. On a failed save, the attacking creature's\
      \ turn ends immediately. On a success, that creature is immune to the Awe Aura\
      \ of all gemstone dragons for 1 week."
    "name": "Awe Aura"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
      \ + 2) piercing damage."
    "name": "Bite"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium%20Sapphire%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
