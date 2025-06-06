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
  - Spirit Warden
---
# [[5. Mechanics\Bestiary\Humanoid\Spirit Warden (SAF).md|Spirit Warden]]
*Source: Strongholds and Followers p. 72*

```statblock
"name": "Spirit Warden (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
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
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 9 (2d6 + 2) slashing damage.\n\nAt 7th level, retainers\
      \ can take two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer\n\nThe spirit warden and their leader\
      \ have resistance to all damage until the end of the totem warrior's next turn."
    "name": "Grizzly Resistance (3/Day, Bonus Action)"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe spirit warden uses the Dash\
      \ action. This movement does not provoke attacks of opportunity."
    "name": "Raptor Dive (3/Day, Bonus Action)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe spirit warden immediately makes\
      \ an attack with their signature attack against all adjacent enemies. Hits deal\
      \ an extra 6 (d12) slashing damage."
    "name": "Ferocious Whirlwind (1/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
