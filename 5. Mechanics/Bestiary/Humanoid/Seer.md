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
  - Seer
---
# [[5. Mechanics\Bestiary\Humanoid\Seer.md|Seer]]
*Source: Strongholds and Followers p. 81*  

```statblock
"name": "Seer"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "6"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Investigation": !!int "5"
  "Insight": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The seer casts the [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]] cantrip\
    \ (dice: d20+6 (+6 to hit)).\n\nAt 7th level, retainers can take two signature\
    \ attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe seer casts the [[5. Mechanics/Spells/Hold Person.md|hold person]]\
    \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
  "name": "Hold Person (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe seer casts the [[5. Mechanics/Spells/Sleet Storm.md|sleet storm]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Sleet Storm (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe seer casts the [[5. Mechanics/Spells/Divination.md|divination]]\
    \ spell (spell save DC 15)."
  "name": "Divination (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
