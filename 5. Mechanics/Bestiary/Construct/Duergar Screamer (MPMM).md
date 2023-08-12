---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/construct/dwarf
statblock: inline
---
# Duergar Screamer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 111, Mordenkainen's Tome of Foes p. 190*  

A duergar screamer uses sonic energy to grind rock into dust and to hurl invaders to the ground.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

## Stat Block

```statblock
"name": "Duergar Screamer"
"size": "Medium"
"type": "construct"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "5"
- !!int "5"
- !!int "5"
"speed": "walk 20 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Dwarvish but can't speak"
"cr": "3"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The screamer makes one Drill attack, and it uses Sonic Scream."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 4|avg (1d12 + 4) piercing damage."
  "name": "Drill"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The screamer emits destructive energy in a 15-foot cube. Each creature\
    \ in that area must succeed on a DC 11 Strength saving throw or take dice: 2d6|avg\
    \ (2d6) thunder damage and be knocked [[5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Sonic Scream"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Immediately after a creature within 5 feet of the screamer hits it with\
    \ an attack roll, the screamer makes a Drill attack against that creature."
  "name": "Engine of Pain"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Construct/token/duergar-screamer.png"
```
^statblock

## Environment

mountain, underdark