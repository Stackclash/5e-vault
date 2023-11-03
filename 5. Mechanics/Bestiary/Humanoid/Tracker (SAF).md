---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Tracker"]
---
# [Tracker](compendium\bestiary\humanoid/tracker-saf.md)
*Source: Strongholds and Followers p. 78*  

```statblock
"name": "Tracker (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "3"
"skillsaves":
  "Investigation": !!int "5"
  "Survival": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Ranged Weapon Attack: dice: d20+6 (+6 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage.\n\nAt 7th level,\
    \ retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe tracker casts the [[5. Mechanics/Spells/Hunters Mark.md|hunter's mark]]\
    \ spell."
  "name": "Hunter's Mark (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe tracker casts the [[5. Mechanics/Spells/Find Traps.md|find traps]]\
    \ spell."
  "name": "Find Traps (3/Day)"
"reactions":
- "desc": "Prerequisite: 7th-level retainer\n\nWhen a creature the tracker can see\
    \ enters a space adjacent to the tracker's leader, the tracker may use their reaction\
    \ to make a signature attack against that creature. On a hit, the attack also\
    \ knocks the target [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Watch Out, Boss! (3/Day)"
"source":
- "SaF"
```
^statblock