---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Giant Wolf Spider
*Source: Monster Manual p. 330, Curse of Strahd, Tales from the Yawning Portal, Tomb of Annihilation, Ghosts of Saltmarsh, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Plane Shift: Ixalan*  

Smaller than a giant spider, a giant wolf spider hunts prey across open ground or hides in a burrow or crevice, or in a hidden cavity beneath debris.

```statblock
"name": "Giant Wolf Spider"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "4"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage, and the target must make\
    \ a DC 11 Constitution saving throw, taking 7 (dice: 2d6|avg (2d6)) poison\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ poison damage reduces the target to 0 hit points, the target is stable but [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour, even after regaining hit points, and is [[6. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "TftYP"
- "ToA"
- "GoS"
- "TCE"
- "WBtW"
- "PSX"
"image": "6. Mechanics/Bestiary/Beast/token/giant-wolf-spider.png"
```
^statblock

## Environment

grassland, forest, hill, desert, coastal