---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'arctic, desert, forest, mountain, swamp, underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/2
  - monster/environment/arctic
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/dragon
aliases:
  - Guard Drake
---
# [[5. Mechanics\Bestiary\Dragon\Guard Drake (MPMM).md|Guard Drake]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 151*

A guard drake is a reptilian creature created out of dragon scales by means of a bizarre and grisly ritual. When trained properly, a drake is obedient and territorial, which makes it an excellent watch beast that can follow simple commands.

Tiamat's cult practices the ritual to create guard drakes, as do other groups that are skilled in arcana and associated with Dragons. The ritual requires a chromatic dragon's aid; the dragon typically helps to reward its allies or worshipers with a valuable servant.

The ritual, which takes several days, requires 10 pounds of fresh dragon scales (donated by the dragon allied with the group), a large amount of fresh meat, and an iron cauldron. When the process is complete, a Small egg emerges from the cauldron and hatches within a few hours.

A newly hatched guard drake imprints upon the first creature that feeds it (usually the one planning to train it), establishing an aggressive but trusting bond with that individual. A guard drake is fully grown within two to three weeks and can be trained in the same length of time. It is the equivalent of a guard dog in terms of what it can be trained to do. A guard drake resembles the type of dragon it was created from, but with a wingless, squat, muscular build. A drake can't reproduce, nor can its scales be used to make other guard drakes.

```statblock
"name": "Guard Drake (MPMM)"
"size": "Medium"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "11"
  - !!int "16"
  - !!int "4"
  - !!int "10"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Draconic but can't speak"
"cr": "2"
"actions":
  - "desc": "The guard drake makes one Bite attack and one Tail attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage."
    "name": "Tail"
"source":
  - "MPMM"
"image": "5. Mechanics/Bestiary/Dragon/token/guard-drake-mpmm.webp"
```
^statblock

## Environment

arctic, desert, forest, mountain, swamp, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
