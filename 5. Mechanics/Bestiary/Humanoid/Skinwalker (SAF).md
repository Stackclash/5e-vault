---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Skinwalker"]
---
# [[5. Mechanics/Bestiary/Humanoid/Skinwalker (SAF).md|Skinwalker]]
*Source: Strongholds and Followers p. 75*  

```statblock
"name": "Skinwalker (SaF)"
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
  "Intelligence": !!int "6"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Nature": !!int "5"
  "Survival": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) piercing damage.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe skinwalker assumes the shape\
    \ of a [[5. Mechanics/Bestiary/Beast/Dire Wolf.md|dire wolf]] for 1 minute. While\
    \ in this form, the skinwalker's signature attack deals dice: 2d6 + 3|avg (2d6\
    \ + 3) piercing damage. Their movement increases to 50 feet, they gain advantage\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on hearing or smell, and they have advantage on attack rolls against a\
    \ creature if at least one of the skinwalker's allies is within 5 feet of the\
    \ creature and the ally isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]].\
    \ A skinwalker can only be in one form at a time."
  "name": "Transform–Dire Wolf (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe skinwalker assumes the shape\
    \ of an [[5. Mechanics/Bestiary/Beast/Allosaurus.md|allosaurus]] for 1 minute. While\
    \ in this form, the skinwalker's signature attack deals dice: 2d10 + 4|avg (2d10\
    \ + 4) piercing damage. Their movement increases to 60 feet, and if they move\
    \ at least 30 feet straight toward a creature and then hit it with their signature\
    \ attack on the same turn, that target must succeed on a DC 13 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]] and the skinwalker\
    \ can make a signature attack against it as a bonus action. A skinwalker can only\
    \ be in one form at a time."
  "name": "Transform-Allosaurus (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe skinwalker assumes the form of\
    \ a [[5. Mechanics/Bestiary/Beast/Giant Scorpion.md|giant scorpion]] for 1 minute.\
    \ While in this form The skinwalker's armor class increases to 17, their signature\
    \ attack deals dice: 1d10 + 2|avg (1d10 + 2) piercing damage and force the\
    \ target to make a Constitution saving throw or take dice: 4d10|avg (4d10)\
    \ poison damage on a failed save, or half as much damage on a successful one.\
    \ A skinwalker can only be in one form at a time."
  "name": "Transform-Giant Scorpion (3/Day)"
"source":
- "SaF"
```
^statblock