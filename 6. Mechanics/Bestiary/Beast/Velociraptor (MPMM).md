---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/grassland
- monster/size/tiny
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
"name": "Velociraptor"
"size": "Tiny"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The velociraptor has advantage on an attack roll against a creature if\
    \ at least one of the velociraptor's allies is within 5 feet of the creature and\
    \ the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The velociraptor makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claw"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/velociraptor.png"
aliases: ["Velociraptor"]
---
# Velociraptor
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*  

This feathered dinosaur is about the size of a large turkey. It is an aggressive predator and often hunts in packs to bring down larger prey.

```ad-statblock
title: Velociraptor
![[/6. Mechanics/Bestiary/Beast/Token/velociraptor.png#token]]
*Tiny beast(dinosaur), Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 3d4 + 3|text(10)` (3d4 + 3) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|13 (+1)| 4 (-3)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1/4

## Traits

***Pack Tactics.*** The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Multiattack.*** The velociraptor makes one Bite attack and one Claw attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) slashing damage.
```
^statblock

## Environment

forest, grassland