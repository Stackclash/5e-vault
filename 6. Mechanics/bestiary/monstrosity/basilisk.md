---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/mountain
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Basilisk
ac: 15
hp: 52
hit_dice: 8d8 + 16
cr: '3'
stats: [
  16,
  8,
  15,
  2,
  8,
  7
]
source: [
  MM,
  ToA,
  WDMM,
  BGDIA,
  MOT,
  IDRotF
]
aliases: ["Basilisk"]
---
*Source: Monster Manual p. 24, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden*  

Travelers sometimes find objects that look like pieces of remarkably lifelike stone carvings of wildlife. Missing parts appear to have been bitten off. Seasoned explorers regard such relics as warnings, knowing that the basilisk that created them is likely to be nearby.

## Adaptable Predators

Basilisks thrive in arid, temperate, or tropical climates. They lair in caves or other sheltered sites. Most often, basilisks are encountered underground.

A basilisk born and raised in captivity can be domesticated and trained. Such a trained basilisk knows how to avoid meeting the eyes of those its master wishes to protect from its gaze, but it makes a daunting guardian beast. Because of this use, basilisk eggs are highly prized.

## Gaze of Stone

Basilisks are ponderous for hunting creatures, but they needn't chase prey. Meeting a basilisk's supernatural gaze can be enough to affect a rapid transformation, transforming a victim into porous stone. Basilisks, with their strong jaws, are able to consume the stone. The stone returns to organic form in the basilisk's gullet.

Some alchemists are said to know how to process the basilisk's gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return [petrified](/6. Mechanics/rules/conditions.md#petrified) creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the [petrified](/6. Mechanics/rules/conditions.md#petrified) creature, such as its head, is detached.

> [!quote]- A quote from X the Mystic's 4th rule of dungeon survival  
> 
> No one carves statues of frightened warriors. If you see one, keep your eyes closed and your ears open.


## Stat Block

```ad-statblock
title: Basilisk
![[token/basilisk.png#token]]
*Medium monstrosity, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 8d8 + 16|text(52)` (8d8 + 16) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)| 8 (-1)|15 (+2)| 2 (-4)| 8 (-1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 9
- **Languages** —
- **Challenge** 3

## Traits

***Petrifying Gaze.*** If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't [incapacitated](/6. Mechanics/rules/conditions.md#incapacitated). On a failed save, the creature magically begins to turn to stone and is [restrained](/6. Mechanics/rules/conditions.md#restrained). It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is [petrified](/6. Mechanics/rules/conditions.md#petrified) until freed by the  [greater restoration](/6. Mechanics/spells/greater-restoration.md) spell or other magic.

A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.

If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) piercing damage plus `dice: 2d6|avg` (`2d6`) poison damage.
```
^statblock

## Environment

mountain