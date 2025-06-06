---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'grassland, hill, mountain'
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/giant
aliases:
  - Ogre Howdah
---
# [[5. Mechanics\Bestiary\Giant\Ogre Howdah (MPMM).md|Ogre Howdah]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 201, Mordenkainen's Tome of Foes p. 221*

The most unusual of the specialized ogres, the howdah carries a palisaded wooden fort on its back. The fort serves as a fighting platform for up to four Small people. Ogre howdahs are most often seen bearing bow- and spear-wielding [[5. Mechanics/Bestiary/Humanoid/Goblin.md|goblins]] into battle, or perhaps [[5. Mechanics/Bestiary/Humanoid/Kobold.md|kobolds]] or [[5. Mechanics/Bestiary/Humanoid/Deep Gnome Svirfneblin.md|deep gnomes]], but they might also transport other Small folk.

## Ogres of War

Ogres love to rush headlong into battle, but with enough time and patience, some of them learn to carry out specialized missions. The names they are given—the battering ram, the bolt launcher, the chain brute, and the howdah—reflect their particular functions. These jobs are tailored to take advantage of an ogre's strengths.

```statblock
"name": "Ogre Howdah (MPMM)"
"size": "Large"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "16"
  - !!int "5"
  - !!int "7"
  - !!int "7"
"speed": "40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common, Giant"
"cr": "2"
"traits":
  - "desc": "The ogre carries a compact fort on its back. Up to four Small creatures\
      \ can ride in the fort without squeezing. To make a melee attack against a target\
      \ within 5 feet of the ogre, they must use spears or weapons with reach. Creatures\
      \ in the fort have three-quarters cover against attacks and effects from outside\
      \ it. If the ogre dies, creatures in the fort are placed in unoccupied spaces\
      \ within 5 feet of the ogre."
    "name": "Howdah"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Mace"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Giant/token/ogre-howdah-mpmm.webp"
```
^statblock

## Environment

grassland, hill, mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
