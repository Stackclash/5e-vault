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
  - Skinwalker
---
# [[5. Mechanics\Bestiary\Humanoid\Skinwalker (SAF).md|Skinwalker]]
*Source: Strongholds and Followers p. 75*

```statblock
"name": "Skinwalker (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+3"
  - "constitution": "+3"
  - "intelligence": "+6"
  - "wisdom": "+6"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) piercing damage.\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe skinwalker assumes the shape\
      \ of a [[5. Mechanics/Bestiary/Beast/Dire Wolf.md|dire wolf]] for 1 minute. While\
      \ in this form, the skinwalker's signature attack deals 10 (2d6 + 3) piercing\
      \ damage. Their movement increases to 50 feet, they gain advantage on Wisdom\
      \ ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that rely on\
      \ hearing or smell, and they have advantage on attack rolls against a creature\
      \ if at least one of the skinwalker's allies is within 5 feet of the creature\
      \ and the ally isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]].\
      \ A skinwalker can only be in one form at a time."
    "name": "Transform–Dire Wolf (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe skinwalker assumes the shape\
      \ of an [[5. Mechanics/Bestiary/Beast/Allosaur(US).md|allosaurus]] for 1 minute.\
      \ While in this form, the skinwalker's signature attack deals 15 (2d10 + 4)\
      \ piercing damage. Their movement increases to 60 feet, and if they move at\
      \ least 30 feet straight toward a creature and then hit it with their signature\
      \ attack on the same turn, that target must succeed on a DC 13 Strength saving\
      \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]] and the\
      \ skinwalker can make a signature attack against it as a bonus action. A skinwalker\
      \ can only be in one form at a time."
    "name": "Transform-Allosaurus (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe skinwalker assumes the form\
      \ of a [[5. Mechanics/Bestiary/Beast/Giant Scorpion.md|giant scorpion]] for 1 minute.\
      \ While in this form The skinwalker's armor class increases to 17, their signature\
      \ attack deals 7 (1d10 + 2) piercing damage and force the target to make a Constitution\
      \ saving throw or take 22 (4d10) poison damage on a failed save, or half as\
      \ much damage on a successful one. A skinwalker can only be in one form at a\
      \ time."
    "name": "Transform-Giant Scorpion (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
