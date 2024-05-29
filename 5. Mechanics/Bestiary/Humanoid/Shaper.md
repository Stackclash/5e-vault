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
  - Shaper
---
# [[5. Mechanics/Bestiary/Humanoid/Shaper.md|Shaper]]
*Source: Strongholds and Followers p. 81*

```statblock
"name": "Shaper"
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
  "Insight": !!int "5"
  "History": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The shaper casts the [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]] cantrip\
    \ (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe shaper casts the [[5. Mechanics/Spells/Blink.md|blink]]\
    \ spell."
  "name": "Blink (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe shaper casts the [[5. Mechanics/Spells/Haste.md|haste]]\
    \ spell."
  "name": "Haste (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe shaper casts the [[5. Mechanics/Spells/Polymorph.md|polymorph]]\
    \ spell (spell save DC 15)."
  "name": "Divination (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
