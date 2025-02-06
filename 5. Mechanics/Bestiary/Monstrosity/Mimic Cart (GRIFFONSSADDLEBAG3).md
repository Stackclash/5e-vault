---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\4
  - monster\Size\Huge
  - monster\Type\Monstrosity\Shapechanger
aliases:
  - Mimic Cart
---
# [[5. Mechanics\Bestiary\Monstrosity\Mimic Cart (GRIFFONSSADDLEBAG3).md|Mimic Cart]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Mimics that venture outside of their normal dungeon homes sometimes take on the form of abandoned carts, having found that travelers often investigate such objects in search of wealth or, less frequently, to see if someone inside needs help. These mimics employ similar tactics as their dungeon-dwelling relatives, but tend to encounter (and devour) more helpless folk than the average mimic as a result of their size and feeding grounds.

```statblock
"name": "Mimic Cart (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d12 + 22"
"stats":
- !!int "21"
- !!int "14"
- !!int "15"
- !!int "5"
- !!int "13"
- !!int "8"
"speed": "25 ft."
"skillsaves":
  "Stealth": !!int "6"
"damage_immunities": "acid"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "4"
"traits":
- "desc": "The mimic can use its action to polymorph into an object or back into its\
    \ true, amorphous form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It reverts to its true form if\
    \ it dies."
  "name": "Shapechanger"
- "desc": "The mimic adheres to anything that touches it. A creature adhered to the\
    \ mimic is also [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] by it (escape\
    \ DC 15). Ability checks made to escape this grapple have disadvantage."
  "name": "Adhesive (Object Form Only)"
- "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
    \ object."
  "name": "False Appearance (Object Form Only)"
- "desc": "The mimic has advantage on attack rolls against any creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ by it."
  "name": "Grappler"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (1d12\
    \ + 5) piercing damage plus 6 (1d12) acid damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (1d12\
    \ + 5) bludgeoning damage. If the mimic is in object form, the target is subjected\
    \ to its Adhesive trait."
  "name": "Pseudopod"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
