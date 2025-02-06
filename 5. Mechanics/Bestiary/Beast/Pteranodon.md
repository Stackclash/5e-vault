---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'mountain, grassland, coastal'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 4
  - monster\Environment\Coast(AL)
  - monster\Environment\Grassland
  - monster\Environment\Mountain
  - monster\Size\Medium
  - monster\Type\Beast
aliases:
  - Pteranodon
---
# [[5. Mechanics\Bestiary\Beast\Pteranodon.md|Pteranodon]]
*Source: Monster Manual p. 80. Available in the Basic Rules (2014)*

These flying reptiles have wingspans of 15 to 20 feet and typically dive for small marine prey, though they are opportunists and will attack any creature that appears edible. A pteranodon has no teeth, instead using its sharp beak to stab prey too large to swallow with one gulp.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

```statblock
"name": "Pteranodon"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "12"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "1"
"senses": "passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The pteranodon doesn't provoke opportunity attacks when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) piercing damage"
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/pteranodon.webp"
```
^statblock

## Environment

mountain, grassland, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
