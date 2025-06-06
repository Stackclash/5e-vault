---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: 'desert, mountain, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/10
  - monster/environment/desert
  - monster/environment/mountain
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/gith
  - monster/type/humanoid/wizard
aliases:
  - Githyanki Gish
---
# [[5. Mechanics\Bestiary\Humanoid\Githyanki Gish (MPMM).md|Githyanki Gish]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140, Mordenkainen's Tome of Foes p. 205*

Gish blend their magical abilities with swordplay to become dangerous foes in battle. Their specialized capabilities make them well suited for assassination, raiding, and espionage.

## Githyanki

Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

```statblock
"name": "Githyanki Gish (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith, wizard"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Half Plate Armor.md|half plate]]"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": "+6"
  - "intelligence": "+7"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "10"
"actions":
  - "desc": "The githyanki makes three Longsword or Telekinetic Bolt attacks, or it\
      \ makes one of those attacks and uses Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
      \ plus 22 (5d8) psychic damage."
    "name": "Longsword"
  - "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 28\
      \ (8d6) force damage."
    "name": "Telekinetic Bolt"
  - "desc": "The githyanki casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\n\
      At will: [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]]\
      \ (the hand is invisible), [[5. Mechanics/Spells/Message.md|message]]\n\n3/day\
      \ each: [[5. Mechanics/Spells/Fireball.md|fireball]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
      \ [[5. Mechanics/Spells/Nondetection.md|nondetection]] (self only)\n\n1/day each:\
      \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
      \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space it can see."
    "name": "Astral Step (Recharge 4-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/githyanki-gish-mpmm.webp"
```
^statblock

## Environment

desert, mountain, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
