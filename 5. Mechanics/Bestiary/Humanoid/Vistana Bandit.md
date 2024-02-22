---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/1-8
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Vistana Bandit"]
---
# [[5. Mechanics\Bestiary\Humanoid\Vistana Bandit.md|Vistana Bandit]]
*Source: Curse of Strahd p. 28*  

```statblock
"name": "Vistana Bandit"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) slashing damage."
  "name": "Scimitar"
- "desc": "Ranged Weapon Attack: dice: d20+3 (+3 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Light Crossbow"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/vistana-bandit-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```