---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Wolf"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wolf has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 11 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "LMoP"
- "PotA"
- "RoT"
- "SKT"
- "GoS"
- "EGW"
- "IDRotF"
- "TCE"
- "CM"
"image": "/compendium/bestiary/beast/token/wolf.png"
aliases: ["Wolf"]
---
# Wolf
*Source: Monster Manual p. 341, Curse of Strahd, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries*  

```ad-statblock
title: Wolf
![[/6. Mechanics/Bestiary/Beast/Token/wolf.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 2d8 + 2|text(11)` (2d8 + 2) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|15 (+2)|12 (+1)| 3 (-4)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1/4

## Traits

***Keen Hearing and Smell.*** The wolf has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or smell.

***Pack Tactics.*** The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 2` (`2d4 + 2`) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock

## Environment

grassland, forest, hill