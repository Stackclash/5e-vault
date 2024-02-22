---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Acolyte of Darkness"]
---
# [[5. Mechanics\Bestiary\Humanoid\Acolyte Of Darkness.md|Acolyte of Darkness]]
*Source: Strongholds and Followers p. 76*  

```statblock
"name": "Acolyte Of Darkness"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "3"
"skillsaves":
  "Stealth": !!int "5"
  "Acrobatics": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) bludgeoning damage.\n\nAt 7th level,\
    \ retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Acolyte of Darkness casts the\
    \ [[5. Mechanics/Spells/Darkness.md|darkness]] spell."
  "name": "Darkness (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe acolyte makes two attacks with\
    \ their signature attack. If they both hit, the acolyte heals one health level."
  "name": "Shadow Drain (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe acolyte teleports up to 30 feet\
    \ to an unoccupied space they can see and makes two attacks with their signature\
    \ attack."
  "name": "Shadow Door (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```