---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Plesiosaurus"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 20 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The plesiosaurus can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d6 + 4|avg (3d6 + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "ToA"
- "GoS"
- "IDRotF"
- "DSotDQ"
"image": "/compendium/bestiary/beast/token/plesiosaurus.png"
aliases: ["Plesiosaurus"]
---
# Plesiosaurus
*Source: Monster Manual p. 80, Tomb of Annihilation, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden, Dragonlance: Shadow of the Dragon Queen*  

A plesiosaurus is a marine dinosaur whose compact body is driven by powerful flippers. Predatory and aggressive, it attacks any creature it encounters. Its flexible neck accounts for a third of its total length, letting it twist in any direction to deliver a powerful bite.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

## Stat Block

```ad-statblock
title: Plesiosaurus
![](/compendium/bestiary/beast/token/plesiosaurus.png#token)
*Large beast, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 8d10 + 24|text(68)` (8d10 + 24) 
- **Speed** walk 20 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|15 (+2)|16 (+3)| 2 (-4)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 2

## Traits

***Hold Breath.*** The plesiosaurus can hold its breath for 1 hour.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 3d6 + 4|avg` (`3d6 + 4`) piercing damage.
```
^statblock

## Environment

underwater, coastal