---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/coastal
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/huge
  - monster/type/beast/dinosaur
statblock: inline
aliases:
  - Quetzalcoatlus
---
# [[5. Mechanics\Bestiary\Beast\Quetzalcoatlus.md|Quetzalcoatlus]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 96*

This giant relative of the pteranodon has a wingspan exceeding 30 feet. Although it can walk like a quadruped, it is more comfortable in the air.

```statblock
"name": "Quetzalcoatlus"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d12 + 4"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- "desc": "The quetzalcoatlus doesn't provoke an [[/5. Mechanics/Rules/Actions.md#opportunity%20attack|opportunity attack]]\
    \ when it flies out of an enemy's reach."
  "name": "Flyby"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 3d6 + 2|avg (3d6 + 2) piercing damage. If the quetzalcoatlus\
    \ flew least 30 feet toward the target immediately before the hit, the target\
    \ takes an extra dice: 3d6|avg (3d6) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/quetzalcoatlus-mpmm.webp"
```
^statblock

## Environment

coastal, hill, mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
