---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
---
# Madam Eva
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

```statblock
"name": "Madam Eva"
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
"speed": "walk 20 ft."
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
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks). Madam Eva\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/Light.md|light]],\
    \ [[/6. Mechanics/Spells/Mending.md|mending]], [[/6. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[/6. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 1st-level\
    \ slots): [[/6. Mechanics/Spells/Bane.md|bane]], [[/6. Mechanics/Spells/Command.md|command]],\
    \ [[/6. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]], [protection\
    \ from evil and good](/compendium/spells/protection-from-evil-and-good.md)\n\n\
    2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
    \ [[/6. Mechanics/Spells/Protection From Poison.md|protection from poison]], [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [[/6. Mechanics/Spells/Create Food And Water.md|create food and water]],\
    \ [[/6. Mechanics/Spells/Speak With Dead.md|speak with dead]], [[/6. Mechanics/Spells/Spirit Guardians.md|spirit guardians]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/Divination.md|divination]],\
    \ [[/6. Mechanics/Spells/Freedom Of Movement.md|freedom of movement]], [guardian\
    \ of faith](/compendium/spells/guardian-of-faith.md)\n\n5th level (2 5th-level\
    \ slots): [[/6. Mechanics/Spells/Greater Restoration.md|greater restoration]],\
    \ [[/6. Mechanics/Spells/Raise Dead.md|raise dead]]\n\n6th level (1 6th-level slots):\
    \ [[/6. Mechanics/Spells/Find The Path.md|find the path]], [[/6. Mechanics/Spells/Harm.md|harm]],\
    \ [[/6. Mechanics/Spells/True Seeing.md|true seeing]]\n\n7th level (1 7th-level\
    \ slots): [[/6. Mechanics/Spells/Fire Storm.md|fire storm]], [[/6. Mechanics/Spells/Regenerate.md|regenerate]]\n\
    \n8th level (1 8th-level slots): [[/6. Mechanics/Spells/Earthquake.md|earthquake]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Madam Eva targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed,\
    \ the target is [[6. Mechanics/Rules/Conditions.md#blinded|blinded]] and [[6. Mechanics/Rules/Conditions.md#deafened|deafened]].\
    \ The curse lasts until ended with a [[/6. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell, a [[/6. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
    \ magic. When the curse ends, Madam Eva takes dice: 5d6|avg (5d6) psychic\
    \ damage."
  "name": "Curse (Recharges after a Long Rest)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Madam Eva targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 17), requiring neither\
    \ somatic nor material components to do so: [[/6. Mechanics/Spells/Animal Friendship.md|animal friendship]],\
    \ [[/6. Mechanics/Spells/Charm Person.md|charm person]], or [[/6. Mechanics/Spells/Hold Person.md|hold person]].\
    \ If the target succeeds on the initial saving throw, Madam Eva is [[6. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the end of her next turn. Once a target succeeds on a saving throw against\
    \ this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Npc/token/madam-eva.png"
```
^statblock