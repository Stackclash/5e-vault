---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/fiend
statblock: true
statblock-link: "#^statblock"
name: Hell Hound
ac: 15
hp: 45
hit_dice: 7d8 + 14
cr: '3'
stats: [
  17,
  12,
  14,
  6,
  13,
  6
]
source: [
  MM,
  CoS,
  PotA,
  SKT,
  TftYP,
  ToA,
  WDH,
  WDMM,
  SLW,
  BGDIA,
  IMR,
  EGW,
  MOT,
  CM,
  KftGV
]
aliases: ["Hell Hound"]
---
# Hell Hound
*Source: Monster Manual p. 182, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries, Keys from the Golden Vault*  

Monstrous, fire-breathing fiends that take the form of powerful dogs, hell hounds are found on the battlefields of Acheron and throughout the Lower Planes. On the Material Plane, hell hounds are most commonly seen in service to devils, fire giants, and other evil creatures that use them as guard animals and companions.

## Burning Hunger

Hell hounds hunt in packs, feeding on any creature that appears edible. They avoid potentially dangerous foes in favor of targeting the weakest prey with their savage bite and fiery breath, demonstrating a relentless determination as they pursue that prey to the bitter end.

When hell hounds feed, the flesh they consume stokes the infernal fires that burn within them. When a hell hound dies, that fire consumes the creature's remains in a billowing eruption of smoke and blazing embers, leaving nothing behind but scorched tufts of black fur.

## Evil to the Core

Hell hounds are smarter than mundane beasts, and their lawful nature makes them good at following orders. However, a hell hound's evil disposition means that the creature can't be trained to be anything other than a ruthless killer. If a hell hound isn't allowed to indulge its malevolent hunger, it quickly abandons or turns against its master.

## Stat Block

```ad-statblock
title: Hell Hound
![[/6. Mechanics/Bestiary/Fiend/Token/hell-hound.png#token]]
*Medium fiend, Lawful Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 7d8 + 14|text(45)` (7d8 + 14) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|12 (+1)|14 (+2)| 6 (-2)|13 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Immunities** fire
- **Languages** understands Infernal but can't speak it
- **Challenge** 3

## Traits

***Keen Hearing and Smell.*** The hound has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or smell.

***Pack Tactics.*** The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3\|avg` (`1d8 + 3`) piercing damage plus `dice: 2d6\|avg` (`2d6`) fire damage.

***Fire Breath (Recharge 5-6).*** The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (`dice: 6d6\|avg` (`6d6`)) fire damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark, mountain