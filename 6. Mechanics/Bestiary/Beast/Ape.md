---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Ape"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 25/50 ft., one\
    \ target. Hit: dice: 1d6 + 3|avg (1d6 + 3) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "CM"
"image": "/compendium/bestiary/beast/token/ape.png"
aliases: ["Ape"]
---
# Ape
*Source: Monster Manual p. 317, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Candlekeep Mysteries*  

```ad-statblock
title: Ape
![[/6. Mechanics/Bestiary/Beast/Token/ape.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 3d8 + 6|text(19)` (3d8 + 6) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|14 (+2)|14 (+2)| 6 (-2)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Athletics +5, Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1/2

## Actions

***Multiattack.*** The ape makes two fist attacks.

***Fist.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) bludgeoning damage.

***Rock.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 25/50 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) bludgeoning damage.
```
^statblock

## Environment

forest