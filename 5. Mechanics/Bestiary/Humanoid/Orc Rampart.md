---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/2
- monster/size/medium
- monster/type/humanoid/orc
- monster/type/humanoid/soldier
statblock: inline
aliases: ["Orc Rampart"]
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Rampart.md|Orc Rampart]]
*Source: Flee, Mortals! (Packet 1) p. 6*

```statblock
"name": "Orc Rampart"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Soldier"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Chain Mail.md|chain mail]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "42"
"hit_dice": "5d8 + 20"
"stats":
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "11"
- !!int "12"
"speed": "35 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "2"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "2"
"traits":
- "desc": "When the rampart isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and they are reduced to 0 hit points but not killed outright, they can make\
    \ an attack against a hostile creature (no action required) before the hit point\
    \ reduction is resolved. If the attack hits and its damage reduces the target\
    \ to 0 hit points, the rampart drops to 1 hit point instead of 0 hit points."
  "name": "Relentless (1/Turn)"
"actions":
- "desc": "The rampart makes two Spear attacks. If the rampart targets the same creature\
    \ with both attacks, the target has disadvantage on attack rolls against creatures\
    \ other than the rampart until the start of the rampart's next turn."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or ranged 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
"reactions":
- "desc": "When a creature within 5 feet of the rampart targets another creature with\
    \ an attack, the attacker must target the rampart instead."
  "name": "No!"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```