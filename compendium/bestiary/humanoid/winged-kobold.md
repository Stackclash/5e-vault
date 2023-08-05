---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/humanoid/kobold
statblock: true
statblock-link: "#^statblock"
"name": "Winged Kobold"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "7"
"hit_dice": "3d6 - 3"
"stats":
- !!int "7"
- !!int "16"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "walk 30 ft., fly 30 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Draconic"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](compendium/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), one target directly\
    \ below the kobold. Hit: dice: 1d6 + 3|avg (1d6 + 3) bludgeoning damage."
  "name": "Dropped Rock"
"source":
- "MM"
- "HotDQ"
- "ToA"
- "GoS"
- "CM"
- "DoSI"
"image": "/compendium/bestiary/humanoid/token/winged-kobold.png"
aliases: ["Winged Kobold"]
---
# Winged Kobold
*Source: Monster Manual p. 195, Hoard of the Dragon Queen, Tomb of Annihilation, Ghosts of Saltmarsh, Candlekeep Mysteries, Dragons of Stormwreck Isle*  

Kobolds are craven reptilian humanoids that worship evil dragons as demigods and serve them as minions and toadies. Kobolds inhabit dragons' lairs when they can but more commonly infest dungeons, gathering treasures and trinkets to add to their own tiny hoards.

## Strength in Numbers

Kobolds are egg-laying creatures. They mature quickly and can live to be "great wyrms" more than a century old. However, many kobolds perish before they reach the end of their first decade. Physically weak, they are easy prey for predators. This vulnerability forces them to band together. Their superior numbers can win battles against powerful adversaries, but often with massive casualties on the kobold side.

## Tunnelers and Builders

Kobolds make up for their physical ineptitude with a cleverness for trap making and tunneling. Their lairs consist of low tunnels through which they move easily but which hinder larger humanoids. Kobolds also riddle their lairs with traps. The most insidious kobold traps make use of natural hazards and other creatures. A trip wire might connect to a spring-loaded trap that hurls clay pots of flesh-eating green slime or flings crates of venomous giant centipedes at intruders.

## The Lost God

In addition to the dragons they revere, kobolds worship a lesser god named Kurtulmak. Legends speak of how Kurtulmak served as Tiamat's vassal in the Nine Hells until Garl Glittergold, the god of gnomes, stole a trinket from the Dragon Queen's hoard. Tiamat sent Kurtulmak to retrieve the trinket, but Garl Glittergold played a trick on him, collapsing the earth and trapping the kobold god in an underground maze for eternity. For this reason, kobolds hate gnomes and pranks of any kind. Kurtulmak's most devoted worshipers dedicate themselves to finding and releasing their lost god from his prison-maze.

## Stat Block

```ad-statblock
title: Winged Kobold
![](/compendium/bestiary/humanoid/token/winged-kobold.png#token)
*Small humanoid(kobold), Lawful Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 3d6 - 3|text(7)` (3d6 - 3) 
- **Speed** walk 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|16 (+3)| 9 (-1)| 8 (-1)| 7 (-2)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 8
- **Languages** Common, Draconic
- **Challenge** 1/4

## Traits

***Sunlight Sensitivity.*** While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

***Pack Tactics.*** The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't [incapacitated](compendium/rules/conditions.md#incapacitated).

## Actions

***Dagger.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) piercing damage.

***Dropped Rock.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), one target directly below the kobold. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) bludgeoning damage.
```
^statblock

## Environment

forest, swamp, hill, urban, desert, coastal, arctic, mountain, underdark