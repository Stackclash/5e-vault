---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/size/large
  - monster/type/construct
aliases:
  - Pentadrone (Rogue)
---
# [[5. Mechanics/Bestiary/Construct/Pentadrone Rogue.md|Pentadrone (Rogue)]]
*Source: Monster Manual p. 226*

```statblock
"name": "Pentadrone Rogue"
"size": "Large"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Modron"
"cr": "2"
"traits":
- "desc": "If the pentadrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- "desc": "The pentadrone makes five arm attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Arm"
- "desc": "The pentadrone exhales a 30-foot cone of gas. Each creature in that area\
    \ must succeed on a DC 11 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralysis Gas (Recharge 5-6)"
"source":
- "MM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
