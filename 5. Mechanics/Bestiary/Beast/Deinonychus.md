---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast/dinosaur
statblock: inline
aliases: ["Deinonychus"]
---
# [[5. Mechanics\Bestiary\Beast\Deinonychus.md|Deinonychus]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 95*  

This larger cousin of the velociraptor kills by gripping its target with its claws and feeding.

```statblock
"name": "Deinonychus"
"size": "Medium"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "15"
- !!int "15"
- !!int "14"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "If the deinonychus moves at least 20 feet straight toward a creature and\
    \ then hits it with a Claw attack on the same turn, that target must succeed on\
    \ a DC 12 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#prone|prone]], the deinonychus\
    \ can make one Bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- "desc": "The deinonychus makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) slashing damage."
  "name": "Claw"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/deinonychus-mpmm.webp"
```
^statblock

## Environment

forest, grassland, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```