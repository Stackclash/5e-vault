---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/undead/warlock
statblock: true
statblock-link: "#^statblock"
name: Deathlock Wight
ac: 12
hp: 37
hit_dice: 5d8 + 15
cr: '3'
stats: [
  11,
  14,
  16,
  12,
  14,
  16
]
source: [
  MPMM,
  MTF
]
aliases: ["Deathlock Wight"]
---
# Deathlock Wight
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 87, Mordenkainen's Tome of Foes p. 129*  

Deprived of much of its magic as a special punishment, a deathlock wight lingers between the warlock it was and the wretched existence of a wight.

## Deathlocks

The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

## Stat Block

```ad-statblock
title: Deathlock Wight
![[/6. Mechanics/Bestiary/Undead/Token/deathlock-wight.png#token]]
*Medium undead(warlock), Neutral Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 5d8 + 15|text(37)` (5d8 + 15) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|14 (+2)|16 (+3)|12 (+1)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +4
- **Skills** Arcana +3, Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, poisoned
- **Languages** the languages it knew in life
- **Challenge** 3

## Traits

***Sunlight Sensitivity.*** While in sunlight, the deathlock has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Unusual Nature.*** The deathlock doesn't require air, food, drink, or sleep.

***Spellcasting.*** The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 13):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]

**1/day each**: [[/6. Mechanics/Spells/fear.md\|fear]], [[/6. Mechanics/Spells/hold-person.md\|hold person]]

## Actions

***Multiattack.*** The deathlock makes two Life Drain or Grave Bolt attacks.

***Life Drain.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d8 + 2\|avg` (`1d8 + 2`) necrotic damage. The target must succeed on a DC 13 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.

A Humanoid slain by this attack rises 24 hours later as a [[/6. Mechanics/Bestiary/Undead/zombie.md\|zombie]] under the deathlock's control, unless the Humanoid is restored to life or its body is destroyed. The deathlock can have no more than twelve zombies under its control at one time.

***Grave Bolt.*** *Ranged Spell Attack:* `dice: d20+5` (+5 to hit), range 60 ft., one target. Hit: `dice: 2d8 + 3\|avg` (`2d8 + 3`) necrotic damage.
```
^statblock