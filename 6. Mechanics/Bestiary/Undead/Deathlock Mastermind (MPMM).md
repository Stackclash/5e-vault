---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/undead/warlock
statblock: true
statblock-link: "#^statblock"
name: Deathlock Mastermind
ac: 13
hp: 110
hit_dice: 20d8 + 20
cr: '8'
stats: [
  11,
  16,
  12,
  15,
  12,
  17
]
source: [
  MPMM,
  MTF
]
aliases: ["Deathlock Mastermind"]
---
# Deathlock Mastermind
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 87, Mordenkainen's Tome of Foes p. 129*  

Though deathlocks exist to serve their patrons, they retain some freedom when it comes to devising tactics and carrying out plans. Powerful deathlocks recruit lesser creatures to help them carry out their missions, becoming the masterminds behind vast conspiracies and intrigues that culminate in the accomplishment of great acts of evil.

## Deathlocks

The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

## Stat Block

```ad-statblock
title: Deathlock Mastermind
![[/6. Mechanics/Bestiary/Undead/Token/deathlock-mastermind.png#token]]
*Medium undead(warlock), Neutral Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 20d8 + 20|text(110)` (20d8 + 20) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|16 (+3)|12 (+1)|15 (+2)|12 (+1)|17 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +5, Charisma +6
- **Skills** Arcana +5, History +5, Perception +4
- **Senses** darkvision 120 ft., passive Perception 14
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, poisoned
- **Languages** the languages it knew in life
- **Challenge** 8

## Traits

***Devil's Sight.*** Magical darkness doesn't impede the deathlock's [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]].

***Turn Resistance.*** The deathlock has advantage on saving throws against any effect that turns Undead.

***Unusual Nature.*** The deathlock doesn't require air, food, drink, or sleep.

***Spellcasting.*** The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 14):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]]

**1/day each**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/fly.md\|fly]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]

## Actions

***Multiattack.*** The deathlock makes two Deathly Claw or Grave Bolt attacks.

***Deathly Claw.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: 13 (`dice: 3d6 + 3\|avg` (`3d6 + 3`) necrotic damage).

***Grave Bolt.*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 120 ft., one target. Hit: `dice: 3d8\|avg` (`3d8`) necrotic damage. If the target is Large or smaller, it must succeed on a DC 16 Strength saving throw or become [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] as shadowy tendrils wrap around it for 1 minute. A [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] target can use its action to repeat the saving throw, ending the effect on itself on a success.
```
^statblock

## Environment

urban