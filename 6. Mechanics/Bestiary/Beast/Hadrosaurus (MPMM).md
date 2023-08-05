---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/swamp
- monster/size/large
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) bludgeoning damage."
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/hadrosaurus.png"
aliases: ["Hadrosaurus"]
---
# Hadrosaurus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*  

A hadrosaurus is a semi-quadrupedal herbivore with bony head crests. If raised from a hatchling, it can be trained to carry a rider.

```ad-statblock
title: Hadrosaurus
![[/6. Mechanics/Bestiary/Beast/Token/hadrosaurus.png#token]]
*Large beast(dinosaur), Unaligned*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|10 (+0)|13 (+1)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** passive Perception 12
- **Languages** —
- **Challenge** 1/4

## Actions

***Tail.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 2` (`1d10 + 2`) bludgeoning damage.
```
^statblock

## Environment

grassland, swamp