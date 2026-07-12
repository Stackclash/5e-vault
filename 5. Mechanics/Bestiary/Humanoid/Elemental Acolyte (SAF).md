---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Any alignment
ac: 15
hp: health levels equal to their level
type: humanoid
tags:
  - monster
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Elemental Acolyte
cr: Unknown
---
# [[/5. Mechanics/Bestiary/Humanoid/Elemental Acolyte (SAF).md|Elemental Acolyte]]
*Source: Strongholds and Followers p. 76*

```statblock
"name": "Elemental Acolyte (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
"hp": "health levels equal to their level"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "18"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "6"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "3"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7 (1d8\
      \ + 3) bludgeoning damage.\n\nAt 7th level, retainers can take two signature\
      \ attacks per round."
    "name": "Signature Attack"
  - "desc": "*Prerequisite: 3rd-level retainer*\n\nIntense winds swirl around the\
      \ ends of the acolyte's weapon, causing their next two attacks to deal an extra\
      \ 7 (2d6) bludgeoning damage."
    "name": "Wind (3/Day)"
  - "desc": "*Prerequisite: 5th-level retainer*\n\nThe acolyte makes a signature attack\
      \ and assumes a stance that lets them dodge all incoming melee attacks until\
      \ the start of their next turn."
    "name": "Water (3/Day)"
  - "desc": "*Prerequisite: 7th-level retainer*\n\nThe acolyte stomps the ground,\
      \ dislodging two large pieces of earth, and kicks them toward a target within\
      \ 30 feet. The target must make a Dexterity saving throw or take 27 (6d8) bludgeoning\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Earth (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
