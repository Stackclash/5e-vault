---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/forest
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Banshee
ac: 12
hp: 58
hit_dice: 13d8
cr: '4'
stats: [
  1,
  14,
  10,
  12,
  11,
  17
]
source: [
  MM,
  CoS,
  WDMM,
  GoS,
  DIP,
  BGDIA,
  EGW,
  TCE,
  WBtW,
  JttRC
]
aliases: ["Banshee"]
---
*Source: Monster Manual p. 23, Curse of Strahd, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel*  

When night falls, unlucky travelers hear the faint cries of the forlorn dead. This woeful spirit is a banshee, a spiteful creature formed from the spirit of a female elf. Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A banshee's face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.

## Divine Wrath

Banshees are the undead remnants of elves who, blessed with great beauty, failed to use their gift to bring joy to the world. Instead, they used their beauty to corrupt and control others. Elves afflicted by the banshee's curse experience no gladness, feeling only distress in the presence of the living. As the curse takes its toll, their minds and bodies decay, until death completes their transformation into undead monsters.

## Sorrow Bound

A banshee becomes forever bound to the place of its demise, unable to venture more than five miles from there. It is forced to relive every moment of its life with perfect recall, yet always refuses to accept responsibility for its doom.

## Beauty Hoarders

The vanity that inspired the banshee's cursed creation persists in undeath. These creatures covet beautiful objects: fine jewelery, paintings, statues, and other objects of art. At the same time, a banshee abhors any mirrored surface, for it can't bear to see the horror of its own existence. A single glimpse of itself is enough to send a banshee into a rage.

## Undead Nature

A banshee doesn't require air, food, drink, or sleep.

## Stat Block

```ad-statblock
title: Banshee
![[token/banshee.png#token]]
*Medium undead, Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 13d8|text(58)` (13d8) 
- **Speed** walk 0 ft., fly 40 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 (-5)|14 (+2)|10 (+0)|12 (+1)|11 (+0)|17 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +2, Charisma +5
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** acid; fire; lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** Common, Elvish
- **Challenge** 4

## Traits

***Detect Life.*** The banshee can magically sense the presence of living creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations.

***Incorporeal Movement.*** The banshee can move through other creatures and objects as if they were difficult terrain. She takes `dice: 1d10|avg` (`1d10`) force damage if she ends her turn inside an object.

## Actions

***Corrupting Touch.*** *Melee Spell Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 3d6 + 2|avg` (`3d6 + 2`) necrotic damage.

***Horrifying Visage.*** Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be [frightened](/6. Mechanics/rules/conditions.md#frightened) for 1 minute. A [frightened](/6. Mechanics/rules/conditions.md#frightened) target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours.

***Wail (1/Day).*** The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes `dice: 3d6|avg` (`3d6`) psychic damage.
```
^statblock

## Environment

forest, coastal