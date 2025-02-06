---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'arctic, desert, coastal, grassland, hill, urban, forest'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\0
  - monster\Environment\Arctic
  - monster\Environment\Coast(AL)
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Hill
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Commoner
---
# [[5. Mechanics\Bestiary\Humanoid\Commoner.md|Commoner]]
*Source: Monster Manual p. 345, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.

```statblock
"name": "Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "MM"
- "CoS"
- "TCE"
- "VEoR"
"image": "5. Mechanics/Bestiary/Humanoid/token/commoner.webp"
```
^statblock

## Environment

arctic, desert, coastal, grassland, hill, urban, forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
