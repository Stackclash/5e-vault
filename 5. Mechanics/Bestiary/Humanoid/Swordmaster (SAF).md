---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Any alignment
ac: 18
hp: health levels equal to their level
type: humanoid
tags:
  - monster
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Swordmaster
cr: Unknown
---
# [[/5. Mechanics/Bestiary/Humanoid/Swordmaster (SAF).md|Swordmaster]]
*Source: Strongholds and Followers p. 75*

```statblock
"name": "Swordmaster (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Heavy"
"hp": "health levels equal to their level"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "3"
  - "constitution": !!int "6"
  - "intelligence": !!int "3"
  - "wisdom": !!int "3"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d8 + 2) slashing damage.\n\nAt 7th level, retainers can take two signature\
      \ attacks per round."
    "name": "Signature Attack"
  - "desc": "*Prerequisite: 3rd-level retainer*\n\nThe swordmaster makes an attack\
      \ with their signature attack against an adjacent creature. On a hit, the target\
      \ starts bleeding, taking 3 (1d6) damage at the start of each of its following\
      \ turns. At the end of each of its turns, it can make a Constitution save to\
      \ stop the bleeding."
    "name": "Gaping Wound (3/Day)"
  - "desc": "*Prerequisite: 5th-level retainer*\n\nThe swordmaster issues a challenge\
      \ to an adjacent creature. For 1 minute, if that creature attempts to attack\
      \ a target other than the swordmaster, or attempts to move away from the swordmaster,\
      \ the swordmaster immediately makes two attacks with their signature attack\
      \ against that creature, ending the Challenge."
    "name": "Challenge (3/Day, Bonus Action)"
"reactions":
  - "desc": "*Prerequisite: 7th-level retainer*\n\nAfter being hit by a melee attack,\
      \ the swordmaster can immediately make three attacks against the attacker with\
      \ their signature attack."
    "name": "Retaliate (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
