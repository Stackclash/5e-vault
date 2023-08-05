---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Earth Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Terran, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon makes two Maul attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) force damage."
  "name": "Maul"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon makes one Maul attack. On a hit, the target takes an extra\
    \ 22 (dice: 4d10|avg (4d10)) thunder damage, and the target must succeed on\
    \ a DC 14 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Thunderous Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/elemental/token/earth-elemental-myrmidon.png"
aliases: ["Earth Elemental Myrmidon"]
---
# Earth Elemental Myrmidon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

## Stat Block

```ad-statblock
title: Earth Elemental Myrmidon
![[/6. Mechanics/Bestiary/Elemental/Token/earth-elemental-myrmidon.png#token]]
*Medium elemental, Neutral*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate]])
- **Hit Points** `dice: 17d8 + 51|text(127)` (17d8 + 51) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|10 (+0)|17 (+3)| 8 (-1)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** paralyzed, petrified, poisoned, prone
- **Languages** Terran, one language of its creator's choice
- **Challenge** 7

## Actions

***Multiattack.*** The myrmidon makes two Maul attacks.

***Maul.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4` (`2d6 + 4`) force damage.

***Thunderous Strike (Recharge 6).*** The myrmidon makes one Maul attack. On a hit, the target takes an extra 22 (`dice: 4d10` (`4d10`)) thunder damage, and the target must succeed on a DC 14 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock