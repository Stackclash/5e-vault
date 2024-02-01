---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/14
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/gith
statblock: inline
aliases: ["Githyanki Supreme Commander"]
---
# [[5. Mechanics\Bestiary\Humanoid\Githyanki Supreme Commander (MPMM).md|Githyanki Supreme Commander]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 141*  

Supreme commanders lead armies, each one commanding ten kith'raks, who in turn lead the rest of their forces. Most supreme commanders ride [[5. Mechanics/Bestiary/Dragon/Adult Red Dragon.md|red dragons]] into battle.

## Githyanki

Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

```statblock
"name": "Githyanki Supreme Commander (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"stats":
- !!int "19"
- !!int "17"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "18"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "8"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "9"
  "Perception": !!int "8"
"senses": "passive Perception 18"
"languages": "Gith"
"cr": "14"
"traits":
- "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\nAt\
    \ will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand is invisible)\n\
    \n1/day each: [[5. Mechanics/Spells/Bigbys Hand.md|Bigby's hand]], [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]],\
    \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]], [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]\n\
    \n3/day each: [[5. Mechanics/Spells/Levitate.md|levitate]] (self only), [[5. Mechanics/Spells/Nondetection.md|nondetection]]\
    \ (self only)"
  "name": "spells"
- "desc": "If the githyanki fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The githyanki makes two Silver Greatsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 7|avg (2d6 + 7) slashing damage plus dice: 5d6|avg\
    \ (5d6) psychic damage. On a critical hit against a target in an astral body\
    \ (as with the [[5. Mechanics/Spells/Astral Projection.md|astral projection]] spell),\
    \ the githyanki can cut the silvery cord that tethers the target to its material\
    \ body, instead of dealing damage."
  "name": "Silver Greatsword"
"bonus_actions":
- "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step"
"reactions":
- "desc": "The githyanki adds 5 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"legendary_actions":
- "desc": "The githyanki targets one ally it can see within 30 feet of it. If the\
    \ target can see or hear the githyanki, the target can make one melee weapon attack\
    \ using its reaction, if available, and has advantage on the attack roll."
  "name": "Command Ally"
- "desc": "The githyanki makes one Silver Greatsword attack."
  "name": "Attack (2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/humanoid/token/githyanki-supreme-commander.png"
```
^statblock

## Environment

desert, mountain, urban
