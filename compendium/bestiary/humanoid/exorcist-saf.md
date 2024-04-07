---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Exorcist"]
---
# [Exorcist](compendium/bestiary/humanoid/exorcist-saf.md)
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Exorcist (SaF)"
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
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "Medicine": !!int "5"
  "Religion": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The Exorcist casts the [sacred flame](compendium/spells/sacred-flame.md)\
    \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
    \nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Exorcist casts the [scorching\
    \ ray](compendium/spells/scorching-ray.md) spell (dice: d20+6 (+6 to hit))."
  "name": "Scorching Ray (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Exorcist casts the [fireball](compendium/spells/fireball.md)\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Fireball (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe Exorcist casts the [wall of fire](compendium/spells/wall-of-fire.md)\
    \ spell (spell save DC 15)."
  "name": "Wall of Fire (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```