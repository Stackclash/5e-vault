---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/15
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend/devil
aliases:
  - Green Abishai
---
# [[5. Mechanics\Bestiary\Fiend\Green Abishai (MPMM).md|Green Abishai]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 40, Mordenkainen's Tome of Foes p. 162, Vecna: Eve of Ruin*

Green abishais are adept at discovering secrets and other sensitive information, while their diplomatic skills and their magic ensure they can manipulate even the shrewdest opponents.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

```statblock
"name": "Green Abishai (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "195"
"hit_dice": "26d8 + 78"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "16"
  - !!int "17"
  - !!int "12"
  - !!int "19"
"speed": "30 ft., fly 40 ft."
"saves":
  - "intelligence": "+8"
  - "charisma": "+9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "15"
"traits":
  - "desc": "Magical darkness doesn't impede the abishai's [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The abishai has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The abishai makes two Fiendish Claw attacks, or it makes one Fiendish\
      \ Claw attack and uses Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d8 + 3) force damage. If the target is a creature, it must succeed on a\
      \ DC 16 Constitution saving throw or take 16 (3d10) poison damage and become\
      \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Fiendish Claw"
  - "desc": "The abishai casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 17):\n\
      \nAt will: [[5. Mechanics/Spells/Alter Self.md|alter self]], [[5. Mechanics/Spells/Major Image.md|major image]]\n\
      \n3/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Detect Thoughts.md|detect\
      \ thoughts]], [[5. Mechanics/Spells/Fear.md|fear]]\n\
      \n1/day each: [[5. Mechanics/Spells/Confusion.md|confusion]], [[5. Mechanics/Spells/Dominate Person.md|dominate person]],\
      \ [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/green-abishai-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
