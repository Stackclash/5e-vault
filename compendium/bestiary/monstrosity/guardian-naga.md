---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Guardian Naga"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "19"
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "charmed, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Celestial, Common"
"cr": "10"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 16, dice: d20+8 (+8 to hit) with spell attacks), and it needs\
    \ only verbal components to cast its spells. It has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [mending](/compendium/spells/mending.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [calm emotions](/compendium/spells/calm-emotions.md),\
    \ [hold person](/compendium/spells/hold-person.md)\n\n3rd level (3 3rd-level\
    \ slots): [bestow curse](/compendium/spells/bestow-curse.md), [clairvoyance](/compendium/spells/clairvoyance.md)\n\
    \n4th level (3 4th-level slots): [banishment](/compendium/spells/banishment.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md)\n\n5th level\
    \ (2 5th-level slots): [flame strike](/compendium/spells/flame-strike.md), [geas](/compendium/spells/geas.md)\n\
    \n6th level (1 6th-level slots): [true seeing](/compendium/spells/true-seeing.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If it dies, the naga returns to life in dice: 1d6|avg (1d6) days and\
    \ regains all its hit points. Only a [wish](/compendium/spells/wish.md) spell\
    \ can prevent this trait from functioning."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage, and the target must make\
    \ a DC 15 Constitution saving throw, taking 45 (dice: 10d8|avg (10d8)) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+8 (+8 to hit), range 15/30 ft., one\
    \ creature. Hit: The target must make a DC 15 Constitution saving throw, taking\
    \ 45 (dice: 10d8|avg (10d8)) poison damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Spit Poison"
"source":
- "MM"
- "ToA"
- "GoS"
"image": "/compendium/bestiary/monstrosity/token/guardian-naga.png"
aliases: ["Guardian Naga"]
---
# Guardian Naga
*Source: Monster Manual p. 234, Tomb of Annihilation, Ghosts of Saltmarsh*  

Wise and good, the beautiful guardian nagas protect sacred places and items of magical power from falling into evil hands. In their hidden redoubts, they research spells and hatch convoluted plots to thwart the evil designs of their enemies.

A guardian naga doesn't seek out violence, warning off intruders rather than attacking. Only if its foes persist does the naga attack, accosting enemies with its spells and poisonous spittle.

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
title: Guardian Naga
![](/compendium/bestiary/monstrosity/token/guardian-naga.png#token)
*Large monstrosity, Lawful Good*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 15d10 + 45|text(127)` (15d10 + 45) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|18 (+4)|16 (+3)|16 (+3)|19 (+4)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +8, Constitution +7, Intelligence +7, Wisdom +8, Charisma +8
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Immunities** poison
- **Condition Immunities** charmed, poisoned
- **Languages** Celestial, Common
- **Challenge** 10

## Traits

***Rejuvenation.*** If it dies, the naga returns to life in `dice: 1d6|avg` (`1d6`) days and regains all its hit points. Only a [wish](/compendium/spells/wish.md) spell can prevent this trait from functioning.

***Spellcasting.*** The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, `dice: d20+8` (+8 to hit) with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:

**Cantrips (at will)**: [mending](/compendium/spells/mending.md), [sacred flame](/compendium/spells/sacred-flame.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)

**1st level (4 1st-level slots)**: [command](/compendium/spells/command.md), [cure wounds](/compendium/spells/cure-wounds.md), [shield of faith](/compendium/spells/shield-of-faith.md)

**2nd level (3 2nd-level slots)**: [calm emotions](/compendium/spells/calm-emotions.md), [hold person](/compendium/spells/hold-person.md)

**3rd level (3 3rd-level slots)**: [bestow curse](/compendium/spells/bestow-curse.md), [clairvoyance](/compendium/spells/clairvoyance.md)

**4th level (3 4th-level slots)**: [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md)

**5th level (2 5th-level slots)**: [flame strike](/compendium/spells/flame-strike.md), [geas](/compendium/spells/geas.md)

**6th level (1 6th-level slots)**: [true seeing](/compendium/spells/true-seeing.md)

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 10 ft., one creature. Hit: `dice: 1d8 + 4|avg` (`1d8 + 4`) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (`dice: 10d8|avg` (`10d8`)) poison damage on a failed save, or half as much damage on a successful one.

***Spit Poison.*** *Ranged Weapon Attack:* `dice: d20+8` (+8 to hit), range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (`dice: 10d8|avg` (`10d8`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

forest, desert