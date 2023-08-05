---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Fire Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "123"
"hit_dice": "19d8 + 38"
"stats":
- !!int "13"
- !!int "18"
- !!int "15"
- !!int "9"
- !!int "10"
- !!int "10"
"speed": "walk 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan, one language of its creator's choice"
"cr": "7"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon sheds bright light in a 20-foot radius and dim light in a\
    \ 40-foot radius."
  "name": "Illumination"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "For every 5 feet the myrmidon moves in 1 foot or more of water, it takes\
    \ dice: 1d4|avg (1d4) cold damage."
  "name": "Water Susceptibility"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon makes three Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) force damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The myrmidon uses Multiattack. Each attack that hits deals an extra 7 (dice:\
    \ 2d6|avg (2d6)) fire damage."
  "name": "Fiery Strikes (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/elemental/token/fire-elemental-myrmidon.png"
aliases: ["Fire Elemental Myrmidon"]
---
# Fire Elemental Myrmidon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 123, Mordenkainen's Tome of Foes p. 203*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

## Stat Block

```ad-statblock
title: Fire Elemental Myrmidon
![[/6. Mechanics/Bestiary/Elemental/Token/fire-elemental-myrmidon.png#token]]
*Medium elemental, Neutral*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate]])
- **Hit Points** `dice: 19d8 + 38|text(123)` (19d8 + 38) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|18 (+4)|15 (+2)| 9 (-1)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** fire, poison
- **Condition Immunities** paralyzed, petrified, poisoned, prone
- **Languages** Ignan, one language of its creator's choice
- **Challenge** 7

## Traits

***Illumination.*** The myrmidon sheds bright light in a 20-foot radius and dim light in a 40-foot radius.

***Water Susceptibility.*** For every 5 feet the myrmidon moves in 1 foot or more of water, it takes `dice: 1d4` (`1d4`) cold damage.

## Actions

***Multiattack.*** The myrmidon makes three Scimitar attacks.

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4` (`1d6 + 4`) force damage.

***Fiery Strikes (Recharge 6).*** The myrmidon uses Multiattack. Each attack that hits deals an extra 7 (`dice: 2d6` (`2d6`)) fire damage.
```
^statblock