---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/elf
aliases:
  - Drow Elite Warrior (Magic Equipment)
---
# [[5. Mechanics\Bestiary\Humanoid\Drow Elite Warrior Magic Equipment.md|Drow Elite Warrior (Magic Equipment)]]
*Source: Monster Manual p. 128*

```statblock
"name": "Drow Elite Warrior Magic Equipment"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Drow 2 Armor (MM).md|+2 studded leather armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "dexterity": "+7"
  - "constitution": "+5"
  - "wisdom": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+10"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
  - "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
      \ innately cast the following spells, requiring no material components:\n\n\
      At will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]]\n\n1/day\
      \ each: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]],\
      \ [[5. Mechanics/Spells/Levitate.md|levitate]] (self only)"
    "name": "Innate Spellcasting"
  - "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The drow wears [[5. Mechanics/Items/Drow 2 Armor (MM).md|+2 studded leather armor]]\
      \ and carries a [[5. Mechanics/Items/Drow 2 Weapon (MM).md|+2 shortsword]]. These\
      \ items lose their enhancement bonuses permanently if they are exposed to sunlight\
      \ for 1 hour or longer."
    "name": "Special Equipment"
"actions":
  - "desc": "The drow makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d6\
      \ + 6) piercing damage plus 10 (3d6) poison damage."
    "name": "+2 Shortsword"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit:\
      \ 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for\
      \ 1 hour. If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]\
      \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way. The\
      \ target wakes up if it takes damage or if another creature takes an action\
      \ to shake it awake."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "The drow adds 3 to its AC against one melee attack that would hit it.\
      \ To do so, the drow must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "MM"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
