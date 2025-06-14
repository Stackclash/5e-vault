---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/8
  - monster/environment/urban
  - monster/size/medium
  - monster/type/undead/warlock
aliases:
  - Deathlock Mastermind
---
# [[5. Mechanics\Bestiary\Undead\Deathlock Mastermind (MPMM).md|Deathlock Mastermind]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 87, Mordenkainen's Tome of Foes p. 129*

Though deathlocks exist to serve their patrons, they retain some freedom when it comes to devising tactics and carrying out plans. Powerful deathlocks recruit lesser creatures to help them carry out their missions, becoming the masterminds behind vast conspiracies and intrigues that culminate in the accomplishment of great acts of evil.

## Deathlocks

The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

```statblock
"name": "Deathlock Mastermind (MPMM)"
"size": "Medium"
"type": "undead"
"subtype": "warlock"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "12"
  - !!int "15"
  - !!int "12"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": "+5"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
  - "desc": "Magical darkness doesn't impede the deathlock's [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The deathlock has advantage on saving throws against any effect that\
      \ turns Undead."
    "name": "Turn Resistance"
  - "desc": "The deathlock doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The deathlock makes two Deathly Claw or Grave Bolt attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
      \ (3d6 + 3 necrotic damage)."
    "name": "Deathly Claw"
  - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 13\
      \ (3d8) necrotic damage. If the target is Large or smaller, it must succeed\
      \ on a DC 16 Strength saving throw or become [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ as shadowy tendrils wrap around it for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ target can use its action to repeat the saving throw, ending the effect on\
      \ itself on a success."
    "name": "Grave Bolt"
  - "desc": "The deathlock casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 14):\n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]]\n\n1/day each: [[5. Mechanics/Spells/Darkness.md|darkness]],\
      \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Undead/token/deathlock-mastermind-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
