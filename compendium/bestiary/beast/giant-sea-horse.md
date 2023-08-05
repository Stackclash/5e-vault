---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Sea Horse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d10"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 0 ft., swim 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the sea horse moves at least 20 feet straight toward a target and then\
    \ hits it with a ram attack on the same turn, the target takes an extra 7 (dice:\
    \ 2d6|avg (2d6)) bludgeoning damage. If the target is a creature, it must succeed\
    \ on a DC 11 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sea horse can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "GoS"
- "JttRC"
"image": "/compendium/bestiary/beast/token/giant-sea-horse.png"
aliases: ["Giant Sea Horse"]
---
# Giant Sea Horse
*Source: Monster Manual p. 328, Ghosts of Saltmarsh, Journeys through the Radiant Citadel*  

Like their smaller kin, giant sea horses are shy, colorful fish with elongated bodies and curled tails. Aquatic elves train them as mounts.

```ad-statblock
title: Giant Sea Horse
![](/compendium/bestiary/beast/token/giant-sea-horse.png#token)
*Large beast, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 3d10|text(16)` (3d10) 
- **Speed** walk 0 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|15 (+2)|11 (+0)| 2 (-4)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 11
- **Languages** —
- **Challenge** 1/2

## Traits

***Charge.*** If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).

***Water Breathing.*** The sea horse can breathe only underwater.

## Actions

***Ram.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 1|avg` (`1d6 + 1`) bludgeoning damage.
```
^statblock

## Environment

underwater