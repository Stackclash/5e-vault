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
  - Conjurer
---
# [[5. Mechanics/Bestiary/Humanoid/Conjurer (SAF).md|Conjurer]]
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Conjurer (SAF)"
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
  "Deception": !!int "5"
  "Arcana": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The conjurer casts the [[5. Mechanics/Spells/Acid Splash.md|acid splash]]\
    \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
    \nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe conjurer casts the [[5. Mechanics/Spells/Stinking Cloud.md|stinking\
    \ cloud]] spell (spell save DC 13 at 3rd level,\
    \ 14 at 5th level, and 15 at 7th level)."
  "name": "Stinking Cloud (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe conjurer casts the [[5. Mechanics/Spells/Conjure Element(AL).md|conjure elemental]]\
    \ spell."
  "name": "Conjure Elemental (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe conjurer casts the [[5. Mechanics/Spells/Insect Plague.md|insect plague]]\
    \ spell (spell save DC 15)."
  "name": "Insect Plague (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
