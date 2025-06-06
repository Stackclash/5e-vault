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
  - Loremaster
---
# [[5. Mechanics\Bestiary\Humanoid\Loremaster (SAF).md|Loremaster]]
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Loremaster (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  - "strength": "+3"
  - "dexterity": "+6"
  - "constitution": "+3"
  - "intelligence": "+3"
  - "wisdom": "+3"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Performance|Performance]]"
    "desc": "+5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
  - "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
    "name": "Retainer"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft., one target.\
      \ Hit: 6 (1d8 + 2) slashing damage.\n\nAt 7th level, retainers can take two\
      \ signature attacks per round."
    "name": "Signature Attack"
  - "desc": "Prerequisite: 5th-level retainer\n\nThe loremaster plays an inspiring\
      \ tune, allowing all allies within 60 feet to spend a Hit Die in order to roll\
      \ that die and regain hit points equal to the roll plus the ally's Constitution\
      \ modifier."
    "name": "Soothing Song (3/Day)"
  - "desc": "Prerequisite: 7th-level retainer\n\nThe Loremaster casts the [[5. Mechanics/Spells/Fireball.md|fireball]]\
      \ spell (spell save DC 15)."
    "name": "Fireball (1/Day)"
"reactions":
  - "desc": "Prerequisite: 3rd-level retainer\n\nAfter a creature the loremaster\
      \ can see within 60 feet makes an attack, ability check, or damage roll, the\
      \ loremaster can roll a d6 and subtract the result from that creature's result."
    "name": "Insult (3/Day)"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
