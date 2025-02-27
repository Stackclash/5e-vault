---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Small
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1-2
  - monster/size/small
  - monster/type/beast
aliases:
  - Giant Spider Rat
---
# [[5. Mechanics\Bestiary\Beast\Giant Spider Rat (GRIFFONSSADDLEBAG2).md|Giant Spider Rat]]
*Source: The Griffon's Saddlebag, Book 2 p. 338*

When Antronec's sewer network was first dug out, the Mercantile Guild made sure that enough space was provided for the city's anticipated growth. The unanticipated consequences of such an elaborate and cavernous network of sewage-filled tunnels, however, were the giant spider rats. Considered by some to be the unofficial mascot of Antronec, this vicious little beast is every bit as dangerous as a giant rat, but with the extra arachnoid horror of additional limbs, poison, and other spider bits. There was one occasion where a merchant tried to market and sell a soft children's toy designed like this creature, but the merchandise was found burnt to miniscule ashes, and the merchant's body was never found.

```statblock
"name": "Giant Spider Rat (GRIFFONSSADDLEBAG2)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "2"
- !!int "11"
- !!int "4"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The rat has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The rat has advantage on an attack roll against a creature if at least\
    \ one of the rat's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- "desc": "The rat can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 3 (1d6) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 hour,\
    \ even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way."
  "name": "Bite"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
