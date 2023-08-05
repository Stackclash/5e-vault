---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Frog"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "1"
- !!int "13"
- !!int "8"
- !!int "1"
- !!int "8"
- !!int "3"
"speed": "walk 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "1"
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The frog can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The frog's long jump is up to 10 feet and its high jump is up to 5 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"source":
- "MM"
- "ToA"
- "CoS"
- "WBtW"
- "PSX"
- "KftGV"
"image": "/compendium/bestiary/beast/token/frog.png"
aliases: ["Frog"]
---
# Frog
*Source: Monster Manual p. 322, Tomb of Annihilation, Curse of Strahd, The Wild Beyond the Witchlight, Plane Shift: Ixalan, Keys from the Golden Vault*  

A frog has no effective attacks. It feeds on small insects and typically dwells near water, in trees, or underground. The frog's statistics can also be used to represent a toad.

```ad-statblock
title: Frog
![](/compendium/bestiary/beast/token/frog.png#token)
*Tiny beast, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 1d4 - 1|text(1)` (1d4 - 1) 
- **Speed** walk 20 ft., swim 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 (-5)|13 (+1)| 8 (-1)| 1 (-5)| 8 (-1)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +1, Stealth +3
- **Senses** darkvision 30 ft., passive Perception 11
- **Languages** —
- **Challenge** 0

## Traits

***Amphibious.*** The frog can breathe air and water.

***Standing Leap.*** The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.
```
^statblock