---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/4
- monster/size/medium
- monster/type/dragon
aliases: ["Sapphire Wyrmling"]
---
# [Sapphire Wyrmling](compendium\bestiary\dragon/sapphire-wyrmling-saf.md)
*Source: Strongholds and Followers p. 215*

Eldest, first, the sapphire dragons inspire awe in any who see them. They guard the knowledge of past and future and the power that lets one shift between them. They approve of the dwarves, who imposed the rigid rules of causality on the world, and consider the remnant domains of the elves, the wodes, as a danger. Not a threat per se, because they know it is in the elves' nature to ignore past and future, but when mortals exploit this or discover the means to move through time, or summon creatures from the past and future, then the sapphire dragons get riled up.

Of course, because they guard this knowledge, they are also experts on it and thus are sometimes the best sages to seek out if you are in dire need. They will aid adventurers, using their knowledge to bend the rules of the timescape if they feel the danger warrants it.

Being oldest, they are also the most reserved, taciturn. Even the young sapphires are aware of their species' place in history and expect to be treated with respect. They talk like old university professors who know they have tenure and expect everyone to hang on their every word.

```statblock
"name": "Sapphire Wyrmling (SaF)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "15"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Intelligence": !!int "4"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "4"
"traits":
- "desc": "[Gemstone Dragon Psionics](/compendium/rules/variant-rules/gemstone-dragon-psionics-saf.md).\
    \ Charges: 10 • Recharge: 1d4 • Fracture: 9"
  "name": ""
- "desc": "All creatures within 30 feet must make a DC 13 Charisma saving throw in\
    \ order to attack this dragon. On a failed save, the attacking creature's turn\
    \ ends immediately. On a success, that creature is immune to the Awe Aura of all\
    \ gemstone dragons for 1 week."
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