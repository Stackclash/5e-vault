---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Any alignment
ac: 13
hp: health levels equal to their level
type: humanoid
tags:
  - monster
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Troubadour-warrior
cr: Unknown
---
# [[/5. Mechanics/Bestiary/Humanoid/Troubadour Warrior (SAF).md|Troubadour-warrior]]
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Troubadour Warrior (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"hp": "health levels equal to their level"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": !!int "3"
  - "dexterity": !!int "6"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "3"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Performance|Performance]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7 (1d8\
      \ + 3) slashing damage.\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
"reactions":
  - "desc": "*Prerequisite: 3rd-level retainer*\n\nAfter an ally within 60 feet that\
      \ the troubadour-warrior can see makes an attack, roll a d6 and add the result\
      \ to the ally's result."
    "name": "Cheer (3/Day)"
  - "desc": "*Prerequisite: 5th-level retainer*\n\nAfter an ally hits an enemy creature,\
      \ the troubadour-warrior can convert the hit into a critical hit."
    "name": "Bolstering Praise (1/Day)"
  - "desc": "*Prerequisite: 7th-level retainer*\n\nWhen a creature the troubadour-warrior\
      \ can see within 60 feet hits the leader of the troubadour-warrior, the troubadour-warrior\
      \ can taunt the creature, forcing it to make a Charisma saving throw. On a failed\
      \ save, its attack automatically misses."
    "name": "Distracting Taunt (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
