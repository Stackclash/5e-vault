---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: forest
size: Huge
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/forest
- monster/size/huge
- monster/type/plant
aliases: ["Awakened Tree"]
---
# [Awakened Tree](compendium\bestiary\plant/awakened-tree.md)
*Source: Monster Manual p. 317. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

An awakened tree is an ordinary tree given sentience and mobility by the [awaken](compendium/spells/awaken.md) spell or similar magic.

```statblock
"name": "Awakened Tree"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
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
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "MM"
"image": "compendium/bestiary/plant/token/awakened-tree.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```