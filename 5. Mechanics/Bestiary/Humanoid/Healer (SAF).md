---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Healer"]
---
# [[5. Mechanics/Bestiary/Humanoid/Healer (SAF).md|Healer]]
*Source: Strongholds and Followers p. 73*  

```statblock
"name": "Healer (SaF)"
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
  "Medicine": !!int "5"
  "Insight": !!int "5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "As an action, choose an ally the healer can see within 30 feet. On their\
    \ next attack or saving throw roll, roll a dice: d4|avg (d4) and add the result\
    \ to the ally's result. > [!note]\n> Not, strictly speaking, an attack but it\
    \ otherwise obeys all the rules of a signature attack.\n\nAt 7th level, retainers\
    \ can take two signature attacks per round."
  "name": "Orison"
- "desc": "Prerequisite: 3rd-level retainer\n\nAn ally the healer can see within\
    \ 30 feet regains dice: 1d8 + 3|avg (1d8 + 3) hit points."
  "name": "Minor Heal (5/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe Healer casts the [[5. Mechanics/Spells/Revivify.md|revivify]]\
    \ spell."
  "name": "Revivify (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nThe Healer casts the [guardian of\
    \ faith](compendium/spells/guardian-of-faith.md) spell."
  "name": "Guardian of Faith (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```