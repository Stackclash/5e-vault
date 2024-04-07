---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/2
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/construct/dwarf
statblock: inline
aliases: ["Duergar Hammerer"]
---
# [Duergar Hammerer](compendium/bestiary/construct/duergar-hammerer-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 112, Mordenkainen's Tome of Foes p. 188*

The duergar hammerer is a digging machine and siege engine, used to dig tunnels and besiege enemy fortifications.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

```statblock
"name": "Duergar Hammerer (MPMM)"
"size": "Medium"
"type": "construct"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "17"
- !!int "7"
- !!int "12"
- !!int "5"
- !!int "5"
- !!int "5"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Dwarvish but can't speak"
"cr": "2"
"traits":
- "desc": "The hammerer deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The hammerer makes one Claw attack and one Hammer attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage."
  "name": "Hammer"
"reactions":
- "desc": "Immediately after a creature within 5 feet of the hammerer hits it with\
    \ an attack roll, the hammerer makes a Hammer attack against that creature."
  "name": "Engine of Pain"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/construct/token/duergar-hammerer-mpmm.webp"
```
^statblock

## Environment

mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```