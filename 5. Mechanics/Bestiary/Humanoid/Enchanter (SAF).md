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
  - Enchanter
---
# [[5. Mechanics\Bestiary\Humanoid\Enchanter (SAF).md|Enchanter]]
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Enchanter (SAF)"
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
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
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
  - "desc": "The enchanter casts the [[5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe enchanter casts the [[5. Mechanics/Spells/Melfs Acid Arrow.md|acid arrow]]\
      \ spell (+6 to hit)."
    "name": "Acid Arrow (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe enchanter casts the [[5. Mechanics/Spells/Fireball.md|fireball]]\
      \ spell."
    "name": "Fireball (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe enchanter casts the [[5. Mechanics/Spells/Confusion.md|confusion]]\
      \ spell (spell save DC 15)."
    "name": "Confusion (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
