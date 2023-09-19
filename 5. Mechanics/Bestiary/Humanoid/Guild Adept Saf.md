---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Guild Adept"]
---
# Guild Adept
*Source: Strongholds and Followers p. 78*  

```statblock
"name": "Guild Adept"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"stats":
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": "+3"
  "Dexterity": "+6"
  "Wisdom": "+3"
  "Intelligence": "+6"
  "Strength": "+3"
  "Constitution": "+3"
"skillsaves":
  "Deception": "+5"
  "Stealth": "+5"
  "Acrobatics": "+5"
  "Arcana": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe guild adept casts [[5. Mechanics/Spells/Blur.md|blur]]\
    \ on themselves and their leader."
  "name": "Out of Phase (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe guild adept picks two enemy creatures\
    \ adjacent to each other within 30 feet. Each target must succeed on a Wisdom\
    \ saving throw or immediately attack the other."
  "name": "Who's Side Are You On?! (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe guild adept casts [[5. Mechanics/Spells/Invisibility.md|invisibility]]\
    \ on themselves or their leader. This spell lasts until the end of the target's\
    \ next turn."
  "name": "Vanish (1/Day)"
"source":
- "SaF"
```
^statblock