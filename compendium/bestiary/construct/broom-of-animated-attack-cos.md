---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/small
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Broom of Animated Attack"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "10"
- !!int "17"
- !!int "10"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, prone"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The broom is [incapacitated](compendium/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the broom\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](compendium/rules/conditions.md#unconscious) for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the broom remains motionless and isn't flying, it is indistinguishable\
    \ from a normal broom."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The broom makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) bludgeoning damage."
  "name": "Broomstick"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the broom is motionless and a creature grabs hold of it, the broom makes\
    \ a Dexterity check contested by the creature's Strength check. If the broom wins\
    \ the contest, it flies out of the creature's grasp and makes a melee attack against\
    \ it with advantage on the attack roll."
  "name": "Animated Attack"
"source":
- "CoS"
"image": "/compendium/bestiary/construct/token/broom-of-animated-attack.png"
aliases: ["Broom of Animated Attack"]
---
# Broom of Animated Attack
*Source: Curse of Strahd p. 226*  

A broom of animated attack is easily mistaken for a broom of flying. It attacks any creature that grabs it or tries to ride it.

## Flying Broom

Some brooms of animated attack allow their creators to ride them, in which case they behave like typical brooms of flying. A broom of animated attack, however, can carry only half the weight that a broom of flying can (see chapter 7, "Treasure," of the Dungeon Master's Guide).

## Stat Block

```ad-statblock
title: Broom of Animated Attack
![](/compendium/bestiary/construct/token/broom-of-animated-attack.png#token)
*Small construct, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 5d6|text(17)` (5d6) 
- **Speed** walk 0 ft., fly 50 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|17 (+3)|10 (+0)| 1 (-5)| 5 (-3)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft. (blind beyond this radius), passive Perception 7
- **Damage Immunities** poison, psychic
- **Condition Immunities** blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone
- **Languages** —
- **Challenge** 1/4

## Traits

***Constructed Nature.*** An animated object doesn't require air, food, drink, or sleep.

The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

***Antimagic Susceptibility.*** The broom is [incapacitated](compendium/rules/conditions.md#incapacitated) while in the area of an [antimagic field](/compendium/spells/antimagic-field.md). If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the broom must succeed on a Constitution saving throw against the caster's spell save DC or fall [unconscious](compendium/rules/conditions.md#unconscious) for 1 minute.

***False Appearance.*** While the broom remains motionless and isn't flying, it is indistinguishable from a normal broom.

## Actions

***Multiattack.*** The broom makes two melee attacks.

***Broomstick.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) bludgeoning damage.

## Reactions

***Animated Attack.*** If the broom is motionless and a creature grabs hold of it, the broom makes a Dexterity check contested by the creature's Strength check. If the broom wins the contest, it flies out of the creature's grasp and makes a melee attack against it with advantage on the attack roll.
```
^statblock