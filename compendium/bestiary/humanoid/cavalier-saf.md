---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Cavalier"]
---
# [Cavalier](compendium/bestiary/humanoid/cavalier-saf.md)
*Source: Strongholds and Followers p. 77*

```statblock
"name": "Cavalier (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "3"
"skillsaves":
  "Athletics": !!int "5"
  "Religion": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 3|avg (1d12 + 3) piercing damage.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe cavalier's lance glows with radiant\
    \ light. The cavalier takes their signature attack and deals an extra dice: 2d8|avg\
    \ (2d8) radiant damage on a hit."
  "name": "Radiant Lance (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe cavalier casts the [lesser restoration](compendium/spells/lesser-restoration.md)\
    \ spell."
  "name": "Lesser Restoration (1/Day)"
"reactions":
- "desc": "Prerequisite: 7th-level retainer\n\nIf an adjacent ally would be hit\
    \ by a weapon attack, the cavalier is hit instead, and then the cavalier may make\
    \ an attack with their signature attack against the enemy attacker."
  "name": "Fight Me, Knave! (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```