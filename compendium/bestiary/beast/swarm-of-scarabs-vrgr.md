---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
name: Swarm of Scarabs
ac: 13
hp: 27
hit_dice: 5d8 + 5
cr: '3'
stats: [
  3,
  14,
  13,
  1,
  12,
  1
]
source: [
  VRGR
]
aliases: ["Swarm of Scarabs"]
---
# Swarm of Scarabs
*Source: Van Richten's Guide to Ravenloft p. 247*  

Base creatures are among the first to respond to sinister forces at work in a land. As nefarious powers grip an area, populations of maggots, scarabs, and similar scavenging insects explode and become aggressive predators. Roll on the Swarm Behavior table to see how such swarms might manifest.

**Swarm Behavior**

| dice: d4 | Behavior |
|----------|----------|
| 1 | Crawls on walls in a vaguely bipedal shape |
| 2 | Makes skittering noises that sound like whispered chanting |
| 3 | Skeletal visages, giant eyes, or the faces of nearby creatures appear in relief amid its mass |
| 4 | Occupies and animates a corpse or other debris as if it were alive |
^swarm-behavior

```ad-statblock
title: Swarm of Scarabs
![](/compendium/bestiary/beast/token/swarm-of-scarabs.png#token)
*Medium beast, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 5d8 + 5|text(27)` (5d8 + 5) 
- **Speed** walk 30 ft., burrow 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (-4)|14 (+2)|13 (+1)| 1 (-5)|12 (+1)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** tremorsense 60 ft., passive Perception 11
- **Damage Resistances** bludgeoning, piercing, slashing
- **Condition Immunities** charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned
- **Languages** —
- **Challenge** 3

## Traits

***Swarm.*** The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny scarab. The swarm can't regain hit points or gain temporary hit points.

***Skeletonize.*** If the swarm starts its turn in the same space as a dead creature that is Large or smaller, the corpse is destroyed, leaving behind only equipment and bones (or exoskeleton).

***Spider Climb.*** The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

## Actions

***Ravenous Bites.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 0 ft., one target in the swarm's space. Hit: `dice: 4d6|avg` (`4d6`) piercing damage, or 7 (`dice: 2d6|avg` (`2d6`)) piercing damage if the swarm has half of its hit points or fewer. If the target is a creature, scarabs burrow into its body, and the creature takes `dice: 1d6|avg` (`1d6`) piercing damage at the start of each of its turns. Any creature can use an action to kill or remove the scarabs with fire or a weapon that deals piercing damage, causing 1 damage of the appropriate type to the target. A creature reduced to 0 hit points by the swarm's piercing damage dies.
```
^statblock