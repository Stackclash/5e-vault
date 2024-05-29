---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/1-2
- monster/size/medium
- monster/type/humanoid/minion
- monster/type/humanoid/orc
statblock: inline
aliases: ["Orc Blitzer"]
---
# [[5. Mechanics/Bestiary/Humanoid/Orc Blitzer.md|Orc Blitzer]]
*Source: Flee, Mortals! (Packet 1) p. 3*

```statblock
"name": "Orc Blitzer"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Minion"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "7"
"stats":
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "11"
"speed": "35 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "1/2"
"traits":
- "desc": "If a hostile creature the blitzer can see starts their turn within 5 feet\
    \ of three or more blitzers, the creature takes 1 piercing damage for each blitzer\
    \ within 5 feet of them."
  "name": "Gnashing Horde"
- "desc": "If the blitzer takes damage from an attack or as the result of a failed\
    \ saving throw, their hit points are reduced to 0. If the blitzer takes damage\
    \ from another effect, they die if the damage equals or exceeds their hit point\
    \ maximum, otherwise they take no damage."
  "name": "Minion"
- "desc": "When the blitzer isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and is reduced to 0 hit points, they can deal 1 piercing damage to a hostile\
    \ creature within 5 feet of them."
  "name": "Relentless Minion"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or ranged 20/60\
    \ ft., one target. Hit: 1 piercing damage."
  "name": "Spear (Group Attack)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```