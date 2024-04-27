---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/grassland
  - monster/environment/urban
  - monster/size/large
  - monster/type/beast/cattle
statblock: inline
aliases:
  - Ox
---
# [[5. Mechanics\Bestiary\Beast\Ox.md|Ox]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 72, Volo's Guide to Monsters p. 208*

Oxen are domesticated cattle bred for milk and meat production and for hauling. Many cultures incorporate the ox into their labor and diets.

## Cattle

Many kinds of cattle roam the multiverse, some of them domesticated and others feral. In many cultures, cattle are almost like family to the folk who tend to them.

```statblock
"name": "Ox"
"size": "Large"
"type": "beast"
"subtype": "cattle"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "15"
"hit_dice": "2d10 + 4"
"stats":
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The ox is considered to be one size larger for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage. If the ox moved at least 20 feet straight toward the target\
    \ immediately before the hit, the target takes an extra 7 (2d6) piercing damage."
  "name": "Gore"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/ox-mpmm.webp"
```
^statblock

## Environment

grassland, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
