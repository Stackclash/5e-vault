---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Cow"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "15"
"hit_dice": "2d10 + 4"
"stats":
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the cow moves at least 20 feet straight toward a target and then hits\
    \ it with a gore attack on the same turn, the target takes an extra 7 (dice:\
    \ 2d6|avg (2d6)) piercing damage."
  "name": "Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage."
  "name": "Gore"
"source":
- "VGM"
- "DIP"
"image": "/compendium/bestiary/beast/token/cow.png"
aliases: ["Cow"]
---
# Cow
*Source: Volo's Guide to Monsters p. 207, Dragon of Icespire Peak*  

There are many kinds of cattle, from common oxen to more unusual, magical variants.

```ad-statblock
title: Cow
![](/compendium/bestiary/beast/token/cow.png#token)
*Large beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 2d10 + 4|text(15)` (2d10 + 4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|10 (+0)|14 (+2)| 2 (-4)|10 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 1/4

## Traits

***Charge.*** If the cow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) piercing damage.

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage.
```
^statblock

## Environment

grassland