---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Worg"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "16"
- !!int "13"
- !!int "13"
- !!int "7"
- !!int "11"
- !!int "8"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Goblin, Worg"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The worg has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone)."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDMM"
- "ERLW"
- "IDRotF"
- "CM"
"image": "/compendium/bestiary/monstrosity/token/worg.png"
aliases: ["Worg"]
---
# Worg
*Source: Monster Manual p. 341, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries*  

A worg is an evil predator that delights in hunting and devouring creatures weaker than itself. Cunning and malevolent, worgs roam across the remote wilderness or are raised by goblins and hobgoblins. Those creatures use worgs as mounts, but a worg will turn on its rider if it feels mistreated or malnourished. Worgs speak in their own language and Goblin, and a few learn to speak Common as well.

```ad-statblock
title: Worg
![](/compendium/bestiary/monstrosity/token/worg.png#token)
*Large monstrosity, Neutral Evil*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 4d10 + 4|text(26)` (4d10 + 4) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|13 (+1)|13 (+1)| 7 (-2)|11 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Languages** Goblin, Worg
- **Challenge** 1/2

## Traits

***Keen Hearing and Smell.*** The worg has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

grassland, forest, hill