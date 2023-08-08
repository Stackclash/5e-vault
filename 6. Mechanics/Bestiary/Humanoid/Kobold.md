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
statblock: inline
---
# Kobold
*Source: Monster Manual p. 195, Hoard of the Dragon Queen, The Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Dragons of Stormwreck Isle*  

Kobolds are craven reptilian humanoids that worship evil dragons as demigods and serve them as minions and toadies. Kobolds inhabit dragons' lairs when they can but more commonly infest dungeons, gathering treasures and trinkets to add to their own tiny hoards.

## Strength in Numbers

Kobolds are egg-laying creatures. They mature quickly and can live to be "great wyrms" more than a century old. However, many kobolds perish before they reach the end of their first decade. Physically weak, they are easy prey for predators. This vulnerability forces them to band together. Their superior numbers can win battles against powerful adversaries, but often with massive casualties on the kobold side.

## Tunnelers and Builders

Kobolds make up for their physical ineptitude with a cleverness for trap making and tunneling. Their lairs consist of low tunnels through which they move easily but which hinder larger humanoids. Kobolds also riddle their lairs with traps. The most insidious kobold traps make use of natural hazards and other creatures. A trip wire might connect to a spring-loaded trap that hurls clay pots of flesh-eating green slime or flings crates of venomous giant centipedes at intruders.

## The Lost God

In addition to the dragons they revere, kobolds worship a lesser god named Kurtulmak. Legends speak of how Kurtulmak served as Tiamat's vassal in the Nine Hells until Garl Glittergold, the god of gnomes, stole a trinket from the Dragon Queen's hoard. Tiamat sent Kurtulmak to retrieve the trinket, but Garl Glittergold played a trick on him, collapsing the earth and trapping the kobold god in an underground maze for eternity. For this reason, kobolds hate gnomes and pranks of any kind. Kurtulmak's most devoted worshipers dedicate themselves to finding and releasing their lost god from his prison-maze.

## Stat Block

```statblock
"name": "Kobold"
"size": "Small"
"type": "humanoid"
"subtype": "kobold"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "9"
- !!int "8"
- !!int "7"
- !!int "8"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Draconic"
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "ERLW"
- "EGW"
- "DoSI"
"image": "6. Mechanics/Bestiary/Humanoid/token/kobold.png"
```
^statblock

## Environment

forest, swamp, hill, urban, desert, coastal, arctic, mountain, underdark