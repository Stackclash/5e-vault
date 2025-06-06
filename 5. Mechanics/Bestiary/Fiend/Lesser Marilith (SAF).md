---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/5
  - monster/size/medium
  - monster/type/fiend/demon
aliases:
  - Lesser Marilith
---
# [[5. Mechanics\Bestiary\Fiend\Lesser Marilith (SAF).md|Lesser Marilith]]
*Source: Strongholds and Followers p. 151*

```statblock
"name": "Lesser Marilith (SAF)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "16"
  - !!int "15"
  - !!int "17"
"speed": "40 ft."
"saves":
  - "wisdom": "+5"
  - "charisma": "+6"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 13"
"languages": "Abyssal, telepathy 60 ft."
"cr": "5"
"traits":
  - "desc": "The lesser marilith has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "The marilith's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The lesser marilith makes three attacks with its longsword and one attack\
      \ with its tail."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) slashing damage."
    "name": "Longsword"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit:\
      \ 12 (2d8 + 3) bludgeoning damage. If the target is Medium or smaller, it is\
      \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape DC 14). Until\
      \ this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ the lesser marilith can automatically hit the target with its tail, and the\
      \ lesser marilith cannot make tail attacks against other targets."
    "name": "Tail"
"reactions":
  - "desc": "The lesser marilith can add 5 to its AC against one melee attack that\
      \ would hit it. To do so, the lesser marilith must see the attacker and be wielding\
      \ a melee weapon."
    "name": "Parry"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
