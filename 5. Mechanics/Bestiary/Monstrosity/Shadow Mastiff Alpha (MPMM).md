---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 'forest, hill, swamp'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/3
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/swamp
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Shadow Mastiff Alpha
---
# [[5. Mechanics\Bestiary\Monstrosity\Shadow Mastiff Alpha (MPMM).md|Shadow Mastiff Alpha]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 215, Volo's Guide to Monsters p. 190*

Each pack of shadow mastiffs is led by an alpha, the smartest one of the group. The sound of an alpha's howl strikes terror into those who hear it and is a sure sign that a pack is on the prowl.

## Shadow Mastiffs

Shadow mastiffs—hounds of the Shadowfell—move invisibly through the shadows, always on the hunt.

```statblock
"name": "Shadow Mastiff Alpha (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "12"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "6"
  - !!int "12"
  - !!int "5"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks while\
  \ in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The shadow mastiff can see ethereal creatures and objects."
    "name": "Ethereal Awareness"
  - "desc": "While in bright light created by sunlight, the shadow mastiff has disadvantage\
      \ on attack rolls, ability checks, and saving throws."
    "name": "Sunlight Weakness"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) piercing damage. If the target is a creature, it must succeed on\
      \ a DC 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Bite"
  - "desc": "The shadow mastiff howls. Any Beast or Humanoid within 300 feet of it\
      \ must succeed on a DC 11 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ of it for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a target's save is successful or the\
      \ effect ends for it, the target is immune to any shadow mastiff's Terrifying\
      \ Howl for the next 24 hours."
    "name": "Terrifying Howl (Recharge 6)"
"bonus_actions":
  - "desc": "While in dim light or darkness, the shadow mastiff becomes [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]],\
      \ along with anything it is wearing or carrying. The invisibility lasts until\
      \ the shadow mastiff uses a bonus action to end it or until the shadow mastiff\
      \ attacks, is in bright light, or is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Shadow Blend"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/shadow-mastiff-alpha-mpmm.webp"
```
^statblock

## Environment

forest, hill, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
