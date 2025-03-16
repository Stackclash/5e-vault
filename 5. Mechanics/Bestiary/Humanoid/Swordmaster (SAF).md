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
  - Swordmaster
---
# [[5. Mechanics/Bestiary/Humanoid/Swordmaster (SAF).md|Swordmaster]]
*Source: Strongholds and Followers p. 75*

```statblock
"name": "Swordmaster (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Heavy"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Athletics": !!int "5"
  "Survival": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) slashing damage.\n\nAt 7th level, retainers can take two signature attacks\
    \ per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe swordmaster makes an attack with\
    \ their signature attack against an adjacent creature. On a hit, the target starts\
    \ bleeding, taking 3 (1d6) damage at the start of each of its following turns.\
    \ At the end of each of its turns, it can make a Constitution save to stop the\
    \ bleeding."
  "name": "Gaping Wound (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe swordmaster issues a challenge\
    \ to an adjacent creature. For 1 minute, if that creature attempts to attack a\
    \ target other than the swordmaster, or attempts to move away from the swordmaster,\
    \ the swordmaster immediately makes two attacks with their signature attack against\
    \ that creature, ending the Challenge."
  "name": "Challenge (3/Day, Bonus Action)"
"reactions":
- "desc": "Prerequisite: 7th-level retainer\n\nAfter being hit by a melee attack,\
    \ the swordmaster can immediately make three attacks against the attacker with\
    \ their signature attack."
  "name": "Retaliate (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
