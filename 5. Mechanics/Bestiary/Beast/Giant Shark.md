---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/huge
- monster/type/beast
statblock: inline
---
# Giant Shark
*Source: Monster Manual p. 328, Storm King's Thunder, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Locathah Rising, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen, Plane Shift: Ixalan*  

A giant shark is 30 feet long and normally found in deep oceans. Utterly fearless, it preys on anything that crosses its path, including whales and ships.

```statblock
"name": "Giant Shark"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "11"
- !!int "21"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "swim 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": ""
"cr": "5"
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
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d10 + 6|avg (3d10 + 6) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "ToA"
- "GoS"
- "DIP"
- "SDW"
- "LR"
- "IDRotF"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "PSX"
"image": "5. Mechanics/Bestiary/Beast/token/giant-shark.png"
```
^statblock

## Environment

underwater