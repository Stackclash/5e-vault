---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'desert, underdark'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/desert
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/fiend/yugoloth
aliases:
  - Oinoloth
---
# [[5. Mechanics\Bestiary\Fiend\Oinoloth (MPMM).md|Oinoloth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 202, Mordenkainen's Tome of Foes p. 251*

Grim specters of death, oinoloths bring pestilence wherever they go. When armies recognize their awful forms, their mere appearance causes soldiers to break ranks and flee, lest they succumb to one of the awful plagues that oinoloths let loose.

Oinoloths solve thorny problems by killing everyone involved. They are typically hired as a last resort when a siege has gone on too long or an army has proven too strong to overcome. Once summoned, oinoloths stalk the killing field, poisoning the ground and sickening creatures they encounter. Sometimes they might be hired to lift the very plagues they spread, but the price for such work is high, and the effort turns the creatures they save into debilitated wrecks.

```statblock
"name": "Oinoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "17"
  - !!int "18"
  - !!int "17"
  - !!int "16"
  - !!int "19"
"speed": "40 ft."
"saves":
  - "constitution": "+8"
  - "wisdom": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "12"
"traits":
  - "desc": "The oinoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The oinoloth makes two Claw attacks, and it uses Spellcasting or Teleport."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14\
      \ (3d6 + 4) slashing damage plus 22 (4d10) necrotic damage."
    "name": "Claw"
  - "desc": "The oinoloth touches one willing creature within 5 feet of it. The target\
      \ regains all its hit points. In addition, the oinoloth can end one disease\
      \ on the target or remove one of the following conditions from it: [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
      \ or [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]. The target then gains\
      \ 1 level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], and its\
      \ hit point maximum is reduced by 7 (2d6). This reduction can be removed only\
      \ by a [[5. Mechanics/Spells/Wish.md|wish]] spell or by casting [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ on the target three times within the same hour. The target dies if its hit\
      \ point maximum is reduced to 0."
    "name": "Corrupted Healing (Recharge 6)"
  - "desc": "The oinoloth teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The oinoloth casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
      \nAt will: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Hold Monster.md|hold monster]],\
      \ [[5. Mechanics/Spells/Invisibility.md|invisibility]] (self only)\n\n1/day each:\
      \ [[5. Mechanics/Spells/Feeblemind.md|feeblemind]], [[5. Mechanics/Spells/Globe Of Invulnerability.md|globe of invulnerability]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The oinoloth blights the area in a 30-foot-radius sphere centered on\
      \ itself. The blight lasts for 24 hours. While the area is blighted, all normal\
      \ plants there wither and die.\n\nFurthermore, when a creature moves into the\
      \ blighted area or starts its turn there, that creature must make a DC 16 Constitution\
      \ saving throw. On a failed save, the creature takes 14 (4d6) poison damage\
      \ and is [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]. On a successful\
      \ save, the creature is immune to the oinoloth's Bringer of Plagues for the\
      \ next 24 hours.\n\nThe [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ creature can't regain hit points. After every 24 hours that elapse, the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ creature can repeat the saving throw. On a failed save, the creature's hit\
      \ point maximum is reduced by 5 (d10). This reduction lasts until the poison\
      \ ends, and the target dies if its hit point maximum is reduced to 0. The poison\
      \ ends after the creature successfully saves against it three times."
    "name": "Bringer of Plagues (Recharge 5-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/oinoloth-mpmm.webp"
```
^statblock

## Environment

desert, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
