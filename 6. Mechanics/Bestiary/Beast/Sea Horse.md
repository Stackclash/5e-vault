---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Sea Horse
*Source: Monster Manual p. 337*  

```statblock
"name": "Sea Horse"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "1"
- !!int "12"
- !!int "8"
- !!int "1"
- !!int "10"
- !!int "2"
"speed": "swim 20 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sea horse can breathe only underwater."
  "name": "Water Breathing"
"source":
- "MM"
"image": "6. Mechanics/Bestiary/Beast/token/sea-horse.png"
```
^statblock