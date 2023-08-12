---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Deer
*Source: Monster Manual p. 321, Hoard of the Dragon Queen, Dragon of Icespire Peak*  

```statblock
"name": "Deer"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "11"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "14"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 12"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "DIP"
"image": "5. Mechanics/Bestiary/Beast/token/deer.png"
```
^statblock

## Environment

grassland, forest