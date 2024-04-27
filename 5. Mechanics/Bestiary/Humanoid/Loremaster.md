---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/unknown
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Loremaster
---
# [[5. Mechanics\Bestiary\Humanoid\Loremaster.md|Loremaster]]
*Source: Strongholds and Followers p. 73*

```statblock
"name": "Loremaster"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "Light"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "18"
"speed": "30 ft. (dependant on ancestry)"
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
  "Intelligence": !!int "3"
  "Strength": !!int "3"
  "Constitution": !!int "3"
"skillsaves":
  "History": !!int "5"
  "Performance": !!int "5"
  "Arcana": !!int "5"
"senses": "appropriate to ancestry, passive Perception 12"
"languages": "appropriate to ancestry (usually Common)"
"cr": "Unknown"
"traits":
- "desc": "This creature is a Retainer, as described in \"Strongholds and Followers\""
  "name": "Retainer"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft., one target. Hit:\
    \ 6 (1d8 + 2) slashing damage.\n\nAt 7th level, retainers can take two signature\
    \ attacks per round."
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
- "desc": "Prerequisite: 3rd-level retainer\n\nAfter a creature the loremaster can\
    \ see within 60 feet makes an attack, ability check, or damage roll, the loremaster\
    \ can roll a d6 and subtract the result from that creature's result."
  "name": "Insult (3/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
