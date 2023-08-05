---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Death Knight"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "180"
"hit_dice": "19d8 + 95"
"stats":
- !!int "20"
- !!int "11"
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "17"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The death knight is a 19th-level spellcaster. Its spellcasting ability\
    \ is Charisma (spell save DC 18, dice: d20+10 (+10 to hit) with spell attacks).\
    \ It has the following paladin spells prepared:\n\n1st level (4 1st-level slots):\
    \ [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/compelled-duel.md\|compelled duel]],\
    \ [[/6. Mechanics/Spells/searing-smite.md\|searing smite]]\n\n2nd level (3 2nd-level\
    \ slots): [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/magic-weapon.md\|magic weapon]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]],\
    \ [[/6. Mechanics/Spells/elemental-weapon.md\|elemental weapon]]\n\n4th level (3\
    \ 4th-level slots): [[/6. Mechanics/Spells/banishment.md\|banishment]], [staggering\
    \ smite](/compendium/spells/staggering-smite.md)\n\n5th level (2 5th-level slots):\
    \ [[/6. Mechanics/Spells/destructive-wave.md\|destructive wave]] (necrotic)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The death knight has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Unless the death knight is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]],\
    \ it and undead creatures of its choice within 60 feet of it have advantage on\
    \ saving throws against features that turn undead."
  "name": "Marshal Undead"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The death knight makes three longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 5|avg (1d8 + 5) slashing damage, or 10 (dice: 1d10 + 5|avg\
    \ (1d10 + 5)) slashing damage if used with two hands, plus dice: 4d8|avg (4d8)\
    \ necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The death knight hurls a magical ball of fire that explodes at a point\
    \ it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered\
    \ on that point must make a DC 18 Dexterity saving throw. The sphere spreads around\
    \ corners. A creature takes dice: 10d6|avg (10d6) fire damage and 35 (dice:\
    \ 10d6|avg (10d6)) necrotic damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Hellfire Orb (1/Day)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The death knight adds 6 to its AC against one melee attack that would hit\
    \ it. To do so, the death knight must see the attacker and be wielding a melee\
    \ weapon."
  "name": "Parry"
"source":
- "MM"
- "GoS"
- "DC"
- "DIP"
- "BGDIA"
- "EGW"
- "TCE"
- "CM"
- "DSotDQ"
"image": "/compendium/bestiary/undead/token/death-knight.png"
aliases: ["Death Knight"]
---
# Death Knight
*Source: Monster Manual p. 47, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Candlekeep Mysteries, Dragonlance: Shadow of the Dragon Queen*  

When a paladin that falls from grace dies without seeking atonement, dark powers can transform the once-mortal knight into a hateful undead creature. A death knight is a skeletal warrior clad in fearsome plate armor. Beneath its helmet, one can see the knight's skull with malevolent pinpoints of light burning in its eye sockets.

## Eldritch Power

The death knight retains the ability to cast divine spells. However, no death knight can use its magic to heal. A death knight also attracts and commands lesser undead, although death knights that serve powerful fiends might have fiendish followers instead. Death knights often use warhorse skeletons and nightmares as mounts.

## Immortal Until Redeemed

A death knight can arise anew even after it has been destroyed. Only when it atones for a life of wickedness or finds redemption can it finally escape its undead purgatory and truly perish.

## Undead Nature

A death knight doesn't require air, food, drink, or sleep.

> [!quote] Lord Soth
> 
> Lord Soth began his fall from grace with an act of heroism, saving an elf named Isolde from an ogre. Soth and Isolde fell in love, but Soth was already married. He had a servant dispose of his wife and was charged with murder, but fled with Isolde. When his castle fell under siege, he prayed for guidance and was told that he must atone for his misdeeds by completing a quest, but growing fears about Isolde's fidelity caused him to abandon his quest. Because his mission was not accomplished, a great cataclysm swept the land. When Isolde gave birth to a son, Soth refused to believe that the child was his and slew them both. All were incinerated in a fire that swept through the castle, yet Soth would find no rest in death, becoming a death knight.
^lord-soth

## Stat Block

```ad-statblock
title: Death Knight
![[/6. Mechanics/Bestiary/Undead/Token/death-knight.png#token]]
*Medium undead, Chaotic Evil*

- **Armor Class** 20 ([[/6. Mechanics/Items/plate-armor.md\|plate armor]], [[/6. Mechanics/Items/shield.md\|shield]])
- **Hit Points** `dice: 19d8 + 95|text(180)` (19d8 + 95) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|11 (+0)|20 (+5)|12 (+1)|16 (+3)|18 (+4)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +6, Wisdom +9, Charisma +10
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 13
- **Damage Immunities** necrotic, poison
- **Condition Immunities** exhaustion, frightened, poisoned
- **Languages** Abyssal, Common
- **Challenge** 17

## Traits

***Magic Resistance.*** The death knight has advantage on saving throws against spells and other magical effects.

***Marshal Undead.*** Unless the death knight is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]], it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead.

***Spellcasting.*** The death knight is a 19th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 18, `dice: d20+10` (+10 to hit) with spell attacks). It has the following paladin spells prepared:

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/compelled-duel.md\|compelled duel]], [[/6. Mechanics/Spells/searing-smite.md\|searing smite]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/magic-weapon.md\|magic weapon]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/elemental-weapon.md\|elemental weapon]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/staggering-smite.md\|staggering smite]]

**5th level (2 5th-level slots)**: [[/6. Mechanics/Spells/destructive-wave.md\|destructive wave]] (necrotic)

## Actions

***Multiattack.*** The death knight makes three longsword attacks.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 5` (`1d8 + 5`) slashing damage, or 10 (`dice: 1d10 + 5` (`1d10 + 5`)) slashing damage if used with two hands, plus `dice: 4d8` (`4d8`) necrotic damage.

***Hellfire Orb (1/Day).*** The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes `dice: 10d6` (`10d6`) fire damage and 35 (`dice: 10d6` (`10d6`)) necrotic damage on a failed save, or half as much damage on a successful one.

## Reactions

***Parry.*** The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon.
```
^statblock