---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/7
  - monster/size/medium
  - monster/type/elemental
aliases:
  - Air Elemental Myrmidon
---
# [[5. Mechanics\Bestiary\Elemental\Air Elemental Myrmidon (MPMM).md|Air Elemental Myrmidon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Air Elemental Myrmidon (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "9"
  - !!int "10"
  - !!int "10"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Auran, one language of its creator's choice"
"cr": "7"
"actions":
  - "desc": "The myrmidon makes three Flail attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) force damage."
    "name": "Flail"
  - "desc": "The myrmidon makes one Flail attack. On a hit, the target takes an extra\
      \ 18 (4d8) lightning damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] until\
      \ the end of the myrmidon's next turn."
    "name": "Lightning Strike (Recharge 6)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Elemental/token/air-elemental-myrmidon-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
