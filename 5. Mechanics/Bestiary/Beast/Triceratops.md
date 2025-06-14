---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: grassland
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/grassland
  - monster/size/huge
  - monster/type/beast
aliases:
  - Triceratops
---
# [[5. Mechanics\Bestiary\Beast\Triceratops.md|Triceratops]]
*Source: Monster Manual p. 80. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

One of the most aggressive of the herbivorous dinosaurs, a triceratops has a skull that flares out to form a protective plate of bone. With its great horns and formidable speed, a triceratops gores and tramples would-be predators to death.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

```statblock
"name": "Triceratops"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "11"
  - !!int "5"
"speed": "50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "If the triceratops moves at least 20 feet straight toward a creature\
      \ and then hits it with a gore attack on the same turn, that target must succeed\
      \ on a DC 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the triceratops\
      \ can make one stomp attack against it as a bonus action."
    "name": "Trampling Charge"
"actions":
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24\
      \ (4d8 + 6) piercing damage."
    "name": "Gore"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
      \ creature. Hit: 22 (3d10 + 6) bludgeoning damage"
    "name": "Stomp"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/triceratops.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
