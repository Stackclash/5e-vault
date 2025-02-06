---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'underdark, grassland, forest, swamp, urban, desert'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 4
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Swamp
  - monster\Environment\Underdark
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Beast
aliases:
  - Giant Poisonous Snake
---
# [[5. Mechanics\Bestiary\Beast\Giant Poisonous Snake.md|Giant Poisonous Snake]]
*Source: Monster Manual p. 327, Curse of Strahd, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Poisonous Snake"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "18"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4\
    \ + 4) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 10 (3d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/giant-poisonous-snake.webp"
```
^statblock

## Environment

underdark, grassland, forest, swamp, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
