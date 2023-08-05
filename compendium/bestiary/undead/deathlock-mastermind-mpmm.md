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
"name": "Deathlock Mastermind"
"size": "Medium"
"type": "undead"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"stats":
- !!int "11"
- !!int "16"
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Perception": !!int "4"
  "History": !!int "5"
  "Arcana": !!int "5"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deathlock casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md)\n\n1/day each: [darkness](/compendium/spells/darkness.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [fly](/compendium/spells/fly.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede the deathlock's [darkvision](compendium/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deathlock has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deathlock doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deathlock makes two Deathly Claw or Grave Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 13 (dice: 3d6 + 3|avg (3d6 + 3) necrotic damage)."
  "name": "Deathly Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+6 (+6 to hit), range 120 ft., one target.\
    \ Hit: dice: 3d8|avg (3d8) necrotic damage. If the target is Large or smaller,\
    \ it must succeed on a DC 16 Strength saving throw or become [restrained](compendium/rules/conditions.md#restrained)\
    \ as shadowy tendrils wrap around it for 1 minute. A [restrained](compendium/rules/conditions.md#restrained)\
    \ target can use its action to repeat the saving throw, ending the effect on itself\
    \ on a success."
  "name": "Grave Bolt"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/undead/token/deathlock-mastermind.png"
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
![](/compendium/bestiary/undead/token/deathlock-mastermind.png#token)
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

***Devil's Sight.*** Magical darkness doesn't impede the deathlock's [darkvision](compendium/rules/senses.md#darkvision).

***Turn Resistance.*** The deathlock has advantage on saving throws against any effect that turns Undead.

***Unusual Nature.*** The deathlock doesn't require air, food, drink, or sleep.

***Spellcasting.*** The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 14):

**At will**: [detect magic](/compendium/spells/detect-magic.md), [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md), [minor illusion](/compendium/spells/minor-illusion.md)

**1/day each**: [darkness](/compendium/spells/darkness.md), [dimension door](/compendium/spells/dimension-door.md), [dispel magic](/compendium/spells/dispel-magic.md), [fly](/compendium/spells/fly.md), [invisibility](/compendium/spells/invisibility.md)

## Actions

***Multiattack.*** The deathlock makes two Deathly Claw or Grave Bolt attacks.

***Deathly Claw.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: 13 (`dice: 3d6 + 3|avg` (`3d6 + 3`) necrotic damage).

***Grave Bolt.*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 120 ft., one target. Hit: `dice: 3d8|avg` (`3d8`) necrotic damage. If the target is Large or smaller, it must succeed on a DC 16 Strength saving throw or become [restrained](compendium/rules/conditions.md#restrained) as shadowy tendrils wrap around it for 1 minute. A [restrained](compendium/rules/conditions.md#restrained) target can use its action to repeat the saving throw, ending the effect on itself on a success.
```
^statblock

## Environment

urban