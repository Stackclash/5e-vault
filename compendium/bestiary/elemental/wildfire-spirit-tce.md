---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Small
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/small
- monster/type/elemental
aliases: ["Wildfire Spirit"]
---
# [Wildfire Spirit](compendium\bestiary\elemental/wildfire-spirit-tce.md)
*Source: Tasha's Cauldron of Everything p. 40*

```statblock
"name": "Wildfire Spirit (TCE)"
"size": "Small"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "11"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "fire"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"actions":
- "desc": "Ranged Weapon Attack: YourSpellAttack to hit, range 60 ft., one target\
    \ you can see. Hit: 1d6 + PB fire damage."
  "name": "Flame Seed"
- "desc": "The spirit and each willing creature of your choice within 5 feet of it\
    \ teleport up to 15 feet to unoccupied spaces you can see. Then each creature\
    \ within 5 feet of the space that the spirit left must succeed on a Dexterity\
    \ saving throw against your spell save DC or take 1d6 + PB fire damage."
  "name": "Fiery Teleportation"
"source":
- "TCE"
"image": "compendium/bestiary/elemental/token/wildfire-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```