---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/urban
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Flying Snake"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "4"
- !!int "18"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., fly 60 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 11"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage plus dice: 3d4|avg (3d4) poison damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDH"
- "IDRotF"
- "KftGV"
"image": "/compendium/bestiary/beast/token/flying-snake.png"
aliases: ["Flying Snake"]
---
# Flying Snake
*Source: Monster Manual p. 322, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Icewind Dale: Rime of the Frostmaiden, Keys from the Golden Vault*  

A flying snake is a brightly colored, winged serpent found in remote jungles. Tribespeople and cultists sometimes domesticate flying snakes to serve as messengers that deliver scrolls wrapped in their coils.

```ad-statblock
title: Flying Snake
![](/compendium/bestiary/beast/token/flying-snake.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 14 
- **Hit Points** `dice: 2d4|text(5)` (2d4) 
- **Speed** walk 30 ft., fly 60 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 4 (-3)|18 (+4)|11 (+0)| 2 (-4)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 10 ft., passive Perception 11
- **Languages** —
- **Challenge** 1/8

## Traits

***Flyby.*** The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: 1 piercing damage plus `dice: 3d4|avg` (`3d4`) poison damage.
```
^statblock

## Environment

grassland, forest, urban, desert