---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Reef Shark
*Source: Monster Manual p. 336, Tomb of Annihilation, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*  

Smaller than giant sharks and hunter sharks, reef sharks inhabit shallow waters and coral reefs, gathering in small packs to hunt. A full-grown specimen measures 6 to 10 feet long.

```statblock
"name": "Reef Shark"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "13"
- !!int "13"
- !!int "1"
- !!int "10"
- !!int "4"
"speed": "swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 30 ft., passive Perception 12"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shark has advantage on an attack roll against a creature if at least\
    \ one of the shark's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "ToA"
- "GoS"
- "EGW"
- "CRCotN"
- "JttRC"
"image": "6. Mechanics/Bestiary/Beast/token/reef-shark.png"
```
^statblock

## Environment

underwater