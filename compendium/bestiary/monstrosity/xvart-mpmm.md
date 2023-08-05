---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/hill
- monster/environment/underdark
- monster/size/small
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Xvart"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "8"
- !!int "7"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 30 ft., passive Perception 8"
"languages": "Abyssal"
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The xvart can communicate with ordinary [bats](/compendium/bestiary/beast/bat.md)\
    \ and [rats](/compendium/bestiary/beast/rat.md), as well as [giant bats](/compendium/bestiary/beast/giant-bat.md)\
    \ and [giant rats](/compendium/bestiary/beast/giant-rat.md)."
  "name": "Raxivort's Tongue"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 5 (dice: 1d6 + 2|avg (1d6 + 2)) piercing damage. If at least one of\
    \ the xvart's allies is within 5 feet of the target, the xvart can push the target\
    \ 5 feet if the target is a Medium or smaller creature."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The xvart takes the Disengage action."
  "name": "Low Cunning"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/monstrosity/token/xvart.png"
aliases: ["Xvart"]
---
# Xvart
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 267, Volo's Guide to Monsters p. 200*  

Fleeing his pursuers, Raxivort wandered across the multiverse and spawned xvarts, who not only look like him but also cause any magic that could reveal his location to point to the nearest xvart instead.

## Xvarts

Xvarts are cowardly, greedy creatures spawned by a renegade demigod, Raxivort. They have blue skin, orange eyes, and receding hairlines, mirroring their creator's appearance. They stand about 3 feet tall.

Raxivort spent centuries watching over the treasury of Graz'zt, and in time, Raxivort plundered his lord's vault. One of the treasures he stole was the _Infinity Spindle_, a crystalline shard that could transform even a creature as lowly as Raxivort into a demigod. After his apotheosis, Raxivort forged the Black Sewers, a realm within Pandemonium that he filled with his beloved creatures, rats and bats, which xvarts befriend to this day. He enjoyed his reign only briefly before Graz'zt unleashed his vengeance. The demon prince urged villains far and wide to pursue the Infinity Spindle for themselves and destroy Raxivort.

## Stat Block

```ad-statblock
title: Xvart
![](/compendium/bestiary/monstrosity/token/xvart.png#token)
*Small monstrosity, Chaotic Evil*

- **Armor Class** 13 ([leather armor](/compendium/items/leather-armor.md))
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|14 (+2)|10 (+0)| 8 (-1)| 7 (-2)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +4
- **Senses** darkvision 30 ft., passive Perception 8
- **Languages** Abyssal
- **Challenge** 1/8

## Traits

***Raxivort's Tongue.*** The xvart can communicate with ordinary [bats](/compendium/bestiary/beast/bat.md) and [rats](/compendium/bestiary/beast/rat.md), as well as [giant bats](/compendium/bestiary/beast/giant-bat.md) and [giant rats](/compendium/bestiary/beast/giant-rat.md).

## Actions

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: 5 (`dice: 1d6 + 2|avg` (`1d6 + 2`)) piercing damage. If at least one of the xvart's allies is within 5 feet of the target, the xvart can push the target 5 feet if the target is a Medium or smaller creature.

***Sling.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 30/120 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) bludgeoning damage.

## Bonus Actions

***Low Cunning.*** The xvart takes the Disengage action.
```
^statblock

## Environment

hill, underdark