---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Boar"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "7"
- !!int "5"
"speed": "walk 40 ft."
"senses": "passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra 7 (dice:\
    \ 2d6|avg (2d6)) slashing damage. If the target is a creature, it must succeed\
    \ on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the boar takes 10 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage."
  "name": "Tusk"
"source":
- "MM"
- "SKT"
- "ToA"
- "GoS"
- "MOT"
"image": "/compendium/bestiary/beast/token/giant-boar.png"
aliases: ["Giant Boar"]
---
# Giant Boar
*Source: Monster Manual p. 323, Storm King's Thunder, Tomb of Annihilation, Ghosts of Saltmarsh, Mythic Odysseys of Theros*  

```ad-statblock
title: Giant Boar
![](/compendium/bestiary/beast/token/giant-boar.png#token)
*Large beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 5d10 + 15|text(42)` (5d10 + 15) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|10 (+0)|16 (+3)| 2 (-4)| 7 (-2)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 8
- **Languages** —
- **Challenge** 2

## Traits

***Charge.*** If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).

***Relentless (Recharges after a Short or Long Rest).*** If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.

## Actions

***Tusk.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) slashing damage.
```
^statblock

## Environment

grassland, forest, hill