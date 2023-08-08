---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/small
- monster/type/elemental
statblock: inline
---
# Wildfire Spirit
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
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_immunities": "fire"
"condition_immunities": "charmed, frightened, grappled, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 60 ft., one target you can see. Hit: 1d6 + PB fire damage."
  "name": "Flame Seed"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spirit and each willing creature of your choice within 5 feet of it\
    \ teleport up to 15 feet to unoccupied spaces you can see. Then each creature\
    \ within 5 feet of the space that the spirit left must succeed on a Dexterity\
    \ saving throw against your spell save DC or take 1d6 + PB fire damage."
  "name": "Fiery Teleportation"
"source":
- "TCE"
"image": "6. Mechanics/Bestiary/Elemental/token/wildfire-spirit.png"
```
^statblock