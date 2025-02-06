---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'arctic, desert, forest, mountain, swamp, underdark, urban'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\2
  - monster\Environment\Arctic
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Mountain
  - monster\Environment\Swamp
  - monster\Environment\Underdark
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Dragon
aliases:
  - Guard Drake (Blue)
---
# [[5. Mechanics\Bestiary\Dragon\Guard Drake Blue (MPMM).md|Guard Drake (Blue)]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 151*

```statblock
"name": "Guard Drake Blue (MPMM)"
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
"speed": "30 ft., burrow 20 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_resistances": "lightning"
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
