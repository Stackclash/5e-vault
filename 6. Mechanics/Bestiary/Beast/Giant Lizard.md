---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Lizard"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft., climb 30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "IDRotF"
- "JttRC"
- "KftGV"
"image": "/compendium/bestiary/beast/token/giant-lizard.png"
aliases: ["Giant Lizard"]
---
# Giant Lizard
*Source: Monster Manual p. 326, Hoard of the Dragon Queen, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

A giant lizard can be ridden or used as a draft animal. Lizardfolk also keep them as pets, and subterranean giant lizards are used as mounts and pack animals by drow, duergar, and other Underdark dwellers.

> [!quote] Variant: Giant Lizard Traits
> 
> Some giant lizards have one or both of the following traits.
> 
> **Hold Breath.** The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)
> 
> **Spider Climb.** The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
^variant-giant-lizard-traits

```ad-statblock
title: Giant Lizard
![[/6. Mechanics/Bestiary/Beast/Token/giant-lizard.png#token]]
*Large beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|12 (+1)|13 (+1)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 10
- **Languages** —
- **Challenge** 1/4

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

underdark, forest, swamp, desert, coastal