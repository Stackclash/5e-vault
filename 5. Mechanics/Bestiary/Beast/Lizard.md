---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Lizard
*Source: Monster Manual p. 332, Tomb of Annihilation, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

```statblock
"name": "Lizard"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "11"
- !!int "10"
- !!int "1"
- !!int "8"
- !!int "3"
"speed": "walk 20 ft., climb 20 ft."
"senses": "darkvision 30 ft., passive Perception 9"
"languages": ""
"cr": "0"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "ToA"
- "JttRC"
- "KftGV"
"image": "5. Mechanics/Bestiary/Beast/token/lizard.png"
```
^statblock