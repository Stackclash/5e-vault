---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: 'arctic, desert, forest, mountain, swamp, underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/7
  - monster/environment/arctic
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Lost Sorrowsworn
---
# [[5. Mechanics\Bestiary\Monstrosity\Lost Sorrowsworn (MPMM).md|Lost Sorrowsworn]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 224, Mordenkainen's Tome of Foes p. 233, Vecna: Eve of Ruin*

The Shadowfell turns visitors around until they become marooned in its twisted landscape. Lost sorrowsworn—often referred to as the Lost—are representations of the anxiety and fear people experience when they can't find their way. These sorrowsworn appear desperate and panicked.

Lost sorrowsworn grasp at any creatures they can reach. A victim experiences a flood of fear and panic as its mind buckles under the fury of this assault. The harder a victim's allies fight to break the grasp, the more the victim suffers.

## Sorrowsworn

The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

```statblock
"name": "Lost Sorrowsworn (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "6"
  - !!int "7"
  - !!int "5"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common"
"cr": "7"
"actions":
  - "desc": "The sorrowsworn makes two Arm Spike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d10 + 3) piercing damage."
    "name": "Arm Spike"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 25\
      \ (4d10 + 3) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends,\
      \ the target is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], and\
      \ it takes 27 (6d8) psychic damage at the end of each of its turns. The sorrowsworn\
      \ can grapple only one creature at a time."
    "name": "Embrace (Recharge 4-6)"
"reactions":
  - "desc": "If the sorrowsworn takes damage, the creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by Embrace takes 18 (4d8) psychic damage."
    "name": "Tightening Embrace"
"source":
  - "MPMM"
  - "MTF"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/lost-sorrowsworn-mpmm.webp"
```
^statblock

## Environment

arctic, desert, forest, mountain, swamp, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
