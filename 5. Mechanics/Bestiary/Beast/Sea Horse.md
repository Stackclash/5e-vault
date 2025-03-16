---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Sea Horse
---
# [[5. Mechanics/Bestiary/Beast/Sea Horse.md|Sea Horse]]
*Source: Monster Manual p. 337. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

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
- "desc": "The sea horse can breathe only underwater."
  "name": "Water Breathing"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/sea-horse.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
