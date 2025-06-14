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
  - Cutpurse
---
# [[5. Mechanics\Bestiary\Humanoid\Cutpurse (SAF).md|Cutpurse]]
*Source: Strongholds and Followers p. 79*

```statblock
"name": "Cutpurse (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+6"
  - "constitution": "+3"
  - "intelligence": "+6"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
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
      \ cutpurse attacks a weak point on an enemy creature, causing them to fall [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ The target must succeed on a Constitution saving throw or suffer disadvantage\
      \ on all attacks they make until the end of their next turn."
    "name": "Low Blow (1/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe cutpurse throws a satchel of\
      \ powder at a point they can see within 60 feet, and it explodes in a blinding\
      \ flash. Each creature within 5 feet of the flash must make a Constitution saving\
      \ throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]. At the end\
      \ of each of its following turns, a [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ creature can repeat this saving throw. On a success, the creature is no longer\
      \ [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]."
    "name": "Flash Powder (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe cutpurse throws a smoke bomb\
      \ at a point they can see within 30 feet, and it explodes in a choking cloud\
      \ with a 20-foot radius. Any creature that enters the cloud or starts its turn\
      \ there must make a Constitution saving throw. On a failed save, it takes 16\
      \ (3d10) poison damage, or half as much damage on a successful one. The smoke\
      \ spreads around corners, and the area is heavily obscured. It lasts for 1 minute."
    "name": "Smoke Bomb (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
