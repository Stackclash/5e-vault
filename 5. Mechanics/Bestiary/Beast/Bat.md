---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Bat
*Source: Monster Manual p. 318, Curse of Strahd, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight, Plane Shift: Ixalan*  

```statblock
"name": "Bat"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "15"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "walk 5 ft., fly 30 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bat can't use its blindsight while [[5. Mechanics/Rules/Conditions.md#deafened|deafened]]."
  "name": "Echolocation"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bat has advantage on Wisdom ([[5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+0 (+0 to hit), reach 5 ft., one creature.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "IDRotF"
- "WBtW"
- "PSX"
"image": "5. Mechanics/Bestiary/Beast/token/bat.png"
```
^statblock