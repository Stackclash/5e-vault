---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(DMG)
  - monster\Cr\0
  - monster\Size\Medium
  - monster\Type\Fiend
aliases:
  - Larva (DMG)
---
# [[5. Mechanics\Bestiary\Fiend\Larva (DMG).md|Larva (DMG)]]
*Source: Dungeon Master's Guide p. 63*

```statblock
"name": "Larva (DMG)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "9"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "9"
- !!int "9"
- !!int "10"
- !!int "6"
- !!int "10"
- !!int "2"
"speed": "20 ft."
"senses": "passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "0"
"actions":
- "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) piercing damage."
  "name": "Bite"
"source":
- "DMG"
"image": "5. Mechanics/Bestiary/Fiend/token/larva.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
