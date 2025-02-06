---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(SAF)
  - monster\Cr\4
  - monster\Size\Medium
  - monster\Type\Construct
aliases:
  - Machine Lieutenant
---
# [[5. Mechanics\Bestiary\Construct\Machine Lieutenant (SAF).md|Machine Lieutenant]]
*Source: Strongholds and Followers p. 252*

```statblock
"name": "Machine Lieutenant (SAF)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
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
