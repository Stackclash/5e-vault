---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/size/medium
- monster/type/fey/elf
statblock: true
statblock-link: "#^statblock"
name: Autumn Eladrin
ac: 19
hp: 165
hit_dice: 22d8 + 66
cr: '10'
stats: [
  12,
  16,
  16,
  14,
  17,
  18
]
source: [
  MPMM,
  MTF
]
aliases: ["Autumn Eladrin"]
---
# Autumn Eladrin
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 115, Mordenkainen's Tome of Foes p. 195*  

Eladrin often enter the autumn season when they are overcome by feelings of goodwill. In this aspect, they defuse conflicts and alleviate suffering by using their magic to relieve any ailments that afflict the people who come to them for aid. They tolerate no violence in their presence and move quickly to settle disputes, to ensure that peace continues to reign.

## Eladrin

> [!quote]- A quote from Tasha  
> 
> If an autumn eladrin invites you over for dinner, come with an empty stomach. Their goodwill extends to heaping portions.
> 
> Note to self: send some of my spring eladrin friends to visit Mordenkainen. That'll teach him to lighten up.

Eladrin dwell in the verdant splendor of the Feywild. They are related to the elves found on the Material Plane. But while other elves can temper their wild impulses, eladrin are ruled by emotion—and due to their magical nature, they undergo physical changes to match their changes in temperament.

Eladrin have spent centuries in the Feywild, and most of them have become Fey creatures as a result—those presented here are of the Fey variety. Some are still Humanoid, however, similar in that respect to their other elven kin.

The magic flowing through eladrin responds to their emotional state by transforming them into different seasonal aspects, with behaviors and abilities that change with their forms. Some eladrin might remain in a particular aspect for years, while others run through the emotional spectrum each week.

### Changeable Natures

Whenever one of the eladrin presented here finishes a long rest, they can associate themself with a different season, provided they aren't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]. When the eladrin makes this change, they use the stat block of the new season rather than their old stat block. Any damage the eladrin sustained in their previous form applies to the new form, as do any conditions or other ongoing effects affecting them.

## Stat Block

```ad-statblock
title: Autumn Eladrin
![[/6. Mechanics/Bestiary/Fey/Token/autumn-eladrin.png#token]]
*Medium fey(elf), Chaotic Neutral*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 22d8 + 66|text(165)` (22d8 + 66) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|16 (+3)|16 (+3)|14 (+2)|17 (+3)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Insight +7, Medicine +7
- **Senses** darkvision 60 ft., passive Perception 13
- **Damage Resistances** psychic
- **Languages** Common, Elvish, Sylvan
- **Challenge** 10

## Traits

***Enchanting Presence.*** Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours.

Whenever the eladrin deals damage to the [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] creature, the [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] creature can repeat the saving throw, ending the effect on itself on a success.

***Magic Resistance.*** The eladrin has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The eladrin casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 16):

**At will**: [[/6. Mechanics/Spells/hold-person.md\|hold person]]

**1/day each**: [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]], [[/6. Mechanics/Spells/revivify.md\|revivify]]

**2/day each**: [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]] (as a 5th-level spell), [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]]

## Actions

***Multiattack.*** The eladrin makes two Longsword or Longbow attacks. It can replace one attack with a use of Spellcasting.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 1\|avg` (`1d8 + 1`) slashing damage, or 6 (`dice: 1d10 + 1\|avg` (`1d10 + 1`)) slashing damage if used with two hands, plus `dice: 5d8\|avg` (`5d8`) psychic damage.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 3\|avg` (`1d8 + 3`) piercing damage plus `dice: 5d8\|avg` (`5d8`) psychic damage.

## Bonus Actions

***Fey Step (Recharge 4-6).*** The eladrin teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see.

## Reactions

***Foster Peace.*** If a creature [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by the eladrin hits with an attack roll while within 60 feet of the eladrin, the eladrin magically causes the attack to miss, provided the eladrin can see the attacker.
```
^statblock

## Environment

forest