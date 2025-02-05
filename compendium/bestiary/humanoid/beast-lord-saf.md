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
aliases: ["Beast Lord"]
---
# [Beast Lord](compendium\bestiary\humanoid/beast-lord-saf.md)
*Source: Strongholds and Followers p. 78*

```statblock
"name": "Beast Lord (SaF)"
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
  "Nature": !!int "5"
  "Stealth": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
    \ 8 (1d8 + 4) piercing damage.\n\nAt 7th level, retainers can take two signature\
    \ attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nA hawk appears and attacks the eyes\
    \ of a creature within 60 feet. The target must make a Dexterity saving throw\
    \ or take 2 (1d4) slashing damage and be [blinded](/compendium/rules/conditions.md#Blinded)\
    \ until the end of its next turn."
  "name": "Hawk Strike (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nSpectral wolves appear around every\
    \ enemy within 60 feet. They grant the beast lord's allies advantage on all weapon\
    \ attacks until the end of the beast lord's next turn."
  "name": "Wolf Pack (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nA dire bear appears and attacks an\
    \ enemy within 60 feet. The target must make a Strength saving throw or be knocked\
    \ [prone](/compendium/rules/conditions.md#Prone) and [restrained](/compendium/rules/conditions.md#Restrained).\
    \ On each of its following turns, the target takes 10 (2d6 + 3) slashing damage\
    \ and can make a Strength ([Athletics](/compendium/rules/skills.md#Athletics))\
    \ check to escape. If it escapes, the bear disappears."
  "name": "Bear Slam (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```