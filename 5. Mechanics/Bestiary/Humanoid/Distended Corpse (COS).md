---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(COS)
  - monster\Cr\0
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Distended Corpse
---
# [[5. Mechanics\Bestiary\Humanoid\Distended Corpse (COS).md|Distended Corpse]]
*Source: Curse of Strahd p. 165*

```statblock
"name": "Distended Corpse (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
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
- "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging a\
    \ [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarm of poisonous snakes]].\
    \ The snakes are hungry and fight until slain."
  "name": "Snake-Swollen"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/distended-corpse-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
