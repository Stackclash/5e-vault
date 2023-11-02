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
# [Animated Halberd](compendium\bestiary\construct/animated-halberd-cos.md)
*Source: Curse of Strahd p. 59, Derived from *  

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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The sword is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the sword\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]] for 1\
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
"image": "compendium/bestiary/construct/token/animated-halberd.png"
```
^statblock