---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: inline
---
# Rothé
*Source: Volo's Guide to Monsters p. 208*  

Ordinary rothé resemble musk oxen and have [[6. Mechanics/Rules/Senses.md#darkvision|darkvision]] out to a range of 30 feet.

```statblock
"name": "Rothé"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "15"
"hit_dice": "2d10 + 4"
"stats":
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "walk 30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the rothé moves at least 20 feet straight toward a target and then hits\
    \ it with a gore attack on the same turn, the target takes an extra 7 (dice:\
    \ 2d6|avg (2d6)) piercing damage."
  "name": "Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage."
  "name": "Gore"
"source":
- "VGM"
"image": "6. Mechanics/Bestiary/Beast/token/rothe.png"
```
^statblock

## Environment

grassland