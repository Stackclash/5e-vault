---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
aliases: 
- Shadow Priest
---
# [Shadow Priest](compendium/bestiary/humanoid/shadow-priest-saf.md)
*Source: Strongholds and Followers p. 74*

```statblock
"name": "Shadow Priest (SaF)"
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
  - "strength": !!int "3"
  - "dexterity": !!int "3"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "6"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The Shadow Priest casts the [sacred flame](/compendium/spells/sacred-flame.md)\
      \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
      \nAt 7th level, retainers can take two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe Shadow Priest casts the [pass\
      \ without trace](/compendium/spells/pass-without-trace.md) spell."
    "name": "Pass Without Trace (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe Shadow Priest casts the [dispel\
      \ magic](/compendium/spells/dispel-magic.md) spell."
    "name": "Dispel Magic (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe Shadow Priest casts the [dimension\
      \ door](/compendium/spells/dimension-door.md) spell."
    "name": "Dimension Door (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```