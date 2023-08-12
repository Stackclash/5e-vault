---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Quipper
*Source: Monster Manual p. 335, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep*  

A quipper is a carnivorous fish with sharp teeth.

Quippers can adapt to any aquatic environment, including cold subterranean lakes. They frequently gather in swarms; the statistics for a swarm of quippers appear later in this appendix.

```statblock
"name": "Quipper"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "16"
- !!int "9"
- !!int "1"
- !!int "7"
- !!int "2"
"speed": "swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The quipper has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The quipper can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "ToA"
- "GoS"
- "MOT"
- "IDRotF"
- "CRCotN"
"image": "5. Mechanics/Bestiary/Beast/token/quipper.png"
```
^statblock

## Environment

underwater