---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Thaumaturgist"]
---
# [[5. Mechanics/Bestiary/Humanoid/Thaumaturgist (SAF).md|Thaumaturgist]]
*Source: Strongholds and Followers p. 79*  

```statblock
"name": "Thaumaturgist (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "6"
"skillsaves":
  "Religion": !!int "5"
  "Insight": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The thaumaturgist casts the [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]]\
    \ cantrip (dice: d20+6 (+6 to hit)).\n\nAt 7th level, retainers can take two\
    \ signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe thaumaturgist breathes fire in\
    \ a 15-foot cone in front of them. Each creature in the cone must make a Dexterity\
    \ saving throw. On a failed save, it takes dice: 2d8|avg (2d8) fire damage,\
    \ or half as much damage on a successful one."
  "name": "Fire Breath (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe thaumaturgist roars with draconic\
    \ might. Each enemy within 60 feet must make a Charisma saving throw or become\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] until the end of its\
    \ next turn. On each of their turns, [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ creatures must take the Dash action and move away from the thaumaturgist by\
    \ the safest route unless there is nowhere to move."
  "name": "Dragon's Roar (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nA wave of fire radiates in a 10-foot\
    \ radius out from the thaumaturgist. Each creature caught in the wave must make\
    \ a Charisma saving throw. On a failed save, it takes dice: 3d10|avg (3d10)\
    \ fire damage and is pushed back 10 feet. On a success, it takes half as much\
    \ damage and is not pushed back."
  "name": "Fire Wave (3/Day)"
"source":
- "SaF"
```
^statblock