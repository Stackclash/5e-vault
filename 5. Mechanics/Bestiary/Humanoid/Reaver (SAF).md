---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Reaver"]
---
# [Reaver](compendium\bestiary\humanoid/reaver-saf.md)
*Source: Strongholds and Followers p. 72*  

```statblock
"name": "Reaver (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
"speed": "30 ft. (dependent on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 3|avg (1d12 + 3) slashing damage.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 5th-level retainer\n\nThe reaver immediately makes three\
    \ attacks with their signature attack that score a critical hit on a 18–20."
  "name": "Frenzy (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe reaver roars with bestial might.\
    \ Enemies within 30 feet must make a Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]].\
    \ On each of its turns, a [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ creature must take the Dash action and move away from the reaver by the safest\
    \ route unless there is nowhere to move. If the [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ creature does not have line of sight to the reaver at the end of its turn, it\
    \ can make a Wisdom saving throw. On a successful save, the condition ends."
  "name": "Fearful Yawp (1/Day)"
"reactions":
- "desc": "Prerequisite: 3rd-level retainer\n\nThe reaver ignores all damage taken\
    \ from one attack."
  "name": "Invulnerable (3/Day)"
"source":
- "SaF"
```
^statblock