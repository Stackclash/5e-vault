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
  - Battle Priest
---
# [[5. Mechanics\Bestiary\Humanoid\Battle Priest (SAF).md|Battle Priest]]
*Source: Strongholds and Followers p. 74*

```statblock
"name": "Battle Priest (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Heavy"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+3"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+6"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) bludgeoning damage.\n\nAt 7th level, retainers can take two signature\
      \ attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe Battle Priest casts the [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual\
      \ weapon]] spell (+6 to hit)."
    "name": "Spiritual Weapon (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe Battle Priest casts the [[5. Mechanics/Spells/Spirit Guardians.md|spirit\
      \ guardians]] spell (spell save DC 14\
      \ at 5th level, and 15 at 7th level)."
    "name": "Spirit Guardians (1/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe Battle Priest casts the [[5. Mechanics/Spells/Banishment.md|banishment]]\
      \ spell (spell save DC 15)."
    "name": "Banishment (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
