---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Small
tags:
  - 5. Mechanics\Src\5e\(COS)
  - monster\Cr\1 4
  - monster\Size\Small
  - monster\Type\Construct
aliases:
  - Animated Halberd
---
# [[5. Mechanics\Bestiary\Construct\Animated Halberd (COS).md|Animated Halberd]]
*Source: Curse of Strahd p. 59*

```statblock
"name": "Animated Halberd (COS)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The sword is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the sword\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]] for 1\
    \ minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the sword remains motionless and isn't flying, it is indistinguishable\
    \ from a normal sword."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d10\
    \ + 1) slashing damage."
  "name": "Halberd"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Construct/token/animated-halberd-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
