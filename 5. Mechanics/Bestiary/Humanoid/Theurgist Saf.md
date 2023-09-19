---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Theurgist"]
---
# Theurgist
*Source: Strongholds and Followers p. 81*  

```statblock
"name": "Theurgist"
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
  "Charisma": "+3"
  "Dexterity": "+3"
  "Wisdom": "+6"
  "Intelligence": "+6"
  "Strength": "+3"
  "Constitution": "+3"
"skillsaves":
  "Religion": "+5"
  "Arcana": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The theurgist casts the [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\
    \ cantrip (dice: d20+6 (+6 to hit)).\n\nAt 7th level, retainers can take two\
    \ signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe theurgist casts the [pass without\
    \ trace](compendium/spells/pass-without-trace.md) spell."
  "name": "Blink (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe theurgist casts the [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]\
    \ spell."
  "name": "Dispel Magic (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe theurgist casts the [[5. Mechanics/Spells/Banishment.md|banishment]]\
    \ spell (spell save DC 15)."
  "name": "Banishment (1/Day)"
"source":
- "SaF"
```
^statblock