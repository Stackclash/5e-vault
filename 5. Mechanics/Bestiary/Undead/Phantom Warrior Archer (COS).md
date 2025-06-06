---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/medium
  - monster/type/undead
aliases:
  - Phantom Warrior (Archer)
---
# [[5. Mechanics\Bestiary\Undead\Phantom Warrior Archer (COS).md|Phantom Warrior (Archer)]]
*Source: Curse of Strahd p. 142*

```statblock
"name": "Phantom Warrior Archer (COS)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "11"
  - !!int "16"
  - !!int "8"
  - !!int "10"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "any languages it knew in life"
"cr": "3"
"traits":
  - "desc": "The phantom warrior can see 60 feet into the Ethereal Plane when it is\
      \ on the Material Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The phantom warrior can move through other creatures and objects as if\
      \ they were difficult terrain. It takes 5 (d10) force damage if it ends its\
      \ turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "The phantom warrior's AC accounts for its spectral armor and shield."
    "name": "Spectral Armor and Shield"
"actions":
  - "desc": "The phantom warrior makes two attacks with its spectral longsword or\
      \ spectral longbow."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) force damage."
    "name": "Spectral Longsword"
  - "desc": "The phantom warrior enters the Ethereal Plane from the Material Plane,\
      \ or vice versa. It is visible on the Material Plane while it is in the Border\
      \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
      \ the other plane."
    "name": "Etherealness"
  - "desc": "Ranged Weapon Attack: +2 to hit, range 150/600 ft., one target. Hit:\
      \ 4 (d8) force damage."
    "name": "Spectral Longbow"
"source":
  - "CoS"
"image": "5. Mechanics/Bestiary/Undead/token/phantom-warrior-archer-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
