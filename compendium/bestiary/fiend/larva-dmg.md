---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 
size: Medium
tags:
- compendium/src/5e/dmg
- monster/cr/0
- monster/size/medium
- monster/type/fiend
aliases: ["Larva (DMG)"]
---
# [Larva (DMG)](compendium\bestiary\fiend/larva-dmg.md)
*Source: Dungeon Master's Guide p. 63*

```statblock
"name": "Larva (DMG) (DMG)"
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
"image": "compendium/bestiary/fiend/token/larva.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```