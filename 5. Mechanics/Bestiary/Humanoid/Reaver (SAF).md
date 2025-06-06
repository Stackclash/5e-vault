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
  - Reaver
---
# [[5. Mechanics\Bestiary\Humanoid\Reaver (SAF).md|Reaver]]
*Source: Strongholds and Followers p. 72*

```statblock
"name": "Reaver (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
"speed": "30 ft. (dependent on ancestry)"
"saves":
  - "strength": "+6"
  - "dexterity": "+3"
  - "constitution": "+6"
  - "intelligence": "+3"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d12\
      \ + 3) slashing damage.\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe reaver immediately makes three\
      \ attacks with their signature attack that score a critical hit on a 18–20."
    "name": "Frenzy (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe reaver roars with bestial might.\
      \ Enemies within 30 feet must make a Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]].\
      \ On each of its turns, a [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ creature must take the Dash action and move away from the reaver by the safest\
      \ route unless there is nowhere to move. If the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ creature does not have line of sight to the reaver at the end of its turn,\
      \ it can make a Wisdom saving throw. On a successful save, the condition ends."
    "name": "Fearful Yawp (1/Day)"
"reactions":
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe reaver ignores all damage taken\
      \ from one attack."
    "name": "Invulnerable (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
