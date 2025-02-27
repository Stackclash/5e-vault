---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/construct
aliases:
  - Tridrone (Rogue)
---
# [[5. Mechanics\Bestiary\Construct\Tridrone Rogue.md|Tridrone (Rogue)]]
*Source: Monster Manual p. 225*

```statblock
"name": "Tridrone Rogue"
"size": "Medium"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "9"
- !!int "10"
- !!int "9"
"speed": "30 ft."
"senses": "truesight 120 ft., passive Perception 10"
"languages": "Modron"
"cr": "1/2"
"traits":
- "desc": "If the tridrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- "desc": "The tridrone makes three fist attacks or three javelin attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
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
