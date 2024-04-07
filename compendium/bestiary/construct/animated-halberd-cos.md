---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/1-4
- monster/size/small
- monster/type/construct
statblock: inline
aliases: ["Animated Halberd"]
---
# [Animated Halberd](compendium/bestiary/construct/animated-halberd-cos.md)
*Source: Curse of Strahd p. 59*

```statblock
"name": "Animated Halberd (CoS)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "0 ft., fly 50 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#blinded), [charmed](/compendium/rules/conditions.md#charmed),\
  \ [deafened](/compendium/rules/conditions.md#deafened), [frightened](/compendium/rules/conditions.md#frightened),\
  \ [paralyzed](/compendium/rules/conditions.md#paralyzed), [petrified](/compendium/rules/conditions.md#petrified),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The sword is [incapacitated](/compendium/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](compendium/spells/dispel-magic.md), the sword\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](/compendium/rules/conditions.md#unconscious) for 1\
    \ minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the sword remains motionless and isn't flying, it is indistinguishable\
    \ from a normal sword."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 1|avg (1d10 + 1) slashing damage."
  "name": "Halberd"
"source":
- "CoS"
"image": "compendium/bestiary/construct/token/animated-halberd-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```