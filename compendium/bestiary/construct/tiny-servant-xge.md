---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Tiny
tags:
- compendium/src/5e/xge
- monster/cr/
- monster/size/tiny
- monster/type/construct
aliases: ["Tiny Servant"]
---
# [Tiny Servant](compendium\bestiary\construct/tiny-servant-xge.md)
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
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Slam"
"source":
- "XGE"
"image": "compendium/bestiary/construct/token/tiny-servant-xge.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```