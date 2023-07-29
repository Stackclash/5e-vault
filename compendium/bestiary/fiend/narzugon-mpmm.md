---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/fiend/devil
statblock: true
statblock-link: "#^statblock"
name: Narzugon
ac: 20
hp: 112
hit_dice: 15d8 + 45
cr: '13'
stats: [
  20,
  10,
  17,
  16,
  14,
  19
]
source: [
  MPMM,
  MTF
]
aliases: ["Narzugon"]
---
# Narzugon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 190, Mordenkainen's Tome of Foes p. 167*  

Paladins who make deals with devils and carry their twisted sense of honor into the afterlife are especially valuable to the archdukes of the Nine Hells. These narzugons act as horrific perversions of knights errant, carrying out their masters' will.

Narzugons wield hell-forged lances that shunt the souls of any they killed to the River Styx for rebirth as [lemures](/compendium/bestiary/fiend/lemure.md). Every lance bears the marks of both a narzugon and its master.

Each narzugon claims a [nightmare](/compendium/bestiary/fiend/nightmare.md) as its mount. These steeds are bound by [infernal tack](/compendium/items/infernal-tack-mtf.md) and must respond to the summons and commands of the spurs' wearer.

```ad-statblock
title: Narzugon
![](/compendium/bestiary/fiend/token/narzugon.png#token)
*Medium fiend(devil), Lawful Evil*

- **Armor Class** 20 ([plate armor](/compendium/items/plate-armor.md), [shield](/compendium/items/shield.md))
- **Hit Points** `dice: 15d8 + 45|text(112)` (15d8 + 45) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|10 (+0)|17 (+3)|16 (+3)|14 (+2)|19 (+4)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +5, Constitution +8, Charisma +9
- **Skills** Perception +12
- **Senses** darkvision 120 ft., passive Perception 22
- **Damage Resistances** acid; cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** Common, Infernal, telepathy 120 ft.
- **Challenge** 13

## Traits

***Infernal Tack.*** The narzugon wears spurs that are part of [infernal tack](/compendium/items/infernal-tack-mtf.md), which allow it to summon its [nightmare](/compendium/bestiary/fiend/nightmare.md) companion as an action.

***Magic Resistance.*** The narzugon has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The narzugon makes three Hellfire Lance attacks. It also uses Infernal Command or Terrifying Command.

***Hellfire Lance.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 10 ft., one target. Hit: `dice: 1d12 + 5|avg` (`1d12 + 5`) piercing damage plus `dice: 3d10|avg` (`3d10`) fire damage. If this damage kills a creature with a soul, the soul rises from the River Styx as a [lemure](/compendium/bestiary/fiend/lemure.md) in Avernus in `dice: 1d4|avg` (`1d4`) hours. If the creature isn't revived before then, only a [wish](/compendium/spells/wish.md) spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect.

***Infernal Command.*** Each ally of the narzugon within 60 feet of it can't be [charmed](compendium/rules/conditions.md#charmed) or [frightened](compendium/rules/conditions.md#frightened) until the end of the narzugon's next turn.

***Terrifying Command.*** Each creature within 60 feet of the narzugon that isn't a Fiend must succeed on a DC 17 Charisma saving throw or become [frightened](compendium/rules/conditions.md#frightened) of the narzugon for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that makes a successful saving throw is immune to this narzugon's Terrifying Command for 24 hours.

***Healing (1/Day).*** The narzugon, or one creature it touches, regains 100 hit points.
```
^statblock