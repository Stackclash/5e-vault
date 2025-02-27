---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: grassland
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/3
  - monster/environment/grassland
  - monster/size/huge
  - monster/type/beast
aliases:
  - Ankylosaurus
---
# [[5. Mechanics\Bestiary\Beast\Ankylosaur(US).md|Ankylosaurus]]
*Source: Monster Manual p. 79. Available in the Basic Rules (2014)*

Thick armor plating covers the body of the plant-eating ankylosaurus, which defends itself against predators with a knobbed tail that delivers a devastating strike. Some varieties of ankylosaurus have spiked tails that deal piercing damage instead of bludgeoning damage.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

```statblock
"name": "Ankylosaur(US)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"stats":
- !!int "19"
- !!int "11"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "30 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "3"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6\
    \ + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 14 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Tail"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/ankylosaurus.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
