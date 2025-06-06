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
  - Justicar
---
# [[5. Mechanics\Bestiary\Humanoid\Justicar (SAF).md|Justicar]]
*Source: Strongholds and Followers p. 77*

```statblock
"name": "Justicar (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Heavy"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+6"
  - "dexterity": "+3"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+6"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) slashing damage.\n\nAt 7th level, retainers can take two signature\
      \ attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe justicar makes a signature\
      \ attack. The target must make a Wisdom save or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ until the end of its next turn."
    "name": "Terrifying Strike (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe justicar casts the [[5. Mechanics/Spells/Hunters Mark.md|hunter's\
      \ mark]] spell."
    "name": "Hunter's Mark (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe justicar issues a holy decree\
      \ challenging an enemy to a duel. That enemy must make a Wisdom saving throw.\
      \ If it fails, it has disadvantage on attack rolls against creatures other than\
      \ the justicar. On its turn, the enemy can make a Wisdom saving throw to try\
      \ to move away from the justicar. On a successful save, the duel ends. The duel\
      \ also ends after 1 minute or if the justicar moves away or attacks any other\
      \ creature."
    "name": "Duel (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
