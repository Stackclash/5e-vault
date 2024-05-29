---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/4
- monster/size/medium
- monster/type/humanoid/orc
- monster/type/humanoid/support
statblock: inline
aliases: ["Orc Godcaller"]
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Godcaller.md|Orc Godcaller]]
*Source: Flee, Mortals! (Packet 1) p. 5*

```statblock
"name": "Orc Godcaller"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Support"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "19"
"speed": "35 ft."
"saves":
  "Wisdom": !!int "3"
"skillsaves":
  "Insight": !!int "3"
  "Performance": !!int "8"
  "Arcana": !!int "3"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Orc"
"cr": "4"
"traits":
- "desc": "When the godcaller isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and they are reduced to 0 hit points but not killed outright, they can make\
    \ an attack against a hostile creature (no action required) before the hit point\
    \ reduction is resolved. If the attack hits and its damage reduces the target\
    \ to 0 hit points, the godcaller drops to 1 hit point instead of 0 hit points."
  "name": "Relentless (1/Turn)"
"actions":
- "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 30 ft.,\
    \ one creature who can hear the godcaller. Hit: 18 (4d6 + 4) thunder damage."
  "name": "Power Chord (1st-Level Spell)"
- "desc": "The godcaller chooses another creature within 30 feet of them. If the target\
    \ can hear the godcaller, the target can use their reaction to move up to their\
    \ speed and make an attack."
  "name": "Cadenza"
- "desc": "The godcaller and each creature of their choice within 30 feet of them\
    \ that can hear them has advantage on attack rolls until the start of the godcaller's\
    \ next turn. This effect ends early if the godcaller takes any damage."
  "name": "Song of the Gods (2nd-Level Spell)"
"bonus_actions":
- "desc": "The godcaller and up to three creatures of their choice within 60 feet\
    \ of them that can hear them regain 20 hit points, and these creatures ignore\
    \ difficult terrain for 1 minute."
  "name": "Rallying Ostinato (1/Day)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```