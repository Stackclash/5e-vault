---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Unaligned
ac: null
hp: >-
  5 + five times your ranger level (the beast has a number of Hit Dice [d8s]
  equal to your ranger level)
type: beast
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/beast
aliases:
  - Beast of the Sea
cr: null
---
# [[/5. Mechanics/Bestiary/Beast/Beast Of The Sea (TCE).md|Beast of the Sea]]
*Source: Tasha's Cauldron of Everything p. 61*

```statblock
"name": "Beast Of The Sea (TCE)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac_class": "13 + PB (natural armor)"
"hp": "5 + five times your ranger level (the beast has a number of Hit Dice [d8s]\
  \ equal to your ranger level)"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "15"
  - !!int "8"
  - !!int "14"
  - !!int "11"
"speed": "5 ft., swim 60 ft."
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 12"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The beast can breathe both air and water."
    "name": "Amphibious"
  - "desc": "You can add your proficiency bonus to any ability check or saving throw\
      \ that the beast makes."
    "name": "Primal Bond"
"actions":
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target. *Hit:* 1d6 + 2 + PB piercing damage or 1d6 + 2 + PB bludgeoning\
      \ damage (your choice), and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC equal to your spellcasting save DC). Until this grapple ends, the\
      \ beast can't use this attack on another target."
    "name": "Binding Strike"
"source":
  - "TCE"
"image": "/5. Mechanics/Bestiary/Beast/token/beast-of-the-sea-tce.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
