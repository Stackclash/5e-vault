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
  - Illusionist
---
# [[5. Mechanics/Bestiary/Humanoid/Illusionist.md|Illusionist]]
*Source: Strongholds and Followers p. 81*

```statblock
"name": "Illusionist"
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
  "Deception": !!int "5"
  "Persuasion": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "The illusionist casts the [[5. Mechanics/Spells/Poison Spray.md|poison spray]]\
    \ cantrip (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level).\n\
    \nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe illusionist casts the [hypnotic\
    \ pattern](compendium/spells/hypnotic-pattern.md) spell (spell save DC 13 at 3rd\
    \ level, 14 at 5th level, and 15 at 7th level)."
  "name": "Hypnotic Pattern (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe illusionist casts the [[5. Mechanics/Spells/Slow.md|slow]]\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Slow (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe illusionist casts the [phantasmal\
    \ killer](compendium/spells/phantasmal-killer.md) spell (spell save DC 15)."
  "name": "Phantasmal Killer (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
