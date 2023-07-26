---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
name: Madam Eva
ac: 10
hp: 88
hit_dice: 16d8 + 16
cr: '10'
stats: [
  8,
  11,
  12,
  17,
  20,
  18
]
source: [
  CoS
]
aliases: ["Madam Eva"]
---
*Source: Curse of Strahd p. 233*  

The fortune-teller Madam Eva lives among the Vistani but isn't truly one of them. She appears to be in her seventies, but she is, in fact, much older.

## Royal Blood

Madam Eva is Strahd's half-sister, though Strahd is unaware of this fact. Her real name is Katarina, and she is the daughter of a Vistani woman whom King Barov, Strahd's father, took to his bed during one of his many crusades. Madam Eva knows she is Strahd's half-sister but has told no one of the royal blood flowing through her veins.

## Mother Night

Over four hundred years ago, Katarina came to Barovia and insinuated herself into Strahd's court, working as a maid in Castle Ravenloft. She came to know the castle like the back of her hand, and she was present for the wedding of Sergei and Tatyana. After Strahd went mad and murdered his brother, she fled the castle and took refuge with the Vistani. Later, she forged a pact with the goddess Mother Night, trading her youth for the power to undo the evil that Strahd had wrought. Mother Night transformed Katarina into an ageless crone gifted with the power of magical foresight. In the guise of Madam Eva, she uses this ability to help Strahd. She can send her Vistani out in their wagons to visit other worlds and bring adventurers to Strahd's domain, in hopes that they will find a way to destroy the vampire or set Strahd free.

## For the Love of Strahd

The Dark Powers of Ravenloft would consider Madam Eva a worthy choice to replace Strahd as the master of Ravenloft, but she has all the power she desires and doesn't seek to supplant him. She would rather help Strahd find someone else to succeed him, although she has grave doubts about her ability to locate such an individual.

None of Madam Eva's Vistani kin know her true identity or purpose. They puzzle over her desire to remain in Barovia.

## Madam Eva's Traits

### Ideal

"I wish Strahd to be free of his curse."

### Bond

"The Vistani are my people now."

### Flaw

"The people whose fates I divine aren't important. They are but the means to an end."

## Stat Block

```ad-statblock
title: Madam Eva
![[token/madam-eva.png#token]]
*Medium humanoid(human), Chaotic Neutral*

- **Armor Class** 10 
- **Hit Points** `dice: 16d8 + 16|text(88)` (16d8 + 16) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|11 (+0)|12 (+1)|17 (+3)|20 (+5)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +5
- **Skills** Arcana +7, Deception +8, Insight +13, Intimidation +8, Perception +9, Religion +7
- **Senses** passive Perception 19
- **Languages** Abyssal, Common, Elvish, Infernal
- **Challenge** 10

***Spellcasting.*** Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 17, `dice: d20+9` (+9 to hit) with spell attacks). Madam Eva has the following cleric spells prepared:

**Cantrips (at will)**: [light](/6. Mechanics/spells/light.md), [mending](/6. Mechanics/spells/mending.md), [sacred flame](/6. Mechanics/spells/sacred-flame.md), [thaumaturgy](/6. Mechanics/spells/thaumaturgy.md)

**1st level (4 1st-level slots)**: [bane](/6. Mechanics/spells/bane.md), [command](/6. Mechanics/spells/command.md), [detect evil and good](/6. Mechanics/spells/detect-evil-and-good.md), [protection from evil and good](/6. Mechanics/spells/protection-from-evil-and-good.md)

**2nd level (3 2nd-level slots)**: [lesser restoration](/6. Mechanics/spells/lesser-restoration.md), [protection from poison](/6. Mechanics/spells/protection-from-poison.md), [spiritual weapon](/6. Mechanics/spells/spiritual-weapon.md)

**3rd level (3 3rd-level slots)**: [create food and water](/6. Mechanics/spells/create-food-and-water.md), [speak with dead](/6. Mechanics/spells/speak-with-dead.md), [spirit guardians](/6. Mechanics/spells/spirit-guardians.md)

**4th level (3 4th-level slots)**: [divination](/6. Mechanics/spells/divination.md), [freedom of movement](/6. Mechanics/spells/freedom-of-movement.md), [guardian of faith](/6. Mechanics/spells/guardian-of-faith.md)

**5th level (2 5th-level slots)**: [greater restoration](/6. Mechanics/spells/greater-restoration.md), [raise dead](/6. Mechanics/spells/raise-dead.md)

**6th level (1 6th-level slots)**: [find the path](/6. Mechanics/spells/find-the-path.md), [harm](/6. Mechanics/spells/harm.md), [true seeing](/6. Mechanics/spells/true-seeing.md)

**7th level (1 7th-level slots)**: [fire storm](/6. Mechanics/spells/fire-storm.md), [regenerate](/6. Mechanics/spells/regenerate.md)

**8th level (1 8th-level slots)**: [earthquake](/6. Mechanics/spells/earthquake.md)

## Actions

***Dagger.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4|avg` (`1d4`) piercing damage.

***Curse (Recharges after a Long Rest).*** Madam Eva targets one creature that she can see within 30 feet of her. The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed, the target is [blinded](/6. Mechanics/rules/conditions.md#blinded) and [deafened](/6. Mechanics/rules/conditions.md#deafened). The curse lasts until ended with a [greater restoration](/6. Mechanics/spells/greater-restoration.md) spell, a [remove curse](/6. Mechanics/spells/remove-curse.md) spell, or similar magic. When the curse ends, Madam Eva takes `dice: 5d6|avg` (`5d6`) psychic damage.

***Evil Eye (Recharges after a Short or Long Rest).*** Madam Eva targets one creature that she can see within 10 feet of her and casts one of the following spells on the target (save DC 17), requiring neither somatic nor material components to do so: [animal friendship](/6. Mechanics/spells/animal-friendship.md), [charm person](/6. Mechanics/spells/charm-person.md), or [hold person](/6. Mechanics/spells/hold-person.md). If the target succeeds on the initial saving throw, Madam Eva is [blinded](/6. Mechanics/rules/conditions.md#blinded) until the end of her next turn. Once a target succeeds on a saving throw against this effect, it is immune to the Evil Eye power of all Vistani for 24 hours.
```
^statblock