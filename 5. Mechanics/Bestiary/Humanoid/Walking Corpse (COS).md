---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Medium
tags:
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Walking Corpse
---
# [[5. Mechanics\Bestiary\Humanoid\Walking Corpse (COS).md|Walking Corpse]]
*Source: Curse of Strahd p. 165*

```statblock
"name": "Walking Corpse (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "20 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"traits":
  - "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging\
      \ a [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarm of poisonous snakes]].\
      \ The snakes are hungry and fight until slain."
    "name": "Violent Death"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (d4)\
      \ bludgeoning damage."
    "name": "Club"
"source":
  - "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/walking-corpse-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
