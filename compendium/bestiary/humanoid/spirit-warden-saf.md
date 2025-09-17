---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: Unknown
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/unknown
- monster/size/medium
- monster/type/humanoid/any-race
aliases: 
- Spirit Warden
---
# [Spirit Warden](compendium/bestiary/humanoid/spirit-warden-saf.md)
*Source: Strongholds and Followers p. 72*

```statblock
"name": "Spirit Warden (SaF)"
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
  - "strength": !!int "6"
  - "dexterity": !!int "3"
  - "constitution": !!int "6"
  - "intelligence": !!int "3"
  - "wisdom": !!int "3"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Nature](/compendium/rules/skills.md#Nature)"
    "desc": "+5"
  - "name": "[Survival](/compendium/rules/skills.md#Survival)"
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