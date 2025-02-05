---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Acolyte of Darkness"]
---
# [Acolyte of Darkness](compendium\bestiary\humanoid/acolyte-of-darkness-saf.md)
*Source: Strongholds and Followers p. 76*

```statblock
"name": "Acolyte of Darkness (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
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
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 2) bludgeoning damage.\n\nAt 7th level, retainers can take two signature attacks\
    \ per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Acolyte of Darkness casts the\
    \ [darkness](compendium/spells/darkness.md) spell."
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