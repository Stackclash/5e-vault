---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/small
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Magma Mephit
ac: 11
hp: 22
hit_dice: 5d6 + 5
cr: 1/2
stats: [
  8,
  12,
  12,
  7,
  10,
  10
]
source: [
  MM,
  PotA,
  SKT,
  ToA,
  WDMM,
  GoS,
  EGW,
  SjA
]
aliases: ["Magma Mephit"]
---
*Source: Monster Manual p. 216, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Spelljammer Academy*  

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Magma Mephit

Composed of earth and fire, magma mephits glow a dull red color as they perspire beads of molten lava. They are slow to comprehend the meaning of others' words and actions.

## Stat Block

```ad-statblock
title: Magma Mephit
![[token/magma-mephit.png#token]]
*Small elemental, Neutral Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 5d6 + 5|text(22)` (5d6 + 5) 
- **Speed** walk 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|12 (+1)|12 (+1)| 7 (-2)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +3
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Vulnerabilities** cold
- **Damage Immunities** fire, poison
- **Condition Immunities** poisoned
- **Languages** Ignan, Terran
- **Challenge** 1/2

## Traits

***Death Burst.*** When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (`dice: 2d6|avg` (`2d6`)) fire damage on a failed save, or half as much damage on a successful one.

***False Appearance.*** While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.

***Innate Spellcasting (1/Day).*** The mephit can innately cast [heat metal](/6. Mechanics/spells/heat-metal.md) (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.

**At will**: [heat metal](/6. Mechanics/spells/heat-metal.md)

## Actions

***Claws.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 1|avg` (`1d4 + 1`) slashing damage plus `dice: 1d4|avg` (`1d4`) fire damage.

***Fire Breath (Recharge 6).*** The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (`dice: 2d6|avg` (`2d6`)) fire damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark