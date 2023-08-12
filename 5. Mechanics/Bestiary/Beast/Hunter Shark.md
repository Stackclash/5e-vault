---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: inline
---
# Hunter Shark
*Source: Monster Manual p. 330, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Explorer's Guide to Wildemount, Plane Shift: Ixalan*  

Smaller than a giant shark but larger and fiercer than a reef shark, a hunter shark haunts deep waters. It usually hunts alone, but multiple hunter sharks might feed in the same area. A fully grown hunter shark is 15 to 20 feet long.

```statblock
"name": "Hunter Shark"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "13"
- !!int "15"
- !!int "1"
- !!int "10"
- !!int "4"
"speed": "swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 30 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shark has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "GoS"
- "DIP"
- "EGW"
- "PSX"
"image": "5. Mechanics/Bestiary/Beast/token/hunter-shark.png"
```
^statblock

## Environment

underwater