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
  - Guild Adept
---
# [[5. Mechanics\Bestiary\Humanoid\Guild Adept (SAF).md|Guild Adept]]
*Source: Strongholds and Followers p. 78*

```statblock
"name": "Guild Adept (SAF)"
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
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
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
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) slashing damage.\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe guild adept casts [[5. Mechanics/Spells/Blur.md|blur]]\
      \ on themselves and their leader."
    "name": "Out of Phase (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe guild adept picks two enemy\
      \ creatures adjacent to each other within 30 feet. Each target must succeed\
      \ on a Wisdom saving throw or immediately attack the other."
    "name": "Who's Side Are You On?! (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe guild adept casts [[5. Mechanics/Spells/Invisibility.md|invisibility]]\
      \ on themselves or their leader. This spell lasts until the end of the target's\
      \ next turn."
    "name": "Vanish (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
