---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/grassland
- monster/size/huge
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
"name": "Stegosaurus"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "20"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "11"
- !!int "5"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 6d6 + 5|avg (6d6 + 5) piercing damage."
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/stegosaurus.png"
aliases: ["Stegosaurus"]
---
# Stegosaurus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*  

This heavily built dinosaur has rows of plates on its back and a flexible, spiked tail held high to strike predators. It tends to travel in herds of mixed ages.

```ad-statblock
title: Stegosaurus
![](/compendium/bestiary/beast/token/stegosaurus.png#token)
*Huge beast(dinosaur), Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 8d12 + 24|text(76)` (8d12 + 24) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)| 9 (-1)|17 (+3)| 2 (-4)|11 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 4

## Actions

***Tail.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one target. Hit: `dice: 6d6 + 5|avg` (`6d6 + 5`) piercing damage.
```
^statblock

## Environment

forest, grassland