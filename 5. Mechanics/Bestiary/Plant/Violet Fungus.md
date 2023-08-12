---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/plant
statblock: inline
---
# Violet Fungus
*Source: Monster Manual p. 138, Hoard of the Dragon Queen, Princes of the Apocalypse, Ghosts of Saltmarsh, Dragons of Stormwreck Isle*  

This purplish mushroom uses root-like feelers growing from its base to creep across cavern floors. The four stalks protruding from a violet fungi's central mass are used to lash out at prey, rotting flesh with the slightest touch. Any creature killed by a violet fungus decomposes rapidly. A new violet fungus sprouts from the moldering corpse, growing to full size in `dice: 2d6` (`2d6`) days.

## Fungi

With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.

Fungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.

Not needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.

## Stat Block

```statblock
"name": "Violet Fungus"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "5"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "3"
- !!int "1"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "walk 5 ft."
"condition_immunities": "blinded, deafened, frightened"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the violet fungus remains motionless, it is indistinguishable from\
    \ an ordinary fungus."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fungus makes dice: 1d4|avg (1d4) Rotting Touch attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 1d8|avg (1d8) necrotic damage."
  "name": "Rotting Touch"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "GoS"
- "DoSI"
"image": "5. Mechanics/Bestiary/Plant/token/violet-fungus.png"
```
^statblock

## Environment

underdark