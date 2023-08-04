---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/underdark
- monster/size/huge
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Froghemoth
ac: 14
hp: 161
hit_dice: 14d12 + 70
cr: '10'
stats: [
  23,
  13,
  20,
  2,
  12,
  5
]
source: [
  MPMM,
  VGM
]
aliases: ["Froghemoth"]
---
# Froghemoth
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 130, Volo's Guide to Monsters p. 145*  

A froghemoth is an amphibious predator as big as an elephant. It lairs in swamps and has four tentacles, a thick rubbery hide, a fang-filled maw with a prehensile tongue, and an extendable stalk sporting three bulbous eyes that face in different directions.

Froghemoths are creatures not of this world. A journal purportedly written long ago by the wizard Lum describes strange, cylindrical chambers of metal buried in the ground from which froghemoths emerged, but no reliable reports of the location of such places exist.

Every few years, a froghemoth can lay a fertile egg without mating. The froghemoth cares nothing for its egg and might eat the hatchling. A young froghemoth's survival thus depends on its parent leaving it behind in indifference. A newborn froghemoth grows to full size over a period of months by indiscriminately preying on other creatures in its swampy domain. It learns to hide its enormous body in murky pools, keeping only its eyestalk above water to watch for passing creatures. When food comes within reach, the froghemoth erupts from its pool, tentacles and tongue flailing. It can grab several targets at once; it wraps its tongue around one and pulls it in to be devoured while holding the rest at bay.

If [[/6. Mechanics/Bestiary/Humanoid/Bullywug.md\|bullywugs]] come across a froghemoth, the bullywugs may treat the froghemoth as a god and do all they can to coax the monster into their den. A froghemoth can be tamed (after a fashion) by offering it food, and bullywugs can communicate with it on a basic level, so the creature might eat only a few bullywugs before following the rest. The bullywugs gather food as tribute for it, provide it with a comfortable lair, protect it from harm, and try to ensure that any of its offspring reach maturity.

```ad-statblock
title: Froghemoth
![[/6. Mechanics/Bestiary/Monstrosity/Token/froghemoth.png#token]]
*Huge monstrosity, Unaligned*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 14d12 + 70|text(161)` (14d12 + 70) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|13 (+1)|20 (+5)| 2 (-4)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +9, Wisdom +5
- **Skills** Perception +9, Stealth +5
- **Senses** darkvision 60 ft., passive Perception 19
- **Damage Resistances** fire, lightning
- **Languages** —
- **Challenge** 10

## Traits

***Amphibious.*** The froghemoth can breathe air and water.

***Shock Susceptibility.*** If the froghemoth takes lightning damage, it suffers two effects until the end of its next turn: its speed is halved, and it has disadvantage on Dexterity saving throws.

## Actions

***Multiattack.*** The froghemoth makes one Bite attack and two Tentacle attacks, and it can use Tongue.

***Bite.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 3d10 + 6\|avg` (`3d10 + 6`) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], has total cover against attacks and other effects outside the froghemoth, and takes `dice: 3d6\|avg` (`3d6`) acid damage at the start of each of the froghemoth's turns.

The froghemoth's gullet can hold up to two creatures at a time. If the froghemoth takes 20 damage or more on a single turn from a creature inside it, the froghemoth must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls [[6. Mechanics/Rules/conditions.md#prone\|prone]] in a space within 10 feet of the froghemoth. If the froghemoth dies, any swallowed creature is no longer [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by it and can escape from the corpse using 10 feet of movement, exiting [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Tentacle.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 20 ft., one target. Hit: `dice: 3d8 + 6\|avg` (`3d8 + 6`) bludgeoning damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles.

***Tongue.*** The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth.
```
^statblock

## Environment

swamp, underdark