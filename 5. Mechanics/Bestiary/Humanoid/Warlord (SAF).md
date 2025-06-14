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
  - Warlord
---
# [[5. Mechanics\Bestiary\Humanoid\Warlord (SAF).md|Warlord]]
*Source: Strongholds and Followers p. 76*

```statblock
"name": "Warlord (SAF)"
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
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft., one target.\
      \ Hit: 10 (1d12 + 4) piercing damage.\n\nAt 7th level, retainers can take\
      \ two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe warlord takes their signature\
      \ attack and selects an ally within 30 feet who can see and hear the warlord\
      \ and has line of sight to the target of the signature attack. That ally makes\
      \ a weapon attack against the target."
    "name": "Commanding Strike (3/Day)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe warlord takes a signature attack\
      \ and selects an ally, who can immediately move up to 30 feet and make an attack\
      \ or cast a spell."
    "name": "Charge (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nAll allies within 60 feet gain\
      \ 3d8 temporary hit points."
    "name": "Rallying Cry (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
