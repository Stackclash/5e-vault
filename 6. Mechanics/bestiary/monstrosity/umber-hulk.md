---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Umber Hulk
ac: 18
hp: 93
hit_dice: 11d10 + 33
cr: '5'
stats: [
  20,
  13,
  16,
  9,
  10,
  10
]
source: [
  MM,
  PotA,
  WDMM,
  IMR,
  IDRotF,
  LoX
]
aliases: ["Umber Hulk"]
---
*Source: Monster Manual p. 292, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Light of Xaryxis*  

An abominable horror from deep beneath the earth, an umber hulk burrows into cave complexes, dungeons, or Underdark settlements in search of food. Those lucky enough to survive an umber hulk attack often remember precious little of the incident, thanks to the umber hulk's mind-scrambling gaze.

## Devious Delvers

Umber hulks can burrow through solid rock, forming new tunnels in their wake. The steel-hard chitin of its body can withstand the cave-ins, tunnel collapses, and rock falls that commonly follow it.

Burrowing into the wall of a cavern or passageway, an umber hulk lies in wait for creatures to pass by on the other side, its hair-like feelers sensing any movement around it. When it explodes out in a shower of earth and rock, its unsuspecting quarry turns to face the oncoming threat-and is entranced by the umber hulk's bewildering eyes, forced to stand helpless as its mandibles snap shut.

## Mind Scrambler

Many survivors of an umber hulk encounter recollect little about the attack, because the monster's confusing gaze scrambles their memory of the event. Those who have fought and killed umber hulks recognize the signs. For other denizens of the Underdark, grisly tales of vanished explorers and wanton destruction speak of an unknown foe. Umber hulks take on supernatural status in these harrowing stories, many of which convey the same warning: once an umber hulk has been spotted, it is already too late to escape it.

> [!quote]- A quote from A survivor's account of an umber hulk attack  
> 
> The wall caved in. That's the last thing I remember.


## Stat Block

```ad-statblock
title: Umber Hulk
![[token/umber-hulk.png#token]]
*Large monstrosity, Chaotic Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 11d10 + 33|text(93)` (11d10 + 33) 
- **Speed** walk 30 ft., burrow 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|13 (+1)|16 (+3)| 9 (-1)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., tremorsense 60 ft., passive Perception 10
- **Languages** Umber Hulk
- **Challenge** 5

## Traits

***Confusing Gaze.*** When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is [incapacitated](/6. Mechanics/rules/conditions.md#incapacitated).

On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a `dice: d8|avg` (`d8`) to determine what it does during that turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action but uses all its movement to move in a random direction. On a 7 or 8, the creature makes one melee attack against a random creature, or it does nothing if no creature is within reach.

Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the umber hulk until the start of its next turn, when it can avert its eyes again. If the creature looks at the umber hulk in the meantime, it must immediately make the save.

***Tunneler.*** The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake.

## Actions

***Multiattack.*** The umber hulk makes three attacks: two with its claws and one with its mandibles.

***Claw.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 5|avg` (`1d8 + 5`) slashing damage.

***Mandibles.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 5|avg` (`2d8 + 5`) slashing damage.
```
^statblock

## Environment

underdark