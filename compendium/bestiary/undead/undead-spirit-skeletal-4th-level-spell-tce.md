---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Undead Spirit (Skeletal, 4th-Level Spell)
ac: 15
hp: 30
stats: [
  12,
  16,
  15,
  4,
  10,
  9
]
source: [
  TCE
]
aliases: ["Undead Spirit (Skeletal, 4th-Level Spell)"]
---
# Undead Spirit (Skeletal, 4th-Level Spell)
*Source: Tasha's Cauldron of Everything p. 114*  

```ad-statblock
title: Undead Spirit (Skeletal, 4th-Level Spell)
![](/compendium/bestiary/undead/token/undead-spirit.png#token)
*Medium undead, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** 30  (20 + 10 for each spell level above 3rd)
- **Speed** walk 30 ft., fly 40 ft. (ghostly only; hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|16 (+3)|15 (+2)| 4 (-3)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** necrotic, poison
- **Condition Immunities** exhaustion, frightened, paralyzed, poisoned
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Incorporeal Passage (Ghostly Only).*** The spirit can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes `dice: 1d10|avg` (`1d10`) force damage for every 5 feet traveled.

***Festering Aura (Putrid Only).*** Any creature, other than you, that starts its turn within 5 feet of the spirit must succeed on a Constitution saving throw against your spell save DC or be [poisoned](compendium/rules/conditions.md#poisoned) until the start of its next turn.

## Actions

***Multiattack.*** The spirit makes a number of attacks equal to half this spell's level (rounded down).

***Deathly Touch (Ghostly Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one creature. Hit: `1d8 + 3 + summonSpellLevel` necrotic damage, and the creature must succeed on a Wisdom saving throw against your spell save DC or be [frightened](compendium/rules/conditions.md#frightened) of the undead until the end of the target's next turn.

***Grave Bolt (Skeletal Only).*** *Ranged Spell Attack:* the summoner's spell attack modifier to hit, range 150 ft., one target. Hit: `2d4 + 3 + summonSpellLevel` necrotic damage.

***Rotting Claw (Putrid Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d6 + 3 + summonSpellLevel` slashing damage. If the target is [poisoned](compendium/rules/conditions.md#poisoned), it must succeed on a Constitution saving throw against your spell save DC or be [paralyzed](compendium/rules/conditions.md#paralyzed) until the end of its next turn.
```
^statblock