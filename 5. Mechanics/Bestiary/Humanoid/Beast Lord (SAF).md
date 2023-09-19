---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Beast Lord"]
---
# Beast Lord
*Source: Strongholds and Followers p. 78*  

```statblock
"name": "Beast Lord"
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
  "Charisma": "+3"
  "Dexterity": "+6"
  "Wisdom": "+3"
  "Intelligence": "+3"
  "Strength": "+6"
  "Constitution": "+3"
"skillsaves":
  "Nature": "+5"
  "Stealth": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Ranged Weapon Attack: dice: d20+6 (+6 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage.\n\nAt 7th level,\
    \ retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nA hawk appears and attacks the eyes\
    \ of a creature within 60 feet. The target must make a Dexterity saving throw\
    \ or take dice: 1d4|avg (1d4) slashing damage and be [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the end of its next turn."
  "name": "Hawk Strike (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nSpectral wolves appear around every\
    \ enemy within 60 feet. They grant the beast lord's allies advantage on all weapon\
    \ attacks until the end of the beast lord's next turn."
  "name": "Wolf Pack (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nA dire bear appears and attacks an\
    \ enemy within 60 feet. The target must make a Strength saving throw or be knocked\
    \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]] and [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]].\
    \ On each of its following turns, the target takes dice: 2d6 + 3|avg (2d6 +\
    \ 3) slashing damage and can make a Strength ([[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]])\
    \ check to escape. If it escapes, the bear disappears."
  "name": "Bear Slam (1/Day)"
"source":
- "SaF"
```
^statblock