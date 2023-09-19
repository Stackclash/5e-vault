---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Mystic"]
---
# Mystic
*Source: Strongholds and Followers p. 74*  

```statblock
"name": "Mystic"
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
  "Charisma": "+3"
  "Dexterity": "+3"
  "Wisdom": "+6"
  "Intelligence": "+6"
  "Strength": "+3"
  "Constitution": "+3"
"skillsaves":
  "Insight": "+5"
  "Arcana": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The Mystic casts the [[5. Mechanics/Spells/Poison Spray.md|poison spray]]\
    \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
    \nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Mystic casts the [[5. Mechanics/Spells/Moonbeam.md|moonbeam]]\
    \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
  "name": "Moonbeam (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Mystic casts the [[5. Mechanics/Spells/Call Lightning.md|call lightning]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Call Lightning (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe Mystic casts the [[5. Mechanics/Spells/Ice Storm.md|ice storm]]\
    \ spell (spell save DC 15)."
  "name": "Ice Storm (1/Day)"
"source":
- "SaF"
```
^statblock