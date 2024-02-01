---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/huge
- monster/type/beast
statblock: inline
aliases: ["Giant Elk"]
---
# [[5. Mechanics\Bestiary\Beast\Giant Elk.md|Giant Elk]]
*Source: Monster Manual p. 325. Available in the SRD and the Basic Rules.*  

The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.

```statblock
"name": "Giant Elk"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "42"
"hit_dice": "5d12 + 10"
"stats":
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "7"
- !!int "14"
- !!int "10"
"speed": "60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Giant Elk, understands Common, Elvish, Sylvan but can't speak them"
"cr": "2"
"traits":
- "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra dice: 2d6|avg\
    \ (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength\
    \ saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage."
  "name": "Ram"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ creature. Hit: dice: 4d8 + 4|avg (4d8 + 4) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "SKT"
"image": "compendium/bestiary/beast/token/giant-elk.png"
```
^statblock

## Environment

mountain, grassland, forest, hill

```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```