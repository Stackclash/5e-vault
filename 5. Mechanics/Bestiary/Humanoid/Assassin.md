---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: urban
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/8
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Assassin
---
# [[5. Mechanics\Bestiary\Humanoid\Assassin.md|Assassin]]
*Source: Monster Manual p. 343, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Trained in the use of poison, assassins are remorseless killers who work for nobles, guildmasters, sovereigns, and anyone else who can afford them.

```statblock
"name": "Assassin"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": "+6"
  - "intelligence": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+9"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
  - "desc": "During its first turn, the assassin has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit the assassin scores against\
      \ a [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]] creature is a critical\
      \ hit."
    "name": "Assassinate"
  - "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the assassin instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The assassin deals an extra 14 (4d6) damage when it hits a target with\
      \ a weapon attack and has advantage on the attack roll, or when the target is\
      \ within 5 feet of an ally of the assassin that isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and the assassin doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "The assassin makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage, and the target must make a DC 15 Constitution saving\
      \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
      \ 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Light Crossbow"
"source":
  - "MM"
  - "CoS"
  - "TCE"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Humanoid/token/assassin.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
