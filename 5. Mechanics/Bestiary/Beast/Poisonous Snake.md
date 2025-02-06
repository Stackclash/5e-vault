---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: 'grassland, forest, swamp, hill, desert, coastal'
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 8
  - monster\Environment\Coast(AL)
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Hill
  - monster\Environment\Swamp
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Poisonous Snake
---
# [[5. Mechanics\Bestiary\Beast\Poisonous Snake.md|Poisonous Snake]]
*Source: Monster Manual p. 334. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

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
"image": "5. Mechanics/Bestiary/Beast/token/poisonous-snake.webp"
```
^statblock

## Environment

grassland, forest, swamp, hill, desert, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
