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
  - Alienist
cr: Unknown
---
# [[/5. Mechanics/Bestiary/Humanoid/Alienist (SAF).md|Alienist]]
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Alienist (SAF)"
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
  - "dexterity": !!int "3"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
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
  - "desc": "The alienist casts the [[/5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]]\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "*Prerequisite: 3rd-level retainer*\n\nThe alienist casts the [[/5. Mechanics/Spells/Detect Thoughts.md|detect\
      \ thoughts]] spell (spell save DC 13 at\
      \ 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Detect Thoughts (3/Day)"
  - "desc": "*Prerequisite: 5th-level retainer*\n\nThe alienist casts the evard's\
      \ black tentactles spell (spell save DC 14 at 5th level, and 15 at 7th level)."
    "name": "Black Tentacles (3/Day)"
  - "desc": "*Prerequisite: 7th-level retainer*\n\nThe alienist casts the [[/5. Mechanics/Spells/Telekinesis.md|telekinesis]]\
      \ spell (spell save DC 15)."
    "name": "Telekinesis (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
