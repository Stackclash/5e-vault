---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/4
  - monster/size/medium
  - monster/type/construct
statblock: inline
aliases:
  - Helmed Horror
---
# [[5. Mechanics\Bestiary\Construct\Helmed Horror.md|Helmed Horror]]
*Source: Monster Manual p. 183*

This construct possesses intelligence, the ability to reason and adjust its tactics, and an unswerving devotion to its maker that persists even after its maker's demise. Resembling an animated suit of empty plate armor, a helmed horror serves without ambition or emotion.

## Magical Purpose

Though it takes more magical resources to create a helmed horror than a lesser suit of animated armor, the helmed horror requires less direction and maintenance as it carries out its appointed tasks. A helmed horror follows its orders with complete loyalty, and is intelligent enough to understand the difference between an order's intent and its exact wording. Unlike many constructs, it seeks to fulfill the former rather than slavishly follow the latter.

## Tactical Cunning

A helmed horror fights with the cunning of a skilled warrior, taking to the air as it attacks weaker characters and spellcasters first. However, a helmed horror lacks the insight to change its environment, fortify it, or otherwise take active measures to improve its defensive position.

## Constructed Nature

A helmed horror doesn't require air, food, drink, or sleep.

```statblock
"name": "Helmed Horror"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "force, necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands the languages of its creator but can't speak"
"cr": "4"
"traits":
- "desc": "The helmed horror has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The helmed horror is immune to three spells chosen by its creator. Typical\
    \ immunities include [[5. Mechanics/Spells/Fireball.md|fireball]], [[5. Mechanics/Spells/Heat Metal.md|heat metal]],\
    \ and [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]."
  "name": "Spell Immunity"
"actions":
- "desc": "The helmed horror makes two longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or dice: 1d10 + 4|avg\
    \ (1d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "BGDIA"
- "IDRotF"
- "JttRC"
- "KftGV"
- "PaBTSO"
- "BMT"
"image": "5. Mechanics/Bestiary/Construct/token/helmed-horror.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
