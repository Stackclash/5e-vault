---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/beast/cattle
aliases:
  - Deep Rothé
---
# [[5. Mechanics\Bestiary\Beast\Deep Rothe (MPMM).md|Deep Rothé]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 71, Volo's Guide to Monsters p. 208*

Deep rothe are Underdark cattle that communicate with one another using the dancing lights spell. Some scholars speculate that rothe came originally from the Feywild and brought the ability to cast the spell with them. Other sages attribute the ability to the centuries rothe have spent in the Underdark, where ambient magic slowly transforms everything.

## Cattle

Many kinds of cattle roam the multiverse, some of them domesticated and others feral. In many cultures, cattle are almost like family to the folk who tend to them.

```statblock
"name": "Deep Rothé (MPMM)"
"size": "Medium"
"type": "beast"
"subtype": "cattle"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "14"
  - !!int "2"
  - !!int "10"
  - !!int "4"
"speed": "30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The rothé is considered to be one size larger for the purpose of determining\
      \ its carrying capacity."
    "name": "Beast of Burden"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage. If the rothé moved at least 20 feet straight toward\
      \ the target immediately before the hit, the target takes an extra 7 (2d6) piercing\
      \ damage."
    "name": "Gore"
  - "desc": "The rothé casts [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ requiring no spell components and using Wisdom as the spellcasting ability.\n"
    "name": "Dancing Lights"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Beast/token/deep-rothe-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
