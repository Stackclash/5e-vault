---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Ogre Zombie"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "85"
"hit_dice": "9d10 + 36"
"stats":
- !!int "19"
- !!int "6"
- !!int "18"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common and Giant but can't speak"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage."
  "name": "Morningstar"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SDW"
- "IDRotF"
- "LoX"
"image": "/compendium/bestiary/undead/token/ogre-zombie.png"
aliases: ["Ogre Zombie"]
---
# Ogre Zombie
*Source: Monster Manual p. 316, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Icewind Dale: Rime of the Frostmaiden, Light of Xaryxis*  

From somewhere in the darkness, a gurgling moan is heard. A form lurches into view, dragging one foot as it raises bloated arms and broken hands. The zombie advances, driven to kill anyone too slow to escape its grasp.

## Dark Servants

Sinister necromantic magic infuses the remains of the dead, causing them to rise as zombies that do their creator's bidding without fear or hesitation. They move with a jerky, uneven gait, clad in the moldering apparel they wore when put to rest, and carrying the stench of decay.

Most zombies are made from humanoid remains, though the flesh and bones of any formerly living creature can be imbued with a semblance of life. Necromantic magic, usually from spells, animates a zombie. Some zombies rise spontaneously when dark magic saturates an area. Once turned into a zombie, a creature can't be restored to life except by powerful magic, such as a [resurrection](/compendium/spells/resurrection.md) spell.

A zombie retains no vestiges of its former self, its mind devoid of thought and imagination. A zombie left without orders simply stands in place and rots unless something comes along that it can kill. The magic animating a zombie imbues it with evil, so left without purpose, it attacks any living creature it encounters.

## Hideous Forms

Zombies appear as they did in life, showing the wounds that killed them. However, the magic that creates these vile creatures often takes time to run its course. Dead warriors might rise from a battlefield, eviscerated and bloated after days in the sun. The muddy cadaver of a peasant could claw its way from the ground, riddled with maggots and worms. A zombie might wash ashore or rise from a marsh, swollen and reeking after weeks in the water.

## Mindless Soldiers

Zombies take the most direct route to any foe, unable to comprehend obstacles, tactics, or dangerous terrain. A zombie might stumble into a fast-flowing river to reach foes on a far shore, clawing at the surface as it is battered against rocks and destroyed. To reach a foe below it, a zombie might step out of an open window. Zombies stumble through roaring infernos, into pools of acid, and across fields littered with caltrops without hesitation.

A zombie can follow simple orders and distinguish friends from foes, but its ability to reason is limited to shambling in whatever direction it is pointed, pummeling any enemy in its path. A zombie armed with a weapon uses it, but the zombie won't retrieve a dropped weapon or other tool until told to do so.

## Undead Nature

A zombie doesn't require air, food, drink, or sleep.

> [!quote]- A quote from Fonkin Hoodypeak  
> 
> After Beek died, we cast an [animate dead](/compendium/spells/animate-dead.md) spell on his corpse. It was fun for a while, but the zombie started to smell real bad, so we doused it in oil and set it on fire. Beek would've found that hilarious.


## Stat Block

```ad-statblock
title: Ogre Zombie
![](/compendium/bestiary/undead/token/ogre-zombie.png#token)
*Large undead, Neutral Evil*

- **Armor Class** 8 
- **Hit Points** `dice: 9d10 + 36|text(85)` (9d10 + 36) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)| 6 (-2)|18 (+4)| 3 (-4)| 6 (-2)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom 0
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 8
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** understands Common and Giant but can't speak
- **Challenge** 2

## Traits

***Undead Fortitude.*** If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.

## Actions

***Morningstar.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage.
```
^statblock