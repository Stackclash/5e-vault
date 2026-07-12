---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments:
  - urban
size: Medium
alignment: Any alignment
ac: 12
hp: 27
type: humanoid
tags:
  - monster
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Spy
---
# [[/5. Mechanics/Bestiary/Humanoid/Spy.md|Spy]]
*Source: Monster Manual p. 349. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Rulers, nobles, merchants, guildmasters, and other wealthy individuals use spies to gain the upper hand in a world of cutthroat politics. A spy is trained to secretly gather information. Loyal spies would rather die than divulge information that could compromise them or their employers.

```statblock
"name": "Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"gear":
  - "[[/5. Mechanics/Items/Hand Crossbow.md|hand crossbow]]"
  - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
"senses": "passive Perception 16"
"languages": "any two languages"
"cr": "1"
"traits":
  - "desc": "On each of its turns, the spy can use a bonus action to take the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]],\
      \ [[/5. Mechanics/Rules/Actions.md#Disengage|Disengage]], or [[/5. Mechanics/Rules/Actions.md#Hide|Hide]]\
      \ action."
    "name": "Cunning Action"
  - "desc": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of the spy that isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and the spy doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "The spy makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Hand Crossbow"
"source":
  - "MM"
"image": "/5. Mechanics/Bestiary/Humanoid/token/spy.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
