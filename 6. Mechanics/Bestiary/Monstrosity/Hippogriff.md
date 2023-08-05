---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Hippogriff"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hippogriff has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hippogriff makes two attacks: one with its beak and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 3|avg (1d10 + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDH"
- "ERLW"
- "EGW"
"image": "/compendium/bestiary/monstrosity/token/hippogriff.png"
aliases: ["Hippogriff"]
---
# Hippogriff
*Source: Monster Manual p. 184, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dragon Heist, Eberron: Rising from the Last War, Explorer's Guide to Wildemount*  

A beast whose magical origins are lost to history, a hippogriff possesses the wings and forelimbs of an eagle, the hindquarters of a horse, and a head that combines the features of both animals.

Reclusive and omnivorous, hippogriffs mate for life and seldom venture more than a few miles from their nest. When defending its mate or its young, a hippogriff fights to the death. Hippogriffs don't lay eggs but give birth to live young.

Dragons, griffons, and wyverns have a taste for hippogriff meat and frequently prey on these creatures.

## Flying Mounts

A hippogriff raised in captivity can be trained to be a faithful companion and mount. Of all the creatures that can serve as flying mounts, hippogriffs are among the easiest to train and the most loyal once trained properly.

## Stat Block

```ad-statblock
title: Hippogriff
![[/6. Mechanics/Bestiary/Monstrosity/Token/hippogriff.png#token]]
*Large monstrosity, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 40 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|13 (+1)|13 (+1)| 2 (-4)|12 (+1)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5
- **Senses** passive Perception 15
- **Languages** —
- **Challenge** 1

## Traits

***Keen Sight.*** The hippogriff has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

## Actions

***Multiattack.*** The hippogriff makes two attacks: one with its beak and one with its claws.

***Beak.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 3` (`1d10 + 3`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3` (`2d6 + 3`) slashing damage.
```
^statblock

## Environment

mountain, grassland, hill