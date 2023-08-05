---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Constrictor Snake"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "walk 30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) bludgeoning damage, and the target is [grappled](compendium/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the creature is [restrained](compendium/rules/conditions.md#restrained),\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDMM"
"image": "/compendium/bestiary/beast/token/constrictor-snake.png"
aliases: ["Constrictor Snake"]
---
# Constrictor Snake
*Source: Monster Manual p. 320, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage*  

```ad-statblock
title: Constrictor Snake
![](/compendium/bestiary/beast/token/constrictor-snake.png#token)
*Large beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 2d10 + 2|text(13)` (2d10 + 2) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|12 (+1)| 1 (-5)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 10 ft., passive Perception 10
- **Languages** —
- **Challenge** 1/4

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Constrict.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) bludgeoning damage, and the target is [grappled](compendium/rules/conditions.md#grappled) (escape DC 14). Until this grapple ends, the creature is [restrained](compendium/rules/conditions.md#restrained), and the snake can't constrict another target.
```
^statblock

## Environment

underwater, forest, swamp, desert