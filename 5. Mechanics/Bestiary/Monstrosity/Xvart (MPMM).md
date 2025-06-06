---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: 'hill, underdark'
size: Small
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-8
  - monster/environment/hill
  - monster/environment/underdark
  - monster/size/small
  - monster/type/monstrosity
aliases:
  - Xvart
---
# [[5. Mechanics\Bestiary\Monstrosity\Xvart (MPMM).md|Xvart]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 267, Volo's Guide to Monsters p. 200*

Fleeing his pursuers, Raxivort wandered across the multiverse and spawned xvarts, who not only look like him but also cause any magic that could reveal his location to point to the nearest xvart instead.

## Xvarts

Xvarts are cowardly, greedy creatures spawned by a renegade demigod, Raxivort. They have blue skin, orange eyes, and receding hairlines, mirroring their creator's appearance. They stand about 3 feet tall.

Raxivort spent centuries watching over the treasury of Graz'zt, and in time, Raxivort plundered his lord's vault. One of the treasures he stole was the *Infinity Spindle*, a crystalline shard that could transform even a creature as lowly as Raxivort into a demigod. After his apotheosis, Raxivort forged the Black Sewers, a realm within Pandemonium that he filled with his beloved creatures, rats and bats, which xvarts befriend to this day. He enjoyed his reign only briefly before Graz'zt unleashed his vengeance. The demon prince urged villains far and wide to pursue the Infinity Spindle for themselves and destroy Raxivort.

```statblock
"name": "Xvart (MPMM)"
"size": "Small"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "10"
  - !!int "8"
  - !!int "7"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 30 ft., passive Perception 8"
"languages": "Abyssal"
"cr": "1/8"
"traits":
  - "desc": "The xvart can communicate with ordinary [[5. Mechanics/Bestiary/Beast/Bat.md|bats]]\
      \ and [[5. Mechanics/Bestiary/Beast/Rat.md|rats]], as well as [[5. Mechanics/Bestiary/Beast/Giant Bat.md|giant bats]]\
      \ and [[5. Mechanics/Bestiary/Beast/Giant Rat.md|giant rats]]."
    "name": "Raxivort's Tongue"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage. If at least one of the xvart's allies is within 5 feet\
      \ of the target, the xvart can push the target 5 feet if the target is a Medium\
      \ or smaller creature."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
      \ 4 (1d4 + 2) bludgeoning damage."
    "name": "Sling"
"bonus_actions":
  - "desc": "The xvart takes the [[/5. Mechanics/Rules/Actions.md#Disengage|Disengage]]\
      \ action."
    "name": "Low Cunning"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/xvart-mpmm.webp"
```
^statblock

## Environment

hill, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
