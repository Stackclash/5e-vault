---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/plant
aliases:
  - Shrieker
---
# [[5. Mechanics\Bestiary\Plant\Shrieker.md|Shrieker]]
*Source: Monster Manual p. 138, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

A shrieker is a human-sized mushroom that emits a piercing screech to drive off creatures that disturb it. Other creatures use the fungi as an alarm to signal the approach of prey, and various intelligent races of the Underdark cultivate shriekers on the outskirts of their communities to discourage trespassers.

## Fungi

With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.

Fungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.

Not needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.

```statblock
"name": "Shrieker"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "5"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "-5"
"stats":
  - !!int "1"
  - !!int "1"
  - !!int "10"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "0 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "0"
"traits":
  - "desc": "While the shrieker remains motionless, it is indistinguishable from an\
      \ ordinary fungus."
    "name": "False Appearance"
"reactions":
  - "desc": "When bright light or a creature is within 30 feet of the shrieker, it\
      \ emits a shriek audible within 300 feet of it. The shrieker continues to shriek\
      \ until the disturbance moves out of range and for d4 of the shrieker's turns\
      \ afterward."
    "name": "Shriek"
"source":
  - "MM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Plant/token/shrieker.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
