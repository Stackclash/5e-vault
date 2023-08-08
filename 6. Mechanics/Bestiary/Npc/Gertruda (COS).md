---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
---
# Gertruda
*Source: Curse of Strahd p. 68, Derived from Commoner (MM)*  

```statblock
"name": "Gertruda"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Npc/token/gertruda.png"
```
^statblock

## Environment

arctic, desert, coastal, grassland, hill, urban, forest