---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(XGE)
  - monster\Cr
  - monster\Size\Tiny
  - monster\Type\Construct
aliases:
  - Tiny Servant
---
# [[5. Mechanics\Bestiary\Construct\Tiny Servant (XGE).md|Tiny Servant]]
*Source: Xanathar's Guide to Everything p. 169*

```statblock
"name": "Tiny Servant (XGE)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "4"
- !!int "16"
- !!int "10"
- !!int "2"
- !!int "10"
- !!int "1"
"speed": "30 ft., climb 30 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Slam"
"source":
- "XGE"
"image": "5. Mechanics/Bestiary/Construct/token/tiny-servant-xge.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
