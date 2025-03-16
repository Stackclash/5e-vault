---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/elf
aliases:
  - Drow (Magic Equipment)
---
# [[5. Mechanics/Bestiary/Humanoid/Drow Magic Equipment.md|Drow (Magic Equipment)]]
*Source: Monster Manual p. 128. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Drow Magic Equipment"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Drow 1 Armor.md|+1 chain shirt]]"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Elvish, Undercommon"
"cr": "1/4"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 11). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]]\n\n1/day each:\
    \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]]"
  "name": "Innate Spellcasting"
- "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow wears a [[5. Mechanics/Items/Drow 1 Armor.md|+1 chain shirt]] and\
    \ carries a [[5. Mechanics/Items/Drow 1 Weapon.md|+1 shortsword]]. These items lose\
    \ their enhancement bonuses permanently if they are exposed to sunlight for 1\
    \ hour or longer."
  "name": "Special Equipment"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "+1 Shortsword"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for\
    \ 1 hour. If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way. The\
    \ target wakes up if it takes damage or if another creature takes an action to\
    \ shake it awake."
  "name": "Hand Crossbow"
"source":
- "MM"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
