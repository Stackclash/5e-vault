---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Raven"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "14"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The raven can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Beak"
"source":
- "MM"
- "CoS"
- "IDRotF"
- "CM"
- "WBtW"
- "KftGV"
"image": "/compendium/bestiary/beast/token/raven.png"
aliases: ["Raven"]
---
# Raven
*Source: Monster Manual p. 335, Curse of Strahd, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

```ad-statblock
title: Raven
![](/compendium/bestiary/beast/token/raven.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 10 ft., fly 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (-4)|14 (+2)| 8 (-1)| 2 (-4)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Mimicry.*** The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.

## Actions

***Beak.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: 1 piercing damage.
```
^statblock

## Environment

swamp, hill, urban