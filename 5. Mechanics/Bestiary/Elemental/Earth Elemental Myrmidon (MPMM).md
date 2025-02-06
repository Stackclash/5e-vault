---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\7
  - monster\Size\Medium
  - monster\Type\Element(AL)
aliases:
  - Earth Elemental Myrmidon
---
# [[5. Mechanics\Bestiary\Elemental\Earth Elemental Myrmidon (MPMM).md|Earth Elemental Myrmidon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Earth Elemental Myrmidon (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Terran, one language of its creator's choice"
"cr": "7"
"actions":
- "desc": "The myrmidon makes two Maul attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) force damage."
  "name": "Maul"
- "desc": "The myrmidon makes one Maul attack. On a hit, the target takes an extra\
    \ 22 (4d10) thunder damage, and the target must succeed on a DC 14 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Thunderous Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Elemental/token/earth-elemental-myrmidon-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
