---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Dire Wolf"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"stats":
- !!int "17"
- !!int "15"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 50 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wolf has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](compendium/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "SKT"
- "TftYP"
- "GoS"
- "IDRotF"
- "JttRC"
"image": "/compendium/bestiary/beast/token/dire-wolf.png"
aliases: ["Dire Wolf"]
---
# Dire Wolf
*Source: Monster Manual p. 321, Curse of Strahd, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden, Journeys through the Radiant Citadel*  

```ad-statblock
title: Dire Wolf
![](/compendium/bestiary/beast/token/dire-wolf.png#token)
*Large beast, Unaligned*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 5d10 + 10|text(37)` (5d10 + 10) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|15 (+2)|15 (+2)| 3 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1

## Traits

***Keen Hearing and Smell.*** The wolf has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

***Pack Tactics.*** The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't [incapacitated](compendium/rules/conditions.md#incapacitated).

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

forest, hill