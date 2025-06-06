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
  - Necromancer
---
# [[5. Mechanics\Bestiary\Humanoid\Necromancer (SAF).md|Necromancer]]
*Source: Strongholds and Followers p. 81*

```statblock
"name": "Necromancer (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
  - !!int "14"
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
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The necromancer casts the [[5. Mechanics/Spells/Chill Touch.md|chill touch]]\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe necromancer casts the [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]]\
      \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Blindness/Deafness (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe necromancer casts the [[5. Mechanics/Spells/Vampiric Touch.md|vampiric\
      \ touch]] spell (+6 to hit)."
    "name": "Vampiric Touch (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe necromancer casts the [[5. Mechanics/Spells/Blight.md|blight]]\
      \ spell (spell save DC 15)."
    "name": "Blight (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
