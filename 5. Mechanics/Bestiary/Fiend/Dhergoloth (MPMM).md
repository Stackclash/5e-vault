---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/7
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/fiend/yugoloth
aliases:
  - Dhergoloth
---
# [[5. Mechanics\Bestiary\Fiend\Dhergoloth (MPMM).md|Dhergoloth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 94, Mordenkainen's Tome of Foes p. 248*

> [!quote] A quote from Mordenkainen  
> 
> A dhergoloth's head doesn't turn along with its furiously spinning torso, and its torso can spin a different direction from its dancing legs.
> 
> I'd like to vivisect one a some point to find out how this can be.

A kind of yugoloth, dhergoloths rush into battle like whirlwinds of destruction, lashing out with the five sets of claws that extend from their squat, barrel-shaped bodies. They take contracts to put down uprisings, clear out rabble, and eliminate scouts and skirmishers, and they revel in the butchery they create, their gleeful laughter rising above their victims' screams.

Since dhergoloths are little more than brutes, employers must use caution when instructing them. They can handle simple orders that don't take a lot of time to resolve. When given anything complex to do, however, they either forget what they're told or don't listen in the first place, and then bungle the task that was set for them.

```statblock
"name": "Dhergoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "19"
  - !!int "7"
  - !!int "10"
  - !!int "9"
"speed": "30 ft."
"saves":
  - "strength": "+6"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "7"
"traits":
  - "desc": "The dhergoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The dhergoloth makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d8 + 3) force damage."
    "name": "Claw"
  - "desc": "The dhergoloth moves up to its speed in a straight line and targets each\
      \ creature within 5 feet of it during its movement. Each target must succeed\
      \ on a DC 14 Dexterity saving throw or take 22 (3d12 + 3) force damage."
    "name": "Flailing Claws (Recharge 5-6)"
  - "desc": "The dhergoloth teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The dhergoloth casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 10):\n\
      \nAt will: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Fear.md|fear]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/dhergoloth-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
