---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
name: Kobold Inventor
ac: 12
hp: 13
hit_dice: 3d6 + 3
cr: 1/4
stats: [
  7,
  15,
  12,
  14,
  10,
  8
]
source: [
  MPMM,
  VGM
]
aliases: ["Kobold Inventor"]
---
# Kobold Inventor
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 164, Volo's Guide to Monsters p. 166*  

A kobold inventor builds improvised weapons to gain an advantage in combat. These weapons last for only one or two attacks before they break and typically work only for the inventor, but they might be surprisingly effective in the meantime. The weapons don't have to be lethal—often one serves its purpose if it distracts, scares, or confuses a creature long enough for the inventor to kill that foe.

```ad-statblock
title: Kobold Inventor
![[/6. Mechanics/Bestiary/Humanoid/Token/kobold-inventor.png#token]]
*Small humanoid, Any alignment*

- **Armor Class** 12 
- **Hit Points** `dice: 3d6 + 3|text(13)` (3d6 + 3) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|15 (+2)|12 (+1)|14 (+2)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** Common, Draconic
- **Challenge** 1/4

## Traits

***Pack Tactics.*** The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

***Sunlight Sensitivity.*** While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2\|avg` (`1d4 + 2`) piercing damage.

***Sling.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 30/120 ft., one target. Hit: `dice: 1d4 + 2\|avg` (`1d4 + 2`) bludgeoning damage.

***Weapon Invention.*** The kobold uses one of the following options (choose one or roll a `dice: d8\|avg` (`d8`)); the kobold can use each one no more than once per day:

- **1 Acid.** The kobold hurls a [[/6. Mechanics/Items/acid-vial.md\|flask of acid]]. *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 5/20 ft., one target. Hit: `dice: 2d6\|avg` (`2d6`) acid damage.  
- **2 Alchemist's Fire.** The kobold throws a [[/6. Mechanics/Items/alchemists-fire-flask.md\|flask of alchemist's fire]]. *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 5/20 ft., one target. Hit: `dice: 1d4\|avg` (`1d4`) fire damage at the start of each of the target's turns. The target can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.  
- **3 Basket of Centipedes.** The kobold throws a small basket into a 5-foot-square space within 20 feet of it. A [[/6. Mechanics/Bestiary/Beast/Swarm Of Centipedes.md\|swarm of insects (centipedes)]] with 11 hit points emerges from the basket and rolls initiative. At the end of each of the swarm's turns, there's a 50|50 percent% chance chance that the swarm disperses.  
- **4 Green Slime Pot.** The kobold throws a clay pot full of green slime at the target, and it breaks open on impact. *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 5/20 ft., one target. Hit: `dice: 1d10\|avg` (`1d10`) acid damage, and the target is covered in slime until a creature uses its action to scrape or wash the slime off. A target covered in the slime takes `dice: 1d10\|avg` (`1d10`) acid damage at the start of each of its turns.  
- **5 Rot Grub Pot.** The kobold throws a clay pot into a 5-foot-square space within 20 feet of it, and it breaks open on impact. A [[/6. Mechanics/Bestiary/Beast/Swarm Of Rot Grubs (MPMM).md\|swarm of rot grubs]] (in this book) emerges from the shattered pot and remains a hazard in that square.  
- **6 Scorpion on a Stick.** The kobold makes a melee attack with a [[/6. Mechanics/Bestiary/Beast/Scorpion.md\|scorpion]] tied to the end of a 5-foot-long pole. *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (`dice: 1d8\|avg` (`1d8`)) poison damage on a failed save, or half as much damage on a successful one.  
- **7 Skunk in a Cage.** The kobold releases a skunk into an unoccupied space within 5 feet of it. The skunk has a walking speed of 20 feet, AC 10, 1 hit point, and no effective attacks. It rolls initiative and, on its turn, uses its action to spray musk at a random creature within 5 feet of it. The target must succeed on a DC 9 Constitution saving throw, or it retches and is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that doesn't need to breathe or is immune to poison automatically succeeds on the saving throw. Once the skunk has sprayed its musk, it can't do so again until it finishes a short or long rest.  
- **8 Wasp Nest in a Bag.** The kobold throws a small bag into a 5-foot-square space within 20 feet of it. A [[/6. Mechanics/Bestiary/Beast/Swarm Of Wasps.md\|swarm of insects (wasps)]] with 11 hit points emerges from the bag and rolls initiative. At the end of each of the swarm's turns, there's a 50|50 percent% chance chance that the swarm disperses.  
```
^statblock

## Environment

forest, hill, mountain, underdark, urban