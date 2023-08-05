---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Dolphin"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "13"
- !!int "13"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "walk 0 ft., swim 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dolphin can hold its breath for 20 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage. If the dolphin moved\
    \ at least 30 feet straight toward the target immediately before the hit, the\
    \ target takes an extra 3 (dice: 1d6|avg (1d6)) bludgeoning damage."
  "name": "Slam"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/beast/token/dolphin.png"
aliases: ["Dolphin"]
---
# Dolphin
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 97, Volo's Guide to Monsters p. 208*  

Dolphins are symbols of wisdom and playfulness among the sea folk of many worlds. Found in oceans and in the Elemental Plane of Water, dolphins are befriended by druids and rangers, and many tales speak of dolphins that appeared out of nowhere to protect swimmers from sharks and other aquatic predators.

## Dolphins

Dolphins are clever, social marine mammals that feed on small fish and squid. An adult specimen is between 5 and 6 feet long.

## Stat Block

```ad-statblock
title: Dolphin
![[/6. Mechanics/Bestiary/Beast/Token/dolphin.png#token]]
*Medium beast, Unaligned*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 2d8 + 2|text(11)` (2d8 + 2) 
- **Speed** walk 0 ft., swim 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|13 (+1)|13 (+1)| 6 (-2)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** blindsight 60 ft., passive Perception 13
- **Languages** —
- **Challenge** 1/8

## Traits

***Hold Breath.*** The dolphin can hold its breath for 20 minutes.

## Actions

***Slam.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) bludgeoning damage. If the dolphin moved at least 30 feet straight toward the target immediately before the hit, the target takes an extra 3 (`dice: 1d6` (`1d6`)) bludgeoning damage.
```
^statblock

## Environment

coastal, underwater