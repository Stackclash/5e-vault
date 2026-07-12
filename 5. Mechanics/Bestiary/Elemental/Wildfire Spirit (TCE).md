---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Small
alignment: Unaligned
ac: 13
hp: 5 + five times your druid level
type: elemental
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/small
  - monster/type/elemental
aliases:
  - Wildfire Spirit
cr: null
---
# [[/5. Mechanics/Bestiary/Elemental/Wildfire Spirit (TCE).md|Wildfire Spirit]]
*Source: Tasha's Cauldron of Everything p. 40*

```statblock
"name": "Wildfire Spirit (TCE)"
"size": "Small"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": "5 + five times your druid level"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "14"
  - !!int "13"
  - !!int "15"
  - !!int "11"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "fire"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 12"
"languages": "understands the languages you speak"
"actions":
  - "desc": "*Ranged Weapon Attack:* your spell attack modifier to hit, range 60 ft.,\
      \ one target you can see. *Hit:* 1d6 + PB fire damage."
    "name": "Flame Seed"
  - "desc": "The spirit and each willing creature of your choice within 5 feet of\
      \ it teleport up to 15 feet to unoccupied spaces you can see. Then each creature\
      \ within 5 feet of the space that the spirit left must succeed on a Dexterity\
      \ saving throw against your spell save DC or take 1d6 + PB fire damage."
    "name": "Fiery Teleportation"
"source":
  - "TCE"
"image": "/5. Mechanics/Bestiary/Elemental/token/wildfire-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
