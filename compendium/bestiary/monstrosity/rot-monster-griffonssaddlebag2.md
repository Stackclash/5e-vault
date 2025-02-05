---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/1
- monster/size/medium
- monster/type/monstrosity
aliases: ["Rot Monster"]
---
# [Rot Monster](compendium\bestiary\monstrosity/rot-monster-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 362*

Considered a cousin to rust monsters in behavior if not biology, the rot monster thrives on spoiled, contaminated, or rotting food and drinks—consuming them without suffering any ill effects. Its appearance is not unlike a featherless, scaly-skinned vulture, though its wings are almost vestigial. A vicious scavenger, it is willing to stalk living prey when the pickings are slim. In this instance, it shows a terrifying ability to rapidly putrefy organic material with its talons.

```statblock
"name": "Rot Monster (GriffonsSaddlebag2)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "13"
- !!int "14"
- !!int "14"
- !!int "2"
- !!int "13"
- !!int "6"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "The rot monster has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- "desc": "The rot monster can only fly for up to 1 minute at a time. While flying,\
    \ it has disadvantage on ability checks and saving throws against effects that\
    \ would knock it [prone](/compendium/rules/conditions.md#Prone). If it ends its\
    \ turn in the air after 1 minute of consecutive flight and nothing else is holding\
    \ it aloft, it falls."
  "name": "Limited Flight"
- "desc": "Any nonmagical weapon made of wood that hits the rot monster rots and deteoriates.\
    \ After dealing damage, the weapon takes a permanent and cumulative -1 penalty\
    \ to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical\
    \ ammunition made of wood that hits the rot monster is destroyed after dealing\
    \ damage."
  "name": "Rot Wood"
- "desc": "The rot monster can pinpoint, by scent, the location of rotting food and\
    \ other decaying organic matter within 1 mile of it."
  "name": "Waste Scent"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage, plus 3 (1d6) necrotic damage."
  "name": "Beak"
- "desc": "The rot monster touches a nonmagical object made of organic matter that\
    \ it can see within 5 feet of it, causing it to rot and deteriorate. If the object\
    \ isn't being worn or carried, the touch destroys a 1-foot cube of it. If the\
    \ object is being worn or carried by a creature, the creature can make a DC 12\
    \ Dexterity saving throw to avoid the rot monster's touch.\n\nIf the object touched\
    \ is either armor made of leather or hide, or a wooden shield being worn or carried,\
    \ it takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced\
    \ to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object\
    \ touched is a held wooden weapon, it deteriorates as described in the Rot Wood\
    \ trait."
  "name": "Talons"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```