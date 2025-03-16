---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: 'underdark, urban'
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/small
  - monster/type/beast
aliases:
  - Giant Centipede
---
# [[5. Mechanics/Bestiary/Beast/Giant Centipede.md|Giant Centipede]]
*Source: Monster Manual p. 323, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Centipede"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "4"
"hit_dice": "1d6 + 1"
"stats":
- !!int "5"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "7"
- !!int "3"
"speed": "30 ft., climb 30 ft."
"senses": "blindsight 30 ft., passive Perception 8"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4\
    \ + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or take 10 (3d6) poison damage. If the poison damage reduces the target\
    \ to 0 hit points, the target is stable but [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ for 1 hour, even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way."
  "name": "Bite"
"source":
- "MM"
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/giant-centipede.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
