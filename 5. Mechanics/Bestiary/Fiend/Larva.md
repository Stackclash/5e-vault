---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/dmg
- monster/size/medium
- monster/type/fiend
statblock: inline
---
# Larva
*Source: Dungeon Master's Guide p. 63, Baldur's Gate: Descent Into Avernus*  

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
"speed": "walk 20 ft."
"senses": "passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 - 1|avg (1d4 - 1) piercing damage."
  "name": "Bite"
"source":
- "DMG"
- "BGDIA"
"image": "/compendium/bestiary/fiend/token/larva.png"
```
^statblock