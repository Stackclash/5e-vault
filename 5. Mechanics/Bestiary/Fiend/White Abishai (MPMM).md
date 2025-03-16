---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/6
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend/devil
aliases:
  - White Abishai
---
# [[5. Mechanics/Bestiary/Fiend/White Abishai (MPMM).md|White Abishai]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 41, Mordenkainen's Tome of Foes p. 163*

White abishais fight with a reckless fury, making them ideally suited for bolstering the ranks of Tiamat's armies. White abishais fight without fear, becoming whirlwinds of destruction on the battlefield.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

```statblock
"name": "White Abishai (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d8 + 32"
"stats":
- !!int "16"
- !!int "11"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "13"
"speed": "30 ft., fly 40 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "6"
"traits":
- "desc": "Magical darkness doesn't impede the abishai's [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]]."
  "name": "Devil's Sight"
- "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "At the start of its turn, the abishai can gain advantage on all melee weapon\
    \ attack rolls during that turn, but attack rolls against it have advantage until\
    \ the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "The abishai makes one Bite attack, one Claw attack, and one Longsword attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 3 (1d6) cold damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) force damage, or 8 (1d10 + 3) force damage if used with two hands."
  "name": "Longsword"
"reactions":
- "desc": "In response to taking damage, the abishai makes one Bite attack against\
    \ a random creature within 5 feet of it. If no creature is within reach, the abishai\
    \ moves up to half its speed toward an enemy it can see, without provoking [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity\
    \ attacks]]."
  "name": "Vicious Reprisal"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/white-abishai-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
