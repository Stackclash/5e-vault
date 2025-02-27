---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/construct
aliases:
  - Duodrone (Rogue)
---
# [[5. Mechanics\Bestiary\Construct\Duodrone Rogue.md|Duodrone (Rogue)]]
*Source: Monster Manual p. 225*

```statblock
"name": "Duodrone Rogue"
"size": "Medium"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "30 ft."
"senses": "truesight 120 ft., passive Perception 10"
"languages": "Modron"
"cr": "1/4"
"traits":
- "desc": "If the duodrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- "desc": "The duodrone makes two fist attacks or two javelin attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Fist"
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage."
  "name": "Javelin"
"source":
- "MM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
