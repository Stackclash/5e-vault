---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Cutpurse
---
# [[5. Mechanics\Bestiary\Humanoid\Cutpurse.md|Cutpurse]]
*Source: Strongholds and Followers p. 79*

```statblock
"name": "Cutpurse"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"stats":
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
  "Intelligence": !!int "6"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Deception": !!int "5"
  "Stealth": !!int "5"
  "Acrobatics": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) piercing damage.\n\nAt 7th level, retainers can take two signature attacks\
    \ per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nUsing their signature attack, the\
    \ cutpurse attacks a weak point on an enemy creature, causing them to fall [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ The target must succeed on a Constitution saving throw or suffer disadvantage\
    \ on all attacks they make until the end of their next turn."
  "name": "Low Blow (1/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe cutpurse throws a satchel of\
    \ powder at a point they can see within 60 feet, and it explodes in a blinding\
    \ flash. Each creature within 5 feet of the flash must make a Constitution saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]. At the end of\
    \ each of its following turns, a [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ creature can repeat this saving throw. On a success, the creature is no longer\
    \ [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]."
  "name": "Flash Powder (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe cutpurse throws a smoke bomb\
    \ at a point they can see within 30 feet, and it explodes in a choking cloud with\
    \ a 20-foot radius. Any creature that enters the cloud or starts its turn there\
    \ must make a Constitution saving throw. On a failed save, it takes 16 (3d10)\
    \ poison damage, or half as much damage on a successful one. The smoke spreads\
    \ around corners, and the area is heavily obscured. It lasts for 1 minute."
  "name": "Smoke Bomb (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
