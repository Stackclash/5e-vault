---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
aliases: 
- Enchanter
---
# [Enchanter](compendium/bestiary/humanoid/enchanter-saf.md)
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Enchanter (SaF)"
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
  - "strength": !!int "3"
  - "dexterity": !!int "3"
  - "constitution": !!int "3"
  - "intelligence": !!int "6"
  - "wisdom": !!int "6"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Religion](/compendium/rules/skills.md#Religion)"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "The enchanter casts the [shocking grasp](/compendium/spells/shocking-grasp.md)\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe enchanter casts the [acid arrow](/compendium/spells/melfs-acid-arrow.md)\
      \ spell (+6 to hit)."
    "name": "Acid Arrow (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe enchanter casts the [fireball](/compendium/spells/fireball.md)\
      \ spell."
    "name": "Fireball (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe enchanter casts the [confusion](/compendium/spells/confusion.md)\
      \ spell (spell save DC 15)."
    "name": "Confusion (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```