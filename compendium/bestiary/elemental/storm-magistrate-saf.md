---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/9
- monster/size/large
- monster/type/elemental
statblock: inline
aliases: ["Storm Magistrate"]
---
# [Storm Magistrate](compendium/bestiary/elemental/storm-magistrate-saf.md)
*Source: Strongholds and Followers p. 191*

The Magistrates of the Burning City are the priests and judges of the Lady of Fire. The motes, sources, and knights are diagnosticians. They identify and evaluate the problem. The Lords of Storm cure it.

Exactly as high and mighty as you would expect them to be, the Magistrates are a cruel and bastardly bunch, enjoying their power, using it casually, some say recklessly. They give no thought to the consequences of their actions—they assume the Sources, Pillars, and Knights have done their jobs and identified a criminal. The Magistrates arrive ready to prosecute.

> [!quote]-  
> 
> "You have done nothing of value in your short and meaningless life. Take this opportunity to at least die well."

## Tactics

The Magistrates know that when they are called to the Mundane World, it is to aid the concordant and damn their enemies. Many of the Storm Lords' spells help the PCs—enhance ability, mass cure wounds, freedom of movement—but just as many are offensive. Flame strike is a classic opening. Banishment can handle enemy servitors summoned by evil priests and warlocks.

The Magistrate's deadliest weapon is Storm Strike, which combines chain lightning with some radiant damage. Use this as soon as the Magistrate arrives to maximize the number of rolls you'll get on the recharge, increasing the likelihood you'll get to use it again.

```statblock
"name": "Storm Magistrate (SaF)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "16"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "16"
- !!int "12"
- !!int "21"
- !!int "14"
- !!int "20"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "9"
  "Intelligence": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [paralyzed](/compendium/rules/conditions.md#paralyzed), [petrified](/compendium/rules/conditions.md#petrified),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Auran, Common, Ignan"
"cr": "9"
"traits":
- "desc": "The magistrate is a 13th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks). It\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [enhance ability](compendium/spells/enhance-ability.md)"
  "name": "innate"
- "desc": "The magistrate has the following cleric spells prepared:\n\nCantrips\
    \ (at will): [light](compendium/spells/light.md), [guidance](compendium/spells/guidance.md),\
    \ [sacred flame](compendium/spells/sacred-flame.md), [spare the dying](compendium/spells/spare-the-dying.md)\n\
    \n1st level (4 slots): [bane](compendium/spells/bane.md), [bless](compendium/spells/bless.md),\
    \ [healing word](compendium/spells/healing-word.md), [shield of faith](compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 slots): [aid](compendium/spells/aid.md), [lesser restoration](compendium/spells/lesser-restoration.md),\
    \ [magic weapon](compendium/spells/magic-weapon.md), [prayer of healing](compendium/spells/prayer-of-healing.md),\
    \ [hold person](compendium/spells/hold-person.md)\n\n3rd level (3 slots):\
    \ [beacon of hope](compendium/spells/beacon-of-hope.md), [magic circle](compendium/spells/magic-circle.md),\
    \ [dispel magic](compendium/spells/dispel-magic.md), [revivify](compendium/spells/revivify.md),\
    \ [spirit guardians](compendium/spells/spirit-guardians.md), [mass healing word](compendium/spells/mass-healing-word.md)\n\
    \n4th level (3 slots): [banishment](compendium/spells/banishment.md), [freedom\
    \ of movement](compendium/spells/freedom-of-movement.md), [guardian of faith](compendium/spells/guardian-of-faith.md),\
    \ [stoneskin](compendium/spells/stoneskin.md)\n\n5th level (1 slots): [flame\
    \ strike](compendium/spells/flame-strike.md), [mass cure wounds](compendium/spells/mass-cure-wounds.md),\
    \ [hold monster](compendium/spells/hold-monster.md)"
  "name": "spells"
"actions":
- "desc": "The Magistrate makes two attacks with its morningstar."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 3|avg (2d8 + 3) piercing damage."
  "name": "Morningstar"
- "desc": "Lightning arcs from the magistrate toward up to three targets it can see\
    \ within 120 feet. Three bolts then leap from those targets to as many as three\
    \ other targets, each of which must be within 10 feet of the first target. A creature\
    \ can be targeted by only one bolt.\n\nA target must make a DC 17 Dexterity saving\
    \ throw. A creature takes dice: 4d6|avg (4d6) lightning damage and dice:\
    \ 4d6|avg (4d6) radiant damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Storm Strike (Recharge 6-6)"
"source":
- "SaF"
"image": "compendium/bestiary/elemental/token/storm-magistrate-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```