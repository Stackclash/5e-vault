---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Curate"]
---
# [Curate](compendium/bestiary/humanoid/curate-saf.md)
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Curate (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The Curate casts the [sacred flame](compendium/spells/sacred-flame.md)\
    \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
    \nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Curate casts the [suggestion](compendium/spells/suggestion.md)\
    \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
  "name": "Suggestion (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Curate casts the [nondetection](compendium/spells/nondetection.md)\
    \ spell."
  "name": "Nondetection (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe Curate casts the [confusion](compendium/spells/confusion.md)\
    \ spell (spell save DC 15)."
  "name": "Confusion (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```