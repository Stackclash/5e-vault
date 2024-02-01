---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/forest
- monster/size/huge
- monster/type/plant
statblock: inline
aliases: ["Awakened Tree"]
---
# [[5. Mechanics\Bestiary\Plant\Awakened Tree.md|Awakened Tree]]
*Source: Monster Manual p. 317. Available in the SRD and the Basic Rules.*  

An awakened tree is an ordinary tree given sentience and mobility by the [[5. Mechanics/Spells/Awaken.md|awaken]] spell or similar magic.

```statblock
"name": "Awakened Tree"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "59"
"hit_dice": "7d12 + 14"
"stats":
- !!int "19"
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 10"
"languages": "one language known by its creator"
"cr": "2"
"traits":
- "desc": "While the tree remains motionless, it is indistinguishable from a normal\
    \ tree."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d6 + 4|avg (3d6 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
- "PotA"
- "RoT"
- "SKT"
- "WDH"
- "WDMM"
- "GoS"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
- "PSI"
"image": "compendium/bestiary/plant/token/awakened-tree.png"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```