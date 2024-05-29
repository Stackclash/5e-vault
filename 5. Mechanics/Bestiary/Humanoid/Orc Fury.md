---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/1-2
- monster/size/medium
- monster/type/humanoid/brute
- monster/type/humanoid/orc
statblock: inline
aliases: ["Orc Fury"]
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Fury.md|Orc Fury]]
*Source: Flee, Mortals! (Packet 1) p. 4*

```statblock
"name": "Orc Fury"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Brute"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "9"
- !!int "11"
- !!int "12"
"speed": "35 ft."
"saves":
  "Strength": !!int "5"
"skillsaves":
  "Athletics": !!int "5"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "1/2"
"traits":
- "desc": "When the fury isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and they are reduced to 0 hit points but not killed outright, they can make\
    \ an attack against a hostile creature (no action required) before the hit point\
    \ reduction is resolved. If the attack hits and its damage reduces the target\
    \ to 0 hit points, the fury drops to 1 hit point instead of 0 hit points."
  "name": "Relentless (1/Turn)"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage, or 12 (1d12 + 6) slashing damage if the target is [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is a Medium or smaller creature, they must succeed on a DC 13\
    \ Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Haymaker Greataxe"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"bonus_actions":
- "desc": "The fury regains 5 hit points."
  "name": "Healing Rally (1/Day)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```