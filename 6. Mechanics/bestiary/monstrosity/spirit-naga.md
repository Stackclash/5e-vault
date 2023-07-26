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
name: Spirit Naga
ac: 15
hp: 75
hit_dice: 10d10 + 20
cr: '8'
stats: [
  18,
  17,
  14,
  16,
  15,
  16
]
source: [
  MM,
  TftYP,
  WDMM,
  GoS,
  EGW,
  MOT,
  JttRC
]
aliases: ["Spirit Naga"]
---
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
![[token/spirit-naga.png#token]]
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

***Rejuvenation.*** If it dies, the naga returns to life in `dice: 1d6|avg` (`1d6`) days and regains all its hit points. Only a [wish](/6. Mechanics/spells/wish.md) spell can prevent this trait from functioning.

***Spellcasting.*** The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:

**Cantrips (at will)**: [mage hand](/6. Mechanics/spells/mage-hand.md), [minor illusion](/6. Mechanics/spells/minor-illusion.md), [ray of frost](/6. Mechanics/spells/ray-of-frost.md)

**1st level (4 1st-level slots)**: [charm person](/6. Mechanics/spells/charm-person.md), [detect magic](/6. Mechanics/spells/detect-magic.md), [sleep](/6. Mechanics/spells/sleep.md)

**2nd level (3 2nd-level slots)**: [detect thoughts](/6. Mechanics/spells/detect-thoughts.md), [hold person](/6. Mechanics/spells/hold-person.md)

**3rd level (3 3rd-level slots)**: [lightning bolt](/6. Mechanics/spells/lightning-bolt.md), [water breathing](/6. Mechanics/spells/water-breathing.md)

**4th level (3 4th-level slots)**: [blight](/6. Mechanics/spells/blight.md), [dimension door](/6. Mechanics/spells/dimension-door.md)

**5th level (2 5th-level slots)**: [dominate person](/6. Mechanics/spells/dominate-person.md)

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one creature. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (`dice: 7d8|avg` (`7d8`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark