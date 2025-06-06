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
  - Acolyte of the Way
---
# [[5. Mechanics\Bestiary\Humanoid\Acolyte Of The Way (SAF).md|Acolyte of the Way]]
*Source: Strongholds and Followers p. 76*

```statblock
"name": "Acolyte Of The Way (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "Medium"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "18"
  - !!int "14"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+6"
  - "dexterity": "+6"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 14"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft., one target.\
      \ Hit: 9 (2d4 + 4) bludgeoning damage.\n\nAt 7th level, retainers can take\
      \ two signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 3rd-level retainer"
    "name": "Fists of Fury (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe acolyte heals 2 health levels."
    "name": "Body and Soul (3/Day, Bonus Action)"
"reactions":
  - "desc": "Prerequisite: 5th-level retainer\n\nAs a reaction to taking damage\
      \ from a creature adjacent to them, the acolyte immediately makes two attacks\
      \ with their signature attack against their attacker. If they both hit, the\
      \ attacker is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]."
    "name": "Stunning Follow-up (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
