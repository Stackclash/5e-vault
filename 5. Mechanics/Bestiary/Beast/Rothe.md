---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/cr/1-4
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Rothé"]
---
# [Rothé](compendium\bestiary\beast/rothe-vgm.md)
*Source: Volo's Guide to Monsters p. 208*

Ordinary rothé resemble musk oxen and have [[/5. Mechanics/Rules/Senses.md#darkvision|darkvision]] out to a range of 30 feet.

```statblock
"name": "Rothé (VGM)"
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
"speed": "30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "If the rothé moves at least 20 feet straight toward a target and then hits\
    \ it with a gore attack on the same turn, the target takes an extra dice: 2d6|avg\
    \ (2d6) piercing damage."
  "name": "Charge"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage."
  "name": "Gore"
"source":
- "VGM"
- "CoA"
"image": "5. Mechanics/Bestiary/Beast/token/rothe-vgm.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```