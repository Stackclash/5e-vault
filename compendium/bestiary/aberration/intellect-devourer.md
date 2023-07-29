---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/tiny
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Intellect Devourer
ac: 12
hp: 21
hit_dice: 6d4 + 6
cr: '2'
stats: [
  6,
  14,
  13,
  12,
  11,
  10
]
source: [
  MM,
  WDH,
  WDMM,
  ERLW
]
aliases: ["Intellect Devourer"]
---
# Intellect Devourer
*Source: Monster Manual p. 191, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War*  

An intellect devourer resembles a walking brain protected by a crusty covering and set on bestial clawed legs. This foul aberration feeds on the intelligence of sentient creatures, taking over a victim's body on behalf of its mind flayer masters.

## Illithid Creations

Mind flayers breed intellect devourers to serve as roaming hunters of the Underdark, creating an intellect devourer by taking the brain of a thrall and subjecting it to a horrible ritual. As it sprouts legs, the brain becomes an intelligent predator as twisted and evil as its masters.

## Deadly Puppet Masters

An intellect devourer consumes a creature's mind and memories, then turns the host body into a puppet under its control. An intellect devourer typically uses its puppet host to lure others into the domain of the mind flayers to be enthralled or consumed.

> [!quote]- A quote from Qorik el-Slurrk, mind flayer  
> 
> Don't cry. We have no intention of eating your brain. In fact, your brain is going on a wonderful journey!


## Stat Block

```ad-statblock
title: Intellect Devourer
![](/compendium/bestiary/aberration/token/intellect-devourer.png#token)
*Tiny aberration, Lawful Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 6d4 + 6|text(21)` (6d4 + 6) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|13 (+1)|12 (+1)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2, Stealth +4
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 12
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** blinded
- **Languages** understands Deep Speech but can't speak, telepathy 60 ft.
- **Challenge** 2

## Traits

***Detect Sentience.*** The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a [mind blank](/compendium/spells/mind-blank.md) spell.

## Actions

***Multiattack.*** The intellect devourer makes one attack with its claws and uses Devour Intellect.

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 2|avg` (`2d4 + 2`) slashing damage.

***Devour Intellect.*** The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take `dice: 2d10|avg` (`2d10`) psychic damage. Also on a failure, roll `dice: 3d6|avg` (`3d6`): If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is [stunned](compendium/rules/conditions.md#stunned) until it regains at least one point of Intelligence.

***Body Thief.*** The intellect devourer initiates an Intelligence contest with an [incapacitated](compendium/rules/conditions.md#incapacitated) humanoid within 5 feet of it that isn't protected by [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md). If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body. While inside a creature, the intellect devourer has total cover against attacks and other effects originating outside its host. The intellect devourer retains its Intelligence, Wisdom, and Charisma scores, as well as its understanding of Deep Speech, its telepathy, and its traits. It otherwise adopts the target's statistics. It knows everything the creature knew, including spells and languages.

If the host body dies, the intellect devourer must leave it. A [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md) spell cast on the body drives the intellect devourer out. The intellect devourer is also forced out if the target regains its devoured brain by means of a [wish](/compendium/spells/wish.md). By spending 5 feet of its movement, the intellect devourer can voluntarily leave the body, teleporting to the nearest unoccupied space within 5 feet of it. The body then dies, unless its brain is restored within 1 round.
```
^statblock

## Environment

underdark