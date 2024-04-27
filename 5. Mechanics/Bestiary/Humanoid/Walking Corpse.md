---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Walking Corpse
---
# [[5. Mechanics\Bestiary\Humanoid\Walking Corpse.md|Walking Corpse]]
*Source: Curse of Strahd p. 165*

```statblock
"name": "Walking Corpse"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"traits":
- "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging a\
    \ [[5. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md|swarm of poisonous snakes]].\
    \ The snakes are hungry and fight until slain."
  "name": "Violent Death"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+2 (+2) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4|text(2) (1d4) bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/walking-corpse-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
