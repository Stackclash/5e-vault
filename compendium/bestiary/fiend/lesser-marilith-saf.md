---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/5
- monster/size/medium
- monster/type/fiend/demon
statblock: inline
aliases: ["Lesser Marilith"]
---
# [Lesser Marilith](compendium/bestiary/fiend/lesser-marilith-saf.md)
*Source: Strongholds and Followers p. 151*

```statblock
"name": "Lesser Marilith (SaF)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "15"
- !!int "17"
"speed": "40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "truesight 60 ft., passive Perception 13"
"languages": "Abyssal, telepathy 60 ft."
"cr": "5"
"traits":
- "desc": "The lesser marilith has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The marilith's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The lesser marilith makes three attacks with its longsword and one attack\
    \ with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 2d8 + 3|avg (2d8 + 3) bludgeoning damage. If the target is\
    \ Medium or smaller, it is [grappled](/compendium/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the target is [restrained](/compendium/rules/conditions.md#restrained),\
    \ the lesser marilith can automatically hit the target with its tail, and the\
    \ lesser marilith cannot make tail attacks against other targets."
  "name": "Tail"
"reactions":
- "desc": "The lesser marilith can add 5 to its AC against one melee attack that would\
    \ hit it. To do so, the lesser marilith must see the attacker and be wielding\
    \ a melee weapon."
  "name": "Parry"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```