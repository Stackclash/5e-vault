---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Phase Spider
ac: 13
hp: 32
hit_dice: 5d10 + 5
cr: '3'
stats: [
  15,
  15,
  12,
  6,
  10,
  6
]
source: [
  MM,
  WDMM,
  GoS,
  DIP,
  SDW,
  MOT,
  IDRotF
]
aliases: ["Phase Spider"]
---
# Phase Spider
*Source: Monster Manual p. 334, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden*  

A phase spider possesses the magical ability to phase in and out of the Ethereal Plane. It seems to appear out of nowhere and quickly vanishes after attacking. Its movement on the Ethereal Plane before coming back to the Material Plane makes it seem like it can teleport.

```ad-statblock
title: Phase Spider
![](/compendium/bestiary/monstrosity/token/phase-spider.png#token)
*Large monstrosity, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 5d10 + 5|text(32)` (5d10 + 5) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|15 (+2)|12 (+1)| 6 (-2)|10 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +6
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** —
- **Challenge** 3

## Traits

***Ethereal Jaunt.*** As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa.

***Spider Climb.*** The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Web Walker.*** The spider ignores movement restrictions caused by webbing.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d10 + 2|avg` (`1d10 + 2`) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (`dice: 4d8|avg` (`4d8`)) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but [poisoned](compendium/rules/conditions.md#poisoned) for 1 hour, even after regaining hit points, and is [paralyzed](compendium/rules/conditions.md#paralyzed) while [poisoned](compendium/rules/conditions.md#poisoned) in this way.
```
^statblock

## Environment

underdark, grassland, forest, hill, urban, desert