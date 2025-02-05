---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/1-8
- monster/size/medium
- monster/type/construct
aliases: ["Monodrone (Rogue)"]
---
# [Monodrone (Rogue)](compendium\bestiary\construct/monodrone-rogue.md)
*Source: Monster Manual p. 224*

```statblock
"name": "Monodrone (Rogue)"
"size": "Medium"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "30 ft., fly 30 ft."
"senses": "truesight 120 ft., passive Perception 10"
"languages": "Modron"
"cr": "1/8"
"traits":
- "desc": "If the monodrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Dagger"
- "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 3 (1d6) piercing damage."
  "name": "Javelin"
"source":
- "MM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```