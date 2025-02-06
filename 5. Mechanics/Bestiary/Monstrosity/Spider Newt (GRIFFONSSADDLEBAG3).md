---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\2
  - monster\Size\Large
  - monster\Type\Monstrosity
aliases:
  - Spider-Newt
---
# [[5. Mechanics\Bestiary\Monstrosity\Spider Newt (GRIFFONSSADDLEBAG3).md|Spider-Newt]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Of the many predators that stalk the wood, the spider-newt is the most renowned. This arachnid-like reptile is uniquely suited to surviving in such a hostile locale, protected by acid that oozes from its skin and from glands in its throat and mouth. Most [[5. Mechanics/Bestiary/Fey/Safire Hag (GRIFFONSSADDLEBAG3).md|Safire hags]] keep one or more of these beasts for travel, acid collection, or a combination of the two. The secret to keeping them placated is a steady diet of their favorite treat, Ketriphan Moss, dosed with a special solution. In its mouth and stomach, this potion blends with the acid to create a potent and highly-addictive sedative.

```statblock
"name": "Spider Newt (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "11"
- !!int "17"
- !!int "16"
- !!int "4"
- !!int "13"
- !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- "desc": "A creature that touches the spider-newt or hits it with a melee attack\
    \ while within 5 feet of it takes 5 (1d10) acid damage. A friendly creature mounted\
    \ on the spider-newt is unaffected by this trait."
  "name": "Mucus Coat"
- "desc": "The spider-newt has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made to hide in trees and foliage."
  "name": "Wilderness Camouflage"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target must make a DC 13 Constitution saving throw,\
    \ taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +5 to hit, range 15/30 ft., one target. Hit:\
    \ The target must make a DC 13 Constitution saving throw, taking 18 (4d8) acid\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Spit Acid"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
