---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/dmg
  - monster/cr/0
  - monster/size/medium
  - monster/type/fiend
statblock: inline
aliases:
  - Larva (DMG)
---
# [[5. Mechanics\Bestiary\Fiend\Larva.md|Larva (DMG)]]
*Source: Dungeon Master's Guide p. 63*

```statblock
"name": "Larva"
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
- "desc": "Melee Weapon Attack: dice: d20+1 (+1) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 - 1|text(1) (1d4 - 1) piercing damage."
  "name": "Bite"
"source":
- "DMG"
- "BGDIA"
- "SatO"
- "ToFW"
"image": "5. Mechanics/Bestiary/Fiend/token/larva.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
