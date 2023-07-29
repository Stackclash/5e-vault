---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Wight
ac: 14
hp: 45
hit_dice: 6d8 + 18
cr: '3'
stats: [
  15,
  14,
  16,
  10,
  13,
  15
]
source: [
  MM,
  CoS,
  PotA,
  RoT,
  SKT,
  TftYP,
  ToA,
  WDMM,
  GoS,
  DIP,
  SDW,
  BGDIA,
  EGW,
  IDRotF,
  CM,
  DSotDQ
]
aliases: ["Wight"]
---
# Wight
*Source: Monster Manual p. 300, Curse of Strahd, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Dragonlance: Shadow of the Dragon Queen*  

```ad-statblock
title: Wight
![](/compendium/bestiary/undead/token/wight.png#token)
*Medium undead, Neutral Evil*

- **Armor Class** 14 (studded leather)
- **Hit Points** `dice: 6d8 + 18|text(45)` (6d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|16 (+3)|10 (+0)|13 (+1)|15 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 13
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, poisoned
- **Languages** the languages it knew in life
- **Challenge** 3

## Traits

***Sunlight Sensitivity.*** While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

## Actions

***Multiattack.*** The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.

***Life Drain.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.

A humanoid slain by this attack rises 24 hours later as a [zombie](/compendium/bestiary/undead/zombie.md) under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) slashing damage, or 7 (`dice: 1d10 + 2|avg` (`1d10 + 2`)) slashing damage if used with two hands.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

underdark, swamp, urban, desert