---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/elemental
aliases: ["Xorn"]
---
# Xorn
*Source: Monster Manual p. 304. Available in the SRD.*  

Bizarre creatures native to the Elemental Plane of Earth, xorn sniff out gemstones and precious metals, then tunnel through earth and rock to consume those treasures. On the Material Plane, xorn must range far and wide through the Underdark to sustain themselves, becoming aggressive toward miners and treasure hunters when the valuable minerals of their diet are scarce.

A xorn's unnatural origins are suggested by its unusually heavy body and the large, powerful mouth sitting atop its head. Its three long arms are each tipped with sharp talons, and its three large, stone-lidded eyes see in all directions.

## Elemental Travelers

Possessed of the power of elemental earth, a xorn glides through stone and dirt as easily as a fish swims through water. It doesn't displace earth or stone when it moves, but merges with and flows through it, leaving no tunnel, hole, or hint of its passage.

> [!quote]- A quote from X the Mystic's 6th rule of dungeon survival  
> 
> Keep a few gems in your pocket. A hungry xorn is a helpful xorn.


```statblock
"name": "Xorn"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "73"
"hit_dice": "7d8 + 42"
"stats":
- !!int "17"
- !!int "10"
- !!int "22"
- !!int "11"
- !!int "10"
- !!int "11"
"speed": "20 ft., burrow 20 ft."
"skillsaves":
  "Stealth": "+3"
  "Perception": "+6"
"damage_resistances": "piercing, slashing from nonmagical attacks that aren't adamantine"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": "Terran"
"cr": "5"
"traits":
- "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While\
    \ doing so, the xorn doesn't disturb the material it moves through."
  "name": "Earth Glide"
- "desc": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
- "desc": "The xorn can pinpoint, by scent, the location of precious metals and stones,\
    \ such as coins and gems, within 60 feet of it."
  "name": "Treasure Sense"
"actions":
- "desc": "The xorn makes three claw attacks and one bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 13 (dice: 3d6 + 3|avg (3d6 + 3)) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 6 (dice: 1d6 + 3|avg (1d6 + 3)) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "PotA"
- "WDMM"
"image": "compendium/bestiary/elemental/token/xorn.png"
```
^statblock

## Environment

underdark