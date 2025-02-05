---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 18
environments: 
size: Large
tags:
- compendium/src/5e/kpdm
- monster/cr/18
- monster/size/large
- monster/type/humanoid
aliases: ["Avatar Form"]
---
# [Avatar Form](compendium\bestiary\humanoid/avatar-form-kpdm.md)
*Source: Deep Magic p. 72*

```statblock
"name": "Avatar Form (KPDM)"
"size": "Large"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "20"
- !!int "18"
- !!int "20"
- !!int "18"
- !!int "16"
- !!int "20"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks; plus\
  \ one additional type of your choice"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "speaks all languages known in previous form"
"cr": "18"
"traits":
- "desc": "Each creature of your choice within 60 feet of you must succeed on a DC\
    \ 17 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
    \ for 1 minute. A [frightened](/compendium/rules/conditions.md#Frightened) creature\
    \ repeats the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a successful save. Once a creature makes a successful saving throw,\
    \ that creature is immune to your Awesome Presence for 24 hours."
  "name": "Awesome Presence"
"actions":
- "desc": "You make two slam attacks and one bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage."
  "name": "Slam"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```