---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/dragon
statblock: true
statblock-link: "#^statblock"
name: Wyvern
ac: 13
hp: 110
hit_dice: 13d10 + 39
cr: '6'
stats: [
  19,
  10,
  16,
  5,
  12,
  6
]
source: [
  MM,
  HotDQ,
  PotA,
  SKT,
  WDMM,
  DIP,
  SLW,
  BGDIA,
  CM,
  JttRC
]
aliases: ["Wyvern"]
---
# Wyvern
*Source: Monster Manual p. 303, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Candlekeep Mysteries, Journeys through the Radiant Citadel*  

Travelers in the wild sometimes look to the skies to see the dark-winged shape of a wyvern carrying its prey. These cousins to the great dragons hunt the same tangled forests and caverns as their kin. Their appearance sends ripples of alarm through the borderlands of civilization.

A wyvern has two scaly legs, leathery wings, and a sinewy tail topped with its most potent weapon: a poison stinger. The poison in a wyvern's stinger can kill a creature in seconds. Extremely potent, wyvern poison burns through its victim's bloodstream, disintegrating veins and arteries on its way to the heart. As deadly as wyverns can be, however, hunters and adventurers often track them to claim the venom, which is used in alchemical compounds and to coat weapons.

## Aerial Hunters

A wyvern doesn't fight on the ground unless it can't reach its prey by any other means, or if it has been fooled into a position from which aerial combat isn't an option. If forced into a confrontation on the ground, a wyvern crouches low, keeping its stinger poised above its head as it hisses and growls.

## Aggressive and Reckless

A wyvern intent on its prey backs down only if it sustains serious injury, or if its prey eludes it long enough for another easier potential meal to wander along. If it corners a fleeing creature in an enclosure too small to enter, a wyvern guards where the quarry hides, lashing with its stinger whenever opportunity allows.

Although they possess more cunning than ordinary beasts, wyverns lack the intelligence of their draconic cousins. As such, creatures that maintain their composure as a wyvern hunts them from the air can often elude or trick it. Wyverns follow a direct path to their prey, with no thought given to possible ambushes.

## Tamed Wyverns

A wyvern can be tamed for use as a mount, but doing so presents a difficult and deadly challenge. Raising one as a hatchling offers the best results. However, a wyvern's violent temperament has cost the life of many a would-be master.

## Stat Block

```ad-statblock
title: Wyvern
![[/6. Mechanics/Bestiary/Dragon/Token/wyvern.png#token]]
*Large dragon, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 13d10 + 39|text(110)` (13d10 + 39) 
- **Speed** walk 20 ft., fly 80 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|10 (+0)|16 (+3)| 5 (-3)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Languages** —
- **Challenge** 6

## Actions

***Multiattack.*** The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one creature. Hit: `dice: 2d6 + 4\|avg` (`2d6 + 4`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4\|avg` (`2d8 + 4`) slashing damage.

***Stinger.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one creature. Hit: `dice: 2d6 + 4\|avg` (`2d6 + 4`) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (`dice: 7d6\|avg` (`7d6`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

mountain, hill