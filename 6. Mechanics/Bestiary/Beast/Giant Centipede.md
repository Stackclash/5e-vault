---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/beast
statblock: inline
---
# Giant Centipede
*Source: Monster Manual p. 323, Hoard of the Dragon Queen, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything, Plane Shift: Ixalan*  

```statblock
"name": "Giant Centipede"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d6 + 1"
"stats":
- !!int "5"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "7"
- !!int "3"
"speed": "walk 30 ft., climb 30 ft."
"senses": "blindsight 30 ft., passive Perception 8"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage, and the target must succeed\
    \ on a DC 11 Constitution saving throw or take dice: 3d6|avg (3d6) poison\
    \ damage. If the poison damage reduces the target to 0 hit points, the target\
    \ is stable but [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]] for 1 hour,\
    \ even after regaining hit points, and is [[6. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way."
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "TftYP"
- "WDMM"
- "GoS"
- "BGDIA"
- "TCE"
- "PSX"
"image": "6. Mechanics/Bestiary/Beast/token/giant-centipede.png"
```
^statblock

## Environment

underdark, urban