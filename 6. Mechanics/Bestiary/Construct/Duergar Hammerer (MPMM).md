---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/construct/dwarf
statblock: true
statblock-link: "#^statblock"
"name": "Duergar Hammerer"
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
"speed": "walk 20 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Dwarvish but can't speak"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hammerer deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The hammerer makes one Claw attack and one Hammer attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage."
  "name": "Hammer"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Immediately after a creature within 5 feet of the hammerer hits it with\
    \ an attack roll, the hammerer makes a Hammer attack against that creature."
  "name": "Engine of Pain"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/construct/token/duergar-hammerer.png"
aliases: ["Duergar Hammerer"]
---
# Duergar Hammerer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 112, Mordenkainen's Tome of Foes p. 188*  

The duergar hammerer is a digging machine and siege engine, used to dig tunnels and besiege enemy fortifications.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

## Stat Block

```ad-statblock
title: Duergar Hammerer
![[/6. Mechanics/Bestiary/Construct/Token/duergar-hammerer.png#token]]
*Medium construct(dwarf), Any alignment*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 6d8 + 6|text(33)` (6d8 + 6) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)| 7 (-2)|12 (+1)| 5 (-3)| 5 (-3)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 7
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands Dwarvish but can't speak
- **Challenge** 2

## Traits

***Siege Monster.*** The hammerer deals double damage to objects and structures.

## Actions

***Multiattack.*** The hammerer makes one Claw attack and one Hammer attack.

***Claw.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) piercing damage.

***Hammer.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3` (`2d6 + 3`) bludgeoning damage.

## Reactions

***Engine of Pain.*** Immediately after a creature within 5 feet of the hammerer hits it with an attack roll, the hammerer makes a Hammer attack against that creature.
```
^statblock

## Environment

mountain, underdark