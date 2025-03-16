---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 'grassland, forest, swamp, hill, urban, desert, coastal, mountain, underdark'
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/coastal
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Stirge
---
# [[5. Mechanics/Bestiary/Beast/Stirge.md|Stirge]]
*Source: Monster Manual p. 284. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

This horrid flying creature looks like a cross between a large bat and an oversized mosquito. Its legs end in sharp pincers, and its long, needle-like proboscis slashes the air as it seeks its next meal.

Stirges feed on the blood of living creatures, attaching and draining them slowly. Although they pose little danger in small numbers, packs of stirges can be a formidable threat, reattaching as quickly as their weakening prey can pluck them off.

## Blood Drain

A stirge attacks by landing on a victim, finding a vulnerable spot, and plunging its proboscis into the flesh while using its pincer legs to latch on to the victim. Once the stirge has sated itself, it detaches and flies off to digest its meal.

```statblock
"name": "Stirge"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "11"
- !!int "2"
- !!int "8"
- !!int "6"
"speed": "10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the stirge attaches to the target. While attached,\
    \ the stirge doesn't attack. Instead, at the start of each of the stirge's turns,\
    \ the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe stirge can\
    \ detach itself by spending 5 feet of its movement. It does so after it drains\
    \ 10 hit points of blood from the target or the target dies. A creature, including\
    \ the target, can use its action to detach the stirge."
  "name": "Blood Drain"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/stirge.webp"
```
^statblock

## Environment

grassland, forest, swamp, hill, urban, desert, coastal, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
