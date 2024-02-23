---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/erlw
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Sergeant
---
# [[5. Mechanics\Bestiary\Humanoid\Sergeant.md|Sergeant]]
*Source: Eberron: Rising from the Last War p. 197*  

```statblock
"name": "Sergeant"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing\
    \ damage, or dice: 1d8 + 1|avg (1d8 + 1) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Humanoid/token/sergeant-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
