---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/7
- monster/size/medium
- monster/type/fiend/devil
statblock: inline
aliases: ["Lesser Erinyes"]
---
# [Lesser Erinyes](compendium/bestiary/fiend/lesser-erinyes-saf.md)
*Source: Strongholds and Followers p. 153*

```statblock
"name": "Lesser Erinyes (SaF)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "17"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "truesight 60 ft., passive Perception 12"
"languages": "Infernal, telepathy 60 ft."
"cr": "7"
"traits":
- "desc": "The lesser erinyes's weapon attacks are magical and deal an extra dice:\
    \ 1d8|avg (1d8) poison damage on a hit (included in its attacks)."
  "name": "Poisoned Weapons"
- "desc": "The lesser erinyes has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The lesser erinyes makes three attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage, or dice: 1d10 + 3|avg\
    \ (1d10 + 3) slashing damage if used with two hands, plus dice: 1d8|avg (1d8)\
    \ poison damage."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage plus dice: 1d8|avg\
    \ (1d8) poison damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](/compendium/rules/conditions.md#poisoned). The poison\
    \ lasts until it is removed by the [lesser restoration](compendium/spells/lesser-restoration.md)\
    \ spell or similar magic."
  "name": "Longbow"
"reactions":
- "desc": "The lesser erinyes can add 4 to its AC against one melee attack that would\
    \ hit it. To do so, the lesser erinyes must see the attacker and be wielding a\
    \ melee weapon."
  "name": "Parry"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```