---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/small
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Dust Mephit
ac: 12
hp: 17
hit_dice: 5d6
cr: 1/2
stats: [
  5,
  14,
  10,
  9,
  11,
  10
]
source: [
  MM,
  PotA,
  ToA
]
aliases: ["Dust Mephit"]
---
# Dust Mephit
*Source: Monster Manual p. 215, Princes of the Apocalypse, Tomb of Annihilation*  

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Dust Mephit

Composed of earth and air, dust mephits are drawn to catacombs and find death morbidly fascinating.

## Stat Block

```ad-statblock
title: Dust Mephit
![[/6. Mechanics/Bestiary/Elemental/Token/dust-mephit.png#token]]
*Small elemental, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 5d6|text(17)` (5d6) 
- **Speed** walk 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 5 (-3)|14 (+2)|10 (+0)| 9 (-1)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Vulnerabilities** fire
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Auran, Terran
- **Challenge** 1/2

## Traits

***Death Burst.*** When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] for 1 minute. A [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.

***Innate Spellcasting (1/Day).*** The mephit can innately cast [[/6. Mechanics/Spells/sleep.md\|sleep]], requiring no material components. Its innate spellcasting ability is Charisma.

**At will**: [[/6. Mechanics/Spells/sleep.md\|sleep]]

## Actions

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 2\|avg` (`1d4 + 2`) slashing damage.

***Blinding Breath (Recharge 6).*** The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

desert