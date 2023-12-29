---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/12
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/gith
statblock: inline
aliases: ["Githyanki Kith'rak"]
---
# [[5. Mechanics\Bestiary\Humanoid\Githyanki Kithrak (MPMM).md|Githyanki Kith'rak]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140*  

Militarized githyanki cultures assign ranks and responsibilities to citizens. Groups of ten warriors follow the commands of sarths ([[5. Mechanics/Bestiary/Humanoid/Githyanki Warrior.md|githyanki warriors]]), while ten sarths obey the commands of a mighty kith'rak. These champions undergo torturous training and psionic testing until they can command the respect of their underlings.

## Githyanki

Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

```statblock
"name": "Githyanki Kith'rak (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "180"
"hit_dice": "24d8 + 72"
"stats":
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "17"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "12"
"traits":
- "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand is invisible)\n\
    \n1/day each: [[5. Mechanics/Spells/Plane Shift.md|plane shift]], [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]\n\
    \n3/day each: [[5. Mechanics/Spells/Blur.md|blur]], [[5. Mechanics/Spells/Nondetection.md|nondetection]]\
    \ (self only)"
  "name": "spells"
"actions":
- "desc": "The githyanki makes three Greatsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage plus dice: 5d6|avg\
    \ (5d6) psychic damage."
  "name": "Greatsword"
"bonus_actions":
- "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
- "desc": "The githyanki magically ends the [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] conditions on itself\
    \ and each creature of its choice that it can see within 30 feet of it."
  "name": "Rally the Troops"
"reactions":
- "desc": "The githyanki adds 4 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/humanoid/token/githyanki-kithrak.png"
```
^statblock

## Environment

desert, mountain, urban