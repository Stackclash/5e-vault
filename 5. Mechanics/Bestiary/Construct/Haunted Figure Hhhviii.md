---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hhhviii
- monster/cr/
- monster/size/tiny
- monster/type/construct
statblock: inline
aliases: ["Haunted Figure"]
---
# [[5. Mechanics/Bestiary/Construct/Haunted Figure Hhhviii.md|Haunted Figure]]
*Source: Hamund's Harvesting Handbook: Volume III p. 89*  

```statblock
"name": "Haunted Figure (HHHVIII)"
"size": "Tiny"
"type": "construct"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "12"
"hit_dice": "3d6"
"stats":
- !!int "6"
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "15"
- !!int "14"
"speed": "20 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "passive Perception 12"
"languages": "understands the language of its owner but can't speak"
"traits":
- "desc": "While the haunted figure remains motionless, it is indistinguishable from\
    \ a regular doll."
  "name": "False Appearance"
"actions":
- "desc": "The haunted figure targets a creature or unattended object within 30 feet\
    \ of it. A creature must be Medium or smaller to be affected by this magic, and\
    \ an object can weigh up to 150 pounds. If the target is a creature, the haunted\
    \ figure makes a Charisma check contested by the target's Strength check. If the\
    \ haunted figure wins the contest, the haunted figure hurls the target up to 30\
    \ feet in any direction, including upward. If the target then comes into contact\
    \ with a hard surface or heavy object, the target takes dice: 1d6|avg (1d6)\
    \ damage per 10 feet moved. If the target is an object that isn't being worn or\
    \ carried, the haunted figure hurls it up to 30 feet in any direction. The haunted\
    \ figure can use the object as a ranged weapon, attacking one creature along the\
    \ object's path (dice: d20+4 (+4 to hit)) and dealing dice: 2d4|avg (2d4)\
    \ bludgeoning damage on a hit."
  "name": "Telekinetic Thrust"
"source":
- "HHHVIII"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```