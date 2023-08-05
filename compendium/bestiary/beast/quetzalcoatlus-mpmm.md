---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/hill
- monster/environment/mountain
- monster/size/huge
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
"name": "Quetzalcoatlus"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d12 + 4"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The quetzalcoatlus doesn't provoke an opportunity attack when it flies\
    \ out of an enemy's reach."
  "name": "Flyby"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 3d6 + 2|avg (3d6 + 2) piercing damage. If the quetzalcoatlus\
    \ flew least 30 feet toward the target immediately before the hit, the target\
    \ takes an extra 10 (dice: 3d6|avg (3d6)) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/quetzalcoatlus.png"
aliases: ["Quetzalcoatlus"]
---
# Quetzalcoatlus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96, Volo's Guide to Monsters p. 140*  

This giant relative of the pteranodon has a wingspan exceeding 30 feet. Although it can walk like a quadruped, it is more comfortable in the air.

```ad-statblock
title: Quetzalcoatlus
![](/compendium/bestiary/beast/token/quetzalcoatlus.png#token)
*Huge beast(dinosaur), Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 4d12 + 4|text(30)` (4d12 + 4) 
- **Speed** walk 10 ft., fly 80 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|13 (+1)|13 (+1)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** passive Perception 12
- **Languages** —
- **Challenge** 2

## Traits

***Flyby.*** The quetzalcoatlus doesn't provoke an opportunity attack when it flies out of an enemy's reach.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 10 ft., one creature. Hit: `dice: 3d6 + 2|avg` (`3d6 + 2`) piercing damage. If the quetzalcoatlus flew least 30 feet toward the target immediately before the hit, the target takes an extra 10 (`dice: 3d6|avg` (`3d6`)) piercing damage.
```
^statblock

## Environment

coastal, hill, mountain