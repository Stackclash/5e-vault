---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Tortle Druid"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "11"
- !!int "15"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "2"
  "Animal Handling": !!int "4"
  "Survival": !!int "4"
"senses": "passive Perception 12"
"languages": "Aquan, Common"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tortle casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [[/6. Mechanics/Spells/druidcraft.md\|druidcraft]],\
    \ [[/6. Mechanics/Spells/guidance.md\|guidance]]\n\n2/day each: [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]],\
    \ [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/speak-with-animals.md\|speak with animals]],\
    \ [[/6. Mechanics/Spells/thunderwave.md\|thunderwave]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tortle can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tortle makes four Claw attacks or two Nature's Wrath attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 90 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) damage of a type chosen by the tortle:\
    \ cold, fire, lightning, or thunder."
  "name": "Nature's Wrath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus\
    \ to AC and has advantage on Strength and Constitution saving throws. While in\
    \ its shell, the tortle is [[6. Mechanics/Rules/conditions.md#prone\|prone]], its\
    \ speed is 0 and can't increase, it has disadvantage on Dexterity saving throws,\
    \ it can't take reactions, and the only action it can take is a bonus action to\
    \ emerge."
  "name": "Shell Defense"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/tortle-druid.png"
aliases: ["Tortle Druid"]
---
# Tortle Druid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 244, Mordenkainen's Tome of Foes p. 242*  

Many tortles view the world as a place of wonder. They live for the chance to hear a soft wind blowing through trees, to watch a frog croaking on a lily pad, or to stand in a crowded marketplace. A tortle druid savors such things more than most, channeling the natural magic of the world around them.

## Tortles

Tortles are omnivorous, turtle-like bipeds with shells that cover most of their bodies. Because they carry their homes on their backs, tortles feel little need to stay put for long.

Most tortles like to see how other folk live. A tortle can spend decades away from their native land without feeling homesick, often viewing their current companions as their family.

## Stat Block

```ad-statblock
title: Tortle Druid
![[/6. Mechanics/Bestiary/Humanoid/Token/tortle-druid.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 6d8 + 6|text(33)` (6d8 + 6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|10 (+0)|12 (+1)|11 (+0)|15 (+2)|12 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Animal Handling +4, Nature +2, Survival +4
- **Senses** passive Perception 12
- **Languages** Aquan, Common
- **Challenge** 2

## Traits

***Hold Breath.*** The tortle can hold its breath for 1 hour.

***Spellcasting.*** The tortle casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 12):

**At will**: [[/6. Mechanics/Spells/druidcraft.md\|druidcraft]], [[/6. Mechanics/Spells/guidance.md\|guidance]]

**2/day each**: [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]], [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/speak-with-animals.md\|speak with animals]], [[/6. Mechanics/Spells/thunderwave.md\|thunderwave]]

## Actions

***Multiattack.*** The tortle makes four Claw attacks or two Nature's Wrath attacks.

***Claw.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) slashing damage.

***Nature's Wrath.*** *Ranged Spell Attack:* `dice: d20+4` (+4 to hit), range 90 ft., one target. Hit: `dice: 2d6 + 2` (`2d6 + 2`) damage of a type chosen by the tortle: cold, fire, lightning, or thunder.

***Shell Defense.*** The tortle withdraws into its shell. Until it emerges, it gains a +4 bonus to AC and has advantage on Strength and Constitution saving throws. While in its shell, the tortle is [[6. Mechanics/Rules/conditions.md#prone\|prone]], its speed is 0 and can't increase, it has disadvantage on Dexterity saving throws, it can't take reactions, and the only action it can take is a bonus action to emerge.
```
^statblock

## Environment

coastal