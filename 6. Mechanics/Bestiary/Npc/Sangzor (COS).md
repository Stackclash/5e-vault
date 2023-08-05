---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Sangzor"
"size": "Large"
"type": "beast"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "33"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "6"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 11"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Sangzor moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (dice: 2d4|avg\
    \ (2d4)) bludgeoning damage. If the target is a creature, it must succeed on\
    \ a DC 13 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Sangzor has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/sangzor.png"
aliases: ["Sangzor"]
---
# Sangzor
*Source: Curse of Strahd p. 160, Derived from Giant Goat (MM)*  

```ad-statblock
title: Sangzor
![[/6. Mechanics/Bestiary/Npc/Token/sangzor.png#token]]
*Large beast, Chaotic Evil*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 3d10 + 3|text(33)` (3d10 + 3) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|11 (+0)|12 (+1)| 6 (-2)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 11
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** —
- **Challenge** 1

## Traits

***Charge.*** If Sangzor moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (`dice: 2d4` (`2d4`)) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Sure-Footed.*** Sangzor has advantage on Strength and Dexterity saving throws made against effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]].

## Actions

***Ram.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 3` (`2d4 + 3`) bludgeoning damage.
```
^statblock

## Environment

mountain, grassland, hill