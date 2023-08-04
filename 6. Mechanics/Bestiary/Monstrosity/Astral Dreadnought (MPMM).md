---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/gargantuan
- monster/type/monstrosity/titan
statblock: true
statblock-link: "#^statblock"
name: Astral Dreadnought
ac: 20
hp: 297
hit_dice: 17d20 + 119
cr: '21'
stats: [
  28,
  7,
  25,
  5,
  14,
  18
]
source: [
  MPMM,
  MTF
]
aliases: ["Astral Dreadnought"]
---
# Astral Dreadnought
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 51, Mordenkainen's Tome of Foes p. 117*  

Enormous and terrifying, astral dreadnoughts haunt the silvery void of the Astral Plane, causing planar travelers to shudder at the very thought of them. Dreadnoughts have been gliding through the astral mists since the dawn of the multiverse, trying to devour all other creatures they encounter.

Covered from head to tail in layers of thick, spiked plates, a dreadnought has two gnarled limbs that end in magic-enhanced pincer claws. Constellations appear to swirl in the depths of its single eye, and its serpentine tail trails off into the silvery void. Anything it swallows is deposited in a unique demiplane—an enclosed space that contains eons worth of detritus, as well as the remains of travelers. The place has gravity and breathable air, and organic matter decays there. When the dreadnought dies, its demiplane vanishes, and its contents are released into the Astral Plane.

```ad-statblock
title: Astral Dreadnought
![[/6. Mechanics/Bestiary/Monstrosity/Token/astral-dreadnought.png#token]]
*Gargantuan monstrosity(titan), Unaligned*

- **Armor Class** 20 (natural armor)
- **Hit Points** `dice: 17d20 + 119|text(297)` (17d20 + 119) 
- **Speed** walk 15 ft., fly 80 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|28 (+9)| 7 (-2)|25 (+7)| 5 (-3)|14 (+2)|18 (+4)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +5, Wisdom +9
- **Skills** Perception +9
- **Senses** darkvision 120 ft., passive Perception 19
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned
- **Languages** —
- **Challenge** 21

## Traits

***Antimagic Cone.*** The dreadnought's eye creates an area of antimagic, as in the [[/6. Mechanics/Spells/antimagic-field.md\|antimagic field]] spell, in a 150-foot cone. At the start of each of its turns, it decides which way the cone faces. The cone doesn't function while the eye is closed or while the dreadnought is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]].

***Astral Entity.*** The dreadnought can't leave the Astral Plane, nor can it be banished or otherwise transported out of that plane.

***Demiplanar Donjon.*** Anything the dreadnought swallows is transported to a demiplane that can be entered by no other means except a [[/6. Mechanics/Spells/wish.md\|wish]] spell or the dreadnought's Bite and Donjon Visit. A creature can leave the demiplane only by using magic that enables planar travel, such as the [[/6. Mechanics/Spells/plane-shift.md\|plane shift]] spell. The demiplane resembles a stone cave roughly 1,000 feet in diameter with a ceiling 100 feet high. Like a stomach, it contains the remains of past meals. The dreadnought can't be harmed from within the demiplane. If the dreadnought dies, the demiplane disappears, and everything inside it appears around the dreadnought's corpse. The demiplane is otherwise indestructible.

***Legendary Resistance (3/Day).*** If the dreadnought fails a saving throw, it can choose to succeed instead.

***Sever Silver Cord.*** If the dreadnought scores a critical hit against a creature traveling by means of the [[/6. Mechanics/Spells/astral-projection.md\|astral projection]] spell, the dreadnought can cut the target's silver cord instead of dealing damage.

***Unusual Nature.*** The dreadnought doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The dreadnought makes one Bite attack and two Claw attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 5d10 + 9\|avg` (`5d10 + 9`) force damage. If the target is a Huge or smaller creature and this damage reduces it to 0 hit points or it is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]], the dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the Demiplanar Donjon.

***Claw.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 20 ft., one target. Hit: `dice: 3d6 + 9\|avg` (`3d6 + 9`) force damage.

## Legendary Actions

***Claw.*** The dreadnought makes one Claw attack.

***Donjon Visit (Costs 2 Actions).*** One Huge or smaller creature that the dreadnought can see within 60 feet of it must succeed on a DC 19 Charisma saving throw or be teleported to an unoccupied space on the floor of the Demiplanar Donjon. At the end of the target's next turn, it reappears in the space it left or in the nearest unoccupied space if that space is occupied.

***Psychic Projection (Costs 3 Actions).*** Each creature within 60 feet of the dreadnought must make a DC 19 Wisdom saving throw, taking 26 (`dice: 4d10 + 4\|avg` (`4d10 + 4`)) psychic damage on a failed save, or half as much damage on a successful one.
```
^statblock