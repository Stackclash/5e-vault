---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/mountain
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Pteranodon
*Source: Monster Manual p. 80, Tomb of Annihilation, Ghosts of Saltmarsh, Eberron: Rising from the Last War, The Wild Beyond the Witchlight*  

These flying reptiles have wingspans of 15 to 20 feet and typically dive for small marine prey, though they are opportunists and will attack any creature that appears edible. A pteranodon has no teeth, instead using its sharp beak to stab prey too large to swallow with one gulp.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

## Stat Block

```statblock
"name": "Pteranodon"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "12"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "9"
- !!int "5"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "1"
"senses": "passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The pteranodon doesn't provoke opportunity attacks when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 1|avg (2d4 + 1) piercing damage"
  "name": "Bite"
"source":
- "MM"
- "ToA"
- "GoS"
- "ERLW"
- "WBtW"
"image": "5. Mechanics/Bestiary/Beast/token/pteranodon.png"
```
^statblock

## Environment

mountain, grassland, coastal