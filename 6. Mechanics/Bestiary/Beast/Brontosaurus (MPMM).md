---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/grassland
- monster/size/gargantuan
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
"name": "Brontosaurus"
"size": "Gargantuan"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "121"
"hit_dice": "9d20 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"saves":
  "Constitution": !!int "6"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 20 ft., one target.\
    \ Hit: dice: 5d8 + 5|avg (5d8 + 5) bludgeoning damage, and the target must\
    \ succeed on a DC 14 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Stomp"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 20 ft., one target.\
    \ Hit: dice: 6d8 + 5|avg (6d8 + 5) bludgeoning damage"
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/brontosaurus.png"
aliases: ["Brontosaurus"]
---
# Brontosaurus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*  

This massive four-legged dinosaur is large enough that most predators leave it alone. Its deadly tail can drive away or kill smaller threats.

```ad-statblock
title: Brontosaurus
![[/6. Mechanics/Bestiary/Beast/Token/brontosaurus.png#token]]
*Gargantuan beast(dinosaur), Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 9d20 + 27|text(121)` (9d20 + 27) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|21 (+5)| 9 (-1)|17 (+3)| 2 (-4)|10 (+0)| 7 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** Constitution +6
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 5

## Actions

***Stomp.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 20 ft., one target. Hit: `dice: 5d8 + 5` (`5d8 + 5`) bludgeoning damage, and the target must succeed on a DC 14 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Tail.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 20 ft., one target. Hit: `dice: 6d8 + 5` (`6d8 + 5`) bludgeoning damage
```
^statblock

## Environment

forest, grassland