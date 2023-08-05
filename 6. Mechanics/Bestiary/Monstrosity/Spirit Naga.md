---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Spirit Naga"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks), and it needs\
    \ only verbal components to cast its spells. It has the following wizard spells\
    \ prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/ray-of-frost.md\|ray of frost]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/charm-person.md\|charm person]],\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/sleep.md\|sleep]]\n\
    \n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]],\
    \ [[/6. Mechanics/Spells/hold-person.md\|hold person]]\n\n3rd level (3 3rd-level\
    \ slots): [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]], [[/6. Mechanics/Spells/water-breathing.md\|water breathing]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/blight.md\|blight]], [dimension\
    \ door](/compendium/spells/dimension-door.md)\n\n5th level (2 5th-level slots):\
    \ [[/6. Mechanics/Spells/dominate-person.md\|dominate person]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If it dies, the naga returns to life in dice: 1d6|avg (1d6) days and\
    \ regains all its hit points. Only a [[/6. Mechanics/Spells/wish.md\|wish]] spell\
    \ can prevent this trait from functioning."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage, and the target must make\
    \ a DC 13 Constitution saving throw, taking 31 (dice: 7d8|avg (7d8)) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "EGW"
- "MOT"
- "JttRC"
"image": "/compendium/bestiary/monstrosity/token/spirit-naga.png"
aliases: ["Spirit Naga"]
---
# Spirit Naga
*Source: Monster Manual p. 234, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Journeys through the Radiant Citadel*  

Spirit nagas live in gloom and spitefulness, constantly plotting vengeance against creatures that have wronged them-or that they believe have wronged them. Lairing in dismal caverns and ruins, they devote their time to developing new spells and enslaving the mortals with which they surround themselves. A spirit naga likes to charm its foes, drawing them close so that it can sink its poisonous fangs into their flesh.

> [!quote]- A quote from Explictica Defilus, spirit naga  
> 
> If you destroy me, I will return, and everyone you care about will suffer for it.

## Nagas

Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.

The first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.

Nagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.

### Benevolent Dictators and Brutal Tyrants

A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.

### Rivalry

Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.

### Immortal Nature

A naga doesn't require air, food, drink, or sleep.

## Stat Block

```ad-statblock
title: Spirit Naga
![[/6. Mechanics/Bestiary/Monstrosity/Token/spirit-naga.png#token]]
*Large monstrosity, Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 10d10 + 20|text(75)` (10d10 + 20) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|17 (+3)|14 (+2)|16 (+3)|15 (+2)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +6, Constitution +5, Wisdom +5, Charisma +6
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Immunities** poison
- **Condition Immunities** charmed, poisoned
- **Languages** Abyssal, Common
- **Challenge** 8

## Traits

***Rejuvenation.*** If it dies, the naga returns to life in `dice: 1d6` (`1d6`) days and regains all its hit points. Only a [[/6. Mechanics/Spells/wish.md\|wish]] spell can prevent this trait from functioning.

***Spellcasting.*** The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/ray-of-frost.md\|ray of frost]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/sleep.md\|sleep]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/hold-person.md\|hold person]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]], [[/6. Mechanics/Spells/water-breathing.md\|water breathing]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/blight.md\|blight]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]]

**5th level (2 5th-level slots)**: [[/6. Mechanics/Spells/dominate-person.md\|dominate person]]

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one creature. Hit: `dice: 1d6 + 4` (`1d6 + 4`) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (`dice: 7d8` (`7d8`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark