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
  - Knight-Sorcerer
---
# [[5. Mechanics\Bestiary\Humanoid\Knight Sorcerer (SAF).md|Knight-Sorcerer]]
*Source: Strongholds and Followers p. 75*

```statblock
"name": "Knight Sorcerer (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Heavy"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+6"
  - "dexterity": "+3"
  - "constitution": "+6"
  - "intelligence": "+3"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 4 (1d6 + 3) piercing damage.\n\nAt 7th level, retainers\
      \ can take two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe Knight-Sorcerer casts the [[5. Mechanics/Spells/Shield.md|shield]]\
      \ spell."
    "name": "Shield (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe Knight-Sorcerer casts the [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\
      \ spell (spell save DC 14 at 5th level, and 15 at 7th level)."
    "name": "Thunderwave (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe knight-sorcerer casts [[5. Mechanics/Spells/Fire Bolt.md|fire\
      \ bolt]]."
    "name": "Spellblade (3/Day, Bonus Action)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
