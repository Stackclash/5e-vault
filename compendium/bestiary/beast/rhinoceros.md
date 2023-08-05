---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Rhinoceros"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "21"
- !!int "8"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the rhinoceros moves at least 20 feet straight toward a target and then\
    \ hits it with a gore attack on the same turn, the target takes an extra 9 (dice:\
    \ 2d8|avg (2d8)) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 15 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 5|avg (2d8 + 5) bludgeoning damage."
  "name": "Gore"
"source":
- "MM"
- "ToA"
- "WDH"
- "IDRotF"
"image": "/compendium/bestiary/beast/token/rhinoceros.png"
aliases: ["Rhinoceros"]
---
# Rhinoceros
*Source: Monster Manual p. 336, Tomb of Annihilation, Waterdeep: Dragon Heist, Icewind Dale: Rime of the Frostmaiden*  

```ad-statblock
title: Rhinoceros
![](/compendium/bestiary/beast/token/rhinoceros.png#token)
*Large beast, Unaligned*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 6d10 + 12|text(45)` (6d10 + 12) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|21 (+5)| 8 (-1)|15 (+2)| 2 (-4)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 11
- **Languages** —
- **Challenge** 2

## Traits

***Charge.*** If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (`dice: 2d8|avg` (`2d8`)) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 5|avg` (`2d8 + 5`) bludgeoning damage.
```
^statblock

## Environment

grassland