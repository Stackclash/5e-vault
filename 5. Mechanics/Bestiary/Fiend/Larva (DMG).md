---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Medium
tags:
  - compendium/src/5e/dmg
  - monster/cr/0
  - monster/size/medium
  - monster/type/fiend
aliases:
  - Larva
---
# [[5. Mechanics\Bestiary\Fiend\Larva (DMG).md|Larva]]
*Source: Dungeon Master's Guide p. 63*

```statblock
"name": "Larva (DMG)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "9"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "-1"
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
"image": "5. Mechanics/Bestiary/Fiend/token/larva-dmg.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
