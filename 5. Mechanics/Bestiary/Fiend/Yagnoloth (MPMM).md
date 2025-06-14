---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: urban
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/11
  - monster/environment/urban
  - monster/size/large
  - monster/type/fiend/yugoloth
aliases:
  - Yagnoloth
---
# [[5. Mechanics\Bestiary\Fiend\Yagnoloth (MPMM).md|Yagnoloth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 268, Mordenkainen's Tome of Foes p. 252*

Anyone who would contract yugoloths for a task usually ends up dealing with a yagnoloth. Cunning negotiators, these strange Fiends handle the writing of contracts for their fellow yugoloths. Once a yagnoloth is hired, it communicates its employer's desires to the yugoloths it commands.

Although they are entrusted with leading lesser yugoloths, yagnoloths ultimately take their orders from arcanaloths and ultroloths. Aside from their superiors, yagnoloths have full authority over and expect obedience from the yugoloths under their command. Yagnoloths follow the dictates of the contracts they negotiate but always include a loophole to escape their obligations if the situation warrants.

A yagnoloth has one arm of human size and one giant-sized arm. During negotiations, the yagnoloth uses its human-sized arm to draft and sign contracts. When a show of force is necessary or when combat is joined, it attacks with its brutally powerful giant arm.

```statblock
"name": "Yagnoloth (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "21"
  - !!int "16"
  - !!int "15"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "dexterity": "+6"
  - "intelligence": "+7"
  - "wisdom": "+6"
  - "charisma": "+8"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+8"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 16"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "11"
"traits":
  - "desc": "The yagnoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The yagnoloth makes one Electrified Touch attack and one Massive Arm\
      \ attack, or it makes one Massive Arm attack and uses Battlefield Cunning, if\
      \ available, or Teleport."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 27\
      \ (6d8) lightning damage."
    "name": "Electrified Touch"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 23\
      \ (3d12 + 4) force damage. If the target is a creature, it must succeed on a\
      \ DC 16 Constitution saving throw or become [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ until the end of the yagnoloth's next turn."
    "name": "Massive Arm"
  - "desc": "Up to two allied yugoloths within 60 feet of the yagnoloth that can hear\
      \ it can use their reactions to make one melee attack each."
    "name": "Battlefield Cunning (Recharge 4-6)"
  - "desc": "The yagnoloth touches one [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ creature within 15 feet of it. The target takes 36 (7d8 + 4) necrotic damage,\
      \ and the yagnoloth gains temporary hit points equal to half the damage dealt.\
      \ The target must succeed on a DC 16 Constitution saving throw, or its hit point\
      \ maximum is reduced by an amount equal to half the necrotic damage taken. This\
      \ reduction lasts until the target finishes a long rest, and the target dies\
      \ if its hit point maximum is reduced to 0."
    "name": "Life Leech"
  - "desc": "The yagnoloth teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The yagnoloth casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
      \nAt will: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]\
      \ (self only), [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\n3/day: [[5. Mechanics/Spells/Lightning Bolt.md|lightning\
      \ bolt]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/yagnoloth-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
