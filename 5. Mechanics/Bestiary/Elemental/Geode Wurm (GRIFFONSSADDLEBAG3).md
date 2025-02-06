---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\11
  - monster\Size\Huge
  - monster\Type\Element(AL)
aliases:
  - Geode Wurm
---
# [[5. Mechanics\Bestiary\Elemental\Geode Wurm (GRIFFONSSADDLEBAG3).md|Geode Wurm]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

This curious specimen, while similar in shape to creatures like the purple worm, is in fact an elemental. With hundreds of crystal formations grown from its core, the geode wurm shreds most creatures it manages to constrict. Those unlucky few that survive the shredding are conscious as the wurm begins grinding its flesh into giblets with the immense crushing force of its geode-like maw. Given their diet of precious gems and minerals, creatures in possession of mirrorlight crystals are often targets of geode wurm attack

```statblock
"name": "Geode Wurm (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "12d12 + 72"
"stats":
- !!int "23"
- !!int "9"
- !!int "22"
- !!int "4"
- !!int "10"
- !!int "7"
"speed": "40 ft., burrow 30 ft."
"saves":
  "Strength": !!int "10"
  "Constitution": !!int "10"
"damage_vulnerabilities": "thunder"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "tremorsense 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "11"
"traits":
- "desc": "While the wurm remains motionless, it is indistinguishable from an inanimate\
    \ mineral formation."
  "name": "False Appearance"
- "desc": "A creature takes 10 (3d6) slashing damage at the start of each of its turns\
    \ while [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] by the wurm."
  "name": "Jagged Body"
- "desc": "The wurm has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "While the wurm has half its hit points or fewer, it loses its vulnerability\
    \ to thunder damage and its Jagged Body and Magic Resistance traits. Additionally,\
    \ its AC increases to 19, its walking speed increases by 20 feet, and its burrowing\
    \ speed decreases by 20 feet."
  "name": "Resonant Core"
- "desc": "The wurm can burrow through solid rock at half its burrowing speed and\
    \ leaves a 5-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "The wurm makes one attack with its grinding jaws and one constrict attack.\
    \ It can't make both attacks against the same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 32\
    \ (4d12 + 6) bludgeoning damage."
  "name": "Grinding Jaws"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 19\
    \ (3d8 + 6) bludgeoning damage. If the target is Large or smaller, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 15) and pulled 5 feet toward the wurm. Until this grapple ends, the\
    \ creature is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], and the\
    \ wurm can't constrict another target."
  "name": "Constrict"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
