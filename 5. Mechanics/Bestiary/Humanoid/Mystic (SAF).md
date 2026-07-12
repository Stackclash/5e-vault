---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Any alignment
ac: 15
hp: health levels equal to their level
type: humanoid
tags:
  - monster
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Mystic
cr: Unknown
---
# [[/5. Mechanics/Bestiary/Humanoid/Mystic (SAF).md|Mystic]]
*Source: Strongholds and Followers p. 74*

```statblock
"name": "Mystic (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
"hp": "health levels equal to their level"
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
  - "intelligence": !!int "6"
  - "wisdom": !!int "6"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The Mystic casts the [[/5. Mechanics/Spells/Poison Spray.md|poison spray]]\
      \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
      \nAt 7th level, retainers can take two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "*Prerequisite: 3rd-level retainer*\n\nThe Mystic casts the [[/5. Mechanics/Spells/Moonbeam.md|moonbeam]]\
      \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Moonbeam (3/Day)"
  - "desc": "*Prerequisite: 5th-level retainer*\n\nThe Mystic casts the [[/5. Mechanics/Spells/Call Lightning.md|call lightning]]\
      \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
    "name": "Call Lightning (1/Day)"
  - "desc": "*Prerequisite: 7th-level retainer*\n\nThe Mystic casts the [[/5. Mechanics/Spells/Ice Storm.md|ice storm]]\
      \ spell (spell save DC 15)."
    "name": "Ice Storm (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
