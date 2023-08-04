---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Rutterkin
ac: 12
hp: 37
hit_dice: 5d8 + 15
cr: '2'
stats: [
  14,
  15,
  17,
  5,
  12,
  6
]
source: [
  MPMM,
  MTF
]
aliases: ["Rutterkin"]
---
# Rutterkin
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 210, Mordenkainen's Tome of Foes p. 136*  

> [!quote]- A quote from Tasha  
> 
> Eugh, rutterkins. You've heard of stinking cloud—now get ready for its sequel, rancid crows.
> 
> (Mordenkainen, my dear, I know you just died inside when you read that. Kisses!)

Rutterkins are warped demons that roam the Abyss in mobs, constantly searching for intruders to surround and devour. These Fiends protect the Abyss from non-demons. When they spot any interlopers, they gather in a crowd and surge forward, emitting a wave of fear in advance of their attacks that leaves their victims terrified and rooted in place.

Creatures bitten by rutterkins are exposed to a terrible disease that infects them with the corrupting influence of the Abyss. Victims afflicted with the disease experience tremendous pain as their bodies become disfigured, flesh twisting around the bones, until they transform to join the mass of [[/6. Mechanics/Bestiary/Fiend/Manes.md\|manes]] demons that follow in the wake of the rutterkin mob that laid them low.

```ad-statblock
title: Rutterkin
![[/6. Mechanics/Bestiary/Fiend/Token/rutterkin.png#token]]
*Medium fiend(demon), Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 5d8 + 15|text(37)` (5d8 + 15) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|15 (+2)|17 (+3)| 5 (-3)|12 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** understands Abyssal but can't speak
- **Challenge** 2

## Traits

***Immobilizing Fear.*** When a creature that isn't a demon starts its turn within 30 feet of one or more rutterkins, that creature must make a DC 11 Wisdom saving throw. The creature has disadvantage on the save if it's within 30 feet of six or more rutterkins. On a failed save, the creature becomes [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the rutterkins for 1 minute. While [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] in this way, the creature is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. At the end of each of the [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] creature's turns, it can repeat the saving throw, ending the effect on itself on a success. On a successful save, the creature is immune to the Crippling Fear of all rutterkins for 24 hours.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 3d6 + 2\|avg` (`3d6 + 2`) piercing damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]]. At the end of each long rest, the [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] in this way, it dies and instantly transforms into a living [[/6. Mechanics/Bestiary/Fiend/Manes.md\|manes]]. The transformation can be undone only by a [[/6. Mechanics/Spells/wish.md\|wish]] spell.
```
^statblock