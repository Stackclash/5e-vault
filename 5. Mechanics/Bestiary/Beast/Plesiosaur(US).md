---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'underwater, coastal'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/coastal
  - monster/environment/underwater
  - monster/size/large
  - monster/type/beast
aliases:
  - Plesiosaurus
---
# [[5. Mechanics\Bestiary\Beast\Plesiosaur(US).md|Plesiosaurus]]
*Source: Monster Manual p. 80. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A plesiosaurus is a marine dinosaur whose compact body is driven by powerful flippers. Predatory and aggressive, it attacks any creature it encounters. Its flexible neck accounts for a third of its total length, letting it twist in any direction to deliver a powerful bite.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

```statblock
"name": "Plesiosaur(US)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "20 ft., swim 40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The plesiosaurus can hold its breath for 1 hour."
    "name": "Hold Breath"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14\
      \ (3d6 + 4) piercing damage."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/plesiosaurus.webp"
```
^statblock

## Environment

underwater, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
