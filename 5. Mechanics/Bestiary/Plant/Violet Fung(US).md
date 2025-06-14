---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/plant
aliases:
  - Violet Fungus
---
# [[5. Mechanics\Bestiary\Plant\Violet Fung(US).md|Violet Fungus]]
*Source: Monster Manual p. 138. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

This purplish mushroom uses root-like feelers growing from its base to creep across cavern floors. The four stalks protruding from a violet fungi's central mass are used to lash out at prey, rotting flesh with the slightest touch. Any creature killed by a violet fungus decomposes rapidly. A new violet fungus sprouts from the moldering corpse, growing to full size in `dice:2d6|noform|noparens|avg` (`2d6`) days.

## Fungi

With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.

Fungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.

Not needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.

```statblock
"name": "Violet Fung(US)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "5"
"hp": !!int "18"
"hit_dice": "4d8"
"modifier": !!int "-5"
"stats":
  - !!int "3"
  - !!int "1"
  - !!int "10"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "5 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "While the violet fungus remains motionless, it is indistinguishable from\
      \ an ordinary fungus."
    "name": "False Appearance"
"actions":
  - "desc": "The fungus makes d4 Rotting Touch attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit:\
      \ 4 (d8) necrotic damage."
    "name": "Rotting Touch"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Plant/token/violet-fungus.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
