---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/xge
  - monster/cr/
  - monster/size/tiny
  - monster/type/construct
statblock: inline
aliases:
  - Tiny Servant
---
# [[5. Mechanics\Bestiary\Construct\Tiny Servant.md|Tiny Servant]]
*Source: Xanathar's Guide to Everything p. 169*

```statblock
"name": "Tiny Servant"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d4 + 3|text(5) (1d4 + 3) bludgeoning damage."
  "name": "Slam"
"source":
- "XGE"
"image": "5. Mechanics/Bestiary/Construct/token/tiny-servant-xge.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
