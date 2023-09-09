---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Drow House Captain"]
---
# Drow House Captain
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 101*  

> [!quote]- A quote from Tasha  
> 
> House captains will do anything to protect their family—whether that's their birth house or their platoon of scrappy rebels. I'd do anything for my (sometimes infuriating) mother and for my chosen family, so I admire their dedication.

A drow house captain leads the troops of an Underdark faction, whether defending a stronghold or leading forces against enemies. These officers make extensive study of strategy and tactics to become effective leaders in battle.

Among Lolth's devotees in the city of Menzoberranzan in the Forgotten Realms, each noble house entrusts the leadership of its military forces to a house captain, who is typically the first or second son of a drow matron mother. Elsewhere drow house captains fight in the war against Lolth, often allying with duergar and others who also wish to rid their subterranean world of that god's malevolence.

```statblock
"name": "Drow House Captain"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "12"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Dexterity": "+8"
  "Wisdom": "+6"
  "Constitution": "+6"
"skillsaves":
  "Stealth": "+8"
  "Perception": "+6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "9"
"traits":
- "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]]\n\n1/day each: [[5. Mechanics/Spells/Darkness.md|darkness]],\
    \ [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]], [[5. Mechanics/Spells/Levitate.md|levitate]]\
    \ (self only)"
  "name": "spells"
- "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|")"]] checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The drow makes two Scimitar attacks and one Whip or Hand Crossbow attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: 7 (dice: 1d6 + 4|avg (1d6 + 4)) slashing damage plus 14 (dice: 4d6|avg\
    \ (4d6)) poison damage."
  "name": "Scimitar"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: 6 (dice: 1d4 + 4|avg (1d4 + 4)) slashing damage."
  "name": "Whip"
- "desc": "Ranged Weapon Attack: dice: d20+8 (+8 to hit), range 30/120 ft., one\
    \ target. Hit: 7 (dice: 1d6 + 4|avg (1d6 + 4)) piercing damage, and the\
    \ target must succeed on a DC 13 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour. If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way. The\
    \ target regains consciousness if it takes damage or if another creature takes\
    \ an action to shake it."
  "name": "Hand Crossbow"
"bonus_actions":
- "desc": "Choose one creature within 30 feet of the drow that the drow can see. If\
    \ the chosen creature can see or hear the drow, that creature can use its reaction\
    \ to make one melee attack or to take the [[/5. Mechanics/Rules/Actions.md#Dodge|Dodge]]\
    \ or [[/5. Mechanics/Rules/Actions.md#Hide|Hide]] action."
  "name": "Battle Command"
"reactions":
- "desc": "The drow adds 3 to its AC against one melee attack roll that would hit\
    \ it. To do so, the drow must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/humanoid/token/drow-house-captain.png"
```
^statblock

## Environment

underdark