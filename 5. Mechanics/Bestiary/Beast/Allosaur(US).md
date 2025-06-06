---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: grassland
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/grassland
  - monster/size/large
  - monster/type/beast
aliases:
  - Allosaurus
---
# [[5. Mechanics\Bestiary\Beast\Allosaur(US).md|Allosaurus]]
*Source: Monster Manual p. 79. Available in the Basic Rules (2014)*

The allosaurus is a predator possessing great size, strength, and speed. It can run down almost any prey over open ground, pouncing to pull creatures down with its wicked claws.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

```statblock
"name": "Allosaur(US)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "13"
  - !!int "17"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": ""
"cr": "2"
"traits":
  - "desc": "If the allosaurus moves at least 30 feet straight toward a creature and\
      \ then hits it with a claw attack on the same turn, that target must succeed\
      \ on a DC 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the allosaurus\
      \ can make one bite attack against it as a bonus action."
    "name": "Pounce"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15\
      \ (2d10 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) slashing damage."
    "name": "Claw"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/allosaurus.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
