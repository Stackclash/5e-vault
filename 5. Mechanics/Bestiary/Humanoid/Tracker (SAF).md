---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Tracker
---
# [[5. Mechanics\Bestiary\Humanoid\Tracker (SAF).md|Tracker]]
*Source: Strongholds and Followers p. 78*

```statblock
"name": "Tracker (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
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
  - "strength": "+6"
  - "dexterity": "+6"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
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
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe tracker casts the [[5. Mechanics/Spells/Hunters Mark.md|hunter's\
      \ mark]] spell."
    "name": "Hunter's Mark (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe tracker casts the [[5. Mechanics/Spells/Find Traps.md|find traps]]\
      \ spell."
    "name": "Find Traps (3/Day)"
"reactions":
  - "desc": "Prerequisite: 7th-level retainer\n\nWhen a creature the tracker can\
      \ see enters a space adjacent to the tracker's leader, the tracker may use their\
      \ reaction to make a signature attack against that creature. On a hit, the attack\
      \ also knocks the target [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Watch Out, Boss! (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
