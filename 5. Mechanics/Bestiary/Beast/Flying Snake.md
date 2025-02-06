---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: 'grassland, forest, urban, desert'
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 8
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Urban
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Flying Snake
---
# [[5. Mechanics\Bestiary\Beast\Flying Snake.md|Flying Snake]]
*Source: Monster Manual p. 322. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A flying snake is a brightly colored, winged serpent found in remote jungles. Tribespeople and cultists sometimes domesticate flying snakes to serve as messengers that deliver scrolls wrapped in their coils.

```statblock
"name": "Flying Snake"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "4"
- !!int "18"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "30 ft., fly 60 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 11"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage plus 7 (3d4) poison damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/flying-snake.webp"
```
^statblock

## Environment

grassland, forest, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
