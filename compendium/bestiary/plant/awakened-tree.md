---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/huge
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
"name": "Awakened Tree"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d12 + 14"
"stats":
- !!int "19"
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 10"
"languages": "one language known by its creator"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the tree remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d6 + 4|avg (3d6 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "WDH"
- "WDMM"
- "GoS"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
"image": "/compendium/bestiary/plant/token/awakened-tree.png"
aliases: ["Awakened Tree"]
---
# Awakened Tree
*Source: Monster Manual p. 317, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight*  

An awakened tree is an ordinary tree given sentience and mobility by the [awaken](/compendium/spells/awaken.md) spell or similar magic.

```ad-statblock
title: Awakened Tree
![](/compendium/bestiary/plant/token/awakened-tree.png#token)
*Huge plant, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 7d12 + 14|text(59)` (7d12 + 14) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)| 6 (-2)|15 (+2)|10 (+0)|10 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Damage Vulnerabilities** fire
- **Damage Resistances** bludgeoning, piercing
- **Languages** one language known by its creator
- **Challenge** 2

## Traits

***False Appearance.*** While the tree remains motionless, it is indistinguishable from a normal tree.

## Actions

***Slam.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 3d6 + 4|avg` (`3d6 + 4`) bludgeoning damage.
```
^statblock

## Environment

forest