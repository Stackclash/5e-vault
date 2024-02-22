---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-2
- monster/environment/forest
- monster/environment/grassland
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
aliases: ["Giant Wasp"]
---
# [[5. Mechanics\Bestiary\Beast\Giant Wasp.md|Giant Wasp]]
*Source: Monster Manual p. 329. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Wasp"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "10 ft., fly 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage, and the target must\
    \ make a DC 11 Constitution saving throw, taking dice: 3d6|avg (3d6) poison\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ poison damage reduces the target to 0 hit points, the target is stable but [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour, even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way."
  "name": "Sting"
"source":
- "MM"
- "ToA"
- "GoS"
- "EGW"
- "PSX"
- "PSA"
"image": "5. Mechanics/Bestiary/Beast/token/giant-wasp.webp"
```
^statblock

## Environment

grassland, forest, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```