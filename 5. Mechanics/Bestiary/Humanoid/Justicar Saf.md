---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Justicar"]
---
# Justicar
*Source: Strongholds and Followers p. 77*  

```statblock
"name": "Justicar"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": "+6"
  "Dexterity": "+3"
  "Wisdom": "+6"
  "Intelligence": "+3"
  "Strength": "+6"
  "Constitution": "+3"
"skillsaves":
  "Intimidation": "+5"
  "Persuasion": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe justicar makes a signature attack.\
    \ The target must make a Wisdom save or be [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ until the end of its next turn."
  "name": "Terrifying Strike (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe justicar casts the [hunter's\
    \ mark](compendium/spells/hunters-mark.md) spell."
  "name": "Hunter's Mark (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe justicar issues a holy decree\
    \ challenging an enemy to a duel. That enemy must make a Wisdom saving throw.\
    \ If it fails, it has disadvantage on attack rolls against creatures other than\
    \ the justicar. On its turn, the enemy can make a Wisdom saving throw to try to\
    \ move away from the justicar. On a successful save, the duel ends. The duel also\
    \ ends after 1 minute or if the justicar moves away or attacks any other creature."
  "name": "Duel (3/Day)"
"source":
- "SaF"
```
^statblock