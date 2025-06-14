---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: underdark
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/8
  - monster/environment/underdark
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Spirit Naga
---
# [[5. Mechanics\Bestiary\Monstrosity\Spirit Naga.md|Spirit Naga]]
*Source: Monster Manual p. 234, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Spirit nagas live in gloom and spitefulness, constantly plotting vengeance against creatures that have wronged them-or that they believe have wronged them. Lairing in dismal caverns and ruins, they devote their time to developing new spells and enslaving the mortals with which they surround themselves. A spirit naga likes to charm its foes, drawing them close so that it can sink its poisonous fangs into their flesh.

> [!quote] A quote from Explictica Defilus, spirit naga  
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

```statblock
"name": "Spirit Naga"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "15"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "dexterity": "+6"
  - "constitution": "+5"
  - "wisdom": "+5"
  - "charisma": "+6"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "8"
"traits":
  - "desc": "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal\
      \ components to cast its spells. It has the following wizard spells prepared:\n\
      \nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor\
      \ illusion]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Charm Person.md|charm person]],\
      \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Sleep.md|sleep]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
      \ [[5. Mechanics/Spells/Hold Person.md|hold person]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], [[5. Mechanics/Spells/Water Breathing.md|water breathing]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Blight.md|blight]], [[5. Mechanics/Spells/Dimension Door.md|dimension\
      \ door]]\n\n5th level (2 slots): [[5. Mechanics/Spells/Dominate Person.md|dominate\
      \ person]]"
    "name": "Spellcasting"
  - "desc": "If it dies, the naga returns to life in d6 days and regains all its hit\
      \ points. Only a [[5. Mechanics/Spells/Wish.md|wish]] spell can prevent this trait\
      \ from functioning."
    "name": "Rejuvenation"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit:\
      \ 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution\
      \ saving throw, taking 31 (7d8) poison damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Bite"
"source":
  - "MM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/spirit-naga.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
