---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/huge
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Killer Whale"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "12d12 + 12"
"stats":
- !!int "19"
- !!int "10"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "swim 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 120 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The whale can't use its blindsight while [deafened](compendium/rules/conditions.md#deafened)."
  "name": "Echolocation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The whale can hold its breath for 30 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The whale has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 5d6 + 4|avg (5d6 + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "GoS"
- "EGW"
- "MOT"
- "IDRotF"
"image": "/compendium/bestiary/beast/token/killer-whale.png"
aliases: ["Killer Whale"]
---
# Killer Whale
*Source: Monster Manual p. 331, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden*  

```ad-statblock
title: Killer Whale
![](/compendium/bestiary/beast/token/killer-whale.png#token)
*Huge beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 12d12 + 12|text(90)` (12d12 + 12) 
- **Speed** swim 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|10 (+0)|13 (+1)| 3 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** blindsight 120 ft., passive Perception 13
- **Languages** —
- **Challenge** 3

## Traits

***Echolocation.*** The whale can't use its blindsight while [deafened](compendium/rules/conditions.md#deafened).

***Hold Breath.*** The whale can hold its breath for 30 minutes.

***Keen Hearing.*** The whale has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 5d6 + 4|avg` (`5d6 + 4`) piercing damage.
```
^statblock

## Environment

underwater