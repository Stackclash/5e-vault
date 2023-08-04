---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Swarm of Zombie Limbs
ac: 10
hp: 22
hit_dice: 5d8
cr: '1'
stats: [
  14,
  10,
  10,
  3,
  8,
  5
]
source: [
  VRGR
]
aliases: ["Swarm of Zombie Limbs"]
---
# Swarm of Zombie Limbs
*Source: Van Richten's Guide to Ravenloft p. 254*  

Among the undead, a lone zombie ranks far from the most menacing. The horror of the shambling dead lies not in their individual menace, though, but their numbers, their persistence, and their disregard for their own well-being. A throng of zombies will douse a forest fire with their own ashes or march into a dragon's maw until the monster chokes. In the course of their relentless marches, zombies might suffer all manner of trauma, potentially reducing them to masses of crawling limbs, infecting them with terrible diseases (see zombie plague spreader), or crushing an entire horde into a single, rotting titan (see zombie clot).

## Zombie Apocalypses

Among the types of horror adventures detailed in "chapter 2", tales of uncontrolled zombie outbreaks orbit the "dark fantasy" and "disaster horror" genres. The horror of these adventures focuses not on the terror of a single zombie, but of countless individual threats overwhelming society. When creating your own undead calamities, consider the plots presented on the Zombie Apocalypses table.

**Zombie Apocalypses**

| dice: d4 | Zombie Plot |
|----------|-------------|
| 1 | A twisted wish causes those affected by healing magic and [[/6. Mechanics/Items/potion-of-healing.md\|potions of healing]] to rise as zombies. |
| 2 | Overwhelming magic reanimates zombies again and again as [[/6. Mechanics/Bestiary/Undead/Swarm Of Zombie Limbs (VRGR).md\|swarms of zombie limbs]]. |
| 3 | The githyanki unleash [[/6. Mechanics/Bestiary/Undead/zombie-plague-spreader-vrgr.md\|zombie plague spreaders]] to scour mind flayers from a world. |
| 4 | The seals containing an underground zombie horde fail, releasing ancient [[/6. Mechanics/Bestiary/Undead/zombie-clot-vrgr.md\|zombie clots]]. |
^zombie-apocalypses

## Stat Block

```ad-statblock
title: Swarm of Zombie Limbs
![[/6. Mechanics/Bestiary/Undead/Token/swarm-of-zombie-limbs.png#token]]
*Medium undead, Unaligned*

- **Armor Class** 10 
- **Hit Points** `dice: 5d8|text(22)` (5d8) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|10 (+0)|10 (+0)| 3 (-4)| 8 (-1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft. (blind beyond this radius), passive Perception 9
- **Damage Resistances** bludgeoning, piercing, slashing
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned
- **Languages** —
- **Challenge** 1

## Traits

***Swarm.*** The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny limb. The swarm can't regain hit points or gain temporary hit points.

***Unusual Nature.*** The swarm doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The swarm makes one Undead Mass attack and one Grasping Limbs attack.

***Undead Mass.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 0 ft., one target in the swarm's space. Hit: `dice: 1d6 + 2\|avg` (`1d6 + 2`) bludgeoning damage, or 4 (`dice: 1d4 + 2\|avg` (`1d4 + 2`)) bludgeoning damage if the swarm has half of its hit points or fewer.

***Grasping Limbs.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 0 ft., one creature in the swarm's space. Hit: `dice: 2d6\|avg` (`2d6`) necrotic damage, and the creature must succeed on a DC 12 Strength saving throw or be [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. The creature can repeat the saving throw at the end of each of its turns, taking 7 (`dice: 2d6\|avg` (`2d6`)) necrotic damage on a failed save. The creature is freed if it succeeds on this saving throw, the swarm moves out of the creature's space, or the swarm dies.
```
^statblock