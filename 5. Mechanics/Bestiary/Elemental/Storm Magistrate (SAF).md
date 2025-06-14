---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Large
tags:
  - compendium/src/5e/saf
  - monster/cr/9
  - monster/size/large
  - monster/type/elemental
aliases:
  - Storm Magistrate
---
# [[5. Mechanics\Bestiary\Elemental\Storm Magistrate (SAF).md|Storm Magistrate]]
*Source: Strongholds and Followers p. 191*

The Magistrates of the Burning City are the priests and judges of the Lady of Fire. The motes, sources, and knights are diagnosticians. They identify and evaluate the problem. The Lords of Storm cure it.

Exactly as high and mighty as you would expect them to be, the Magistrates are a cruel and bastardly bunch, enjoying their power, using it casually, some say recklessly. They give no thought to the consequences of their actions—they assume the Sources, Pillars, and Knights have done their jobs and identified a criminal. The Magistrates arrive ready to prosecute.

> [!quote]  
> 
> "You have done nothing of value in your short and meaningless life. Take this opportunity to at least die well."

## Tactics

The Magistrates know that when they are called to the Mundane World, it is to aid the concordant and damn their enemies. Many of the Storm Lords' spells help the PCs—enhance ability, mass cure wounds, freedom of movement—but just as many are offensive. Flame strike is a classic opening. Banishment can handle enemy servitors summoned by evil priests and warlocks.

The Magistrate's deadliest weapon is Storm Strike, which combines chain lightning with some radiant damage. Use this as soon as the Magistrate arrives to maximize the number of rolls you'll get on the recharge, increasing the likelihood you'll get to use it again.

```statblock
"name": "Storm Magistrate (SAF)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "21"
  - !!int "14"
  - !!int "20"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": "+6"
  - "wisdom": "+9"
  - "charisma": "+7"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Auran, Common, Ignan"
"cr": "9"
"traits":
  - "desc": "The magistrate has the following cleric spells prepared:\n\nCantrips\
      \ (at will): [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Guidance.md|guidance]],\
      \ [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Bless.md|bless]],\
      \ [[5. Mechanics/Spells/Healing Word.md|healing word]], [[5. Mechanics/Spells/Shield Of Faith.md|shield of faith]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Aid.md|aid]], [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
      \ [[5. Mechanics/Spells/Magic Weapon.md|magic weapon]], [[5. Mechanics/Spells/Prayer Of Healing.md|prayer of healing]],\
      \ [[5. Mechanics/Spells/Hold Person.md|hold person]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Beacon Of Hope.md|beacon of hope]], [[5. Mechanics/Spells/Magic Circle.md|magic circle]],\
      \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Revivify.md|revivify]],\
      \ [[5. Mechanics/Spells/Spirit Guardians.md|spirit guardians]], [[5. Mechanics/Spells/Mass Healing Word.md|mass healing word]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Freedom Of Movement.md|freedom\
      \ of movement]], [[5. Mechanics/Spells/Guardian Of Faith.md|guardian of faith]],\
      \ [[5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\n5th level (1 slots): [[5. Mechanics/Spells/Flame Strike.md|flame\
      \ strike]], [[5. Mechanics/Spells/Mass Cure Wounds.md|mass cure wounds]],\
      \ [[5. Mechanics/Spells/Hold Monster.md|hold monster]]"
    "name": "Spellcasting"
  - "desc": "The magistrate is a 13th-level spellcaster. Its spellcasting ability\
      \ is Wisdom (spell save DC 17, +9 to hit with spell attacks). It can innately\
      \ cast the following spells, requiring no components:\n\nAt will: [[5. Mechanics/Spells/Enhance Ability.md|enhance\
      \ ability]]"
    "name": "Innate Spellcasting"
"actions":
  - "desc": "The Magistrate makes two attacks with its morningstar."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 12\
      \ (2d8 + 3) piercing damage."
    "name": "Morningstar"
  - "desc": "Lightning arcs from the magistrate toward up to three targets it can\
      \ see within 120 feet. Three bolts then leap from those targets to as many as\
      \ three other targets, each of which must be within 10 feet of the first target.\
      \ A creature can be targeted by only one bolt.\n\nA target must make a DC 17\
      \ Dexterity saving throw. A creature takes 14 (4d6) lightning damage and 14\
      \ (4d6) radiant damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Storm Strike (Recharge 6-6)"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Storm%20Magistrate.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
