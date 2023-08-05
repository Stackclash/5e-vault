---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/swamp
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage, and the target is [grappled](compendium/rules/conditions.md#grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained),\
    \ and the crocodile can't bite another target"
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "IMR"
- "EGW"
- "WBtW"
- "PSX"
"image": "/compendium/bestiary/beast/token/crocodile.png"
aliases: ["Crocodile"]
---
# Crocodile
*Source: Monster Manual p. 320, Hoard of the Dragon Queen, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Infernal Machine Rebuild, Explorer's Guide to Wildemount, The Wild Beyond the Witchlight, Plane Shift: Ixalan*  

```ad-statblock
title: Crocodile
![](/compendium/bestiary/beast/token/crocodile.png#token)
*Large beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 20 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|10 (+0)|13 (+1)| 2 (-4)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +2
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 1/2

## Traits

***Hold Breath.*** The crocodile can hold its breath for 15 minutes.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d10 + 2|avg` (`1d10 + 2`) piercing damage, and the target is [grappled](compendium/rules/conditions.md#grappled) (escape DC 12). Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained), and the crocodile can't bite another target
```
^statblock

## Environment

swamp, urban