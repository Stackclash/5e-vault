---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/10
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
aliases: ["Madam Eva"]
---
# [Madam Eva](compendium\bestiary\npc/madam-eva-cos.md)
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

```statblock
"name": "Madam Eva (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "10"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "8"
- !!int "11"
- !!int "12"
- !!int "17"
- !!int "20"
- !!int "18"
"speed": "20 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Religion": !!int "7"
  "Insight": !!int "13"
  "Perception": !!int "9"
  "Arcana": !!int "7"
"senses": "passive Perception 19"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "10"
"traits":
- "desc": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks). Madam Eva\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Light.md|light]],\
    \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]], [protection\
    \ from evil and good](compendium/spells/protection-from-evil-and-good.md)\n\n\
    2nd level (3 slots): [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
    \ [[5. Mechanics/Spells/Protection From Poison.md|protection from poison]], [spiritual\
    \ weapon](compendium/spells/spiritual-weapon.md)\n\n3rd level (3 slots): [create\
    \ food and water](compendium/spells/create-food-and-water.md), [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]],\
    \ [[5. Mechanics/Spells/Spirit Guardians.md|spirit guardians]]\n\n4th level (3\
    \ slots): [[5. Mechanics/Spells/Divination.md|divination]], [[5. Mechanics/Spells/Freedom Of Movement.md|freedom of movement]],\
    \ [[5. Mechanics/Spells/Guardian Of Faith.md|guardian of faith]]\n\n5th level (2\
    \ slots): [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]], [raise\
    \ dead](compendium/spells/raise-dead.md)\n\n6th level (1 slots): [find the\
    \ path](compendium/spells/find-the-path.md), [[5. Mechanics/Spells/Harm.md|harm]],\
    \ [[5. Mechanics/Spells/True Seeing.md|true seeing]]\n\n7th level (1 slots):\
    \ [[5. Mechanics/Spells/Fire Storm.md|fire storm]], [[5. Mechanics/Spells/Regenerate.md|regenerate]]\n\
    \n8th level (1 slots): [[5. Mechanics/Spells/Earthquake.md|earthquake]]"
  "name": "spells"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Dagger"
- "desc": "Madam Eva targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed,\
    \ the target is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] and [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]].\
    \ The curse lasts until ended with a [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell, a [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
    \ magic. When the curse ends, Madam Eva takes dice: 5d6|avg (5d6) psychic\
    \ damage."
  "name": "Curse (Recharges after a Long Rest)"
- "desc": "Madam Eva targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 17), requiring neither\
    \ somatic nor material components to do so: [[5. Mechanics/Spells/Animal Friendship.md|animal friendship]],\
    \ [[5. Mechanics/Spells/Charm Person.md|charm person]], or [[5. Mechanics/Spells/Hold Person.md|hold person]].\
    \ If the target succeeds on the initial saving throw, Madam Eva is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the end of her next turn. Once a target succeeds on a saving throw against\
    \ this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/madam-eva.png"
```
^statblock