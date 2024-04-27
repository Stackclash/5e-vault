---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Exorcist
---
# [[5. Mechanics\Bestiary\Humanoid\Exorcist.md|Exorcist]]
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Exorcist"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
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
- "desc": "The Exorcist casts the [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]]\
    \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
    \nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Exorcist casts the [[5. Mechanics/Spells/Scorching Ray.md|scorching\
    \ ray]] spell (+6 to hit)."
  "name": "Scorching Ray (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Exorcist casts the [[5. Mechanics/Spells/Fireball.md|fireball]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Fireball (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe Exorcist casts the [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]\
    \ spell (spell save DC 15)."
  "name": "Wall of Fire (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
