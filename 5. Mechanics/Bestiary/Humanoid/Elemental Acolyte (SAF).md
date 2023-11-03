---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Elemental Acolyte"]
---
# [Elemental Acolyte](compendium\bestiary\humanoid/elemental-acolyte-saf.md)
*Source: Strongholds and Followers p. 76*  

```statblock
"name": "Elemental Acolyte (SaF)"
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
  "Insight": !!int "5"
  "Acrobatics": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) bludgeoning damage.\n\nAt 7th level,\
    \ retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nIntense winds swirl around the ends\
    \ of the acolyte's weapon, causing their next two attacks to deal an extra dice:\
    \ 2d6|avg (2d6) bludgeoning damage."
  "name": "Wind (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe acolyte makes a signature attack\
    \ and assumes a stance that lets them dodge all incoming melee attacks until the\
    \ start of their next turn."
  "name": "Water (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe acolyte stomps the ground, dislodging\
    \ two large pieces of earth, and kicks them toward a target within 30 feet. The\
    \ target must make a Dexterity saving throw or take dice: 6d8|avg (6d8) bludgeoning\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Earth (1/Day)"
"source":
- "SaF"
```
^statblock