---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: 'grassland, forest, urban'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/urban
  - monster/size/medium
  - monster/type/beast
aliases:
  - Giant Wasp
---
# [[5. Mechanics\Bestiary\Beast\Giant Wasp.md|Giant Wasp]]
*Source: Monster Manual p. 329. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

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
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one. If the poison damage reduces the target to 0 hit points, the\
    \ target is stable but [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for\
    \ 1 hour, even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way."
  "name": "Sting"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-wasp.webp"
```
^statblock

## Environment

grassland, forest, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
