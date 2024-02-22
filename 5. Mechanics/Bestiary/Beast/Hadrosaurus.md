---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1-4
- monster/environment/grassland
- monster/environment/swamp
- monster/size/large
- monster/type/beast/dinosaur
statblock: inline
aliases: ["Hadrosaurus"]
---
# [[5. Mechanics\Bestiary\Beast\Hadrosaurus.md|Hadrosaurus]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96*  

A hadrosaurus is a semi-quadrupedal herbivore with bony head crests. If raised from a hatchling, it can be trained to carry a rider.

```statblock
"name": "Hadrosaurus"
"size": "Large"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) bludgeoning damage."
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/hadrosaurus-mpmm.webp"
```
^statblock

## Environment

grassland, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```