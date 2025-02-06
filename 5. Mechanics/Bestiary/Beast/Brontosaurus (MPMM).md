---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 'forest, grassland'
size: Gargantuan
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\5
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Size\Gargantuan
  - monster\Type\Beast\Dinosaur
aliases:
  - Brontosaurus
---
# [[5. Mechanics\Bestiary\Beast\Brontosaurus (MPMM).md|Brontosaurus]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95, Volo's Guide to Monsters p. 139*

This massive four-legged dinosaur is large enough that most predators leave it alone. Its deadly tail can drive away or kill smaller threats.

```statblock
"name": "Brontosaurus (MPMM)"
"size": "Gargantuan"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "121"
"hit_dice": "9d20 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "30 ft."
"saves":
  "Constitution": !!int "6"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27 (5d8\
    \ + 5) bludgeoning damage, and the target must succeed on a DC 14 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Stomp"
- "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32 (6d8\
    \ + 5) bludgeoning damage"
  "name": "Tail"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/brontosaurus-mpmm.webp"
```
^statblock

## Environment

forest, grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
