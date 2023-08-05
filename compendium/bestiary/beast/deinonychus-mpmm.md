---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast/dinosaur
statblock: true
statblock-link: "#^statblock"
"name": "Deinonychus"
"size": "Medium"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "15"
- !!int "15"
- !!int "14"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the deinonychus moves at least 20 feet straight toward a creature and\
    \ then hits it with a Claw attack on the same turn, that target must succeed on\
    \ a DC 12 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).\
    \ If the target is [prone](compendium/rules/conditions.md#prone), the deinonychus\
    \ can make one Bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deinonychus makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) slashing damage."
  "name": "Claw"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/deinonychus.png"
aliases: ["Deinonychus"]
---
# Deinonychus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*  

This larger cousin of the velociraptor kills by gripping its target with its claws and feeding.

```ad-statblock
title: Deinonychus
![](/compendium/bestiary/beast/token/deinonychus.png#token)
*Medium beast(dinosaur), Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 4d8 + 8|text(26)` (4d8 + 8) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|15 (+2)|14 (+2)| 4 (-3)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1

## Traits

***Pounce.*** If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a Claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone). If the target is [prone](compendium/rules/conditions.md#prone), the deinonychus can make one Bite attack against it as a bonus action.

## Actions

***Multiattack.*** The deinonychus makes one Bite attack and two Claw attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) slashing damage.
```
^statblock

## Environment

forest, grassland, hill