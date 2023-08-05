---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Warhorse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 60 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the horse moves at least 20 feet straight toward a creature and then\
    \ hits it with a hooves attack on the same turn, that target must succeed on a\
    \ DC 14 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).\
    \ If the target is [prone](compendium/rules/conditions.md#prone), the horse can\
    \ make another attack with its hooves against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "BGDIA"
- "EGW"
- "CRCotN"
- "DSotDQ"
"image": "/compendium/bestiary/beast/token/warhorse.png"
aliases: ["Warhorse"]
---
# Warhorse
*Source: Monster Manual p. 340, Curse of Strahd, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Critical Role: Call of the Netherdeep, Dragonlance: Shadow of the Dragon Queen*  

```ad-statblock
title: Warhorse
![](/compendium/bestiary/beast/token/warhorse.png#token)
*Large beast, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|12 (+1)|13 (+1)| 2 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 11
- **Languages** —
- **Challenge** 1/2

## Traits

***Trampling Charge.*** If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone). If the target is [prone](compendium/rules/conditions.md#prone), the horse can make another attack with its hooves against it as a bonus action.

## Actions

***Hooves.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) bludgeoning damage.
```
^statblock

## Environment

urban