---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/mountain
- monster/size/gargantuan
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Phoenix"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "175"
"hit_dice": "10d20 + 70"
"stats":
- !!int "19"
- !!int "26"
- !!int "25"
- !!int "2"
- !!int "21"
- !!int "18"
"speed": "walk 20 ft., fly 120 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone,\
  \ restrained, stunned"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "16"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the phoenix dies, it explodes. Each creature in 60-foot-radius sphere\
    \ centered on the phoenix must make a DC 20 Dexterity saving throw, taking 22\
    \ (dice: 4d10|avg (4d10)) fire damage on a failed save, or half as much damage\
    \ on a successful one. The fire ignites flammable objects in the area that aren't\
    \ being worn or carried.\n\nThe explosion destroys the phoenix's body and leaves\
    \ behind an egg-shaped cinder, which weighs 5 pounds. The cinder deals 21 (dice:\
    \ 6d6|avg (6d6)) fire damage to any creature that touches it, though no more\
    \ than once per round. The cinder is immune to all damage, and after dice: 1d6|avg\
    \ (1d6) days, it hatches a new phoenix."
  "name": "Fiery Death and Rebirth"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix can move through a space as narrow as 1 inch wide without squeezing.\n\
    \nAny creature that touches the phoenix or hits it with a melee attack while within\
    \ 5 feet of it takes dice: 1d10|avg (1d10) fire damage. In addition, the phoenix\
    \ can enter a hostile creature's space and stop there. The first time it enters\
    \ a creature's space on a turn, that creature takes dice: 1d10|avg (1d10)\
    \ fire damage.\n\nWith a touch, the phoenix can also ignite flammable objects\
    \ that aren't worn or carried (no action required)."
  "name": "Fire Form"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix doesn't provoke opportunity attack||opportunity attacks when\
    \ it flies out of an enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix sheds bright light in a 60-foot radius and dim light for an\
    \ additional 30 feet."
  "name": "Illumination"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the phoenix fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix makes two attacks: one Beak attack and one Fiery Talons attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d6 + 8|avg (2d6 + 8) fire damage."
  "name": "Beak"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+13 (+13 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) fire damage."
  "name": "Fiery Talons"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix moves up to its speed."
  "name": "Move"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix makes one beak attack."
  "name": "Peck"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phoenix moves up to its speed and makes one Fiery Talons attack."
  "name": "Swoop (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/elemental/token/phoenix.png"
aliases: ["Phoenix"]
---
# Phoenix
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 206, Mordenkainen's Tome of Foes p. 199*  

> [!quote]- A quote from Mordenkainen  
> 
> To rise like a phoenix from the ashes–so many use that quaint colloquialism. Little do they know about the true horror of such a rebirth.

Releasing a phoenix from the Inner Planes creates an explosion of fire that spreads across the sky. An enormous fiery bird forms in the center of the flames and smoke—an elder Elemental possessed by a need to burn everything to ash. The phoenix rarely stays in one place for long as it strives to transform the world into an inferno.

```ad-statblock
title: Phoenix
![[/6. Mechanics/Bestiary/Elemental/Token/phoenix.png#token]]
*Gargantuan elemental, Neutral*

- **Armor Class** 18 
- **Hit Points** `dice: 10d20 + 70|text(175)` (10d20 + 70) 
- **Speed** walk 20 ft., fly 120 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|26 (+8)|25 (+7)| 2 (-4)|21 (+5)|18 (+4)|

- **Proficiency Bonus** +5
- **Saving Throws** Wisdom +10, Charisma +9
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** fire, poison
- **Condition Immunities** exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned
- **Languages** —
- **Challenge** 16

## Traits

***Fiery Death and Rebirth.*** If the phoenix dies, it explodes. Each creature in 60-foot-radius sphere centered on the phoenix must make a DC 20 Dexterity saving throw, taking 22 (`dice: 4d10` (`4d10`)) fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried.

The explosion destroys the phoenix's body and leaves behind an egg-shaped cinder, which weighs 5 pounds. The cinder deals 21 (`dice: 6d6` (`6d6`)) fire damage to any creature that touches it, though no more than once per round. The cinder is immune to all damage, and after `dice: 1d6` (`1d6`) days, it hatches a new phoenix.

***Fire Form.*** The phoenix can move through a space as narrow as 1 inch wide without squeezing.

Any creature that touches the phoenix or hits it with a melee attack while within 5 feet of it takes `dice: 1d10` (`1d10`) fire damage. In addition, the phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes `dice: 1d10` (`1d10`) fire damage.

With a touch, the phoenix can also ignite flammable objects that aren't worn or carried (no action required).

***Flyby.*** The phoenix doesn't provoke opportunity attack||opportunity attacks when it flies out of an enemy's reach.

***Illumination.*** The phoenix sheds bright light in a 60-foot radius and dim light for an additional 30 feet.

***Legendary Resistance (3/Day).*** If the phoenix fails a saving throw, it can choose to succeed instead.

***Siege Monster.*** The phoenix deals double damage to objects and structures.

## Actions

***Multiattack.*** The phoenix makes two attacks: one Beak attack and one Fiery Talons attack.

***Beak.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 15 ft., one target. Hit: `dice: 2d6 + 8` (`2d6 + 8`) fire damage.

***Fiery Talons.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 15 ft., one target. Hit: `dice: 2d8 + 8` (`2d8 + 8`) fire damage.

## Legendary Actions

***Move.*** The phoenix moves up to its speed.

***Peck.*** The phoenix makes one beak attack.

***Swoop (Costs 2 Actions).*** The phoenix moves up to its speed and makes one Fiery Talons attack.
```
^statblock

## Environment

desert, mountain