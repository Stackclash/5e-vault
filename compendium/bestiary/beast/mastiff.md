---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Mastiff"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mastiff has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 11 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "SKT"
- "TftYP"
- "WDH"
- "BGDIA"
- "ERLW"
- "EGW"
- "DSotDQ"
- "KftGV"
"image": "/compendium/bestiary/beast/token/mastiff.png"
aliases: ["Mastiff"]
---
# Mastiff
*Source: Monster Manual p. 332, Curse of Strahd, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Mastiffs are impressive hounds prized by humanoids for their loyalty and keen senses. Mastiffs can be trained as guard dogs, hunting dogs, and war dogs. Halflings and other Small humanoids ride them as mounts.

```ad-statblock
title: Mastiff
![](/compendium/bestiary/beast/token/mastiff.png#token)
*Medium beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d8 + 1|text(5)` (1d8 + 1) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|14 (+2)|12 (+1)| 3 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1/8

## Traits

***Keen Hearing and Smell.*** The mastiff has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 1|avg` (`1d6 + 1`) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

forest, hill, urban