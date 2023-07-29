---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/huge
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Behir
ac: 17
hp: 168
hit_dice: 16d12 + 64
cr: '11'
stats: [
  23,
  16,
  18,
  7,
  14,
  12
]
source: [
  MM,
  TftYP,
  EGW,
  CM,
  JttRC,
  KftGV
]
aliases: ["Behir"]
---
# Behir
*Source: Monster Manual p. 25, Tales from the Yawning Portal, Explorer's Guide to Wildemount, Candlekeep Mysteries, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

The serpentine behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.

A behir's monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.

## Cavern Predators

Behirs lair in places inaccessible to other creatures, favoring locations where would-be intruders must make a harrowing climb to reach them. Deep pits, high caves in cliff walls, and caverns reached only by narrow, twisting tunnels are prime sites for a behir ambush. A behir's dozen legs allow it to scramble through its lair site with ease. When not climbing, it moves even faster by folding its legs beside its body and slithering like a snake.

Behirs swallow their prey whole, after which they enter a period of dormancy while they digest. While dormant, a behir chooses a hiding place where intruders in its lair might overlook it.

## Foes of the Dragons

In times long forgotten, giants and dragons engaged in seemingly endless war. Storm giants created the first behirs as weapons against the dragons, and behirs retain a natural hatred for dragonkind.

A behir never makes its lair in an area it knows to be inhabited by a dragon. If a dragon attempts to establish a lair within a few dozen miles of a behir's lair, the behir is compelled to kill the dragon or drive it off. Only if the dragon proves too powerful to fight does a behir back down, seeking out a new lair site a great distance away.

> [!quote]- A quote from Lludd the behir, confronting adventurers in the Lost Caverns of Tsojcanth  
> 
> I've already eaten three giant bats, six troglodytes, and a mind flayer today, but that's okay. Plenty of room in my belly for you and your friends.


## Stat Block

```ad-statblock
title: Behir
![](/compendium/bestiary/monstrosity/token/behir.png#token)
*Huge monstrosity, Neutral Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 16d12 + 64|text(168)` (16d12 + 64) 
- **Speed** walk 50 ft., climb 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|16 (+3)|18 (+4)| 7 (-2)|14 (+2)|12 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Perception +6, Stealth +7
- **Senses** darkvision 90 ft., passive Perception 16
- **Damage Immunities** lightning
- **Languages** Draconic
- **Challenge** 11

## Actions

***Multiattack.*** The behir makes two attacks: one with its bite and one to constrict.

***Bite.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 10 ft., one target. Hit: `dice: 3d10 + 6|avg` (`3d10 + 6`) piercing damage.

***Constrict.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one Large or smaller creature. Hit: `dice: 2d10 + 6|avg` (`2d10 + 6`) bludgeoning damage plus `dice: 2d10 + 6|avg` (`2d10 + 6`) slashing damage. The target is [grappled](compendium/rules/conditions.md#grappled) (escape DC 16) if the behir isn't already constricting a creature, and the target is [restrained](compendium/rules/conditions.md#restrained) until this grapple ends.

***Lightning Breath (Recharge 5-6).*** The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (`dice: 12d10|avg` (`12d10`)) lightning damage on a failed save, or half as much damage on a successful one.

***Swallow.*** The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is [blinded](compendium/rules/conditions.md#blinded) and [restrained](compendium/rules/conditions.md#restrained), it has total cover against attacks and other effects outside the behir, and it takes `dice: 6d6|avg` (`6d6`) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.

If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls [prone](compendium/rules/conditions.md#prone) in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer [restrained](compendium/rules/conditions.md#restrained) by it and can escape from the corpse by using 15 feet of movement, exiting [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

underdark