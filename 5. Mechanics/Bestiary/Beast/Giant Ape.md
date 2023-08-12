---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/huge
- monster/type/beast
statblock: inline
---
# Giant Ape
*Source: Monster Manual p. 323, Ghosts of Saltmarsh*  

```statblock
"name": "Giant Ape"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "23"
- !!int "14"
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 40 ft."
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "7"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d10 + 6|avg (3d10 + 6) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+9 (+9 to hit), range 50/100 ft., one\
    \ target. Hit: dice: 7d6 + 6|avg (7d6 + 6) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
- "GoS"
"image": "5. Mechanics/Bestiary/Beast/token/giant-ape.png"
```
^statblock

## Environment

forest