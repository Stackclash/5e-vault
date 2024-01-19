---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Knight of the Green Order"]
---
# [[5. Mechanics\Bestiary\Humanoid\Knight Of The Green Order (SAF).md|Knight of the Green Order]]
*Source: Strongholds and Followers p. 77*  

```statblock
"name": "Knight of the Green Order (SaF)"
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
  "Religion": !!int "5"
  "Insight": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe knight makes an attack with their\
    \ signature attack. On a hit, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]].\
    \ It can make a Strength ([[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]])\
    \ or Dexterity ([[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]) check on\
    \ its turn to escape. If it escapes, the vines wither and die."
  "name": "Twisting Vines (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe knight casts the [[5. Mechanics/Spells/Entangle.md|entangle]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Entangle (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe knight casts the [[5. Mechanics/Spells/Moonbeam.md|moonbeam]]\
    \ spell (spell save DC 15)."
  "name": "Moonbeam (1/Day)"
"source":
- "SaF"
```
^statblock