---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/4
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend/demon
aliases:
  - Babau
---
# [[5. Mechanics\Bestiary\Fiend\Babau (MPMM).md|Babau]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 52, Volo's Guide to Monsters p. 136*

> [!quote] A quote from Mordenkainen  
> 
> I'm unimpressed by most children. They are a blend of their ancestors but often more disappointing. You'd think two of the most beautiful, bloodthirsty beings of the Lower Planes would create a creature of greater potential. Instead, the ghastly babau fails to match the fiendish splendor of its parents.

Demons and devils clash endlessly for control of the Lower Planes. One of these battles pitted the legions of the archdevil Glasya against the screaming hordes of the demon lord Graz'zt. It is said that when Glasya wounded Graz'zt with her sword, the first babaus arose where his blood struck the ground. Their sudden appearance helped rout Glasya and secured Graz'zt's place as one of the preeminent demon lords of the Abyss.

A babau demon has the cunning of a devil and the bloodthirstiness of a demon. It has leathery skin pulled tight over its gaunt frame and a curved horn protruding from the back of its elongated skull. A babau's baleful glare can weaken a creature, and its talons gleam with acidic slime.

```statblock
"name": "Babau (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "16"
  - !!int "11"
  - !!int "12"
  - !!int "13"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Abyssal"
"cr": "4"
"actions":
  - "desc": "The babau makes two Claw attacks. It can replace one attack with a use\
      \ of Spellcasting or Weakening Gaze."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4\
      \ + 4) slashing damage plus 2 (d4) acid damage."
    "name": "Claw"
  - "desc": "The babau targets one creature that it can see within 20 feet of it.\
      \ The target must make a DC 13 Constitution saving throw. On a failed save,\
      \ the target deals only half damage with weapon attacks that use Strength for\
      \ 1 minute. The target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Weakening Gaze"
  - "desc": "The babau casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 11):\n\nAt will:\
      \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Fear.md|fear]], [[5. Mechanics/Spells/Heat Met(AL).md|heat metal]],\
      \ [[5. Mechanics/Spells/Levitate.md|levitate]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Fiend/token/babau-mpmm.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
