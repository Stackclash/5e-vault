---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/1
- monster/size/medium
- monster/type/humanoid/ambusher
- monster/type/humanoid/orc
statblock: inline
aliases: ["Orc Garroter"]
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Garroter.md|Orc Garroter]]
*Source: Flee, Mortals! (Packet 1) p. 5*

```statblock
"name": "Orc Garroter"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Ambusher"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "35 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Stealth": !!int "6"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Orc"
"cr": "1"
"traits":
- "desc": "When the garroter isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and they are reduced to 0 hit points but not killed outright, they can make\
    \ an attack against a hostile creature (no action required) before the hit point\
    \ reduction is resolved. If the attack hits and its damage reduces the target\
    \ to 0 hit points, the garroter drops to 1 hit point instead of 0 hit points."
  "name": "Relentless (1/Turn)"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 12). Until the grapple ends, the target can't speak intelligibly\
    \ or cast spells with verbal components. If the attack was made with advantage,\
    \ the target must make a DC 12 Constitution saving throw. On a failed save, the\
    \ target falls [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]] for\
    \ 1 minute (save ends at start of turn) or until they take damage. A creature\
    \ can use an action to shake another creature awake who falls [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]\
    \ this way."
  "name": "Strangle"
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the attack was made\
    \ with advantage, the target takes an extra 7 (2d6) piercing damage."
  "name": "Dagger"
"bonus_actions":
- "desc": "The garroter magically turns [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ for 1 minute. Any equipment the garroter wears or carries is [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ with them. While [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]], the\
    \ garroter's movements make no sound. If the garroter hits a creature with an\
    \ attack, casts a spell, or takes damage, the effect ends."
  "name": "Cloak (1/Day)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```