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
"name": "Hunter Shark"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "13"
- !!int "15"
- !!int "1"
- !!int "10"
- !!int "4"
"speed": "swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 30 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shark has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "GoS"
- "DIP"
- "EGW"
- "PSX"
"image": "/compendium/bestiary/beast/token/hunter-shark.png"
aliases: ["Hunter Shark"]
---
# Hunter Shark
*Source: Monster Manual p. 330, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Explorer's Guide to Wildemount, Plane Shift: Ixalan*  

Smaller than a giant shark but larger and fiercer than a reef shark, a hunter shark haunts deep waters. It usually hunts alone, but multiple hunter sharks might feed in the same area. A fully grown hunter shark is 15 to 20 feet long.

```ad-statblock
title: Hunter Shark
![](/compendium/bestiary/beast/token/hunter-shark.png#token)
*Large beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 6d10 + 12|text(45)` (6d10 + 12) 
- **Speed** swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|15 (+2)| 1 (-5)|10 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** blindsight 30 ft., passive Perception 12
- **Languages** —
- **Challenge** 2

## Traits

***Blood Frenzy.*** The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.

***Water Breathing.*** The shark can breathe only underwater.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) piercing damage.
```
^statblock

## Environment

underwater