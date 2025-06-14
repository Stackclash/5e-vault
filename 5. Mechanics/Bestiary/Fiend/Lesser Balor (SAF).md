---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: null
size: Large
tags:
  - compendium/src/5e/saf
  - monster/cr/10
  - monster/size/large
  - monster/type/fiend/demon
aliases:
  - Lesser Balor
---
# [[5. Mechanics\Bestiary\Fiend\Lesser Balor (SAF).md|Lesser Balor]]
*Source: Strongholds and Followers p. 153*

```statblock
"name": "Lesser Balor (SAF)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "18"
  - !!int "16"
  - !!int "15"
  - !!int "18"
"speed": "40 ft., fly 80 ft."
"saves":
  - "strength": "+9"
  - "constitution": "+8"
  - "wisdom": "+6"
  - "charisma": "+8"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 13"
"languages": "Abyssal, telepathy 60 ft."
"cr": "10"
"traits":
  - "desc": "When the lesser balor dies, it explodes. Each creature within 20 feet\
      \ of it must make a DC 16 Dexterity saving throw. On a failed save, a creature\
      \ takes 35 (10d6) fire damage, or half as much damage on a successful one. The\
      \ explosion destroys the lesser balor's weapons."
    "name": "Fiery End"
  - "desc": "At the start of each of the lesser balor's turns, each creature within\
      \ 5 feet of it takes 7 (2d6) fire damage. A creature that touches the lesser\
      \ balor or hits it with a melee attack while within 5 feet of it takes 7 (2d6)\
      \ fire damage."
    "name": "Singeing Aura"
  - "desc": "The lesser balor has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The lesser balor's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The lesser balor makes one attack with its longsword and one attack with\
      \ its whip."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d8 + 5) slashing damage plus 9 (2d8) lightning damage. If the lesser balor\
      \ scores a critical hit, it rolls damage dice three times, instead of twice."
    "name": "Longsword"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 30 ft., one target. Hit: 12\
      \ (2d6 + 5) slashing damage plus 7 (2d6) fire damage, and the target must succeed\
      \ on a DC 16 Strength saving throw or be pulled up to 15 feet toward the lesser\
      \ balor."
    "name": "Whip"
"source":
  - "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
