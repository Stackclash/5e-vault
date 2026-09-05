---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: []
size: Medium
alignment: Lawful Good
ac: 13
hp: 36
type: undead
tags:
  - monster
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/undead
aliases:
  - Hungry Ghast
---
# [[/5. Mechanics/Bestiary/Undead/Hungry Ghast (COS).md|Hungry Ghast]]
*Source: Curse of Strahd p. 192*

```statblock
"name": "Hungry Ghast (COS)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 10"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "Any creature that starts its turn within 5 feet of the ghast must succeed\
      \ on a DC 10 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ until the start of its next turn. On a successful saving throw, the creature\
      \ is immune to the ghast's Stench for 24 hours."
    "name": "Stench"
  - "desc": "The ghast and any ghouls within 30 feet of it have advantage on saving\
      \ throws against effects that turn undead."
    "name": "Turn Defiance"
  - "desc": "The ghast can climb difficult surfaces, including upside down on ceilings,\
      \ without having to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one creature. *Hit:* 12\
      \ (2d8 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage. If the target is a creature other than an undead,\
      \ it must succeed on a DC 10 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Claws"
"source":
  - "CoS"
"image": "/5. Mechanics/Bestiary/Undead/token/hungry-ghast-cos.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
