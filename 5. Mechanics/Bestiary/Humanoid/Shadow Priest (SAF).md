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
  - Shadow Priest
---
# [[5. Mechanics\Bestiary\Humanoid\Shadow Priest (SAF).md|Shadow Priest]]
*Source: Strongholds and Followers p. 74*

```statblock
"name": "Shadow Priest (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+3"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+6"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The Shadow Priest casts the [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]]\
      \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
      \nAt 7th level, retainers can take two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe Shadow Priest casts the [[5. Mechanics/Spells/Pass Without Trace.md|pass\
      \ without trace]] spell."
    "name": "Pass Without Trace (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe Shadow Priest casts the [[5. Mechanics/Spells/Dispel Magic.md|dispel\
      \ magic]] spell."
    "name": "Dispel Magic (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe Shadow Priest casts the [[5. Mechanics/Spells/Dimension Door.md|dimension\
      \ door]] spell."
    "name": "Dimension Door (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
