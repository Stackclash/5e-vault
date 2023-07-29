---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/huge
- monster/type/ooze
statblock: true
statblock-link: "#^statblock"
name: Elder Oblex
ac: 16
hp: 115
hit_dice: 10d12 + 50
cr: '10'
stats: [
  15,
  16,
  21,
  22,
  13,
  18
]
source: [
  MPMM,
  MTF
]
aliases: ["Elder Oblex"]
---
# Elder Oblex
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 199, Mordenkainen's Tome of Foes p. 219*  

Older oblexes, called adults and elders, have eaten so many memories that they can form duplicates of the creatures they have devoured from the substance of their bodies, sending these copies off to lure prey into their clutches while remaining tethered to the slime by long tendrils of goo. These duplicated creatures are indistinguishable from their victims except for a faint sulfurous smell. Oblexes use these duplicates to lead prey into danger or to infiltrate settlements so they can feed on superior victims.

## Oblexes

> [!quote]- A quote from Mordenkainen  
> 
> Mind flayers unleash all manner of foul experiments upon the planes with little thought for the consequences. Here, though, I suspect another influence: Juiblex.

> [!quote]- A quote from Mordenkainen  
> 
> An oblex wants memories, but not to serve any end of its own making. Oblexes are hungry for memories and personalities because they are empty without such nourishment. In this way they serve their creators, the illithids. An oblex in the range of an elder brain's powers provides everything necessary for the mind flayers to find choice victims.

By experimenting on the slimes, jellies, and puddings that infest the depths of the Underdark, mind flayers created a special breed of Ooze, the oblex—a slime capable of assaulting the minds of other creatures. These pools of jelly are cunning hunters that feed on thoughts and memories. The sharper the mind, the better the meal, so oblexes hunt targets more likely to be intelligent, such as wizards and other spellcasters. When suitable fare comes within reach, an oblex draws its body up to engulf its victim. As it withdraws, it plunders the creature's mind, leaving its prey befuddled and confused—or dead.

When oblexes feed on thoughts, they can form weird copies of their prey to use as lures, which helps them harvest even more victims for their mind flayer masters.

## Stat Block

```ad-statblock
title: Elder Oblex
![](/compendium/bestiary/ooze/token/elder-oblex.png#token)
*Huge ooze, Lawful Evil*

- **Armor Class** 16 
- **Hit Points** `dice: 10d12 + 50|text(115)` (10d12 + 50) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|16 (+3)|21 (+5)|22 (+6)|13 (+1)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +10, Charisma +8
- **Skills** Arcana +10, Deception +8, History +10, Nature +10, Perception +5, Religion +10
- **Senses** blindsight 60 ft. (blind beyond this distance), passive Perception 15
- **Condition Immunities** blinded, charmed, deafened, exhaustion, prone
- **Languages** Common plus six more languages
- **Challenge** 10

## Traits

***Amorphous.*** The oblex can move through a space as narrow as 1 inch wide without squeezing.

***Aversion to Fire.*** If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.

***Unusual Nature.*** The oblex doesn't require sleep.

***Spellcasting (Psionics).*** The oblex casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 18):

**At will**: [charm person](/compendium/spells/charm-person.md) (as 5th-level spell), [detect thoughts](/compendium/spells/detect-thoughts.md)

**3/day each**: [dimension door](/compendium/spells/dimension-door.md), [dominate person](/compendium/spells/dominate-person.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [telekinesis](/compendium/spells/telekinesis.md)

## Actions

***Multiattack.*** The elder oblex makes two Pseudopod attacks, and it uses Eat Memories.

***Pseudopod.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one target. Hit: `dice: 4d6 + 3|avg` (`4d6 + 3`) bludgeoning damage plus `dice: 4d6|avg` (`4d6`) psychic damage.

***Eat Memories.*** The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 18 Wisdom saving throw or take `dice: 8d10|avg` (`8d10`) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the [greater restoration](/compendium/spells/greater-restoration.md) or [heal](/compendium/spells/heal.md) spell. Constructs, Oozes, Plants, and Undead succeed on the save automatically.

While memory drained, the target must roll a `dice: d4|avg` (`d4`) and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the `dice: d4|avg` (`d4`) becomes a `dice: d6|avg` (`d6`), the `dice: d6|avg` (`d6`) becomes a `dice: d8|avg` (`d8`), and so on until the die becomes a `dice: d20|avg` (`d20`), at which point the target becomes [unconscious](compendium/rules/conditions.md#unconscious) for 1 hour. The effect then ends.

The oblex learns all the languages a memory-drained target knows and gains all its skill proficiencies.

## Bonus Actions

***Sulfurous Impersonation.*** The oblex extrudes a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate `dice: 2d6 + 1|avg` (`2d6 + 1`) different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. The simulacrum is an extension of the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex and the simulacrum. The simulacrum disappears if the tether is severed.
```
^statblock

## Environment

swamp, underdark, urban