---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'desert, mountain, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/desert
  - monster/environment/mountain
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/gith
aliases:
  - Githyanki Kith'rak
---
# [[5. Mechanics\Bestiary\Humanoid\Githyanki Kithrak (MPMM).md|Githyanki Kith'rak]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140, Mordenkainen's Tome of Foes p. 205*

Militarized githyanki cultures assign ranks and responsibilities to citizens. Groups of ten warriors follow the commands of sarths ([[5. Mechanics/Bestiary/Humanoid/Githyanki Warrior.md|githyanki warriors]]), while ten sarths obey the commands of a mighty kith'rak. These champions undergo torturous training and psionic testing until they can command the respect of their underlings.

## Githyanki

Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

```statblock
"name": "Githyanki Kithrak (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "180"
"hit_dice": "24d8 + 72"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "16"
  - !!int "17"
  - !!int "16"
  - !!int "15"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "constitution": "+7"
  - "intelligence": "+7"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "12"
"actions":
  - "desc": "The githyanki makes three Greatsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage plus 17 (5d6) psychic damage."
    "name": "Greatsword"
  - "desc": "The githyanki casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\n\
      At will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand is invisible)\n\
      \n3/day each: [[5. Mechanics/Spells/Blur.md|blur]], [[5. Mechanics/Spells/Nondetection.md|nondetection]]\
      \ (self only)\n\n1/day each: [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
      \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space it can see."
    "name": "Astral Step (Recharge 4-6)"
  - "desc": "The githyanki magically ends the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] conditions on\
      \ itself and each creature of its choice that it can see within 30 feet of it."
    "name": "Rally the Troops"
"reactions":
  - "desc": "The githyanki adds 4 to its AC against one melee attack that would hit\
      \ it. To do so, the githyanki must see the attacker and be wielding a melee\
      \ weapon."
    "name": "Parry"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/githyanki-kithrak-mpmm.webp"
```
^statblock

## Environment

desert, mountain, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
