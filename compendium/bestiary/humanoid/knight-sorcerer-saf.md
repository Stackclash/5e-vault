---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Knight-Sorcerer"]
---
# [Knight-Sorcerer](compendium/bestiary/humanoid/knight-sorcerer-saf.md)
*Source: Strongholds and Followers p. 75*

```statblock
"name": "Knight-Sorcerer (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "6"
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
- "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing\
    \ damage.\n\nAt 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe Knight-Sorcerer casts the [shield](compendium/spells/shield.md)\
    \ spell."
  "name": "Shield (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Knight-Sorcerer casts the [thunderwave](compendium/spells/thunderwave.md)\
    \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
  "name": "Thunderwave (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe knight-sorcerer casts [fire bolt](compendium/spells/fire-bolt.md)."
  "name": "Spellblade (3/Day, Bonus Action)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```