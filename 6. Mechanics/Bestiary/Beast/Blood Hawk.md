---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Blood Hawk"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "6"
- !!int "14"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hawk has advantage on an attack roll against a creature if at least\
    \ one of the hawk's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage."
  "name": "Beak"
"source":
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "EGW"
- "CM"
"image": "/compendium/bestiary/beast/token/blood-hawk.png"
aliases: ["Blood Hawk"]
---
# Blood Hawk
*Source: Monster Manual p. 319, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Candlekeep Mysteries*  

Taking its name from its crimson feathers and aggressive nature, the blood hawk fearlessly attacks almost any animal, stabbing it with its daggerlike beak. Blood hawks flock together in large numbers, attacking as a pack to take down prey.

```ad-statblock
title: Blood Hawk
![[/6. Mechanics/Bestiary/Beast/Token/blood-hawk.png#token]]
*Small beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 10 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|10 (+0)| 3 (-4)|14 (+2)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** passive Perception 14
- **Languages** —
- **Challenge** 1/8

## Traits

***Keen Sight.*** The hawk has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Pack Tactics.*** The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Beak.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

mountain, grassland, forest, hill, coastal, arctic