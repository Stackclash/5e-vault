---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Mule"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mule is considered to be a Large animal for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mule has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](compendium/rules/conditions.md#prone)."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
- "SKT"
- "GoS"
- "KftGV"
"image": "/compendium/bestiary/beast/token/mule.png"
aliases: ["Mule"]
---
# Mule
*Source: Monster Manual p. 333, Curse of Strahd, Storm King's Thunder, Ghosts of Saltmarsh, Keys from the Golden Vault*  

```ad-statblock
title: Mule
![](/compendium/bestiary/beast/token/mule.png#token)
*Medium beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 2d8 + 2|text(11)` (2d8 + 2) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|10 (+0)|13 (+1)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 1/8

## Traits

***Beast of Burden.*** The mule is considered to be a Large animal for the purpose of determining its carrying capacity.

***Sure-Footed.*** The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it [prone](compendium/rules/conditions.md#prone).

## Actions

***Hooves.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) bludgeoning damage.
```
^statblock

## Environment

hill, urban, desert