---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: inline
---
# Allosaurus
*Source: Monster Manual p. 79, Tomb of Annihilation, Waterdeep: Dragon Heist, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

The allosaurus is a predator possessing great size, strength, and speed. It can run down almost any prey over open ground, pouncing to pull creatures down with its wicked claws.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

## Stat Block

```statblock
"name": "Allosaurus"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"stats":
- !!int "19"
- !!int "13"
- !!int "17"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 60 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the allosaurus moves at least 30 feet straight toward a creature and\
    \ then hits it with a claw attack on the same turn, that target must succeed on\
    \ a DC 13 Strength saving throw or be knocked [[5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[5. Mechanics/Rules/Conditions.md#prone|prone]], the allosaurus\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "ToA"
- "WDH"
- "JttRC"
- "KftGV"
"image": "5. Mechanics/Bestiary/Beast/token/allosaurus.png"
```
^statblock

## Environment

grassland