---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'grassland, hill, mountain'
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/4
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/giant
aliases:
  - Ogre Battering Ram
---
# [[5. Mechanics\Bestiary\Giant\Ogre Battering Ram (MPMM).md|Ogre Battering Ram]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 200, Mordenkainen's Tome of Foes p. 220*

An ogre battering ram carries an enormous club that's primarily used for bashing doors into kindling but also works well for smashing foes. These ogres are drilled in two simple tasks: rushing forward to shatter enemy fortifications and using their weapons to force an advancing enemy to halt.

## Ogres of War

Ogres love to rush headlong into battle, but with enough time and patience, some of them learn to carry out specialized missions. The names they are given—the battering ram, the bolt launcher, the chain brute, and the howdah—reflect their particular functions. These jobs are tailored to take advantage of an ogre's strengths.

```statblock
"name": "Ogre Battering Ram (MPMM)"
"size": "Large"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "11"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
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
"cr": "4"
"traits":
  - "desc": "The ogre deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The ogre makes two Bash attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15\
      \ (2d10 + 4) bludgeoning damage, and the ogre can push the target 5 feet away\
      \ if the target is Huge or smaller."
    "name": "Bash"
"reactions":
  - "desc": "When a creature enters a space within 5 feet of the ogre, the ogre makes\
      \ a Bash attack against that creature. If the attack hits, the target's speed\
      \ is reduced to 0 until the start of the ogre's next turn."
    "name": "Block the Path"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Giant/token/ogre-battering-ram-mpmm.webp"
```
^statblock

## Environment

grassland, hill, mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
