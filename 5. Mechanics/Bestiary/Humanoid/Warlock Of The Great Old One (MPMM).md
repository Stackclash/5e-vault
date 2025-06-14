---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 'arctic, hill, mountain, underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/6
  - monster/environment/arctic
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Warlock of the Great Old One
---
# [[5. Mechanics\Bestiary\Humanoid\Warlock Of The Great Old One (MPMM).md|Warlock of the Great Old One]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 256, Volo's Guide to Monsters p. 220*

Warlocks of the Great Old One gain their powers through magical pacts forged with eldritch entities from strange and distant realms of existence. Some of these warlocks associate with cultists devoted to these entities, as well as Aberrations that share their goals, yet other warlocks of the Great Old One are experts at rooting out the chaos and wickedness inspired by bizarre beings from beyond the stars.

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

```statblock
"name": "Warlock Of The Great Old One (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "15"
  - !!int "12"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": "+4"
  - "charisma": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
  - "desc": "At the start of each of the warlock's turns, each creature of its choice\
      \ within 10 feet of it must succeed on a DC 15 Wisdom saving throw or take 10\
      \ (3d6) psychic damage, provided that the warlock isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Whispering Aura"
"actions":
  - "desc": "The warlock makes two Dagger attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 10 (3d6) psychic\
      \ damage."
    "name": "Dagger"
  - "desc": "The warlock opens a momentary extraplanar rift within 60 feet of it.\
      \ The rift is a scream-filled, 20-foot cube. Each creature in that area must\
      \ make a DC 15 Wisdom saving throw. On a failed save, a creature takes 9 (2d8)\
      \ psychic damage and is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ of the warlock until the start of the warlock's next turn. On a successful\
      \ save, a creature takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
    "name": "Howling Void"
  - "desc": "The warlock casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 15): \n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Guidance.md|guidance]], [[5. Mechanics/Spells/Levitate.md|levitate]],\
      \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]] (self only), [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
      \n1/day each: [[5. Mechanics/Spells/Arcane Gate.md|arcane gate]], [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
      \ [[5. Mechanics/Spells/True Seeing.md|true seeing]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/warlock-of-the-great-old-one-mpmm.webp"
```
^statblock

## Environment

arctic, hill, mountain, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
