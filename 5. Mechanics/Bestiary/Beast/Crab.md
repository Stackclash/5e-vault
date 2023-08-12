---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Crab
*Source: Monster Manual p. 320, Tomb of Annihilation, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus*  

```statblock
"name": "Crab"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "11"
- !!int "10"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "walk 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The crab can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one target.\
    \ Hit: 1 bludgeoning damage."
  "name": "Claw"
"source":
- "MM"
- "ToA"
- "GoS"
- "BGDIA"
"image": "5. Mechanics/Bestiary/Beast/token/crab.png"
```
^statblock

## Environment

coastal