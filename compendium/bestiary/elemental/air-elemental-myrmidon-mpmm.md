---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Air Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Auran, one language of its creator's choice"
"cr": "7"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon makes three Flail attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) force damage."
  "name": "Flail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon makes one Flail attack. On a hit, the target takes an extra\
    \ 18 (dice: 4d8|avg (4d8)) lightning damage, and the target must succeed on\
    \ a DC 13 Constitution saving throw or be [stunned](compendium/rules/conditions.md#stunned)\
    \ until the end of the myrmidon's next turn."
  "name": "Lightning Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/elemental/token/air-elemental-myrmidon.png"
aliases: ["Air Elemental Myrmidon"]
---
# Air Elemental Myrmidon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

## Stat Block

```ad-statblock
title: Air Elemental Myrmidon
![](/compendium/bestiary/elemental/token/air-elemental-myrmidon.png#token)
*Medium elemental, Neutral*

- **Armor Class** 18 ([plate](/compendium/items/plate-armor.md))
- **Hit Points** `dice: 18d8 + 36|text(117)` (18d8 + 36) 
- **Speed** walk 30 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|14 (+2)| 9 (-1)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** paralyzed, petrified, poisoned, prone
- **Languages** Auran, one language of its creator's choice
- **Challenge** 7

## Actions

***Multiattack.*** The myrmidon makes three Flail attacks.

***Flail.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4|avg` (`1d8 + 4`) force damage.

***Lightning Strike (Recharge 6).*** The myrmidon makes one Flail attack. On a hit, the target takes an extra 18 (`dice: 4d8|avg` (`4d8`)) lightning damage, and the target must succeed on a DC 13 Constitution saving throw or be [stunned](compendium/rules/conditions.md#stunned) until the end of the myrmidon's next turn.
```
^statblock