---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/dmg
  - monster/cr/
  - monster/size/large
  - monster/type/beast
statblock: inline
aliases:
  - Giant Fly (DMG)
---
# [[5. Mechanics\Bestiary\Beast\Giant Fly.md|Giant Fly (DMG)]]
*Source: Dungeon Master's Guide p. 169*

```statblock
"name": "Giant Fly"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "14"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., fly 60 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"source":
- "DMG"
"image": "5. Mechanics/Bestiary/Beast/token/giant-fly.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
