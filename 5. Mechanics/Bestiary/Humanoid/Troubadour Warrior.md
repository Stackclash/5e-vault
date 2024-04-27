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
  - Troubadour-warrior
---
# [[5. Mechanics\Bestiary\Humanoid\Troubadour Warrior.md|Troubadour-warrior]]
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Troubadour Warrior"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Deception": !!int "5"
  "Performance": !!int "5"
  "Persuasion": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage.\n\nAt 7th level, retainers can take two signature attacks\
    \ per round."
  "name": "Signature Attack"
"reactions":
- "desc": "Prerequisite: 3rd-level retainer\n\nAfter an ally within 60 feet that\
    \ the troubadour-warrior can see makes an attack, roll a d6 and add the result\
    \ to the ally's result."
  "name": "Cheer (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nAfter an ally hits an enemy creature,\
    \ the troubadour-warrior can convert the hit into a critical hit."
  "name": "Bolstering Praise (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nWhen a creature the troubadour-warrior\
    \ can see within 60 feet hits the leader of the troubadour-warrior, the troubadour-warrior\
    \ can taunt the creature, forcing it to make a Charisma saving throw. On a failed\
    \ save, its attack automatically misses."
  "name": "Distracting Taunt (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
