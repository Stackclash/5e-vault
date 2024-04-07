---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/xge
- monster/cr/
- monster/size/tiny
- monster/type/construct
statblock: inline
aliases: ["Tiny Servant"]
---
# [Tiny Servant](compendium/bestiary/construct/tiny-servant-xge.md)
*Source: Xanathar's Guide to Everything p. 169*

```statblock
"name": "Tiny Servant (XGE)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
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
"condition_immunities": "[blinded](/compendium/rules/conditions.md#blinded), [charmed](/compendium/rules/conditions.md#charmed),\
  \ [deafened](/compendium/rules/conditions.md#deafened), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) bludgeoning damage."
  "name": "Slam"
"source":
- "XGE"
"image": "compendium/bestiary/construct/token/tiny-servant-xge.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```