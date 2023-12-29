---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Stormspeaker"]
---
# [[5. Mechanics\Bestiary\Humanoid\Stormspeaker (SAF).md|Stormspeaker]]
*Source: Strongholds and Followers p. 74*  

```statblock
"name": "Stormspeaker (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
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
  "Religion": !!int "5"
  "Persuasion": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 1|avg (2d6 + 1) bludgeoning damage.\n\nAt 7th level,\
    \ retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Stormspeaker casts the [[5. Mechanics/Spells/Shatter.md|shatter]]\
    \ spell (spell save DC 13 at 3rd level, 14 at 5th level, and 15 at 7th level)."
  "name": "Shatter (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Stormspeaker casts the [call\
    \ lightning](compendium/spells/call-lightning.md) spell (spell save DC 14 at 5th\
    \ level, and 15 at 7th level)."
  "name": "Call Lightning (1/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe Stormspeaker casts the [[5. Mechanics/Spells/Ice Storm.md|ice storm]]\
    \ spell (spell save DC 15)."
  "name": "Ice Storm (1/Day)"
"source":
- "SaF"
```
^statblock