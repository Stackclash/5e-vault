---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/coastal
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/swamp
  - monster/size/tiny
  - monster/type/beast
statblock: inline
aliases:
  - Poisonous Snake
---
# [[5. Mechanics\Bestiary\Beast\Poisonous Snake.md|Poisonous Snake]]
*Source: Monster Manual p. 334. Available in the SRD and the Basic Rules.*

```statblock
"name": "Poisonous Snake"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "16"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage, and the target must make a DC 10 Constitution saving throw, taking 5\
    \ (2d4) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "ToA"
- "GoS"
- "IMR"
"image": "5. Mechanics/Bestiary/Beast/token/poisonous-snake.webp"
```
^statblock

## Environment

grassland, forest, swamp, hill, desert, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
