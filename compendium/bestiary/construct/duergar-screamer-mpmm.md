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
name: Duergar Screamer
ac: 15
hp: 38
hit_dice: 7d8 + 7
cr: '3'
stats: [
  18,
  7,
  12,
  5,
  5,
  5
]
source: [
  MPMM,
  MTF
]
aliases: ["Duergar Screamer"]
---
# Duergar Screamer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 111, Mordenkainen's Tome of Foes p. 190*  

A duergar screamer uses sonic energy to grind rock into dust and to hurl invaders to the ground.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

## Stat Block

```ad-statblock
title: Duergar Screamer
![](/compendium/bestiary/construct/token/duergar-screamer.png#token)
*Medium construct(dwarf), Any alignment*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 7d8 + 7|text(38)` (7d8 + 7) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)| 7 (-2)|12 (+1)| 5 (-3)| 5 (-3)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 7
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands Dwarvish but can't speak
- **Challenge** 3

## Actions

***Multiattack.*** The screamer makes one Drill attack, and it uses Sonic Scream.

***Drill.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d12 + 4|avg` (`1d12 + 4`) piercing damage.

***Sonic Scream.*** The screamer emits destructive energy in a 15-foot cube. Each creature in that area must succeed on a DC 11 Strength saving throw or take `dice: 2d6|avg` (`2d6`) thunder damage and be knocked [prone](compendium/rules/conditions.md#prone).

## Reactions

***Engine of Pain.*** Immediately after a creature within 5 feet of the screamer hits it with an attack roll, the screamer makes a Drill attack against that creature.
```
^statblock

## Environment

mountain, underdark