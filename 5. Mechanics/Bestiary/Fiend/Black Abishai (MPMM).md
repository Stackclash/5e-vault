---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/7
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend/devil
aliases:
  - Black Abishai
---
# [[5. Mechanics\Bestiary\Fiend\Black Abishai (MPMM).md|Black Abishai]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 38, Mordenkainen's Tome of Foes p. 160*

Expert assassins and infiltrators, black abishais can weave shadows to mask their presence, allowing them to reach a location where they can deliver a fatal strike to their targets.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

```statblock
"name": "Black Abishai (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "14"
  - !!int "13"
  - !!int "16"
  - !!int "11"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": "+6"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "acid, fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "Magical darkness doesn't impede the abishai's [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The abishai has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The abishai makes one Bite attack and two Scimitar attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
      \ + 3) piercing damage plus 9 (2d8) acid damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) force damage."
    "name": "Scimitar"
  - "desc": "The abishai casts [[5. Mechanics/Spells/Darkness.md|darkness]] at a point\
      \ within 120 feet of it, requiring no spell components or [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]].\
      \ Wisdom is its spellcasting ability for this spell. While the spell persists,\
      \ the abishai can move the area of darkness up to 60 feet as a bonus action.\n"
    "name": "Creeping Darkness (Recharge 6)"
"bonus_actions":
  - "desc": "While in dim light or darkness, the abishai takes the [[/5. Mechanics/Rules/Actions.md#Hide|Hide]]\
      \ action."
    "name": "Shadow Stealth"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/black-abishai-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
