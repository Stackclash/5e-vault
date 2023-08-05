---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Lizard"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "11"
- !!int "10"
- !!int "1"
- !!int "8"
- !!int "3"
"speed": "walk 20 ft., climb 20 ft."
"senses": "darkvision 30 ft., passive Perception 9"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "ToA"
- "JttRC"
- "KftGV"
"image": "/compendium/bestiary/beast/token/lizard.png"
aliases: ["Lizard"]
---
# Lizard
*Source: Monster Manual p. 332, Tomb of Annihilation, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

```ad-statblock
title: Lizard
![](/compendium/bestiary/beast/token/lizard.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 1d4|text(2)` (1d4) 
- **Speed** walk 20 ft., climb 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (-4)|11 (+0)|10 (+0)| 1 (-5)| 8 (-1)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 9
- **Languages** —
- **Challenge** 0

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+0` (+0 to hit), reach 5 ft., one target. Hit: 1 piercing damage.
```
^statblock