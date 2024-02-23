---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/forest
  - monster/size/small
  - monster/type/plant
statblock: inline
aliases:
  - Awakened Shrub
---
# [[5. Mechanics\Bestiary\Plant\Awakened Shrub.md|Awakened Shrub]]
*Source: Monster Manual p. 317. Available in the SRD and the Basic Rules.*  

An awakened shrub is an ordinary shrub given sentience and mobility by the [[5. Mechanics/Spells/Awaken.md|awaken]] spell or similar magic.

```statblock
"name": "Awakened Shrub"
"size": "Small"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "10"
"hit_dice": "3d6"
"stats":
- !!int "3"
- !!int "8"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "6"
"speed": "20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "piercing"
"senses": "passive Perception 10"
"languages": "one language known by its creator"
"cr": "0"
"traits":
- "desc": "While the shrub remains motionless, it is indistinguishable from a normal\
    \ shrub."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 - 1|avg (1d4 - 1) slashing damage."
  "name": "Rake"
"source":
- "MM"
- "SKT"
- "WDMM"
- "IMR"
- "MOT"
- "IDRotF"
- "WBtW"
- "PSI"
- "DoDk"
"image": "5. Mechanics/Bestiary/Plant/token/awakened-shrub.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
