---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: 'arctic, forest, grassland, hill'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-2
  - monster/environment/arctic
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Gnoll Hunter
---
# [[5. Mechanics\Bestiary\Monstrosity\Gnoll Hunter (MPMM).md|Gnoll Hunter]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 144, Volo's Guide to Monsters p. 154*

Hunters are the stealthiest gnolls in a war band. In the vanguard, they creep around, picking off isolated opposition while clearing the way for the rest of the force to advance.

Hunters are particularly skilled with the longbow, and they fire arrows with viciously barbed heads. Even when a hunter doesn't kill their target with their first shot, the arrow strike brings so much pain that the victim is hobbled in its attempt to run away.

## Gnolls

The first gnolls were hyenas transformed by magic. Many of them were then corrupted by the demon lord Yeenoghu. Whether in service to Yeenoghu or dedicated to the survival of their kin, gnoll war bands seek to soften up foes with surprise attacks and to leave no survivors alive.

```statblock
"name": "Gnoll Hunter (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "12"
  - !!int "8"
  - !!int "12"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Gnoll"
"cr": "1/2"
"actions":
  - "desc": "The gnoll makes two Bite, Spear, or Longbow attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee  or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
      \ damage when used with two hands to make a melee attack."
    "name": "Spear"
  - "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
      \ 6 (1d8 + 2) piercing damage, and the target's speed is reduced by 10 feet\
      \ until the end of its next turn."
    "name": "Longbow"
"bonus_actions":
  - "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
      \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
    "name": "Rampage"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/gnoll-hunter-mpmm.webp"
```
^statblock

## Environment

arctic, forest, grassland, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
