---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1-4
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/monstrosity
statblock: inline
aliases: ["Wretched Sorrowsworn"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Wretched Sorrowsworn (MPMM).md|Wretched Sorrowsworn]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 224*  

Horrid little monsters, wretched sorrowsworn—or the Wretched—gather in packs to scour the Shadowfell for prey. These desperate entities subsist on life force; when they find a creature, they surge forward to sink their fangs into their victims and drink deep.

## Sorrowsworn

The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

```statblock
"name": "Wretched Sorrowsworn (MPMM)"
"size": "Small"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"hp": !!int "10"
"hit_dice": "4d6 - 4"
"stats":
- !!int "7"
- !!int "12"
- !!int "9"
- !!int "5"
- !!int "6"
- !!int "5"
"speed": "40 ft."
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The sorrowsworn has advantage on an attack roll against a creature if at\
    \ least one of the sorrowsworn's allies is within 5 feet of the creature and the\
    \ ally isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]. The\
    \ sorrowsworn otherwise has disadvantage on attack rolls."
  "name": "Wretched Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 1|avg (1d10 + 1) piercing damage, and the sorrowsworn\
    \ attaches to the target. While attached, the sorrowsworn can't attack, and at\
    \ the start of each of the sorrowsworn's turns, the target takes dice: 1d10 +\
    \ 1|avg (1d10 + 1) necrotic damage.\n\nThe attached sorrowsworn moves with\
    \ the target whenever the target moves, requiring none of the sorrowsworn's movement.\
    \ The sorrowsworn can detach itself by spending 5 feet of its movement on its\
    \ turn. A creature, including the target, can use its action to detach the sorrowsworn."
  "name": "Bite"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/monstrosity/token/wretched-sorrowsworn.png"
```
^statblock

## Environment

swamp, underdark, urban

```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```