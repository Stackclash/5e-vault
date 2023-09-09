---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/elemental
aliases: ["Earth Elemental Myrmidon"]
---
# Earth Elemental Myrmidon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Earth Elemental Myrmidon"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
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
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "paralyzed, petrified, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Terran, one language of its creator's choice"
"cr": "7"
"actions":
- "desc": "The myrmidon makes two Maul attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: 11 (dice: 2d6 + 4|avg (2d6 + 4)) force damage."
  "name": "Maul"
- "desc": "The myrmidon makes one Maul attack. On a hit, the target takes an extra\
    \ 22 (dice: 4d10|avg (4d10)) thunder damage, and the target must succeed on\
    \ a DC 14 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Thunderous Strike (Recharge 6)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/elemental/token/earth-elemental-myrmidon.png"
```
^statblock