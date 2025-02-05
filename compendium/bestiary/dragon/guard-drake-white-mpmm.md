---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: arctic, desert, forest, mountain, swamp, underdark, urban
size: Medium
tags:
- compendium/src/5e/mpmm
- monster/cr/2
- monster/environment/arctic
- monster/environment/desert
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/dragon
aliases: ["Guard Drake (White)"]
---
# [Guard Drake (White)](compendium\bestiary\dragon/guard-drake-white-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 151*

```statblock
"name": "Guard Drake (White) (MPMM)"
"size": "Medium"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "10"
- !!int "7"
"speed": "30 ft., burrow 20 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_resistances": "cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Draconic but can't speak"
"cr": "2"
"actions":
- "desc": "The guard drake makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage."
  "name": "Tail"
"source":
- "MPMM"
```
^statblock

## Environment

arctic, desert, forest, mountain, swamp, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```