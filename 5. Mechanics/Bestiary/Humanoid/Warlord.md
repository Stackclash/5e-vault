---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
statblock: inline
aliases:
  - Warlord
---
# [[5. Mechanics\Bestiary\Humanoid\Warlord.md|Warlord]]
*Source: Strongholds and Followers p. 76*

```statblock
"name": "Warlord"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "Heavy"
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
  "Intimidation": !!int "5"
  "Athletics": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft.,\
    \ one target. Hit: dice:1d12 + 4|text(10) (1d12 + 4) piercing damage.\n\n\
    At 7th level, retainers can take two signature attacks per round."
  "name": "Signature Attack"
- "desc": "Prerequisite: 3rd-level retainer\n\nThe warlord takes their signature\
    \ attack and selects an ally within 30 feet who can see and hear the warlord and\
    \ has line of sight to the target of the signature attack. That ally makes a weapon\
    \ attack against the target."
  "name": "Commanding Strike (3/Day)"
- "desc": "Prerequisite: 5th-level retainer\n\nThe warlord takes a signature attack\
    \ and selects an ally, who can immediately move up to 30 feet and make an attack\
    \ or cast a spell."
  "name": "Charge (3/Day)"
- "desc": "Prerequisite: 7th-level retainer\n\nAll allies within 60 feet gain dice:\
    \ 3d8|avg|noform (3d8) temporary hit points."
  "name": "Rallying Cry (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
