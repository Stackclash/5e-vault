---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/2
  - monster/size/medium
  - monster/type/monstrosity/shapechanger
aliases:
  - Mimic Keg
---
# [[5. Mechanics\Bestiary\Monstrosity\Mimic Keg (GRIFFONSSADDLEBAG2).md|Mimic Keg]]
*Source: The Griffon's Saddlebag, Book 2 p. 361*

Although most mimics are known for their ability to transform into innocuous items, mimic kegs are a particular cousin that transform solely into alcoholrelated objects. Scholars believe that long-term exposure to alcoholic drinks gradually morphed a number of ancient mimics into this unique breed. Most mimics are ambush predators, but mimic kegs are particularly patient hunters. When plagued by these monsters, some taverns develop an almost religious inventory system to ensure their mugs, jugs, and kegs are safe for customers.

```statblock
"name": "Mimic Keg (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "3"
  - !!int "12"
  - !!int "10"
"speed": "25 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The mimic can use its action to polymorph into a keg, mug, vat, or other\
      \ alcohol-related object or back into its true, amorphous form. Its statistics\
      \ are the same in each form, except when it polymorphs into an object it can\
      \ choose to change its size to Tiny or Small until it polymorphs back into its\
      \ true form. Any equipment it is wearing or carrying isn't transformed. It reverts\
      \ to its true form if it dies."
    "name": "Shapechanger (Mimic)"
  - "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
      \ adhered to the mimic is also [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
    "name": "Adhesive (Object Form Only)"
  - "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
      \ alcohol-related object."
    "name": "False Appearance (Object Form Only)"
  - "desc": "The mimic has advantage on attack rolls against any creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it."
    "name": "Grappler"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) bludgeoning damage. If the mimic is in object form, the target is subjected\
      \ to its Adhesive trait."
    "name": "Pseudopod"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage plus 4 (d8) poison damage."
    "name": "Bite"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
