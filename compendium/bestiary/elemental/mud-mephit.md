---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/swamp
- monster/size/small
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Mud Mephit
ac: 11
hp: 27
hit_dice: 6d6 + 6
cr: 1/4
stats: [
  8,
  12,
  12,
  9,
  11,
  7
]
source: [
  MM,
  PotA,
  ToA,
  WDMM,
  GoS,
  WBtW,
  JttRC
]
aliases: ["Mud Mephit"]
---
# Mud Mephit
*Source: Monster Manual p. 216, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*  

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Mud Mephit

Mud mephits are slow, unctuous creatures of earth and water. They drone their complaints to all who will listen, and beg incessantly for attention and treasure.

## Stat Block

```ad-statblock
title: Mud Mephit
![](/compendium/bestiary/elemental/token/mud-mephit.png#token)
*Small elemental, Neutral Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 6d6 + 6|text(27)` (6d6 + 6) 
- **Speed** walk 20 ft., fly 20 ft., swim 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|12 (+1)|12 (+1)| 9 (-1)|11 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +3
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Aquan, Terran
- **Challenge** 1/4

## Traits

***Death Burst.*** When the mephit dies, it explodes in a burst of sticky mud. Each Medium or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving throw or be [restrained](compendium/rules/conditions.md#restrained) until the end of the creature's next turn.

***False Appearance.*** While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud.

## Actions

***Fists.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 1|avg` (`1d6 + 1`) bludgeoning damage.

***Mud Breath (Recharge 6).*** The mephit belches viscid mud onto one creature within 5 feet of it. If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving throw or be [restrained](compendium/rules/conditions.md#restrained) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

swamp