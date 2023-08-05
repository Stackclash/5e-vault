---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/grassland
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Jackal"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "8"
- !!int "15"
- !!int "11"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The jackal has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The jackal has advantage on an attack roll against a creature if at least\
    \ one of the jackal's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](compendium/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 - 1|avg (1d4 - 1) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "GoS"
"image": "/compendium/bestiary/beast/token/jackal.png"
aliases: ["Jackal"]
---
# Jackal
*Source: Monster Manual p. 331, Ghosts of Saltmarsh*  

```ad-statblock
title: Jackal
![](/compendium/bestiary/beast/token/jackal.png#token)
*Small beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d6|text(3)` (1d6) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|15 (+2)|11 (+0)| 3 (-4)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 0

## Traits

***Keen Hearing and Smell.*** The jackal has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

***Pack Tactics.*** The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't [incapacitated](compendium/rules/conditions.md#incapacitated).

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+1` (+1 to hit), reach 5 ft., one target. Hit: `dice: 1d4 - 1|avg` (`1d4 - 1`) piercing damage.
```
^statblock

## Environment

grassland, desert