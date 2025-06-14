---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/elemental
aliases:
  - Xorn
---
# [[5. Mechanics\Bestiary\Elemental\Xorn.md|Xorn]]
*Source: Monster Manual p. 304. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Bizarre creatures native to the Elemental Plane of Earth, xorn sniff out gemstones and precious metals, then tunnel through earth and rock to consume those treasures. On the Material Plane, xorn must range far and wide through the Underdark to sustain themselves, becoming aggressive toward miners and treasure hunters when the valuable minerals of their diet are scarce.

A xorn's unnatural origins are suggested by its unusually heavy body and the large, powerful mouth sitting atop its head. Its three long arms are each tipped with sharp talons, and its three large, stone-lidded eyes see in all directions.

## Elemental Travelers

Possessed of the power of elemental earth, a xorn glides through stone and dirt as easily as a fish swims through water. It doesn't displace earth or stone when it moves, but merges with and flows through it, leaving no tunnel, hole, or hint of its passage.

> [!quote] A quote from X the Mystic's 6th rule of dungeon survival  
> 
> Keep a few gems in your pocket. A hungry xorn is a helpful xorn.


```statblock
"name": "Xorn"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "73"
"hit_dice": "7d8 + 42"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "22"
  - !!int "11"
  - !!int "10"
  - !!int "11"
"speed": "20 ft., burrow 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"damage_resistances": "piercing, slashing from nonmagical attacks that aren't adamantine"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": "Terran"
"cr": "5"
"traits":
  - "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While\
      \ doing so, the xorn doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "The xorn has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
      \ checks made to hide in rocky terrain."
    "name": "Stone Camouflage"
  - "desc": "The xorn can pinpoint, by scent, the location of precious metals and\
      \ stones, such as coins and gems, within 60 feet of it."
    "name": "Treasure Sense"
"actions":
  - "desc": "The xorn makes three claw attacks and one bite attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
      \ (3d6 + 3) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Claw"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Elemental/token/xorn.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
