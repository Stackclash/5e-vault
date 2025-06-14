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
  - Executioner
---
# [[5. Mechanics\Bestiary\Humanoid\Executioner (SAF).md|Executioner]]
*Source: Strongholds and Followers p. 78*

```statblock
"name": "Executioner (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+6"
  - "constitution": "+3"
  - "intelligence": "+6"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4\
      \ + 4) piercing damage.\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe executioner whips a serrated\
      \ wire around an adjacent creature's neck, dealing 10 (3d6) slashing damage\
      \ on a hit. The creature must make a Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]].\
      \ At the start of the executioners turn, they automatically deal 3d6 slashing\
      \ damage to the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] creature.\
      \ During its turn, the [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ creature can make a Strength ([[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]])\
      \ or Dexterity ([[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]) check\
      \ to break the grapple."
    "name": "Garrote (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe executioner throws a barrage\
      \ of shadowy daggers at all enemies within 10 feet. Targets must make a Dexterity\
      \ saving throw or take 14 (4d6) piercing damage, or half as much damage on a\
      \ successful one."
    "name": "Dagger Storm (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe executioner disappears in a\
      \ cloud of shadow, reappearing behind a chosen enemy creature within 60 feet.\
      \ The executioner attacks twice with their signature attack, dealing an extra\
      \ 14 (4d6) force damage on each hit."
    "name": "Final Strike (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
