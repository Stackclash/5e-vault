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
- Alienist
---
# [Alienist](compendium/bestiary/humanoid/alienist-saf.md)
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Alienist (SaF)"
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
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": !!int "3"
  - "dexterity": !!int "3"
  - "constitution": !!int "3"
  - "intelligence": !!int "3"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Investigation](/compendium/rules/skills.md#Investigation)"
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
  - "desc": "The alienist casts the [eldritch blast](/compendium/spells/eldritch-blast.md)\
      \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
      \ per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe alienist casts the [detect\
      \ thoughts](/compendium/spells/detect-thoughts.md) spell (spell save DC 13 at\
      \ 3rd level, 14 at 5th level, and 15 at 7th level)."
    "name": "Detect Thoughts (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe alienist casts the evard's\
      \ black tentactles spell (spell save DC 14 at 5th level, and 15 at 7th level)."
    "name": "Black Tentacles (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe alienist casts the [telekinesis](/compendium/spells/telekinesis.md)\
      \ spell (spell save DC 15)."
    "name": "Telekinesis (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```