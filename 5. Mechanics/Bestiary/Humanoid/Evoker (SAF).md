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
  - Evoker
---
# [[5. Mechanics/Bestiary/Humanoid/Evoker (SAF).md|Evoker]]
*Source: Strongholds and Followers p. 80*

```statblock
"name": "Evoker (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "14"
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
  "Insight": !!int "5"
  "Arcana": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The evoker casts the [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\
    \ cantrip (+6 to hit).\n\nAt 7th level, retainers can take two signature attacks\
    \ per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe evoker casts the [[5. Mechanics/Spells/Scorching Ray.md|scorching ray]]\
    \ spell (+6 to hit)."
  "name": "Acid Arrow (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe evoker casts the [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Fireball (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe evoker casts the [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]\
    \ spell (spell save DC 15)."
  "name": "Wall of Fire (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
