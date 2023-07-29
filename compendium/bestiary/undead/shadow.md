---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Shadow
ac: 12
hp: 16
hit_dice: 3d8 + 3
cr: 1/2
stats: [
  6,
  14,
  13,
  6,
  10,
  8
]
source: [
  MM,
  CoS,
  PotA,
  TftYP,
  WDH,
  WDMM,
  GoS,
  BGDIA,
  IMR,
  MOT,
  IDRotF,
  TCE,
  CM,
  WBtW,
  SjA
]
aliases: ["Shadow"]
---
# Shadow
*Source: Monster Manual p. 269, Curse of Strahd, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Spelljammer Academy*  

Shadows are undead that resemble dark exaggerations of humanoid shadows.

## Dark Disposition

From the darkness, the shadow reaches out to feed on living creatures' vitality. They can consume any living creature, but they are especially drawn to creatures untainted by evil. A creature that lives a life of goodness and piety consigns its basest impulses and strongest temptations to the darkness where the shadows hunger. As a shadow drains its victim's strength and physical form, the victim's shadow darkens and begins to move of its own volition. In death, the creature's shadow breaks free, becoming a new undead shadow hungry for more life to consume.

If a creature from which a shadow has been created somehow returns to life, its undead shadow senses the return. The shadow might seek its "parent" to vex or slay. Whether the shadow pursues its living counterpart, the creature that birthed the shadow no longer casts one until the monster is destroyed.

## Undead Nature

A shadow doesn't require air, food, drink, or sleep

## Stat Block

```ad-statblock
title: Shadow
![](/compendium/bestiary/undead/token/shadow.png#token)
*Medium undead, Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 3d8 + 3|text(16)` (3d8 + 3) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|13 (+1)| 6 (-2)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +4
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Vulnerabilities** radiant
- **Damage Resistances** acid; cold; fire; lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** necrotic, poison
- **Condition Immunities** exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** —
- **Challenge** 1/2

## Traits

***Amorphous.*** The shadow can move through a space as narrow as 1 inch wide without squeezing.

***Shadow Stealth.*** While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6.

***Sunlight Weakness.*** While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.

## Actions

***Strength Drain.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 2d6 + 2|avg` (`2d6 + 2`) necrotic damage, and the target's Strength score is reduced by `dice: 1d4|avg` (`1d4`). The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.

If a non-evil humanoid dies from this attack, a new shadow rises from the corpse `dice: 1d4|avg` (`1d4`) hours later.
```
^statblock

## Environment

underdark, urban