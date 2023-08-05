---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: true
statblock-link: "#^statblock"
"name": "Barovian Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6|avg (1d6) piercing damage."
  "name": "Pitchfork"
"source":
- "CoS"
"image": "/compendium/bestiary/humanoid/token/barovian-commoner.png"
aliases: ["Barovian Commoner"]
---
# Barovian Commoner
*Source: Curse of Strahd p. 29, Derived from Commoner (MM)*  

```ad-statblock
title: Barovian Commoner
![[/6. Mechanics/Bestiary/Humanoid/Token/barovian-commoner.png#token]]
*Medium humanoid(any race), Any alignment*

- **Armor Class** 10 
- **Hit Points** `dice: 1d8|text(4)` (1d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** any one language (usually Common)
- **Challenge** 0

## Actions

***Pitchfork.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d6` (`1d6`) piercing damage.
```
^statblock

## Environment

arctic, desert, coastal, grassland, hill, urban, forest