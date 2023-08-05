---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/size/huge
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Elephant"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the elephant moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].\
    \ If the target is [[6. Mechanics/Rules/conditions.md#prone\|prone]], the elephant\
    \ can make one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d8 + 6|avg (3d8 + 6) piercing damage."
  "name": "Gore"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one [[6. Mechanics/Rules/conditions.md#prone\|prone]]\
    \ creature. Hit: dice: 3d10 + 6|avg (3d10 + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "MM"
- "ToA"
"image": "/compendium/bestiary/beast/token/elephant.png"
aliases: ["Elephant"]
---
# Elephant
*Source: Monster Manual p. 322, Tomb of Annihilation*  

```ad-statblock
title: Elephant
![[/6. Mechanics/Bestiary/Beast/Token/elephant.png#token]]
*Huge beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 8d12 + 24|text(76)` (8d12 + 24) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)| 9 (-1)|17 (+3)| 3 (-4)|11 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 4

## Traits

***Trampling Charge.*** If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]. If the target is [[6. Mechanics/Rules/conditions.md#prone\|prone]], the elephant can make one stomp attack against it as a bonus action.

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 3d8 + 6` (`3d8 + 6`) piercing damage.

***Stomp.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one [[6. Mechanics/Rules/conditions.md#prone\|prone]] creature. Hit: `dice: 3d10 + 6` (`3d10 + 6`) bludgeoning damage.
```
^statblock

## Environment

grassland