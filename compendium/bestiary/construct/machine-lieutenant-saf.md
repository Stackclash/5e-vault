---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/4
- monster/size/medium
- monster/type/construct
aliases: ["Machine Lieutenant"]
---
# [Machine Lieutenant](compendium\bestiary\construct/machine-lieutenant-saf.md)
*Source: Strongholds and Followers p. 252*

```statblock
"name": "Machine Lieutenant (SaF)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "20"
"ac_class": "[plate armor](compendium/items/plate-armor.md), [shield](compendium/items/shield.md)"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons that\
  \ aren't adamantine"
"damage_immunities": "force, necrotic, poison"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands the languages of its creator but can't speak"
"cr": "4"
"traits":
- "desc": "The machine lieutenant has advantage on saving throws against spells and\
    \ other magical effects."
  "name": "Magic Resistance"
- "desc": "While the lieutenant is within 5 feet of the attuned owner of the codex\
    \ automata, any attack targeting the codex's owner has a 50% chance to instead\
    \ target the machine lieutenant."
  "name": "Both Guard and Ward"
"actions":
- "desc": "The lieutenant makes two longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage or 9 (1d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```