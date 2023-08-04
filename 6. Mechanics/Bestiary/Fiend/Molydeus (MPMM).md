---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Molydeus
ac: 19
hp: 216
hit_dice: 16d12 + 112
cr: '21'
stats: [
  28,
  22,
  25,
  21,
  24,
  24
]
source: [
  MPMM,
  MTF
]
aliases: ["Molydeus"]
---
# Molydeus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 184, Mordenkainen's Tome of Foes p. 134*  

The fearsome molydeus speaks for the demon lord it serves and enforces its master's will. This demon is 12 feet tall, and its bipedal body has a slavering wolfs head and a fanged serpent's head. Its demon lord can speak and see through the serpent head; this master also uses the molydeus to guard treasures, slay foes, and terrify troops into obedience.

A molydeus's demon lord bestows on it a powerful weapon that dissolves if the molydeus dies. The weapon's form varies depending on the creator, but that doesn't affect the weapon's capabilities.

```ad-statblock
title: Molydeus
![[/6. Mechanics/Bestiary/Fiend/Token/molydeus.png#token]]
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 16d12 + 112|text(216)` (16d12 + 112) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|28 (+9)|22 (+6)|25 (+7)|21 (+5)|24 (+7)|24 (+7)|

- **Proficiency Bonus** +7
- **Saving Throws** Strength +16, Constitution +14, Wisdom +14, Charisma +14
- **Skills** Perception +21
- **Senses** truesight 120 ft., passive Perception 31
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** blinded, charmed, deafened, frightened, poisoned, stunned
- **Languages** Abyssal, telepathy 120 ft.
- **Challenge** 21

## Traits

***Legendary Resistance (3/Day).*** If the molydeus fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The molydeus has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The molydeus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 22):

**At will**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/polymorph.md\|polymorph]], [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]], [[/6. Mechanics/Spells/teleport.md\|teleport]]

**3/day**: [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]]

## Actions

***Multiattack.*** The molydeus makes one Demonic Weapon attack, one Snakebite attack, and one Wolf Bite attack.

***Demonic Weapon.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 15 ft., one target. Hit: `dice: 4d12 + 9\|avg` (`4d12 + 9`) force damage. If the target has at least one head and the molydeus rolled a 20 on the attack roll, the target is decapitated and dies if it can't survive without that head. A target is immune to this effect if it takes none of the damage, has legendary actions, or is Huge or larger. Such a creature takes an extra 27 (`dice: 6d8\|avg` (`6d8`)) force damage from the hit.

***Snakebite.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 15 ft., one creature. Hit: `dice: 2d6 + 9\|avg` (`2d6 + 9`) poison damage. The target must succeed on a DC 22 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target transforms into a [[/6. Mechanics/Bestiary/Fiend/Manes.md\|manes]] if this reduces its hit point maximum to 0. This transformation can be ended only by a [[/6. Mechanics/Spells/wish.md\|wish]] spell.

***Wolf Bite.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 3d10 + 9\|avg` (`3d10 + 9`) necrotic damage.

## Legendary Actions

***Attack.*** The molydeus makes one Demonic Weapon or Snakebite attack.

***Move.*** The molydeus moves without provoking opportunity attack||opportunity attacks.

***Cast a Spell (Costs 2 Actions).*** The molydeus uses Spellcasting.
```
^statblock