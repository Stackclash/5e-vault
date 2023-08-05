---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Tiger"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tiger has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).\
    \ If the target is [prone](compendium/rules/conditions.md#prone), the tiger can\
    \ make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 3|avg (1d10 + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
- "GoS"
- "MOT"
"image": "/compendium/bestiary/beast/token/tiger.png"
aliases: ["Tiger"]
---
# Tiger
*Source: Monster Manual p. 339, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Mythic Odysseys of Theros*  

```ad-statblock
title: Tiger
![](/compendium/bestiary/beast/token/tiger.png#token)
*Large beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 5d10 + 10|text(37)` (5d10 + 10) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|15 (+2)|14 (+2)| 3 (-4)|12 (+1)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +6
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** —
- **Challenge** 1

## Traits

***Keen Smell.*** The tiger has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

***Pounce.*** If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone). If the target is [prone](compendium/rules/conditions.md#prone), the tiger can make one bite attack against it as a bonus action.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 3|avg` (`1d10 + 3`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3|avg` (`1d8 + 3`) slashing damage.
```
^statblock

## Environment

grassland, forest