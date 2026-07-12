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
  - Cavalier
cr: Unknown
---
# [[/5. Mechanics/Bestiary/Humanoid/Cavalier (SAF).md|Cavalier]]
*Source: Strongholds and Followers p. 77*

```statblock
"name": "Cavalier (SAF)"
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
  - !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "3"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 9 (1d12\
      \ + 3) piercing damage.\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "*Prerequisite: 3rd-level retainer*\n\nThe cavalier's lance glows with\
      \ radiant light. The cavalier takes their signature attack and deals an extra\
      \ 9 (2d8) radiant damage on a hit."
    "name": "Radiant Lance (3/Day)"
  - "desc": "*Prerequisite: 5th-level retainer*\n\nThe cavalier casts the [[/5. Mechanics/Spells/Lesser Restoration.md|lesser\
      \ restoration]] spell."
    "name": "Lesser Restoration (1/Day)"
"reactions":
  - "desc": "*Prerequisite: 7th-level retainer*\n\nIf an adjacent ally would be hit\
      \ by a weapon attack, the cavalier is hit instead, and then the cavalier may\
      \ make an attack with their signature attack against the enemy attacker."
    "name": "Fight Me, Knave! (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
