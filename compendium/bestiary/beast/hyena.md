---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Hyena"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hyena has advantage on an attack roll against a creature if at least\
    \ one of the hyena's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](compendium/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6|avg (1d6) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "CM"
"image": "/compendium/bestiary/beast/token/hyena.png"
aliases: ["Hyena"]
---
# Hyena
*Source: Monster Manual p. 331, Princes of the Apocalypse, Candlekeep Mysteries*  

```ad-statblock
title: Hyena
![](/compendium/bestiary/beast/token/hyena.png#token)
*Medium beast, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 1d8 + 1|text(5)` (1d8 + 1) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|13 (+1)|12 (+1)| 2 (-4)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Pack Tactics.*** The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't [incapacitated](compendium/rules/conditions.md#incapacitated).

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d6|avg` (`1d6`) piercing damage.
```
^statblock

## Environment

grassland, forest, hill, desert