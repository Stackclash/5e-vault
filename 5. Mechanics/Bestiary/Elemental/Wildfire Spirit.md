---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/small
- monster/type/elemental
statblock: inline
aliases: ["Wildfire Spirit"]
---
# [[5. Mechanics\Bestiary\Elemental\Wildfire Spirit.md|Wildfire Spirit]]
*Source: Tasha's Cauldron of Everything p. 40*  

```statblock
"name": "Wildfire Spirit"
"size": "Small"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "13"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "13"
- !!int "15"
- !!int "11"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "fire"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"actions":
- "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 60 ft., one target you can see. Hit: 1d6 + PB fire damage."
  "name": "Flame Seed"
- "desc": "The spirit and each willing creature of your choice within 5 feet of it\
    \ teleport up to 15 feet to unoccupied spaces you can see. Then each creature\
    \ within 5 feet of the space that the spirit left must succeed on a Dexterity\
    \ saving throw against your spell save DC or take 1d6 + PB fire damage."
  "name": "Fiery Teleportation"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Elemental/token/wildfire-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```