---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/urban
- monster/size/large
- monster/type/beast/cattle
statblock: true
statblock-link: "#^statblock"
"name": "Ox"
"size": "Large"
"type": "beast"
"subtype": "cattle"
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
  "desc": "The ox is considered to be one size larger for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage. If the ox moved at least\
    \ 20 feet straight toward the target immediately before the hit, the target takes\
    \ an extra 7 (dice: 2d6|avg (2d6)) piercing damage."
  "name": "Gore"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/ox.png"
aliases: ["Ox"]
---
# Ox
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 72, Volo's Guide to Monsters p. 208*  

Oxen are domesticated cattle bred for milk and meat production and for hauling. Many cultures incorporate the ox into their labor and diets.

## Cattle

Many kinds of cattle roam the multiverse, some of them domesticated and others feral. In many cultures, cattle are almost like family to the folk who tend to them.

## Stat Block

```ad-statblock
title: Ox
![[/6. Mechanics/Bestiary/Beast/Token/ox.png#token]]
*Large beast(cattle), Unaligned*

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

***Beast of Burden.*** The ox is considered to be one size larger for the purpose of determining its carrying capacity.

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4` (`1d6 + 4`) piercing damage. If the ox moved at least 20 feet straight toward the target immediately before the hit, the target takes an extra 7 (`dice: 2d6` (`2d6`)) piercing damage.
```
^statblock

## Environment

grassland, urban