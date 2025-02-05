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
aliases: ["Drow Elite Warrior (Magic Equipment)"]
---
# [Drow Elite Warrior (Magic Equipment)](compendium\bestiary\humanoid/drow-elite-warrior-magic-equipment.md)
*Source: Monster Manual p. 128*

```statblock
"name": "Drow Elite Warrior (Magic Equipment)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "[+2 studded leather armor](compendium/items/drow-2-armor.md), [shield](compendium/items/shield.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "13"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](compendium/spells/darkness.md), [faerie fire](compendium/spells/faerie-fire.md),\
    \ [levitate](compendium/spells/levitate.md) (self only)"
  "name": "Innate Spellcasting"
- "desc": "The drow has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow wears [+2 studded leather armor](compendium/items/drow-2-armor.md)\
    \ and carries a [+2 shortsword](compendium/items/drow-2-weapon.md). These items\
    \ lose their enhancement bonuses permanently if they are exposed to sunlight for\
    \ 1 hour or longer."
  "name": "Special Equipment"
"actions":
- "desc": "The drow makes two shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d6\
    \ + 6) piercing damage plus 10 (3d6) poison damage."
  "name": "+2 Shortsword"
- "desc": "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit:\
    \ 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/compendium/rules/conditions.md#Poisoned) for\
    \ 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](/compendium/rules/conditions.md#Unconscious)\
    \ while [poisoned](/compendium/rules/conditions.md#Poisoned) in this way. The\
    \ target wakes up if it takes damage or if another creature takes an action to\
    \ shake it awake."
  "name": "Hand Crossbow"
"reactions":
- "desc": "The drow adds 3 to its AC against one melee attack that would hit it. To\
    \ do so, the drow must see the attacker and be wielding a melee weapon."
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