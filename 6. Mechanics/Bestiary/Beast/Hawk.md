---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Hawk
*Source: Monster Manual p. 330, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*  

```statblock
"name": "Hawk"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "5"
- !!int "16"
- !!int "8"
- !!int "2"
- !!int "14"
- !!int "6"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hawk has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 1 slashing damage."
  "name": "Talons"
"source":
- "MM"
- "WDH"
- "BGDIA"
- "IDRotF"
- "CM"
- "WBtW"
- "JttRC"
"image": "6. Mechanics/Bestiary/Beast/token/hawk.png"
```
^statblock