---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Goat"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 2 (dice: 1d4|avg\
    \ (1d4)) bludgeoning damage. If the target is a creature, it must succeed on\
    \ a DC 10 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "CoS"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "WBtW"
"image": "/compendium/bestiary/beast/token/goat.png"
aliases: ["Goat"]
---
# Goat
*Source: Monster Manual p. 330, Curse of Strahd, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*  

```ad-statblock
title: Goat
![[/6. Mechanics/Bestiary/Beast/Token/goat.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 1d8|text(4)` (1d8) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|10 (+0)|11 (+0)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 0

## Traits

***Charge.*** If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (`dice: 1d4` (`1d4`)) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Sure-Footed.*** The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]].

## Actions

***Ram.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 1` (`1d4 + 1`) bludgeoning damage.
```
^statblock

## Environment

mountain, grassland, hill, urban