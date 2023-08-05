---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Goat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (dice: 2d4|avg\
    \ (2d4)) bludgeoning damage. If the target is a creature, it must succeed on\
    \ a DC 13 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "SKT"
- "SLW"
- "IDRotF"
- "CoS"
- "WBtW"
"image": "/compendium/bestiary/beast/token/giant-goat.png"
aliases: ["Giant Goat"]
---
# Giant Goat
*Source: Monster Manual p. 326, Storm King's Thunder, Storm Lord's Wrath, Icewind Dale: Rime of the Frostmaiden, Curse of Strahd, The Wild Beyond the Witchlight*  

```ad-statblock
title: Giant Goat
![[/6. Mechanics/Bestiary/Beast/Token/giant-goat.png#token]]
*Large beast, Unaligned*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|11 (+0)|12 (+1)| 3 (-4)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 11
- **Languages** —
- **Challenge** 1/2

## Traits

***Charge.*** If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (`dice: 2d4` (`2d4`)) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Sure-Footed.*** The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]].

## Actions

***Ram.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 3` (`2d4 + 3`) bludgeoning damage.
```
^statblock

## Environment

mountain, grassland, hill