---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: inline
---
# Axe Beak
*Source: Monster Manual p. 317, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden*  

An axe beak is a tall flightless bird with strong legs and a heavy, wedge-shaped beak. It has a nasty disposition and tends to attack any unfamiliar creature that wanders too close.

```statblock
"name": "Axe Beak"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) slashing damage."
  "name": "Beak"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "IDRotF"
"image": "5. Mechanics/Bestiary/Beast/token/axe-beak.png"
```
^statblock

## Environment

grassland, hill