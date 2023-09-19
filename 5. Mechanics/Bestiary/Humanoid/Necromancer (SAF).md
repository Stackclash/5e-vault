---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Necromancer"]
---
# Necromancer
*Source: Strongholds and Followers p. 81*  

```statblock
"name": "Necromancer"
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
  "Intimidation": "+5"
  "Religion": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The necromancer casts the [[5. Mechanics/Spells/Chill Touch.md|chill touch]]\
    \ cantrip (dice: d20+6 (+6 to hit)).\n\nAt 7th level, retainers can take two\
    \ signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe necromancer casts the [blindness/deafness](compendium/spells/blindness-deafness.md)\
    \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
  "name": "Blindness/Deafness (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe necromancer casts the [vampiric\
    \ touch](compendium/spells/vampiric-touch.md) spell (dice: d20+6 (+6 to hit))."
  "name": "Vampiric Touch (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe necromancer casts the [[5. Mechanics/Spells/Blight.md|blight]]\
    \ spell (spell save DC 15)."
  "name": "Blight (1/Day)"
"source":
- "SaF"
```
^statblock